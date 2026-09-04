import Link from "next/link";
import { business } from "@/lib/site-config";

// Defaults to a solid white button since every usage but one sits on a dark
// (bg-ink-500) section — a black button there is invisible. Override with
// className on the one light-background usage (contact page sidebar).
export function CallButton({ className = "" }: { className?: string }) {
  return (
    <a
      href={`tel:${business.phoneE164}`}
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
      className={`inline-flex items-center justify-center gap-2 rounded-md bg-brand-500 hover:bg-brand-600 text-white font-semibold px-6 py-3.5 transition-colors ${className}`}
    >
      {label}
    </Link>
  );
}

export function TextButton({
  label = "Text a Photo",
  className = "",
}: {
  label?: string;
  className?: string;
}) {
  return (
    <a
      href={`sms:${business.smsE164}`}
      className={`inline-flex items-center justify-center gap-2 rounded-md border-2 border-white/80 text-white hover:bg-white/10 font-semibold px-6 py-3.5 transition-colors ${className}`}
    >
      {label}
    </a>
  );
}
