import type { Metadata } from "next";
import Container from "@/components/Container";
import PageHero from "@/components/PageHero";
import { CallButton, QuoteButton } from "@/components/CtaButtons";
import { business } from "@/lib/site-config";
import { JsonLd, breadcrumbSchema } from "@/lib/schema";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Gulf South Stump Grinding is a locally owned, fully insured stump grinding company serving the Florida Parishes and South Mississippi.",
  alternates: { canonical: "/about" },
};

const values = [
  {
    title: "Fully Insured",
    description: "We carry insurance on every job so you're protected, no exceptions.",
  },
  {
    title: "Straight Answers",
    description: "No pushy sales tactics, no inflated quotes — just a fair price for the work.",
  },
  {
    title: "Show Up, Show Up On Time",
    description: "We know a no-show contractor is the #1 complaint in this industry. We schedule realistically and communicate if anything changes.",
  },
];

export default function AboutPage() {
  return (
    <>
      <JsonLd data={breadcrumbSchema([
        { name: "Home", url: business.url },
        { name: "About", url: `${business.url}/about` },
      ])} />

      <PageHero
        eyebrow="About Us"
        title="A Local Stump Grinding Crew Built on Doing Right by the Job"
        breadcrumbs={[{ name: "Home", href: "/" }, { name: "About" }]}
      />

      <section className="py-20">
        <Container className="max-w-3xl">
          <h2 className="font-heading font-bold text-3xl text-ink-500">Who We Are</h2>
          <p className="mt-4 text-ink-500/70 leading-relaxed">
            Gulf South Stump Grinding is a locally owned business based in St. Tammany Parish,
            serving homeowners and businesses across the Florida Parishes and South
            Mississippi. We&apos;re a newer name in the area, which means we&apos;re earning every
            customer's trust one job at a time — with fair quotes, real responsiveness, and
            a fully insured crew that shows up when it says it will.
          </p>
          <p className="mt-4 text-ink-500/70 leading-relaxed">
            We focus on one thing — stump grinding — instead of spreading across every tree
            service under the sun. That means better equipment for the job, faster turnarounds,
            and a crew that knows how to handle everything from a single backyard stump to a
            multi-stump commercial lot.
          </p>
        </Container>
      </section>

      <section className="py-20 bg-brand-50">
        <Container>
          <h2 className="font-heading font-bold text-3xl text-ink-500">What We Stand On</h2>
          <div className="mt-10 grid sm:grid-cols-3 gap-6">
            {values.map((v) => (
              <div key={v.title} className="bg-white rounded-xl p-6 border border-black/5">
                <h3 className="font-heading font-semibold text-lg text-ink-500">{v.title}</h3>
                <p className="mt-2 text-sm text-ink-500/70">{v.description}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <section className="py-16 bg-ink-500 text-white">
        <Container className="text-center">
          <h2 className="font-heading font-bold text-3xl">Let&apos;s Get That Stump Handled</h2>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <CallButton />
            <QuoteButton />
          </div>
        </Container>
      </section>
    </>
  );
}
