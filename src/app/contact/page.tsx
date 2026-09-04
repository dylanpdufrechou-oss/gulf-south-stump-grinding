import type { Metadata } from "next";
import Container from "@/components/Container";
import PageHero from "@/components/PageHero";
import QuoteForm from "@/components/QuoteForm";
import { CallButton, TextButton } from "@/components/CtaButtons";
import { business } from "@/lib/site-config";
import { JsonLd, breadcrumbSchema } from "@/lib/schema";

export const metadata: Metadata = {
  title: "Contact Us — Get a Free Quote",
  description:
    "Request a free stump grinding quote from Gulf South Stump Grinding. Call, text, or send your details online.",
  alternates: { canonical: "/contact" },
};

export default function ContactPage() {
  return (
    <>
      <JsonLd data={breadcrumbSchema([
        { name: "Home", url: business.url },
        { name: "Contact", url: `${business.url}/contact` },
      ])} />

      <PageHero
        title="Get a Free Quote"
        description="Call, text, or send us your details below — we typically respond the same day."
        breadcrumbs={[{ name: "Home", href: "/" }, { name: "Contact" }]}
      />

      <section className="py-20">
        <Container className="grid lg:grid-cols-3 gap-12">
          <div className="lg:col-span-2 bg-white rounded-xl border border-black/10 p-6 sm:p-8">
            <h2 className="font-display italic -skew-x-[9deg] tracking-wide text-2xl text-ink-500 mb-6">
              <span className="text-brand-500">Request</span> a Free Quote
            </h2>
            <QuoteForm />
          </div>

          <div>
            <h2 className="font-display italic -skew-x-[9deg] tracking-wide text-xl text-ink-500">
              <span className="text-brand-500">Prefer</span> to Talk?
            </h2>
            <div className="mt-4 flex flex-col gap-3">
              <CallButton />
              <TextButton className="!text-ink-500 !border-ink-500/30 hover:!bg-black/5" />
            </div>

            <div className="mt-8 text-sm text-ink-500/70 space-y-1">
              <p className="font-semibold text-ink-500">Email</p>
              <a href={`mailto:${business.email}`} className="hover:text-brand-600">
                {business.email}
              </a>
            </div>

            <div className="mt-8 text-sm text-ink-500/70 space-y-1">
              <p className="font-semibold text-ink-500">Hours</p>
              {business.hours.map((h) => (
                <p key={h.day}>
                  {h.day}: {h.opens} – {h.closes}
                </p>
              ))}
            </div>

            <div className="mt-8 text-sm text-ink-500/70">
              <p className="font-semibold text-ink-500">Service Area</p>
              <p className="mt-1">Florida Parishes &amp; South Mississippi</p>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
