import Link from "next/link";
import type { Metadata } from "next";
import Container from "@/components/Container";
import { CallButton, QuoteButton, TextButton } from "@/components/CtaButtons";
import { serviceAreas } from "@/lib/site-config";
import { faqs } from "@/lib/content/faqs";
import { JsonLd, faqSchema } from "@/lib/schema";

export const metadata: Metadata = {
  title: "Stump Grinding in the Florida Parishes & South Mississippi",
  description:
    "Gulf South Stump Grinding removes stumps fast for homes and businesses across the Northshore, the Florida Parishes, and South Mississippi. Fully insured, free quotes.",
  alternates: { canonical: "/" },
};

const trustItems = [
  { label: "Fully Insured", detail: "Protected on every job, every property" },
  { label: "Free Quotes", detail: "No cost, no obligation, no pressure" },
  { label: "Fast Response", detail: "Most requests answered same day" },
  { label: "Locally Owned", detail: "Based on the Northshore, serving the Gulf South" },
];

const services = [
  {
    href: "/stump-grinding",
    title: "Stump Grinding",
    description:
      "Our core service — full-size stumps ground below grade, roots included, yard left clean.",
  },
  {
    href: "/residential",
    title: "Residential Services",
    description:
      "Backyard stumps, storm-damaged trees, and landscaping prep for homeowners across the region.",
  },
  {
    href: "/commercial",
    title: "Commercial Services",
    description:
      "HOAs, property managers, and businesses — multi-stump jobs scheduled around your operations.",
  },
];

const steps = [
  { title: "Reach Out", description: "Call, text, or send a photo through our quote form." },
  { title: "Get a Free Quote", description: "We review your stump size and access, then quote a fair price — no surprises." },
  { title: "We Grind", description: "We show up on schedule, grind the stump below grade, and clean up the site." },
  { title: "You're Done", description: "Mow over it, landscape around it, or replant — your yard is ready." },
];

const previewFaqs = faqs.slice(0, 4);

export default function Home() {
  return (
    <>
      <JsonLd data={faqSchema(previewFaqs)} />

      {/* Hero */}
      <section className="bg-ink-500 text-white">
        <Container className="py-20 sm:py-28 grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-accent-400 font-semibold tracking-wide uppercase text-sm mb-4">
              Florida Parishes &amp; South Mississippi
            </p>
            <h1 className="font-heading font-bold text-4xl sm:text-5xl leading-tight">
              Stumps Gone. Yard Back.
            </h1>
            <p className="mt-6 text-lg text-white/80 max-w-xl">
              Fully insured stump grinding for homeowners and businesses across the
              Northshore, the Florida Parishes, and South Mississippi. Free
              quotes, fast scheduling, no hidden fees.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <CallButton />
              <QuoteButton />
              <TextButton />
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            {trustItems.map((item) => (
              <div key={item.label} className="rounded-lg bg-white/5 border border-white/10 p-5">
                <p className="font-heading font-semibold text-teal-300">{item.label}</p>
                <p className="mt-1 text-sm text-white/70">{item.detail}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Services overview */}
      <section className="py-20">
        <Container>
          <div className="max-w-2xl">
            <h2 className="font-heading font-bold text-3xl text-ink-500">What We Do</h2>
            <p className="mt-3 text-ink-500/70">
              Stump grinding is our specialty, for residential yards and commercial sites alike.
            </p>
          </div>
          <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service) => (
              <Link
                key={service.href}
                href={service.href}
                className="group rounded-xl border border-black/10 p-6 hover:border-teal-500 hover:shadow-md transition-all"
              >
                <h3 className="font-heading font-semibold text-xl text-ink-500 group-hover:text-teal-600">
                  {service.title}
                </h3>
                <p className="mt-2 text-sm text-ink-500/70">{service.description}</p>
                <span className="mt-4 inline-block text-sm font-semibold text-teal-600">
                  Learn more →
                </span>
              </Link>
            ))}
          </div>
        </Container>
      </section>

      {/* Process */}
      <section className="py-20 bg-teal-50">
        <Container>
          <h2 className="font-heading font-bold text-3xl text-ink-500">How It Works</h2>
          <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {steps.map((step, i) => (
              <div key={step.title}>
                <div className="w-10 h-10 rounded-full bg-teal-500 text-white flex items-center justify-center font-heading font-bold">
                  {i + 1}
                </div>
                <h3 className="mt-4 font-heading font-semibold text-lg text-ink-500">{step.title}</h3>
                <p className="mt-2 text-sm text-ink-500/70">{step.description}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Service areas teaser */}
      <section className="py-20">
        <Container>
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-4">
            <div>
              <h2 className="font-heading font-bold text-3xl text-ink-500">Where We Work</h2>
              <p className="mt-3 text-ink-500/70 max-w-2xl">
                Based in St. Tammany Parish, serving 24 cities across the Florida Parishes
                and South Mississippi.
              </p>
            </div>
            <Link href="/service-areas" className="text-sm font-semibold text-teal-600 hover:text-teal-700">
              View all service areas →
            </Link>
          </div>
          <div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-4">
            {serviceAreas.map((area) => (
              <div key={area.parish}>
                <p className="font-heading font-semibold text-ink-500">
                  {area.parish} {area.unitLabel}
                </p>
                <p className="text-sm text-ink-500/60">
                  {area.cities.map((c) => c.name).join(", ")}
                </p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* FAQ preview */}
      <section className="py-20 bg-teal-50">
        <Container className="max-w-3xl">
          <h2 className="font-heading font-bold text-3xl text-ink-500">Common Questions</h2>
          <div className="mt-8 space-y-6">
            {previewFaqs.map((faq) => (
              <div key={faq.question}>
                <h3 className="font-heading font-semibold text-lg text-ink-500">{faq.question}</h3>
                <p className="mt-2 text-sm text-ink-500/70">{faq.answer}</p>
              </div>
            ))}
          </div>
          <Link href="/faq" className="mt-8 inline-block text-sm font-semibold text-teal-600 hover:text-teal-700">
            See all FAQs →
          </Link>
        </Container>
      </section>

      {/* Final CTA */}
      <section className="py-16 bg-ink-500 text-white">
        <Container className="text-center">
          <h2 className="font-heading font-bold text-3xl">Ready to Get Rid of That Stump?</h2>
          <p className="mt-3 text-white/70 max-w-xl mx-auto">
            Free quotes, fast responses, and a fully insured crew — call, text, or request a quote online.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <CallButton />
            <QuoteButton />
          </div>
        </Container>
      </section>
    </>
  );
}
