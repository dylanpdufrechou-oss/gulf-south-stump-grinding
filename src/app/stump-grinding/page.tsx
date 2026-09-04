import type { Metadata } from "next";
import Link from "next/link";
import Container from "@/components/Container";
import PageHero from "@/components/PageHero";
import { CallButton, QuoteButton } from "@/components/CtaButtons";
import { business, serviceAreas } from "@/lib/site-config";
import { JsonLd, serviceSchema, breadcrumbSchema, faqSchema } from "@/lib/schema";

export const metadata: Metadata = {
  title: "Stump Grinding Services",
  description:
    "Professional stump grinding across the Florida Parishes and South Mississippi. Full-size stumps ground below grade, roots included, insured crew, free quotes.",
  alternates: { canonical: "/stump-grinding" },
};

const included = [
  {
    title: "Below-Grade Grinding",
    description: "Standard grind depth of 4-6 inches below the surface so you can mow, landscape, or lay sod right over it.",
  },
  {
    title: "Root Flare Removal",
    description: "We grind out the visible root flare, not just the trunk, so the stump doesn't resurface as it settles.",
  },
  {
    title: "Site Cleanup",
    description: "Wood chip debris hauled away or left for your use as mulch — your call.",
  },
  {
    title: "Tight-Access Equipment",
    description: "Compact grinders built to get through fence gates, narrow side yards, and backyards standard equipment can't reach.",
  },
];

const stumpFaqs = [
  {
    question: "What size stumps can you grind?",
    answer:
      "From small ornamental tree stumps to large hardwoods several feet in diameter. Send us a photo with your quote request and we'll tell you exactly what's involved.",
  },
  {
    question: "How long does a typical stump grinding job take?",
    answer:
      "Most single-stump residential jobs take under an hour once we're on site. Multi-stump properties and commercial land-clearing jobs are quoted with a time estimate up front.",
  },
  {
    question: "Do you grind the roots too, or just the visible stump?",
    answer:
      "We grind the stump and the root flare below grade. We don't excavate the entire root system (that's stump removal, a much more invasive and expensive process) — grinding is the faster, less disruptive option most properties need.",
  },
];

export default function StumpGrindingPage() {
  return (
    <>
      <JsonLd
        data={[
          serviceSchema({
            name: "Stump Grinding",
            description:
              "Professional stump grinding for residential and commercial properties across the Florida Parishes and South Mississippi.",
            areaServed: serviceAreas.map((a) => `${a.parish} ${a.unitLabel}`),
            url: `${business.url}/stump-grinding`,
          }),
          breadcrumbSchema([
            { name: "Home", url: business.url },
            { name: "Stump Grinding", url: `${business.url}/stump-grinding` },
          ]),
          faqSchema(stumpFaqs),
        ]}
      />

      <PageHero
        eyebrow="Our Core Service"
        title="Stump Grinding Done Right, the First Time"
        description="Full-size stumps ground below grade — roots included, yard left clean. Fully insured crew serving the Florida Parishes and South Mississippi."
        breadcrumbs={[{ name: "Home", href: "/" }, { name: "Stump Grinding" }]}
      />

      <section className="py-20">
        <Container className="max-w-3xl">
          <h2 className="font-heading font-bold text-3xl text-ink-500">
            Why Grind Instead of Remove?
          </h2>
          <p className="mt-4 text-ink-500/70 leading-relaxed">
            A leftover stump isn&apos;t just an eyesore — it&apos;s a tripping hazard, a mower-killer,
            and it can attract termites and fungus close to your home. Full stump removal
            (digging out the entire root ball) is slow, expensive, and tears up the surrounding
            yard. Grinding gets the visible stump and root flare down below grade quickly, so you
            can mow over it, landscape around it, or replant in the same spot — all at a fraction
            of the cost and disruption.
          </p>
        </Container>
      </section>

      <section className="py-20 bg-brand-50">
        <Container>
          <h2 className="font-heading font-bold text-3xl text-ink-500">What&apos;s Included</h2>
          <div className="mt-10 grid sm:grid-cols-2 gap-6">
            {included.map((item) => (
              <div key={item.title} className="bg-white rounded-xl p-6 border border-black/5">
                <h3 className="font-heading font-semibold text-lg text-ink-500">{item.title}</h3>
                <p className="mt-2 text-sm text-ink-500/70">{item.description}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <section className="py-20">
        <Container className="max-w-3xl">
          <h2 className="font-heading font-bold text-3xl text-ink-500">Stump Grinding FAQs</h2>
          <div className="mt-8 space-y-6">
            {stumpFaqs.map((faq) => (
              <div key={faq.question}>
                <h3 className="font-heading font-semibold text-lg text-ink-500">{faq.question}</h3>
                <p className="mt-2 text-sm text-ink-500/70">{faq.answer}</p>
              </div>
            ))}
          </div>
          <Link href="/faq" className="mt-6 inline-block text-sm font-semibold text-brand-600 hover:text-brand-700">
            See all FAQs →
          </Link>
        </Container>
      </section>

      <section className="py-16 bg-ink-500 text-white">
        <Container className="text-center">
          <h2 className="font-heading font-bold text-3xl">Get a Free Stump Grinding Quote</h2>
          <p className="mt-3 text-white/70 max-w-xl mx-auto">
            Send us a photo of your stump and we&apos;ll get back to you with a fair, no-obligation quote.
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
