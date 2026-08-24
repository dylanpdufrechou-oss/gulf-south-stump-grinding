import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import Container from "@/components/Container";
import PageHero from "@/components/PageHero";
import { CallButton, QuoteButton } from "@/components/CtaButtons";
import { business, allCities, serviceAreas, getCityBySlug } from "@/lib/site-config";
import { faqs } from "@/lib/content/faqs";
import { JsonLd, localBusinessSchema, serviceSchema, breadcrumbSchema, faqSchema } from "@/lib/schema";

export function generateStaticParams() {
  return allCities.map((c) => ({ city: c.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ city: string }>;
}): Promise<Metadata> {
  const { city: slug } = await params;
  const city = getCityBySlug(slug);
  if (!city) return {};
  return {
    title: `Stump Grinding in ${city.name}, ${city.state}`,
    description: `Fully insured stump grinding in ${city.name}, ${city.state} (${city.parish} ${city.unitLabel}). Free quotes, fast scheduling. Call or text Gulf South Stump Grinding.`,
    alternates: { canonical: `/service-areas/${city.slug}` },
  };
}

// Simple deterministic variation so templated city pages don't read as identical boilerplate.
const introVariants = [
  (city: string) => `If you've got a stump sitting in your yard in ${city}, we can have it ground down and out of the way — fast, clean, and fully insured.`,
  (city: string) => `Homeowners and businesses in ${city} call us when a stump is in the way of mowing, landscaping, or just looking at their own yard.`,
  (city: string) => `${city} properties deal with the same stump headaches as anywhere else in the region — we bring the right equipment and get it handled.`,
  (city: string) => `From tight backyards to open commercial lots, we grind stumps throughout ${city} with the same fully insured, no-nonsense service.`,
];

function pickVariant(slug: string, variants: ((c: string) => string)[]) {
  const hash = [...slug].reduce((sum, ch) => sum + ch.charCodeAt(0), 0);
  return variants[hash % variants.length];
}

export default async function CityPage({
  params,
}: {
  params: Promise<{ city: string }>;
}) {
  const { city: slug } = await params;
  const city = getCityBySlug(slug);
  if (!city) notFound();

  const area = serviceAreas.find((a) => a.parish === city.parish);
  const nearbyCities = (area?.cities ?? []).filter((c) => c.slug !== city.slug);
  const intro = pickVariant(city.slug, introVariants)(city.name);

  const cityFaqs = [
    {
      question: `How fast can you get to ${city.name}?`,
      answer: `We regularly work in ${city.parish} ${city.unitLabel}, so scheduling in ${city.name} is usually quick — call or text for the next available date.`,
    },
    ...faqs.slice(0, 3),
  ];

  return (
    <>
      <JsonLd
        data={[
          localBusinessSchema({ url: `${business.url}/service-areas/${city.slug}` }),
          serviceSchema({
            name: `Stump Grinding in ${city.name}, ${city.state}`,
            description: `Stump grinding services for homeowners and businesses in ${city.name}, ${city.parish} ${city.unitLabel}.`,
            areaServed: [`${city.name}, ${city.state}`],
            url: `${business.url}/service-areas/${city.slug}`,
          }),
          breadcrumbSchema([
            { name: "Home", url: business.url },
            { name: "Service Areas", url: `${business.url}/service-areas` },
            { name: city.name, url: `${business.url}/service-areas/${city.slug}` },
          ]),
          faqSchema(cityFaqs),
        ]}
      />

      <PageHero
        eyebrow={`${city.parish} ${city.unitLabel}, ${city.state}`}
        title={`Stump Grinding in ${city.name}, ${city.state}`}
        description={`Fully insured stump grinding for ${city.name} homeowners and businesses. Free quotes, fast scheduling.`}
        breadcrumbs={[
          { name: "Home", href: "/" },
          { name: "Service Areas", href: "/service-areas" },
          { name: city.name },
        ]}
      />

      <section className="py-20">
        <Container className="max-w-3xl">
          <h2 className="font-heading font-bold text-3xl text-ink-500">
            Stump Grinding Services in {city.name}
          </h2>
          <p className="mt-4 text-ink-500/70 leading-relaxed">{intro}</p>
          {city.localNote && (
            <p className="mt-4 text-ink-500/70 leading-relaxed">{city.localNote}</p>
          )}
          <p className="mt-4 text-ink-500/70 leading-relaxed">
            Every stump is ground below grade with the root flare removed, so you can mow,
            landscape, or replant right over it. We quote every {city.name} job individually — no
            flat rates that overcharge easy jobs or undercharge hard ones.
          </p>
        </Container>
      </section>

      <section className="py-20 bg-teal-50">
        <Container className="max-w-3xl">
          <h2 className="font-heading font-bold text-3xl text-ink-500">Local FAQs</h2>
          <div className="mt-8 space-y-6">
            {cityFaqs.map((faq) => (
              <div key={faq.question}>
                <h3 className="font-heading font-semibold text-lg text-ink-500">{faq.question}</h3>
                <p className="mt-2 text-sm text-ink-500/70">{faq.answer}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {nearbyCities.length > 0 && (
        <section className="py-16">
          <Container>
            <h2 className="font-heading font-bold text-2xl text-ink-500">
              Also Serving {city.parish} {city.unitLabel}
            </h2>
            <div className="mt-4 flex flex-wrap gap-3">
              {nearbyCities.map((c) => (
                <Link
                  key={c.slug}
                  href={`/service-areas/${c.slug}`}
                  className="rounded-md border border-black/10 px-4 py-2 text-sm font-medium text-ink-500 hover:border-teal-500 hover:text-teal-600"
                >
                  {c.name}
                </Link>
              ))}
            </div>
          </Container>
        </section>
      )}

      <section className="py-16 bg-ink-500 text-white">
        <Container className="text-center">
          <h2 className="font-heading font-bold text-3xl">Get a Free Quote in {city.name}</h2>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <CallButton />
            <QuoteButton />
          </div>
        </Container>
      </section>
    </>
  );
}
