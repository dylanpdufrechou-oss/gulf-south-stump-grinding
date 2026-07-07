import type { Metadata } from "next";
import Container from "@/components/Container";
import PageHero from "@/components/PageHero";
import { CallButton, QuoteButton } from "@/components/CtaButtons";
import { business, serviceAreas } from "@/lib/site-config";
import { JsonLd, serviceSchema, breadcrumbSchema } from "@/lib/schema";

export const metadata: Metadata = {
  title: "Residential Stump Grinding",
  description:
    "Homeowner stump grinding across Southeast Louisiana and South Mississippi — storm cleanup, backyard stumps, and yard prep for landscaping. Free quotes.",
  alternates: { canonical: "/residential" },
};

const scenarios = [
  {
    title: "Old Stumps Ruining Your Lawn",
    description: "That stump you've been mowing around for years? We grind it below grade so your mower — and your yard — finally look right.",
  },
  {
    title: "Storm-Damaged Tree Cleanup",
    description: "After a fallen tree, we grind the remaining stump so you're not left with a hazard or an eyesore through hurricane season.",
  },
  {
    title: "Prepping for Landscaping",
    description: "Installing a fence, shed, pool, or new flower bed? We clear the stump so your project isn't built around it.",
  },
  {
    title: "Multiple Stumps on One Property",
    description: "Cleaning up several stumps at once — we quote the whole property together, often for less per stump than one-off visits.",
  },
];

export default function ResidentialPage() {
  return (
    <>
      <JsonLd
        data={[
          serviceSchema({
            name: "Residential Stump Grinding",
            description:
              "Stump grinding for homeowners across Southeast Louisiana and South Mississippi, including storm cleanup and landscaping prep.",
            areaServed: serviceAreas.map((a) => `${a.parish} ${a.unitLabel}`),
            url: `${business.url}/residential`,
          }),
          breadcrumbSchema([
            { name: "Home", url: business.url },
            { name: "Residential Services", url: `${business.url}/residential` },
          ]),
        ]}
      />

      <PageHero
        eyebrow="For Homeowners"
        title="Residential Stump Grinding"
        description="From a single backyard stump to a whole yard full of storm cleanup, we handle homeowner jobs across the Northshore, Greater New Orleans, and the Mississippi Gulf South."
        breadcrumbs={[{ name: "Home", href: "/" }, { name: "Residential Services" }]}
      />

      <section className="py-20">
        <Container>
          <h2 className="font-heading font-bold text-3xl text-ink-500">Common Homeowner Jobs</h2>
          <div className="mt-10 grid sm:grid-cols-2 gap-6">
            {scenarios.map((s) => (
              <div key={s.title} className="rounded-xl border border-black/10 p-6">
                <h3 className="font-heading font-semibold text-lg text-ink-500">{s.title}</h3>
                <p className="mt-2 text-sm text-ink-500/70">{s.description}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <section className="py-20 bg-teal-50">
        <Container className="max-w-3xl">
          <h2 className="font-heading font-bold text-3xl text-ink-500">What to Expect</h2>
          <ol className="mt-6 space-y-4 text-ink-500/80">
            <li><strong className="text-ink-500">1. Send a photo.</strong> Text or upload a picture of the stump and the access path to your yard.</li>
            <li><strong className="text-ink-500">2. Get a free quote.</strong> We&apos;ll give you a fair price based on size, root spread, and access — no site visit required for most jobs.</li>
            <li><strong className="text-ink-500">3. We schedule around you.</strong> Evening and weekend appointments available.</li>
            <li><strong className="text-ink-500">4. We grind and clean up.</strong> Chips hauled away or left as mulch, your choice.</li>
          </ol>
        </Container>
      </section>

      <section className="py-16 bg-ink-500 text-white">
        <Container className="text-center">
          <h2 className="font-heading font-bold text-3xl">Get Your Yard Back</h2>
          <p className="mt-3 text-white/70 max-w-xl mx-auto">
            Free quotes for homeowners across the region — call, text, or request one online.
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
