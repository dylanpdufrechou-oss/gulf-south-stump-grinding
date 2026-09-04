# Gulf South Stump Grinding — Progress Log

Last updated: 2026-09-04

## Business

- **Name:** Gulf South Stump Grinding (renamed from "Southern Stump Solutions" — that name was already taken by another LA business)
- **Phone:** (985) 224-7888
- **Email:** info@gulfsouthstumpgrinding.com (confirm the inbox is actually receiving mail — forwarding or a real mailbox)
- **Domain:** gulfsouthstumpgrinding.com — apex redirects to `www`, which is canonical
- **Home base:** Folsom, LA (St. Tammany Parish), 70437
- **Status:** brand-new business, fully insured, no license required for stump grinding in LA/MS, quote-only pricing (no public price list)
- **Service area:** 11 parishes/counties, 24 city landing pages across the Florida Parishes and South Mississippi (St. Tammany, Washington, Tangipahoa, Livingston, Ascension, St. Helena in LA; Pearl River, Hancock, Marion, Walthall, Pike in MS) — matches the verified Google Business Profile. Greater New Orleans (Orleans, Jefferson, St. Bernard, St. John the Baptist, St. Charles parishes) was dropped from coverage on 2026-08-24; the 8 old city pages 301/308-redirect to `/service-areas`.
- **Brand:** rebranded 2026-09-04 from teal/orange to red/black/white (`brand-500 #bb0a0f` + `ink-500 #10181a`) to match the new logo — same circular badge, now with a transparent background, red "GULF" + black "SOUTH STUMP GRINDING" wordmark. Quote button = red; Call button defaults to solid white (visible on the dark `bg-ink-500` sections it sits on almost everywhere — an earlier black version was invisible against that identical-color background — overridden back to black on the one white-background usage, the contact page sidebar). Same day: all H1/H2 headings site-wide (plus the header/footer wordmark) switched from Oswald to Anton with a -9° italic skew, mimicking the logo's slanted lettering, with a red accent phrase per heading (`--font-display`/`--font-body` CSS vars in globals.css). Oswald kept for smaller headings (FAQ questions, card titles). Body copy stays on Inter throughout, per spec.
- **Homepage hero redesign (2026-09-04):** now features a real before/after job photo pair (`BeforeAfter` component) instead of a plain trust-card grid, plus explicit "text a photo" messaging as the lowest-friction lead path per Dylan's priority. Trust badges moved to a compact strip below the two-column hero content. Same before/after also leads the Gallery page, above the existing oak-stump job.

## Website

Next.js 16 (App Router) + Tailwind v4 + TypeScript, source of truth for NAP/service-areas in `src/lib/site-config.ts`.

- Pages: Home, Stump Grinding, Residential, Commercial, About, FAQ, Gallery, Reviews, Contact, Privacy Policy, Service Areas index + 24 dynamic city pages
- Gallery/Reviews pages honestly say the business is new — no fabricated photos or reviews
- Schema.org: LocalBusiness, Service, FAQPage, BreadcrumbList
- sitemap.xml (34 URLs), robots.txt, canonical URLs on every page
- Google Analytics 4 installed (`G-70RJRW3DXJ`) via `@next/third-parties`, verified single-fire in production
- Redirects for dropped service-area pages live in `next.config.ts` (`removedServiceAreaSlugs`)

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
- [x] Google Business Profile verified
- [x] Google Local Services Ads (LSA) applied and running
- [x] Email inbox confirmed receiving mail
- [x] Before/after photos — 2 real jobs now in the Gallery (oak stump; overgrown-hedge/corner-stump), the second also featured on the homepage hero
- [x] **GA4 conversion event tracking (2026-09-04)** — `phone_click` (every tel: link: CallButton, header desktop/mobile, footer), `text_click` (TextButton, both variants), `quote_click` (QuoteButton, header Free Quote link), and `generate_lead` (actual QuoteForm submission) all fire via `sendGAEvent` from `@next/third-parties/google`. Verified end-to-end in a real browser via `window.dataLayer` and live network capture — not just code review. **Still needs a manual step from Dylan**: mark these as Key Events in GA4 Admin (Admin → Events → toggle "Mark as key event") so they show as conversions in reporting.
- [x] **Privacy Policy page + Meta Pixel (2026-09-04)** — `/privacy-policy` live, linked from the footer; Meta Pixel (`1354069896498626`) installed sitewide in the root layout via `next/script`, verified firing `PageView` on every navigation in production.
- [x] **Quote form wired to Zapier (2026-09-04)** — `/api/quote` no longer just holds a placeholder; `ZAPIER_QUOTE_WEBHOOK_URL` is set in Vercel production and points at Dylan's real Zap (Catch Hook → SMS + backup sheet). Sends the exact flat `{name, phone, details}` shape the Zap expects (`details` is service type + city + email + free-text notes concatenated). Call is fire-and-forget via `after()` from `next/server` — never blocks or fails the visitor's success confirmation, errors are logged server-side only. Form itself no longer opens `mailto:` at all; shows an in-page "Request received!" confirmation or, on failure, a call/text fallback. Verified against the real webhook (Zapier returned `status: success`) and end-to-end through the actual browser form.
- [x] **favicon.ico added (2026-09-04)** — `icon.png`/`apple-icon.png` already had the new logo from the rebrand, but there was no literal `/favicon.ico` at the domain root. Added a proper multi-size one from the same source in case Google's crawler specifically probes for it (Google's own favicon cache refreshes on its own slow schedule regardless — this doesn't force an instant update).

## In progress / not started

- [ ] **Reviews** — none yet; add Review schema once real reviews come in. Do not fabricate. Recommended workflow: text the Google review link to every customer right after a completed job.
- [ ] **Content/blog strategy** — long-term plan for ranking hundreds of local search terms; not started.
- [ ] **Google Ads (standard Search)** — lower priority than LSA right now; revisit once LSA has runway.

## Related but separate

- `~/Desktop/arcads-claude-code` — a standalone AI ad-creative generation tool (Arcads), cloned but not yet set up. Requires the user to create an Arcads account and run `./scripts/setup.sh` themselves (interactive API key entry). Not part of this website's codebase.
