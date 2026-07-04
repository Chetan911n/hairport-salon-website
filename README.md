# Hairport — Nashik (Luxury Salon Website)

A cinematic, dark-luxury marketing site for Hairport, a unisex hair & beauty
salon in Nashik, Maharashtra. Built with Next.js 14 (App Router), TypeScript,
Tailwind CSS, React Three Fiber, Framer Motion, GSAP + Lenis smooth scroll.

This is a real, buildable project — not a mockup. It has been verified to
`npm install` and `next build` successfully (see "Verified build" below).

---

## ⚠️ Read this first — what's verified vs. placeholder

The brief asked for accurate, publicly-sourced business information and
required anything unverifiable to be clearly flagged rather than invented.
Here's exactly what was found and what wasn't, during research done for
this project (July 2026):

**Verified (from a public Justdial listing, "Pn The Hairport"):**
- One location: Lakshman Villa, Near Swimming Pool, Gaikhe Colony,
  Nashik Road, Nashik – 422101
- 4.4★ rating across 189 reviews
- Unisex salon, established 2018, "Premium" price category
- Category: hair care, styling, nails/manicure

**Could NOT be verified (marked as PLACEHOLDER throughout the code):**
- A second or third Hairport branch in Nashik — the brief assumes three
  branches, but only one public "Hairport" listing was found. The other
  two branches in `data/site.ts` are placeholders you should either
  populate with real data or remove.
- Phone number, WhatsApp number, and email address
- Instagram/Facebook handles
- Exact service menu and pricing
- Individual guest review quotes (the 4.4★/189 aggregate is real; the
  quoted testimonials are illustrative placeholder copy)
- Staff names

All of the above are marked inline in the code (search the codebase for
`PLACEHOLDER` and `placeholder`) and visibly flagged in the UI where a
user could otherwise mistake them for real information (e.g. a
"placeholder" badge on unverified branches, a note on the testimonials
page). **Do not deploy this to production until every placeholder is
replaced with confirmed information from Hairport.**

The single source of truth for all business data is `data/site.ts` —
update it there and it propagates through the whole site (schema.org
JSON-LD, footer, contact page, branches, sitemap, etc).

---

## What's fully built

- **Homepage**: cinematic R3F hero (floating gold particles + abstract
  rotating form, camera drift, split-text headline), About, Services grid,
  Branches (switchable tabs + embedded map), Testimonials carousel,
  Booking CTA band.
- **Full page set**: `/about`, `/services` (+ 5 category pages: hair,
  hair-colour, hair-spa, skin, bridal), `/gallery` (masonry + lightbox),
  `/branches`, `/testimonials`, `/book` (5-step booking flow with a real
  calendar, time slots, validated contact form, confirmation state),
  `/contact` (validated form via react-hook-form + zod), `/faq`
  (accessible accordion), `/privacy-policy`, `/terms`, custom 404.
- **SEO**: per-page metadata, Open Graph/Twitter cards, dynamic
  `sitemap.xml`, dynamic `robots.txt`, LocalBusiness JSON-LD structured
  data driven from the verified branch data.
- **Accessibility**: skip-to-content link, visible focus rings, ARIA
  labels/expanded states, `prefers-reduced-motion` support (disables
  Lenis smooth scroll and cursor glow), keyboard-operable nav/menu/forms.
- **Motion system**: Lenis smooth scroll + GSAP ScrollTrigger wired up
  globally; Framer Motion for scroll reveals, page transitions, and
  micro-interactions (hover lift, glow, tab transitions).

## What's intentionally scoped as a next pass

Given the size of the full brief (dozens of 3D assets, a complete design
system audit, a real booking backend, licensed photography), this build
prioritized a complete, working, production-quality *foundation* over a
shallow pass at everything. Natural next steps:

1. Replace placeholder data in `data/site.ts` with confirmed information.
2. Replace Unsplash placeholder imagery in `components/GalleryGrid.tsx`
   and the OG image reference in `app/layout.tsx` with licensed
   photography of the real salons/work.
3. Wire `ContactForm.tsx` and `BookingFlow.tsx` submit handlers to a real
   backend (email service, CRM, or booking system) — they currently log
   to console and simulate success.
4. Expand the 3D hero if desired (additional models like a chair or
   dryer) — current scene is deliberately lightweight for performance;
   heavier GLTF models should be compressed (Draco/Meshopt) and lazy
   loaded exactly as the hero already is.
5. Add real Open Graph image assets to `/public/images/`.

---

## Getting started

```bash
npm install
npm run dev
```

Visit `http://localhost:3000`.

```bash
npm run build   # production build
npm run start   # serve the production build
npm run lint    # eslint
```

> Note: `next/font` fetches Google Fonts (Playfair Display, Inter) at
> build time, so an internet connection is required during `build`/`dev`
> the first time (fonts are cached after).

---

## Deploying to Vercel

1. Push this project to a GitHub/GitLab/Bitbucket repo.
2. Go to [vercel.com/new](https://vercel.com/new) and import the repo.
3. Framework preset: **Next.js** (auto-detected). No special build
   settings are required.
4. Set the environment variable-free build to run (`npm run build`).
5. Before going live, update `seo.siteUrl` in `data/site.ts` to your real
   production domain — this feeds metadata, JSON-LD, and the sitemap.
6. Add a real Open Graph image at `/public/images/og-cover.jpg`
   (1200×630px recommended).

---

## Project structure

```
app/                     Next.js App Router pages
  about/ services/ gallery/ branches/ testimonials/
  book/ contact/ faq/ privacy-policy/ terms/
  layout.tsx             Root layout, fonts, JSON-LD
  page.tsx               Homepage
  sitemap.ts robots.ts   Dynamic SEO files
components/              Reusable UI + section components
data/site.ts             Single source of truth for all business data
```

## Tech stack

Next.js 14 · React 18 · TypeScript (strict) · Tailwind CSS ·
React Three Fiber + drei + three.js · GSAP + ScrollTrigger ·
Lenis smooth scroll · Framer Motion · Embla Carousel ·
React Hook Form + Zod · lucide-react icons.

## Design tokens

| Token | Value |
|---|---|
| Background | `#0B0B0B` |
| Surface | `#161616` |
| Card | `rgba(255,255,255,0.05)` |
| Gold accent | `#C8A552` |
| Border | `rgba(255,255,255,0.08)` |
| Text | `#FFFFFF` / `#BDBDBD` (secondary) |
| Display font | Playfair Display |
| Body font | Inter |

All tokens live in `tailwind.config.ts` — change them once, they apply
everywhere.
