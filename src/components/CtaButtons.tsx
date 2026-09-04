"use client";

import Link from "next/link";
import { sendGAEvent } from "@next/third-parties/google";
import { business } from "@/lib/site-config";

// Defaults to a solid white button since every usage but one sits on a dark
// (bg-ink-500) section — a black button there is invisible. Override with
// className on the one light-background usage (contact page sidebar).
export function CallButton({ className = "" }: { className?: string }) {
  return (
    <a
      href={`tel:${business.phoneE164}`}
      onClick={() => sendGAEvent("event", "phone_click", { link_url: `tel:${business.phoneE164}` })}
      className={`inline-flex items-center justify-center gap-2 rounded-md bg-white hover:bg-white/90 text-ink-500 font-semibold px-6 py-3.5 transition-colors ${className}`}
    >
      Call {business.phoneDisplay}
    </a>
  );
}

export function QuoteButton({
  label = "Get a Free Quote",
  className = "",
}: {
  label?: string;
  className?: string;
}) {
  return (
    <Link
      href="/contact"
      onClick={() => sendGAEvent("event", "quote_click", { link_text: label })}
      className={`inline-flex items-center justify-center gap-2 rounded-md bg-brand-500 hover:bg-brand-600 text-white font-semibold px-6 py-3.5 transition-colors ${className}`}
    >
      {label}
    </Link>
  );
}

export function ReviewButton({
  label = "Leave Us a Google Review",
  className = "",
}: {
  label?: string;
  className?: string;
}) {
  return (
    <a
      href={business.googleReviewUrl}
      target="_blank"
      rel="noopener noreferrer"
      onClick={() => sendGAEvent("event", "google_review_click", { link_url: business.googleReviewUrl })}
      className={`inline-flex items-center justify-center gap-2 rounded-md bg-white hover:bg-white/90 text-ink-500 font-semibold px-6 py-3.5 transition-colors ${className}`}
    >
      {label}
    </a>
  );
}

export function TextButton({
  label = "Text a Photo",
  className = "",
  variant = "outline",
}: {
  label?: string;
  className?: string;
  /** "outline" (default, for dark hero-style sections) or "solid" (brand red fill). */
  variant?: "outline" | "solid";
}) {
  const variantClasses =
    variant === "solid"
      ? "bg-brand-500 hover:bg-brand-600 text-white"
      : "border-2 border-white/80 text-white hover:bg-white/10";
  return (
    <a
      href={`sms:${business.smsE164}`}
      onClick={() => sendGAEvent("event", "text_click", { link_url: `sms:${business.smsE164}` })}
      className={`inline-flex items-center justify-center gap-2 rounded-md font-semibold px-6 py-3.5 transition-colors ${variantClasses} ${className}`}
    >
      {label}
    </a>
  );
}
