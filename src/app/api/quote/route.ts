import { NextResponse } from "next/server";

// Receives quote-form submissions from QuoteForm.tsx and forwards them to a
// Zapier "Catch Hook" webhook, which fans the lead out to a text alert +
// backup storage (Google Sheet, etc.) inside Zapier itself. Kept server-side
// (rather than posting to Zapier directly from the browser) so the webhook
// URL is never exposed client-side, and so we get a real success/failure
// signal to show the visitor instead of an unreadable opaque response.
export async function POST(request: Request) {
  const webhookUrl = process.env.ZAPIER_QUOTE_WEBHOOK_URL;

  if (!webhookUrl) {
    console.error("ZAPIER_QUOTE_WEBHOOK_URL is not configured");
    return NextResponse.json({ ok: false, error: "not_configured" }, { status: 500 });
  }

  let body: Record<string, unknown>;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ ok: false, error: "invalid_body" }, { status: 400 });
  }

  const name = typeof body.name === "string" ? body.name.trim() : "";
  const phone = typeof body.phone === "string" ? body.phone.trim() : "";
  const city = typeof body.city === "string" ? body.city.trim() : "";

  if (!name || !phone || !city) {
    return NextResponse.json({ ok: false, error: "missing_required_fields" }, { status: 400 });
  }

  const payload = {
    name,
    phone,
    email: typeof body.email === "string" ? body.email.trim() : "",
    city,
    serviceType: typeof body.serviceType === "string" ? body.serviceType : "",
    details: typeof body.details === "string" ? body.details.trim() : "",
    submittedAt: new Date().toISOString(),
    source: "website_quote_form",
  };

  try {
    const zapierResponse = await fetch(webhookUrl, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    });

    if (!zapierResponse.ok) {
      console.error("Zapier webhook returned", zapierResponse.status, await zapierResponse.text().catch(() => ""));
      return NextResponse.json({ ok: false, error: "webhook_failed" }, { status: 502 });
    }

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("Failed to reach Zapier webhook", err);
    return NextResponse.json({ ok: false, error: "webhook_unreachable" }, { status: 502 });
  }
}
