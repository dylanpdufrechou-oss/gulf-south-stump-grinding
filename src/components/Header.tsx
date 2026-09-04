"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { business } from "@/lib/site-config";

const navLinks = [
  { href: "/stump-grinding", label: "Stump Grinding" },
  { href: "/residential", label: "Residential" },
  { href: "/commercial", label: "Commercial" },
  { href: "/service-areas", label: "Service Areas" },
  { href: "/reviews", label: "Reviews" },
  { href: "/about", label: "About" },
];

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full">
      <div className="hidden sm:flex items-center justify-center gap-2 bg-ink-500 text-white text-sm py-1.5 px-4">
        <span>Locally Owned</span>
        <span aria-hidden className="text-brand-400">
          •
        </span>
        <span>Fully Insured</span>
        <span aria-hidden className="text-brand-400">
          •
        </span>
        <span>Free, No-Obligation Quotes</span>
      </div>

      <div className="bg-white border-b border-black/5 shadow-sm">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex items-center justify-between h-24">
          <Link href="/" className="flex items-center gap-3 shrink-0" aria-label={`${business.name} home`}>
            <Image
              src="/logo.png"
              alt={`${business.name} logo`}
              width={96}
              height={96}
              className="rounded-full w-16 h-16 sm:w-20 sm:h-20"
              priority
            />
            <span className="hidden md:flex flex-col leading-none gap-1">
              <span className="font-wordmark italic -skew-x-[9deg] text-2xl tracking-wide">
                <span className="text-brand-600">Gulf</span>{" "}
                <span className="text-ink-500">South</span>
              </span>
              <span className="font-heading font-semibold text-[11px] tracking-[0.15em] text-brand-600 uppercase">
                Stump Grinding
              </span>
            </span>
          </Link>

          <nav className="hidden lg:flex items-center gap-6">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-ink-500/80 hover:text-brand-600 transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <a
              href={`tel:${business.phoneE164}`}
              className="hidden sm:inline-flex items-center gap-2 rounded-md bg-ink-500 hover:bg-ink-700 text-white font-semibold px-4 py-2.5 text-sm transition-colors"
            >
              <PhoneIcon />
              {business.phoneDisplay}
            </a>
            <Link
              href="/contact"
              className="inline-flex items-center rounded-md bg-brand-500 hover:bg-brand-600 text-white font-semibold px-4 py-2.5 text-sm transition-colors"
            >
              Free Quote
            </Link>
            <button
              type="button"
              onClick={() => setOpen((v) => !v)}
              aria-label="Toggle menu"
              aria-expanded={open}
              className="lg:hidden inline-flex items-center justify-center rounded-md p-2 text-ink-500"
            >
              <MenuIcon open={open} />
            </button>
          </div>
        </div>

        {open && (
          <nav className="lg:hidden border-t border-black/5 bg-white px-4 py-3 flex flex-col gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="py-2.5 text-ink-500 font-medium border-b border-black/5 last:border-0"
              >
                {link.label}
              </Link>
            ))}
            <a
              href={`tel:${business.phoneE164}`}
              className="mt-3 inline-flex items-center justify-center gap-2 rounded-md bg-ink-500 text-white font-semibold px-4 py-3 text-sm"
            >
              <PhoneIcon />
              Call {business.phoneDisplay}
            </a>
          </nav>
        )}
      </div>
    </header>
  );
}

function PhoneIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden>
      <path
        d="M6.6 10.8c1.4 2.8 3.8 5.2 6.6 6.6l2.2-2.2c.3-.3.7-.4 1-.2 1.1.4 2.3.6 3.6.6.6 0 1 .4 1 1V20c0 .6-.4 1-1 1C10.5 21 3 13.5 3 4c0-.6.4-1 1-1h3.4c.6 0 1 .4 1 1 0 1.3.2 2.5.6 3.6.1.3 0 .7-.2 1L6.6 10.8Z"
        fill="currentColor"
      />
    </svg>
  );
}

function MenuIcon({ open }: { open: boolean }) {
  if (open) {
    return (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden>
        <path d="M6 6l12 12M18 6L6 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      </svg>
    );
  }
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden>
      <path d="M4 7h16M4 12h16M4 17h16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
}
