import Link from "next/link";
import Image from "next/image";
import Script from "next/script";
import type { Metadata } from "next";
import Container from "@/components/Container";
import { CallButton, QuoteButton, TextButton } from "@/components/CtaButtons";
import BeforeAfter from "@/components/BeforeAfter";
import { ShieldCheckIcon, TagIcon, ClockIcon, MapPinIcon } from "@/components/Icons";
import { business } from "@/lib/site-config";
import { faqs } from "@/lib/content/faqs";
import { JsonLd, faqSchema } from "@/lib/schema";

export const metadata: Metadata = {
  title: "Stump Grinding in the Florida Parishes & South Mississippi",
  description:
    "Gulf South Stump Grinding removes stumps fast for homes and businesses across the Northshore, the Florida Parishes, and South Mississippi. Fully insured, free quotes.",
  alternates: { canonical: "/" },
};

const trustItems = [
  { icon: ShieldCheckIcon, label: "Fully Insured", detail: "Protected on every job" },
  { icon: TagIcon, label: "Free Quotes", detail: "No obligation" },
  { icon: ClockIcon, label: "Fast Scheduling", detail: "Quick turnaround" },
  { icon: MapPinIcon, label: "Locally Owned", detail: "Based on the Northshore" },
];

const quoteSteps = [
  { title: "Send a Photo", description: "Text us a picture of the stump." },
  { title: "Get Your Price", description: "We can often provide pricing without an in-person estimate." },
  { title: "Get It Gone", description: "We schedule the job and take care of the stump." },
];

const tightAccessPoints = [
  "Fenced backyards",
  "Narrow side access",
  "Landscaped areas",
  "Apartment properties",
  "Commercial sites",
];

const residentialPoints = [
  "Front and back yards",
  "Fence-line stumps",
  "Landscaping projects",
  "Surface root removal",
  "Preparing areas for grass, gravel, or landscaping",
];

const commercialPoints = [
  "Property managers",
  "Apartment communities",
  "HOAs",
  "Shopping centers",
  "Landscapers and tree companies",
  "Construction and drainage projects",
];

const serviceAreaHighlights = ["Folsom", "Covington", "Mandeville", "Madisonville", "Abita Springs", "Hammond"];

const previewFaqs = faqs.slice(0, 4);

function CheckItem({ children }: { children: React.ReactNode }) {
  return (
    <li className="flex items-start gap-2.5">
      <span className="mt-0.5 text-brand-500 font-bold" aria-hidden>
        ✓
      </span>
      <span>{children}</span>
    </li>
  );
}

function ImagePlaceholder({ label }: { label: string }) {
  return (
    <div className="aspect-[4/3] rounded-xl border-2 border-dashed border-black/15 bg-black/[0.03] flex items-center justify-center p-6">
      <p className="text-sm text-ink-500/40 font-medium text-center">{label}</p>
    </div>
  );
}

