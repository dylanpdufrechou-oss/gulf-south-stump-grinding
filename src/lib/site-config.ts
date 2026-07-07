// Single source of truth for business identity (NAP), service areas, and site-wide flags.
// Every page, schema block, and metadata export should read from here — never hardcode
// the business name, phone, or city list elsewhere.

export const business = {
  name: "Gulf South Stump Grinding",
  legalName: "Gulf South Stump Grinding",
  phoneDisplay: "(985) 224-7888",
  phoneE164: "+19852247888",
  smsE164: "+19852247888",
  email: "info@gulfsouthstumpgrinding.com",
  // The apex domain redirects to www at the DNS/Vercel level, so www is canonical.
  url: "https://www.gulfsouthstumpgrinding.com",
  founded: "2026",
  priceRange: "$$",
  insured: true,
  licensed: false, // Louisiana/Mississippi do not require a specific license for stump grinding.
  yearsInBusiness: 0, // brand-new business — lead with insured + responsiveness, not tenure.
  pricingModel: "quote-only" as const,
  addressLocality: "Covington",
  addressRegion: "LA",
  postalCode: "70433",
  addressCountry: "US",
  // Approximate coordinates for Covington, LA (home base) — used in LocalBusiness schema.
  geo: { latitude: 30.4755, longitude: -90.1009 },
  sameAs: [
    // TODO: add Google Business Profile, Facebook, Instagram URLs once created.
  ],
  hours: [
    { day: "Monday", opens: "07:00", closes: "19:00" },
    { day: "Tuesday", opens: "07:00", closes: "19:00" },
    { day: "Wednesday", opens: "07:00", closes: "19:00" },
    { day: "Thursday", opens: "07:00", closes: "19:00" },
    { day: "Friday", opens: "07:00", closes: "19:00" },
    { day: "Saturday", opens: "08:00", closes: "17:00" },
    { day: "Sunday", opens: "09:00", closes: "15:00" },
  ],
};

export type ServiceArea = {
  parish: string;
  state: "LA" | "MS";
  /** "parish" for Louisiana, "county" for Mississippi */
  unitLabel: "Parish" | "County";
  isHome?: boolean;
  cities: { name: string; slug: string }[];
};

const slugify = (s: string) => s.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "");

const area = (
  parish: string,
  state: "LA" | "MS",
  unitLabel: "Parish" | "County",
  cityNames: string[],
  isHome = false
): ServiceArea => ({
  parish,
  state,
  unitLabel,
  isHome,
  cities: cityNames.map((name) => ({ name, slug: slugify(name) })),
});

// 15 parishes/counties, ~30 city landing pages across Southeast Louisiana and the
// Mississippi Gulf South, all within roughly a 1-1.5hr drive of Covington (home base).
export const serviceAreas: ServiceArea[] = [
  area("St. Tammany", "LA", "Parish", ["Covington", "Mandeville", "Slidell", "Madisonville", "Abita Springs", "Folsom"], true),
  area("Washington", "LA", "Parish", ["Bogalusa", "Franklinton"]),
  area("Tangipahoa", "LA", "Parish", ["Hammond", "Ponchatoula", "Amite"]),
  area("Livingston", "LA", "Parish", ["Denham Springs", "Walker"]),
  area("Orleans", "LA", "Parish", ["New Orleans"]),
  area("Jefferson", "LA", "Parish", ["Metairie", "Kenner", "Gretna"]),
  area("St. Bernard", "LA", "Parish", ["Chalmette"]),
  area("St. John the Baptist", "LA", "Parish", ["LaPlace"]),
  area("St. Charles", "LA", "Parish", ["Luling", "Destrehan"]),
  area("Ascension", "LA", "Parish", ["Gonzales", "Prairieville"]),
  area("St. Helena", "LA", "Parish", ["Greensburg"]),
  area("Pearl River", "MS", "County", ["Picayune", "Poplarville"]),
  area("Hancock", "MS", "County", ["Bay St. Louis", "Waveland"]),
  area("Marion", "MS", "County", ["Columbia"]),
  area("Walthall", "MS", "County", ["Tylertown"]),
];

export type CityEntry = ServiceArea["cities"][number] & {
  parish: string;
  state: "LA" | "MS";
  unitLabel: "Parish" | "County";
};

export const allCities: CityEntry[] = serviceAreas.flatMap((a) =>
  a.cities.map((c) => ({ ...c, parish: a.parish, state: a.state, unitLabel: a.unitLabel }))
);

export const getCityBySlug = (slug: string) => allCities.find((c) => c.slug === slug);
