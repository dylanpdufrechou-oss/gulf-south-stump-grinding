import type { Metadata } from "next";
import Image from "next/image";
import Container from "@/components/Container";
import PageHero from "@/components/PageHero";
import BeforeAfter from "@/components/BeforeAfter";
import { CallButton, QuoteButton } from "@/components/CtaButtons";
import { business } from "@/lib/site-config";
import { JsonLd, breadcrumbSchema } from "@/lib/schema";

export const metadata: Metadata = {
  title: "Before & After Gallery",
  description: "Before and after photos from our stump grinding jobs across the Florida Parishes and South Mississippi.",
  alternates: { canonical: "/gallery" },
};

const jobPhotos = [
  {
    src: "/gallery/big-oak-grinding-in-progress.webp",
    width: 736,
    height: 1310,
    alt: "Stump grinder cutting through a large oak stump, dust flying",
    caption: "Mid-Grind",
  },
  {
    src: "/gallery/big-oak-freshly-ground.webp",
    width: 1200,
    height: 1600,
    alt: "Pile of freshly ground stump mulch left in the yard",
    caption: "Freshly Ground",
  },
  {
    src: "/gallery/big-oak-cleaned-up.webp",
    width: 1200,
    height: 1600,
    alt: "Yard leveled and cleaned up after stump grinding, ready for grass to fill back in",
    caption: "Cleaned Up",
  },
];

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
        <Container>
          <div className="max-w-2xl">
            <h2 className="font-display italic -skew-x-[9deg] tracking-wide text-2xl sm:text-3xl text-ink-500">
              <span className="text-brand-500">Years</span> of Overgrowth, Gone in One Visit
            </h2>
            <p className="mt-4 text-ink-500/70 leading-relaxed">
              A stump completely swallowed by overgrown shrubs against the house — cleared down
              to bare dirt, opening the patio and outdoor kitchen back up.
            </p>
          </div>
          <div className="mt-10 max-w-3xl mx-auto">
            <BeforeAfter
              beforeSrc="/gallery/corner-stump-before.webp"
              afterSrc="/gallery/corner-stump-after.webp"
              beforeAlt="Large stump buried in years of overgrown shrubs against a house corner"
              afterAlt="Same corner cleared to bare dirt, stump gone, patio and outdoor kitchen fully visible"
              dark={false}
              priority
            />
          </div>
        </Container>
      </section>

      <section className="py-20 bg-brand-50">
        <Container>
          <div className="max-w-2xl">
            <h2 className="font-display italic -skew-x-[9deg] tracking-wide text-2xl sm:text-3xl text-ink-500">
              <span className="text-brand-500">A Recent</span> Job: Large Oak Stump
            </h2>
            <p className="mt-4 text-ink-500/70 leading-relaxed">
              Start to finish on one of our stump jobs — a large oak stump ground below grade
              and the site cleaned up after. Watch the full time-lapse below.
            </p>
          </div>

          <div className="mt-10 grid sm:grid-cols-3 gap-6">
            {jobPhotos.map((photo) => (
              <figure key={photo.src} className="rounded-xl overflow-hidden border border-black/10">
                <Image
                  src={photo.src}
                  alt={photo.alt}
                  width={photo.width}
                  height={photo.height}
                  className="w-full h-auto"
                  sizes="(min-width: 640px) 33vw, 100vw"
                />
                <figcaption className="px-4 py-3 text-sm font-semibold text-ink-500 bg-white">
                  {photo.caption}
                </figcaption>
              </figure>
            ))}
          </div>

          <div className="mt-10 max-w-md mx-auto sm:max-w-lg">
            <video
              controls
              playsInline
              muted
              preload="metadata"
              poster="/gallery/big-oak-timelapse-poster.jpg"
              className="w-full rounded-xl border border-black/10"
            >
              <source src="/gallery/big-oak-timelapse.mp4" type="video/mp4" />
            </video>
            <p className="mt-3 text-center text-sm text-ink-500/60">Time-lapse of the full job</p>
          </div>
        </Container>
      </section>

      <section className="pb-20">
        <Container className="max-w-2xl text-center">
          <h2 className="font-display italic -skew-x-[9deg] tracking-wide text-2xl text-ink-500">
            <span className="text-brand-500">More</span> Photos Coming Soon
          </h2>
          <p className="mt-4 text-ink-500/70 leading-relaxed">
            We&apos;re a new crew building our portfolio one job at a time. Check back as we add
            more before-and-after photos from properties across the Florida Parishes and
            South Mississippi.
          </p>
          <p className="mt-4 text-ink-500/70 leading-relaxed">
            Booking a job in your area? Ask us about a discount for letting us photograph the
            before-and-after — it helps us build our gallery and helps you save on the job.
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
