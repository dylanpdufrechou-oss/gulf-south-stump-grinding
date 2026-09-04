"use client";

import { useState } from "react";
import { sendGAEvent } from "@next/third-parties/google";
import { business } from "@/lib/site-config";

type Status = "idle" | "submitting" | "success" | "error";

export default function QuoteForm() {
  const [status, setStatus] = useState<Status>("idle");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("submitting");

    const form = e.currentTarget;
    const data = new FormData(form);
    const payload = {
      name: data.get("name"),
      phone: data.get("phone"),
      email: data.get("email"),
      city: data.get("city"),
      serviceType: data.get("serviceType"),
      details: data.get("details"),
    };

    try {
      const res = await fetch("/api/quote", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      if (!res.ok) throw new Error("submission failed");

      sendGAEvent("event", "generate_lead", {
        form_id: "quote_form",
        service_type: String(payload.serviceType ?? ""),
      });
      setStatus("success");
      form.reset();
    } catch {
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <div className="rounded-md bg-brand-50 border border-brand-100 p-6 text-center">
        <p className="font-heading font-bold text-lg text-ink-500">Request received!</p>
        <p className="mt-2 text-sm text-ink-500/70">
          Thanks — we&apos;ve got your details and will be in touch shortly. If it&apos;s urgent,
          call or text us at{" "}
          <a href={`tel:${business.phoneE164}`} className="font-semibold text-brand-600 hover:text-brand-700">
            {business.phoneDisplay}
          </a>
          .
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div className="grid sm:grid-cols-2 gap-5">
        <Field label="Full Name" name="name" required />
        <Field label="Phone Number" name="phone" type="tel" required />
      </div>
      <div className="grid sm:grid-cols-2 gap-5">
        <Field label="Email" name="email" type="email" />
        <Field label="City / Parish" name="city" required />
      </div>
      <div>
        <label className="block text-sm font-medium text-ink-500 mb-1.5" htmlFor="serviceType">
          Service Needed
        </label>
        <select
          id="serviceType"
          name="serviceType"
          className="w-full rounded-md border border-black/15 px-3.5 py-2.5 text-ink-500 focus:outline-none focus:ring-2 focus:ring-brand-500"
          defaultValue="Residential"
        >
          <option>Residential</option>
          <option>Commercial</option>
          <option>Not sure</option>
        </select>
      </div>
      <div>
        <label className="block text-sm font-medium text-ink-500 mb-1.5" htmlFor="details">
          Tell us about the stump(s)
        </label>
        <textarea
          id="details"
          name="details"
          rows={4}
          placeholder="Number of stumps, approximate size, and access to the area (e.g. fenced backyard, tight side gate)"
          className="w-full rounded-md border border-black/15 px-3.5 py-2.5 text-ink-500 focus:outline-none focus:ring-2 focus:ring-brand-500"
        />
      </div>
      <button
        type="submit"
        disabled={status === "submitting"}
        className="w-full sm:w-auto inline-flex items-center justify-center rounded-md bg-brand-500 hover:bg-brand-600 disabled:opacity-60 disabled:cursor-not-allowed text-white font-semibold px-6 py-3.5 transition-colors"
      >
        {status === "submitting" ? "Sending…" : "Send Quote Request"}
      </button>
      {status === "error" && (
        <p className="text-sm text-brand-600">
          Something went wrong sending your request. Please call or text us directly at{" "}
          <a href={`tel:${business.phoneE164}`} className="font-semibold underline">
            {business.phoneDisplay}
          </a>{" "}
          instead.
        </p>
      )}
    </form>
  );
}

function Field({
  label,
  name,
  type = "text",
  required = false,
}: {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
}) {
  return (
    <div>
      <label className="block text-sm font-medium text-ink-500 mb-1.5" htmlFor={name}>
        {label}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        required={required}
        className="w-full rounded-md border border-black/15 px-3.5 py-2.5 text-ink-500 focus:outline-none focus:ring-2 focus:ring-brand-500"
      />
    </div>
  );
}
