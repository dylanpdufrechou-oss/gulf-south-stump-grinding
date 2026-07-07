import type { Metadata } from "next";
import Container from "@/components/Container";
import PageHero from "@/components/PageHero";
import { CallButton, QuoteButton } from "@/components/CtaButtons";
import { business } from "@/lib/site-config";
import { JsonLd, breadcrumbSchema } from "@/lib/schema";

export const metadata: Metadata = {
  title: "Before & After Gallery",
  description: "Before and after photos from our stump grinding jobs across Southeast Louisiana and South Mississippi.",
  alternates: { canonical: "/gallery" },
};

export default function GalleryPage() {
  return (
    <>
      <JsonLd data={breadcrumbSchema([
        { name: "Home", url: business.url },
        { name: "Gallery", url: `${business.url}/gallery` },
      ])} />

      <PageHero
        title="Before & After Gallery"
        breadcrumbs={[{ name: "Home", href: "/" }, { name: "Gallery" }]}
      />

      <section className="py-20">
        <Container className="max-w-2xl text-center">
          <h2 className="font-heading font-bold text-2xl text-ink-500">
            Our First Job Photos Are Coming Soon
          </h2>
          <p className="mt-4 text-ink-500/70 leading-relaxed">
            We&apos;re a new crew building our portfolio one job at a time. Check back soon to see
            real before-and-after photos from properties across Southeast Louisiana and the
            Mississippi Gulf South.
          </p>
          <p className="mt-4 text-ink-500/70 leading-relaxed">
            Booking one of our first jobs in your area? Ask us about a discount for letting us
            photograph the before-and-after — it helps us build our gallery and helps you save
            on the job.
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
