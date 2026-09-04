import type { Metadata } from "next";
import Container from "@/components/Container";
import PageHero from "@/components/PageHero";
import { business } from "@/lib/site-config";
import { JsonLd, breadcrumbSchema } from "@/lib/schema";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: `How ${business.name} collects, uses, and protects your information, including our use of the Meta Pixel and Meta Lead Ads.`,
  alternates: { canonical: "/privacy-policy" },
};

export default function PrivacyPolicyPage() {
  return (
    <>
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", url: business.url },
          { name: "Privacy Policy", url: `${business.url}/privacy-policy` },
        ])}
      />

      <PageHero
        eyebrow="Legal"
        title="Privacy Policy"
        breadcrumbs={[{ name: "Home", href: "/" }, { name: "Privacy Policy" }]}
      />

      <section className="py-20">
        <Container className="max-w-3xl">
          <p className="text-sm text-ink-500/60">Effective date: September 4, 2026</p>

          <p className="mt-6 text-ink-500/70 leading-relaxed">
            {business.name} (&ldquo;we,&rdquo; &ldquo;us,&rdquo; &ldquo;our&rdquo;) operates{" "}
            <span className="whitespace-nowrap">gulfsouthstumpgrinding.com</span> and provides
            stump grinding, root removal, and related tree/land services in the Florida Parishes
            and South Mississippi. This policy explains what information we collect from visitors
            and customers, how we use it, and your choices.
          </p>

          <h2 className="mt-12 font-display italic -skew-x-[9deg] tracking-wide text-2xl sm:text-3xl text-ink-500">
            <span className="text-brand-500">Information</span> We Collect
          </h2>
          <ul className="mt-4 space-y-3 text-ink-500/70 leading-relaxed list-disc pl-5">
            <li>
              Contact information you provide through our quote request form, text message
              (&ldquo;text a photo&rdquo;), phone call, or Facebook/Instagram lead ads — including
              your name, phone number, email address, service address, and any photos of the
              stump or property you send us.
            </li>
            <li>
              Information collected automatically when you visit our site or interact with our
              Facebook/Instagram Page, such as pages viewed and general device/browser
              information, via tools like the Meta Pixel (see below).
            </li>
          </ul>

          <h2 className="mt-12 font-display italic -skew-x-[9deg] tracking-wide text-2xl sm:text-3xl text-ink-500">
            <span className="text-brand-500">How</span> We Use Information
          </h2>
          <ul className="mt-4 space-y-3 text-ink-500/70 leading-relaxed list-disc pl-5">
            <li>To respond to quote requests, schedule jobs, and communicate with you about your service.</li>
            <li>
              To improve our website and advertising, including measuring how effective our ads
              are and showing relevant ads to people likely to be interested in our services.
            </li>
          </ul>

          <h2 className="mt-12 font-display italic -skew-x-[9deg] tracking-wide text-2xl sm:text-3xl text-ink-500">
            <span className="text-brand-500">Meta</span> Pixel and Advertising
          </h2>
          <p className="mt-4 text-ink-500/70 leading-relaxed">
            We use the Meta Pixel on this website and Meta Lead Ads (Instant Forms) on Facebook
            and Instagram. These tools allow Meta to help us measure ad performance and show our
            ads to relevant people. Meta may use cookies and similar technologies as part of this.
            If you submit a lead form on Facebook or Instagram, the information you provide is
            shared with us directly by Meta so we can follow up with your quote. You can control
            your ad preferences through your Facebook or Instagram account settings, and learn
            more about how Meta handles this data at{" "}
            <a
              href="https://www.facebook.com/privacy/policy/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-brand-600 hover:text-brand-700 underline"
            >
              facebook.com/privacy/policy
            </a>
            .
          </p>

          <h2 className="mt-12 font-display italic -skew-x-[9deg] tracking-wide text-2xl sm:text-3xl text-ink-500">
            <span className="text-brand-500">Sharing</span> of Information
          </h2>
          <p className="mt-4 text-ink-500/70 leading-relaxed">
            We do not sell your personal information. We share information only with service
            providers who help us operate our business (e.g., scheduling, communications, and
            advertising platforms like Meta) and as required by law.
          </p>

          <h2 className="mt-12 font-display italic -skew-x-[9deg] tracking-wide text-2xl sm:text-3xl text-ink-500">
            <span className="text-brand-500">Your</span> Choices
          </h2>
          <p className="mt-4 text-ink-500/70 leading-relaxed">
            You may contact us at any time to ask what information we have about you or to
            request it be deleted, using the contact information below.
          </p>

          <h2 className="mt-12 font-display italic -skew-x-[9deg] tracking-wide text-2xl sm:text-3xl text-ink-500">
            <span className="text-brand-500">Contact</span> Us
          </h2>
          <p className="mt-4 text-ink-500/70 leading-relaxed">
            {business.name}
            <br />
            Phone:{" "}
            <a href={`tel:${business.phoneE164}`} className="text-brand-600 hover:text-brand-700">
              {business.phoneDisplay}
            </a>
            <br />
            Serving St. Tammany, Washington, Tangipahoa, Livingston, Ascension, and St. Helena
            Parishes (LA), and Pearl River, Hancock, Marion, Walthall, and Pike Counties (MS).
          </p>
        </Container>
      </section>
    </>
  );
}
