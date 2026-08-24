import Image from "next/image";
import Link from "next/link";
import { business, serviceAreas } from "@/lib/site-config";

const laAreas = serviceAreas.filter((a) => a.state === "LA");
const msAreas = serviceAreas.filter((a) => a.state === "MS");

export default function Footer() {
  return (
    <footer className="bg-ink-500 text-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12 grid grid-cols-1 md:grid-cols-4 gap-10">
        <div>
          <Link href="/" className="flex items-center gap-3">
            <Image src="/logo.png" alt={`${business.name} logo`} width={96} height={96} className="rounded-full w-16 h-16" />
            <span className="font-heading font-semibold leading-tight text-lg">
              Gulf South
              <br />
              Stump Grinding
            </span>
          </Link>
          <p className="mt-4 text-sm text-white/70 leading-relaxed">
            Fully insured stump grinding for homeowners and businesses across the Florida
            Parishes and South Mississippi.
          </p>
          <div className="mt-4 text-sm space-y-1">
            <a href={`tel:${business.phoneE164}`} className="block font-semibold hover:text-teal-300">
              {business.phoneDisplay}
            </a>
            <a href={`mailto:${business.email}`} className="block text-white/70 hover:text-teal-300">
              {business.email}
            </a>
          </div>
        </div>

        <div>
          <h3 className="font-heading font-semibold text-sm uppercase tracking-wide text-teal-300">
            Services
          </h3>
          <ul className="mt-4 space-y-2 text-sm text-white/80">
            <li><Link href="/stump-grinding" className="hover:text-white">Stump Grinding</Link></li>
            <li><Link href="/residential" className="hover:text-white">Residential Services</Link></li>
            <li><Link href="/commercial" className="hover:text-white">Commercial Services</Link></li>
            <li><Link href="/gallery" className="hover:text-white">Before &amp; After Gallery</Link></li>
            <li><Link href="/faq" className="hover:text-white">FAQ</Link></li>
            <li><Link href="/reviews" className="hover:text-white">Reviews</Link></li>
            <li><Link href="/contact" className="hover:text-white">Get a Free Quote</Link></li>
          </ul>
        </div>

        <div>
          <h3 className="font-heading font-semibold text-sm uppercase tracking-wide text-teal-300">
            Louisiana Service Areas
          </h3>
          <ul className="mt-4 space-y-3 text-sm text-white/80">
            {laAreas.map((a) => (
              <li key={a.parish}>
                <span className="block text-white/50 text-xs uppercase tracking-wide">
                  {a.parish} {a.unitLabel}
                </span>
                <span className="flex flex-wrap gap-x-2">
                  {a.cities.map((c) => (
                    <Link key={c.slug} href={`/service-areas/${c.slug}`} className="hover:text-white">
                      {c.name}
                    </Link>
                  ))}
                </span>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="font-heading font-semibold text-sm uppercase tracking-wide text-teal-300">
            Mississippi Service Areas
          </h3>
          <ul className="mt-4 space-y-3 text-sm text-white/80">
            {msAreas.map((a) => (
              <li key={a.parish}>
                <span className="block text-white/50 text-xs uppercase tracking-wide">
                  {a.parish} {a.unitLabel}
                </span>
                <span className="flex flex-wrap gap-x-2">
                  {a.cities.map((c) => (
                    <Link key={c.slug} href={`/service-areas/${c.slug}`} className="hover:text-white">
                      {c.name}
                    </Link>
                  ))}
                </span>
              </li>
            ))}
          </ul>
          <Link href="/service-areas" className="mt-4 inline-block text-sm font-semibold text-accent-400 hover:text-accent-500">
            View all service areas →
          </Link>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-6 flex flex-col sm:flex-row items-center justify-between gap-2 text-xs text-white/50">
          <p>© {new Date().getFullYear()} {business.name}. All rights reserved.</p>
          <p>Serving the Florida Parishes &amp; South Mississippi</p>
        </div>
      </div>
    </footer>
  );
}
