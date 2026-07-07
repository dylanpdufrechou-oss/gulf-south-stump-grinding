import type { Metadata } from "next";
import Link from "next/link";
import Container from "@/components/Container";
import PageHero from "@/components/PageHero";
import { CallButton, QuoteButton } from "@/components/CtaButtons";
import { business, serviceAreas } from "@/lib/site-config";
import { JsonLd, breadcrumbSchema } from "@/lib/schema";

export const metadata: Metadata = {
  title: "Service Areas",
  description:
    "Gulf South Stump Grinding serves 30+ cities across Southeast Louisiana and South Mississippi, including St. Tammany, Orleans, Jefferson, and Pearl River.",
  alternates: { canonical: "/service-areas" },
};

const laAreas = serviceAreas.filter((a) => a.state === "LA");
const msAreas = serviceAreas.filter((a) => a.state === "MS");

export default function ServiceAreasPage() {
  return (
    <>
      <JsonLd data={breadcrumbSchema([
        { name: "Home", url: business.url },
        { name: "Service Areas", url: `${business.url}/service-areas` },
      ])} />

      <PageHero
        title="Where We Work"
        description="Based in St. Tammany Parish, serving homeowners and businesses across Southeast Louisiana and the Mississippi Gulf South."
        breadcrumbs={[{ name: "Home", href: "/" }, { name: "Service Areas" }]}
      />

      <section className="py-20">
        <Container>
          <h2 className="font-heading font-bold text-3xl text-ink-500">Louisiana</h2>
          <div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-8">
            {laAreas.map((area) => (
              <div key={area.parish}>
                <p className="font-heading font-semibold text-ink-500">
                  {area.parish} {area.unitLabel}
                </p>
                <ul className="mt-2 space-y-1">
                  {area.cities.map((c) => (
                    <li key={c.slug}>
                      <Link href={`/service-areas/${c.slug}`} className="text-sm text-teal-600 hover:text-teal-700">
                        Stump Grinding in {c.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <h2 className="font-heading font-bold text-3xl text-ink-500 mt-16">Mississippi</h2>
          <div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-8">
            {msAreas.map((area) => (
              <div key={area.parish}>
                <p className="font-heading font-semibold text-ink-500">
                  {area.parish} {area.unitLabel}
                </p>
                <ul className="mt-2 space-y-1">
                  {area.cities.map((c) => (
                    <li key={c.slug}>
                      <Link href={`/service-areas/${c.slug}`} className="text-sm text-teal-600 hover:text-teal-700">
                        Stump Grinding in {c.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <section className="py-16 bg-ink-500 text-white">
        <Container className="text-center">
          <h2 className="font-heading font-bold text-3xl">Don&apos;t See Your Town?</h2>
          <p className="mt-3 text-white/70 max-w-xl mx-auto">
            We may still be able to help — give us a call and tell us where you&apos;re located.
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