export default function Home() {
  return (
    <>
      <JsonLd data={faqSchema(previewFaqs)} />

      {/* Hero */}
      <section className="bg-ink-500 text-white">
        <Container className="py-20 sm:py-28 grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-brand-400 font-semibold tracking-wide uppercase text-sm mb-4">
              Stump Grinding • Northshore &amp; Surrounding Areas
            </p>
            <h1 className="font-display italic -skew-x-[9deg] text-4xl sm:text-6xl leading-[0.95] tracking-wide">
              <span className="block text-brand-500">Stumps Gone.</span>
              <span className="block text-white">Yard Back.</span>
            </h1>
            <p className="mt-6 text-lg text-white/80 max-w-xl">
              Professional stump grinding for homeowners, businesses, and property
              managers. Fully insured with fast scheduling and free quotes.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <QuoteButton />
              <TextButton label="Text Us a Photo" variant="outline" />
            </div>
            <p className="mt-4 text-sm text-white/70">
              Or call{" "}
              <a href={`tel:${business.phoneE164}`} className="font-semibold text-white hover:text-brand-300">
                {business.phoneDisplay}
              </a>
            </p>
            <p className="mt-3 text-xs text-white/50 max-w-md leading-relaxed">
              Fastest way to get a quote: text a photo of your stump to{" "}
              <a href={`sms:${business.smsE164}`} className="font-semibold text-white/70 hover:text-brand-300">
                {business.phoneDisplay}
              </a>
              .
            </p>
          </div>
          <BeforeAfter
            beforeSrc="/gallery/corner-stump-before.webp"
            afterSrc="/gallery/corner-stump-after.webp"
            beforeAlt="Large stump buried in years of overgrown shrubs against a house corner"
            afterAlt="Same corner cleared to bare dirt, stump gone, patio and outdoor kitchen fully visible"
            caption="One visit: overgrown shrubs and a hidden stump cleared into a usable outdoor living space."
            priority
          />
        </Container>
        <div className="border-t border-white/10">
          <Container className="py-10">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
              {trustItems.map((item) => (
                <div key={item.label} className="rounded-xl bg-white/5 border border-white/10 p-5">
                  <item.icon className="w-7 h-7 text-brand-400" />
                  <p className="mt-3 font-heading font-semibold text-white">{item.label}</p>
                  <p className="mt-0.5 text-sm text-white/60">{item.detail}</p>
                </div>
              ))}
            </div>
          </Container>
        </div>
      </section>

      {/* Social proof */}
      <section className="py-20">
        <Container>
          <div className="text-center">
            <h2 className="font-display italic -skew-x-[9deg] tracking-wide text-3xl text-ink-500 max-w-3xl mx-auto">
              <span className="text-brand-500">Trusted</span> by Homeowners &amp; Businesses Across the Northshore
            </h2>
            <div className="mt-5 flex flex-col items-center gap-1">
              <span className="text-brand-500 text-2xl tracking-widest" aria-hidden>
                ★★★★★
              </span>
              <p className="font-heading font-semibold text-ink-500">5.0 Google Rating</p>
            </div>
          </div>

          {/* Live Google reviews, pulled via Elfsight. The widget's own overall-rating
              header and title are switched off in the Elfsight dashboard so the 5.0
              rating above stays the single source of truth for the site's rating. */}
          <div className="mt-12 w-full overflow-x-hidden">
            <div className="elfsight-app-b07c6f4c-ebbc-4800-a87e-715adc50a621" data-elfsight-app-lazy />
          </div>
          <Script src="https://elfsightcdn.com/platform.js" strategy="lazyOnload" />
        </Container>
      </section>

      {/* Getting a quote */}
      <section className="py-20 bg-brand-50">
        <Container>
          <h2 className="font-display italic -skew-x-[9deg] tracking-wide text-3xl text-ink-500">
            <span className="text-brand-500">Getting a Quote</span> Is Simple
          </h2>
          <div className="mt-10 grid sm:grid-cols-3 gap-8">
            {quoteSteps.map((step, i) => (
              <div key={step.title}>
                <div className="w-10 h-10 rounded-full bg-brand-500 text-white flex items-center justify-center font-heading font-bold">
                  {i + 1}
                </div>
                <h3 className="mt-4 font-heading font-semibold text-lg text-ink-500">{step.title}</h3>
                <p className="mt-2 text-sm text-ink-500/70">{step.description}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Tight access */}
      <section className="py-20">
        <Container className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="font-display italic -skew-x-[9deg] tracking-wide text-3xl text-ink-500">
              <span className="text-brand-500">Tight Access?</span> No Problem.
            </h2>
            <p className="mt-4 text-ink-500/70 leading-relaxed">
              Our self-propelled stump grinder can reach areas that many larger tow-behind
              machines cannot, including fenced yards, tight side access, landscaped areas,
              and commercial properties.
            </p>
            <ul className="mt-6 space-y-2.5 text-ink-500/80">
              {tightAccessPoints.map((point) => (
                <CheckItem key={point}>{point}</CheckItem>
              ))}
            </ul>
          </div>
          <Image
            src="/gallery/poolside-fence-stump-before.webp"
            alt="Compact tracked stump grinder working a stump in a narrow strip between a pool deck and wrought-iron fence"
            width={1200}
            height={1600}
            className="w-full h-auto rounded-xl border border-black/10"
            sizes="(min-width: 1024px) 50vw, 100vw"
          />
        </Container>
      </section>

      {/* Residential & commercial */}
      <section className="py-20 bg-brand-50">
        <Container>
          <h2 className="font-display italic -skew-x-[9deg] tracking-wide text-3xl text-ink-500">
            <span className="text-brand-500">Stump Grinding</span> for Homes &amp; Businesses
          </h2>
          <div className="mt-10 grid lg:grid-cols-2 gap-6">
            <div className="rounded-xl bg-white border border-black/10 p-8">
              <h3 className="font-heading font-semibold text-xl text-ink-500">Residential</h3>
              <ul className="mt-4 space-y-2.5 text-sm text-ink-500/80">
                {residentialPoints.map((point) => (
                  <CheckItem key={point}>{point}</CheckItem>
                ))}
              </ul>
              <Link href="/residential" className="mt-6 inline-block text-sm font-semibold text-brand-600 hover:text-brand-700">
                Residential Stump Grinding →
              </Link>
            </div>
            <div className="rounded-xl bg-white border border-black/10 p-8">
              <h3 className="font-heading font-semibold text-xl text-ink-500">Commercial</h3>
              <ul className="mt-4 space-y-2.5 text-sm text-ink-500/80">
                {commercialPoints.map((point) => (
                  <CheckItem key={point}>{point}</CheckItem>
                ))}
              </ul>
              <Link
                href="/commercial"
                className="mt-6 inline-flex items-center justify-center rounded-md bg-brand-500 hover:bg-brand-600 text-white font-semibold px-5 py-2.5 text-sm transition-colors"
              >
                Commercial Stump Grinding
              </Link>
            </div>
          </div>
        </Container>
      </section>

      {/* Owner-operated */}
      <section className="py-20">
        <Container className="grid lg:grid-cols-2 gap-12 items-center">
          <ImagePlaceholder label="Owner photo — coming soon" />
          <div>
            <h2 className="font-display italic -skew-x-[9deg] tracking-wide text-3xl text-ink-500">
              <span className="text-brand-500">Local.</span> Insured. Owner Operated.
            </h2>
            <p className="mt-4 text-ink-500/70 leading-relaxed">
              Gulf South Stump Grinding is a locally owned stump grinding company serving the
              Northshore and surrounding areas. When you call or text, you&apos;re dealing
              directly with the person responsible for getting the job done right.
            </p>
          </div>
        </Container>
      </section>

      {/* Service areas */}
      <section className="py-20 bg-brand-50">
        <Container>
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-4">
            <div>
              <h2 className="font-display italic -skew-x-[9deg] tracking-wide text-3xl text-ink-500">
                <span className="text-brand-500">Where</span> We Work
              </h2>
              <p className="mt-3 text-ink-500/70 max-w-2xl">
                Based in St. Tammany Parish, we serve {serviceAreaHighlights.slice(0, -1).join(", ")}, and{" "}
                {serviceAreaHighlights[serviceAreaHighlights.length - 1]} — plus nearby Northshore communities
                across the Florida Parishes and South Mississippi.
              </p>
            </div>
            <Link href="/service-areas" className="shrink-0 text-sm font-semibold text-brand-600 hover:text-brand-700">
              View all service areas →
            </Link>
          </div>
        </Container>
      </section>

      {/* FAQ preview */}
      <section className="py-20">
        <Container className="max-w-3xl">
          <h2 className="font-display italic -skew-x-[9deg] tracking-wide text-3xl text-ink-500">
            <span className="text-brand-500">Common</span> Questions
          </h2>
          <div className="mt-8 space-y-6">
            {previewFaqs.map((faq) => (
              <div key={faq.question}>
                <h3 className="font-heading font-semibold text-lg text-ink-500">{faq.question}</h3>
                <p className="mt-2 text-sm text-ink-500/70">{faq.answer}</p>
              </div>
            ))}
          </div>
          <Link href="/faq" className="mt-8 inline-block text-sm font-semibold text-brand-600 hover:text-brand-700">
            See all FAQs →
          </Link>
        </Container>
      </section>

      {/* Final CTA */}
      <section className="py-16 bg-ink-500 text-white">
        <Container className="text-center">
          <h2 className="font-display italic -skew-x-[9deg] tracking-wide text-3xl">
            <span className="text-brand-400">Ready</span> to Get Rid of That Stump?
          </h2>
          <p className="mt-3 text-white/70 max-w-xl mx-auto">Send us a photo and get a free quote.</p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <TextButton label="Text Us a Photo" variant="solid" />
            <CallButton />
          </div>
        </Container>
      </section>
    </>
  );
}
