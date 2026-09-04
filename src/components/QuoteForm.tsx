"use client";

import { useState } from "react";
import { sendGAEvent } from "@next/third-parties/google";
import { business } from "@/lib/site-config";

export default function QuoteForm() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    const name = form.get("name");
    const phone = form.get("phone");
    const email = form.get("email");
    const city = form.get("city");
    const serviceType = form.get("serviceType");
    const details = form.get("details");

    const subject = encodeURIComponent(`Quote Request — ${name}`);
    const body = encodeURIComponent(
      `Name: ${name}\nPhone: ${phone}\nEmail: ${email}\nCity/Area: ${city}\nService Type: ${serviceType}\n\nDetails:\n${details}`
    );

    sendGAEvent("event", "generate_lead", { form_id: "quote_form", service_type: String(serviceType ?? "") });
    window.location.href = `mailto:${business.email}?subject=${subject}&body=${body}`;
    setSubmitted(true);
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
        className="w-full sm:w-auto inline-flex items-center justify-center rounded-md bg-brand-500 hover:bg-brand-600 text-white font-semibold px-6 py-3.5 transition-colors"
      >
        Send Quote Request
      </button>
      {submitted && (
        <p className="text-sm text-brand-600">
          Opening your email app to send this request. If nothing opens, call or text us directly instead.
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
