import type { Metadata } from "next";
import Script from "next/script";
import Container from "@/components/Container";
import PageHero from "@/components/PageHero";
import { CallButton, QuoteButton, ReviewButton } from "@/components/CtaButtons";
import { business } from "@/lib/site-config";
import { JsonLd, breadcrumbSchema } from "@/lib/schema";

export const metadata: Metadata = {
  title: "Reviews",
  description: "Customer reviews for Gulf South Stump Grinding — the Florida Parishes and South Mississippi's insured stump grinding crew.",
  alternates: { canonical: "/reviews" },
};

export default function ReviewsPage() {
  return (
    <>
      <JsonLd data={breadcrumbSchema([
        { name: "Home", url: business.url },
        { name: "Reviews", url: `${business.url}/reviews` },
      ])} />

      <PageHero
        title="Reviews"
        breadcrumbs={[{ name: "Home", href: "/" }, { name: "Reviews" }]}
      />

      <section className="py-20">
        <Container className="max-w-2xl text-center">
          <h2 className="font-display italic -skew-x-[9deg] tracking-wide text-2xl text-ink-500">
            <span className="text-brand-500">What Our</span> Customers Say
          </h2>
          <p className="mt-4 text-ink-500/70 leading-relaxed">
            Real reviews from real customers, pulled straight from Google.
          </p>
        </Container>

        <Container className="mt-10">
          <Script src="https://elfsightcdn.com/platform.js" strategy="lazyOnload" />
          <div className="elfsight-app-b07c6f4c-ebbc-4800-a87e-715adc50a621" data-elfsight-app-lazy />
        </Container>

        <Container className="max-w-2xl text-center mt-10">
          <div className="flex flex-wrap justify-center gap-3">
            <ReviewButton className="!bg-brand-500 hover:!bg-brand-600 !text-white" />
            <CallButton className="!bg-ink-500 hover:!bg-ink-700 !text-white" />
            <QuoteButton />
          </div>
        </Container>
      </section>
    </>
  );
}
