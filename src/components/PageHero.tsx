import Link from "next/link";
import Container from "./Container";

// Splits off a leading accent phrase to color red, matching the logo's
// two-color lettering. Folds in a second word when the first is too short
// (e.g. "A", "Get") so the accent never lands on a lone one-or-two-letter word.
function splitAccent(title: string) {
  const words = title.split(" ");
  const take = words[0].length <= 2 && words.length > 1 ? 2 : 1;
  return { accent: words.slice(0, take).join(" "), rest: words.slice(take).join(" ") };
}

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
  const { accent, rest } = splitAccent(title);
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
          <p className="text-brand-400 font-semibold tracking-wide uppercase text-sm mb-3">
            {eyebrow}
          </p>
        )}
        <h1 className="font-display italic -skew-x-[9deg] tracking-wide text-3xl sm:text-4xl lg:text-5xl leading-tight max-w-3xl">
          <span className="text-brand-400">{accent}</span>
          {rest && <> {rest}</>}
        </h1>
        {description && (
          <p className="mt-5 text-lg text-white/80 max-w-2xl">{description}</p>
        )}
      </Container>
    </section>
  );
}
