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
  googleAnalyticsId: "G-70RJRW3DXJ",
  metaPixelId: "1354069896498626",
  founded: "2026",
  googleReviewUrl: "https://g.page/r/CSMDLSqYXsvvEBM/review",
  priceRange: "$$",
  insured: true,
  licensed: false, // Louisiana/Mississippi do not require a specific license for stump grinding.
  yearsInBusiness: 0, // brand-new business — lead with insured + responsiveness, not tenure.
  pricingModel: "quote-only" as const,
  addressLocality: "Folsom",
  addressRegion: "LA",
  postalCode: "70437",
  addressCountry: "US",
  // Approximate coordinates for Folsom, LA (home base) — used in LocalBusiness schema.
  geo: { latitude: 30.6094, longitude: -90.2093 },
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
  cities: { name: string; slug: string; localNote?: string }[];
};

const slugify = (s: string) => s.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "");

type CityInput = string | { name: string; slug?: string; localNote?: string };

const area = (
  parish: string,
  state: "LA" | "MS",
  unitLabel: "Parish" | "County",
  cityInputs: CityInput[],
  isHome = false
): ServiceArea => ({
  parish,
  state,
  unitLabel,
  isHome,
  cities: cityInputs.map((c) =>
    typeof c === "string"
      ? { name: c, slug: slugify(c) }
      : { name: c.name, slug: c.slug ?? slugify(c.name), localNote: c.localNote }
  ),
});

// 11 parishes/counties, 24 city landing pages across the Florida Parishes and South
// Mississippi, matching the verified Google Business Profile service area. Greater
// New Orleans (Orleans, Jefferson, St. Bernard, St. John the Baptist, St. Charles
// parishes) was dropped from coverage.
export const serviceAreas: ServiceArea[] = [
  area("St. Tammany", "LA", "Parish", ["Covington", "Mandeville", "Slidell", "Madisonville", "Abita Springs", "Folsom"], true),
  area("Washington", "LA", "Parish", ["Bogalusa", "Franklinton"]),
  area("Tangipahoa", "LA", "Parish", ["Hammond", "Ponchatoula", "Amite"]),
  area("Livingston", "LA", "Parish", [
    "Denham Springs",
    "Walker",
    {
      name: "Springfield",
      slug: "springfield-la",
      localNote:
        "Springfield sits in the wooded, low-lying eastern end of Livingston Parish near Lake Maurepas — heavily forested lots here mean big hardwood stumps are the norm, not the exception.",
    },
  ]),
  area("Ascension", "LA", "Parish", ["Gonzales", "Prairieville"]),
  area("St. Helena", "LA", "Parish", ["Greensburg"]),
  area("Pearl River", "MS", "County", ["Picayune", "Poplarville"]),
  area("Hancock", "MS", "County", ["Bay St. Louis", "Waveland"]),
  area("Marion", "MS", "County", ["Columbia"]),
  area("Walthall", "MS", "County", ["Tylertown"]),
  area("Pike", "MS", "County", [
    {
      name: "McComb",
      slug: "mccomb-ms",
      localNote:
        "McComb is Pike County's largest city and a historic railroad hub in the Piney Woods of southwest Mississippi — mature pine and hardwood growth throughout town keeps us busy on both residential and commercial lots.",
    },
  ]),
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
