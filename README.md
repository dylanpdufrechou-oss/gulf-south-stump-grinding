# Gulf South Stump Grinding

Marketing site for Gulf South Stump Grinding, serving Southeast Louisiana and South Mississippi.

## Development

```bash
npm run dev
```

## Structure

- `src/lib/site-config.ts` — single source of truth for business NAP (name/address/phone) and the service-area (parish/county/city) list. Every page reads from here.
- `src/lib/schema.tsx` — Schema.org JSON-LD helpers (LocalBusiness, Service, FAQPage, BreadcrumbList, Review).
- `src/app/service-areas/[city]/page.tsx` — dynamically generates one landing page per city in `site-config.ts`.

## Known TODOs

- Swap the placeholder phone number in `site-config.ts` once the Google Voice number is secured.
- Add Google Business Profile / social URLs to `business.sameAs` once created.
- Wire the contact form to a real email service (currently falls back to `mailto:`).
- Add real reviews and before/after photos once available — do not fabricate review or image content.
