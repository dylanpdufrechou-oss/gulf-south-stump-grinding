# Gulf South Stump Grinding — Progress Log

Last updated: 2026-07-10

## Business

- **Name:** Gulf South Stump Grinding (renamed from "Southern Stump Solutions" — that name was already taken by another LA business)
- **Phone:** (985) 224-7888
- **Email:** info@gulfsouthstumpgrinding.com (confirm the inbox is actually receiving mail — forwarding or a real mailbox)
- **Domain:** gulfsouthstumpgrinding.com — apex redirects to `www`, which is canonical
- **Home base:** Folsom, LA (St. Tammany Parish), 70437
- **Status:** brand-new business, fully insured, no license required for stump grinding in LA/MS, quote-only pricing (no public price list)
- **Service area:** 15 parishes/counties, ~30 city landing pages across Southeast Louisiana and the Mississippi Gulf South (St. Tammany, Washington, Tangipahoa, Livingston, Orleans, Jefferson, St. Bernard, St. John the Baptist, St. Charles, Ascension, St. Helena in LA; Pearl River, Hancock, Marion, Walthall in MS)
- **Brand:** circular badge logo, teal `#1c747b` + dark ink, stump/saw-blade/cypress motif; Oswald (headings) + Inter (body)

## Website

Next.js 16 (App Router) + Tailwind v4 + TypeScript, source of truth for NAP/service-areas in `src/lib/site-config.ts`.

- Pages: Home, Stump Grinding, Residential, Commercial, About, FAQ, Gallery, Reviews, Contact (quote form → mailto), Service Areas index + 30 dynamic city pages
- Gallery/Reviews pages honestly say the business is new — no fabricated photos or reviews
- Schema.org: LocalBusiness, Service, FAQPage, BreadcrumbList
- sitemap.xml (40 URLs), robots.txt, canonical URLs on every page
- Google Analytics 4 installed (`G-70RJRW3DXJ`) via `@next/third-parties`, verified single-fire in production

## Infrastructure

- **GitHub:** https://github.com/dylanpdufrechou-oss/gulf-south-stump-grinding (public, `main` branch)
- **Hosting:** Vercel project `gulf-south-stump-grinding` — auto-deploys on every push to `main`
- **Live site:** https://www.gulfsouthstumpgrinding.com

## Done

- [x] Full site built and deployed
- [x] Domain purchased, DNS configured, SSL live
- [x] Real phone number wired in everywhere (site + schema)
- [x] Logo sized properly in header/footer
- [x] Google Analytics 4 installed and verified

## In progress / not started

- [ ] **Google Business Profile** — walked through setup steps and drafted a business description; completion not yet confirmed. Once live, add the profile URL to `business.sameAs` in `site-config.ts`.
- [ ] **Google Local Services Ads (LSA)** — recommended as the highest-priority paid channel (pay-per-lead, "Google Guaranteed" badge compensates for zero reviews). Needs: Certificate of Insurance, background check, category selection (likely "Tree Service"). Not yet applied for.
- [ ] **Email inbox** — confirm info@gulfsouthstumpgrinding.com is actually receiving mail (forwarding to personal Gmail, or a real mailbox via Google Workspace).
- [ ] **Reviews & before/after photos** — none yet; update Gallery/Reviews pages and add Review schema once real jobs are done. Do not fabricate.
- [ ] **Content/blog strategy** — long-term plan for ranking hundreds of local search terms; not started.
- [ ] **Google Ads (standard Search)** — lower priority than LSA right now; revisit once LSA is running.

## Related but separate

- `~/Desktop/arcads-claude-code` — a standalone AI ad-creative generation tool (Arcads), cloned but not yet set up. Requires the user to create an Arcads account and run `./scripts/setup.sh` themselves (interactive API key entry). Not part of this website's codebase.
