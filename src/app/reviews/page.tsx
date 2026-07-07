import type { Metadata } from "next";
import Container from "@/components/Container";
import PageHero from "@/components/PageHero";
import { CallButton, QuoteButton } from "@/components/CtaButtons";
import { business } from "@/lib/site-config";
import { JsonLd, breadcrumbSchema } from "@/lib/schema";

export const metadata: Metadata = {
  title: "Reviews",
  description: "Customer reviews for Gulf South Stump Grinding — Southeast Louisiana and South Mississippi's insured stump grinding crew.",
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
          <h2 className="font-heading font-bold text-2xl text-ink-500">
            We&apos;re Just Getting Started
          </h2>
          <p className="mt-4 text-ink-500/70 leading-relaxed">
            Gulf South Stump Grinding is a new business, so we don&apos;t have a page of reviews
            yet — but every job is a chance to earn one. If you&apos;re one of our first
            customers, we&apos;ll ask you for honest feedback once the work is done, and we&apos;ll
            post real reviews here and on Google as they come in.
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
