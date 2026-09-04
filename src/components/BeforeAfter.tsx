import Image from "next/image";

export default function BeforeAfter({
  beforeSrc,
  afterSrc,
  beforeAlt,
  afterAlt,
  caption,
  priority = false,
  dark = true,
}: {
  beforeSrc: string;
  afterSrc: string;
  beforeAlt: string;
  afterAlt: string;
  caption?: string;
  priority?: boolean;
  /** Set false when placing on a light/white background. */
  dark?: boolean;
}) {
  const pairs = [
    { src: beforeSrc, alt: beforeAlt, label: "Before" },
    { src: afterSrc, alt: afterAlt, label: "After" },
  ];

  return (
    <div>
      <div className="grid grid-cols-2 gap-2 sm:gap-3">
        {pairs.map((item) => (
          <figure
            key={item.label}
            className={`relative rounded-xl overflow-hidden border ${dark ? "border-white/10" : "border-black/10"}`}
          >
            <Image
              src={item.src}
              alt={item.alt}
              width={1200}
              height={1600}
              className="w-full h-auto"
              sizes="(min-width: 1024px) 25vw, 50vw"
              priority={priority}
            />
            <figcaption
              className={`absolute top-3 left-3 rounded px-2.5 py-1 text-xs font-heading font-bold uppercase tracking-wide ${
                item.label === "Before" ? "bg-ink-500/90 text-white" : "bg-brand-500 text-white"
              }`}
            >
              {item.label}
            </figcaption>
          </figure>
        ))}
      </div>
      {caption && (
        <p className={`mt-3 text-sm text-center ${dark ? "text-white/60" : "text-ink-500/60"}`}>
          {caption}
        </p>
      )}
    </div>
  );
}
