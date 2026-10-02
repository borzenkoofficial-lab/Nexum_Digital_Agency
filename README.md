# NEXUM Digital

Commercial showcase and lead-generation platform for NEXUM Digital.

## Launch scope

- Premium light/glass editorial homepage
- RU/EN navigation
- Services catalogue with search, filtering and service detail pages
- Marketplace presentation
- AI discovery page
- Project/case-study presentation
- Business offering
- Pricing, knowledge, support and company pages
- Three-step project brief
- Local lead persistence via `nexum-leads`
- Optional lead webhook via `VITE_NEXUM_LEAD_ENDPOINT`
- Client workspace demo
- Admin Control Center available only in development builds until real backend authentication/RBAC is connected

## Commercial positioning

NEXUM sells digital outcomes rather than generic website production:

1. Websites and digital experiences
2. Web applications and SaaS
3. AI agents and automation
4. UI/UX and design systems
5. Mobile products
6. Business systems and integrations
7. 3D / motion / creative
8. Growth, SEO and conversion work

Primary market: Moscow and Russia.

## Local development

```bash
npm install
npm run dev
```

Production build:

```bash
npm run build
```

## Lead capture

Set `VITE_NEXUM_LEAD_ENDPOINT` to a public HTTPS webhook/API endpoint if external lead delivery is enabled. Without it, briefs are retained in browser local storage for the current device.

Before public launch, connect the webhook to the real NEXUM CRM/admin backend and add the production privacy/consent flow required for the selected lead-storage architecture.

## Release rule

Do not redesign the product for launch. Fix blockers only: build failures, broken navigation, mobile overflow, inaccessible controls, incorrect copy, missing real contact routing, analytics, legal pages and deployment configuration.

Nexum.dev remains a separate R&D product and is not part of the Digital launch dependency chain.
