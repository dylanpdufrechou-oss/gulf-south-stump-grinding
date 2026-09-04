import type { Metadata } from "next";
import Container from "@/components/Container";
import PageHero from "@/components/PageHero";
import { CallButton, QuoteButton } from "@/components/CtaButtons";
import { business } from "@/lib/site-config";
import { faqs } from "@/lib/content/faqs";
import { JsonLd, faqSchema, breadcrumbSchema } from "@/lib/schema";

export const metadata: Metadata = {
  title: "Frequently Asked Questions",
  description:
    "Answers to common stump grinding questions — pricing, depth, debris removal, access, insurance, and scheduling.",
  alternates: { canonical: "/faq" },
};

export default function FaqPage() {
  return (
    <>
      <JsonLd
        data={[
          faqSchema(faqs),
          breadcrumbSchema([
            { name: "Home", url: business.url },
            { name: "FAQ", url: `${business.url}/faq` },
          ]),
        ]}
      />

      <PageHero
        title="Frequently Asked Questions"
        breadcrumbs={[{ name: "Home", href: "/" }, { name: "FAQ" }]}
      />

      <section className="py-20">
        <Container className="max-w-3xl">
          <div className="space-y-8">
            {faqs.map((faq) => (
              <div key={faq.question}>
                <h2 className="font-heading font-semibold text-xl text-ink-500">{faq.question}</h2>
                <p className="mt-2 text-ink-500/70 leading-relaxed">{faq.answer}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <section className="py-16 bg-ink-500 text-white">
        <Container className="text-center">
          <h2 className="font-display italic -skew-x-[9deg] tracking-wide text-3xl">
            <span className="text-brand-400">Still</span> Have Questions?
          </h2>
          <p className="mt-3 text-white/70 max-w-xl mx-auto">
            Call, text, or send us a message — we&apos;ll answer directly, no call center.
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
