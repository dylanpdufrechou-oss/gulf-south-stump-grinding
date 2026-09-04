import type { Metadata } from "next";
import Container from "@/components/Container";
import PageHero from "@/components/PageHero";
import { CallButton, QuoteButton } from "@/components/CtaButtons";
import { business, serviceAreas } from "@/lib/site-config";
import { JsonLd, serviceSchema, breadcrumbSchema } from "@/lib/schema";

export const metadata: Metadata = {
  title: "Commercial Stump Grinding",
  description:
    "Stump grinding for HOAs, property managers, and businesses across the Florida Parishes and South Mississippi. Flexible scheduling, multi-property quotes.",
  alternates: { canonical: "/commercial" },
};

const clients = [
  {
    title: "HOAs & Property Managers",
    description: "Common areas, entrances, and shared green spaces cleared without disrupting residents.",
  },
  {
    title: "Land Clearing for Development",
    description: "Multi-stump lots cleared and ground ahead of construction or site prep.",
  },
  {
    title: "Retail & Office Properties",
    description: "Scheduled around business hours so parking lots and storefronts stay accessible.",
  },
  {
    title: "Municipalities & Contractors",
    description: "Subcontracted stump grinding for larger tree removal and right-of-way projects.",
  },
];

export default function CommercialPage() {
  return (
    <>
      <JsonLd
        data={[
          serviceSchema({
            name: "Commercial Stump Grinding",
            description:
              "Stump grinding for HOAs, property managers, and businesses across the Florida Parishes and South Mississippi.",
            areaServed: serviceAreas.map((a) => `${a.parish} ${a.unitLabel}`),
            url: `${business.url}/commercial`,
          }),
          breadcrumbSchema([
            { name: "Home", url: business.url },
            { name: "Commercial Services", url: `${business.url}/commercial` },
          ]),
        ]}
      />

      <PageHero
        eyebrow="For Businesses & Property Managers"
        title="Commercial Stump Grinding"
        description="Multi-stump jobs, land clearing, and ongoing property maintenance — scheduled around your operations, quoted for the whole job."
        breadcrumbs={[{ name: "Home", href: "/" }, { name: "Commercial Services" }]}
      />

      <section className="py-20">
        <Container>
          <h2 className="font-heading font-bold text-3xl text-ink-500">Who We Work With</h2>
          <div className="mt-10 grid sm:grid-cols-2 gap-6">
            {clients.map((c) => (
              <div key={c.title} className="rounded-xl border border-black/10 p-6">
                <h3 className="font-heading font-semibold text-lg text-ink-500">{c.title}</h3>
                <p className="mt-2 text-sm text-ink-500/70">{c.description}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <section className="py-20 bg-brand-50">
        <Container className="max-w-3xl">
          <h2 className="font-heading font-bold text-3xl text-ink-500">Working With Us</h2>
          <p className="mt-4 text-ink-500/70 leading-relaxed">
            Every commercial job is quoted on its own terms — number of stumps, site access,
            timeline, and any scheduling constraints. We&apos;re fully insured, which matters for
            HOAs and property managers who need proof of coverage before work begins, and we&apos;re
            happy to provide a certificate of insurance on request.
          </p>
        </Container>
      </section>

      <section className="py-16 bg-ink-500 text-white">
        <Container className="text-center">
          <h2 className="font-heading font-bold text-3xl">Request a Commercial Quote</h2>
          <p className="mt-3 text-white/70 max-w-xl mx-auto">
            Tell us about your property and stump count — we&apos;ll put together a quote for the full job.
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
