import { NextResponse, after } from "next/server";

// Receives quote-form submissions from QuoteForm.tsx and forwards a lead
// notification to a Zapier "Catch Hook" webhook (SMS alert + backup storage
// fan out from there). Kept server-side rather than posting to Zapier
// directly from the browser, so the webhook URL is never exposed client-side.
//
// The webhook call is fire-and-forget: it must never block or fail the
// visitor's form submission. `after()` runs it once the response has already
// been sent, while still guaranteeing (unlike a bare un-awaited fetch) that
// Vercel keeps the function alive long enough for the request to finish
// rather than tearing it down mid-flight.
export async function POST(request: Request) {
  const webhookUrl = process.env.ZAPIER_QUOTE_WEBHOOK_URL;

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

  const email = typeof body.email === "string" ? body.email.trim() : "";
  const serviceType = typeof body.serviceType === "string" ? body.serviceType : "";
  const details = typeof body.details === "string" ? body.details.trim() : "";

  // The Zap's downstream steps (SMS template, backup row) expect exactly
  // these three flat keys, with everything else folded into "details".
  const combinedDetails = [
    serviceType && `Service Type: ${serviceType}`,
    city && `City/Parish: ${city}`,
    email && `Email: ${email}`,
    details && `Details: ${details}`,
  ]
    .filter(Boolean)
    .join("\n");

  if (webhookUrl) {
    after(async () => {
      try {
        const res = await fetch(webhookUrl, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ name, phone, details: combinedDetails }),
        });
        if (!res.ok) {
          console.error("Zapier quote webhook responded with", res.status, await res.text().catch(() => ""));
        }
      } catch (err) {
        console.error("Failed to reach Zapier quote webhook", err);
      }
    });
  } else {
    console.error("ZAPIER_QUOTE_WEBHOOK_URL is not configured — skipping webhook call");
  }

  return NextResponse.json({ ok: true });
}
