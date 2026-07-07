import Link from "next/link";
import Container from "./Container";

export default function PageHero({
  eyebrow,
  title,
  description,
  breadcrumbs,
}: {
  eyebrow?: string;
  title: string;
  description?: string;
  breadcrumbs: { name: string; href?: string }[];
}) {
  return (
    <section className="bg-ink-500 text-white">
      <Container className="py-14 sm:py-20">
        <nav aria-label="Breadcrumb" className="mb-6 text-sm text-white/60">
          <ol className="flex flex-wrap items-center gap-1">
            {breadcrumbs.map((crumb, i) => (
              <li key={crumb.name} className="flex items-center gap-1">
                {i > 0 && <span aria-hidden>/</span>}
                {crumb.href ? (
                  <Link href={crumb.href} className="hover:text-white">
                    {crumb.name}
                  </Link>
                ) : (
                  <span className="text-white">{crumb.name}</span>
                )}
              </li>
            ))}
          </ol>
        </nav>
        {eyebrow && (
          <p className="text-accent-400 font-semibold tracking-wide uppercase text-sm mb-3">
            {eyebrow}
          </p>
        )}
        <h1 className="font-heading font-bold text-3xl sm:text-4xl lg:text-5xl leading-tight max-w-3xl">
          {title}
        </h1>
        {description && (
          <p className="mt-5 text-lg text-white/80 max-w-2xl">{description}</p>
        )}
      </Container>
    </section>
  );
}
