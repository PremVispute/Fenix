# Fenix Learning Services — Website

React + TypeScript + Vite + Tailwind v4, built to the Fenix brand guidelines
(colour system, typography, logo placement, navigation, mega-menu and buttons).

```bash
npm run dev      # dev server
npm run build    # typecheck + production build
npm run lint     # oxlint
```

## Design system

Everything brand-level lives in [src/index.css](src/index.css) as Tailwind v4 `@theme`
tokens — change it there and the whole site follows.

| Token | Value | Role |
| --- | --- | --- |
| `--color-burgundy` | `#691420` | Primary — Deep Burgundy |
| `--color-cream` | `#f1f1e8` | Primary light — Creamy White (header, alternating sections) |
| `--color-cream-warm` | `#fdf9f4` | Page base, a warm tint of cream |
| `--color-rose` | `#ac8e85` | Secondary accent — Muted Rose (rules, borders, captions) |
| `--color-midnight` | `#1e202b` | Dark foundation — Midnight Purple (footer, CTA band) |
| `--color-sage` | `#818362` | Supporting accent — Sage Green (used sparingly) |

Typography follows the guidelines: **League Spartan** for headings, hero statements and
brand messaging; **Garet** for body copy, navigation, buttons, forms and FAQs. Garet is a
licensed font — drop `Garet-Book.woff2` and `Garet-Heavy.woff2` into
[public/fonts/](public/fonts/) and it is picked up automatically
([public/fonts/garet.css](public/fonts/garet.css)); until then it falls back to Jost,
which is metrically close. The italic script phrases beside imagery ("A Brighter Future
Begins Here") use Cormorant Garamond via the `.script` class.

Buttons match the three specified variants — primary (burgundy on cream text), secondary
(cream with burgundy border) and text link — in
[src/components/ui/Button.tsx](src/components/ui/Button.tsx).

## Structure

```
src/
  data/          content and navigation — edit these, not the components
    site.ts        name, tagline, contact details, social links, stats
    services.ts    all 14 services, their category, copy and detail-page content
    navigation.ts  header nav, mega-menu columns, footer columns, URL helpers
    content.ts     testimonials, articles, FAQs, partners, process steps, values
  components/
    layout/        Header (with mega-menu), Footer, Logo, Layout
    ui/            Button, Section, Container, SectionHeading, Media, Accordion,
                   ServiceCard, TestimonialCarousel, StatBand, Reveal, ScriptAccent
    sections/      PageHero, CtaBand, ProcessSection, PartnersStrip,
                   InsightsSection, TestimonialsSection, FaqSection
  pages/         one file per route
```

Routes follow the sitemap: `/`, `/about`, `/services`, `/services/:category`,
`/services/:category/:slug`, `/students-parents`, `/corporates`, `/insights`,
`/insights/:slug`, `/testimonials`, `/contact`, `/privacy-policy`.

## Placeholders to replace

- **Logo** — [src/components/layout/Logo.tsx](src/components/layout/Logo.tsx) holds a
  stand-in flame mark and wordmark. Swap the `<svg>` for the supplied asset; the footer
  carries its own light-on-dark copy in
  [src/components/layout/Footer.tsx](src/components/layout/Footer.tsx).
- **Imagery** — every image slot is a `<Media>` component
  ([src/components/ui/Media.tsx](src/components/ui/Media.tsx)). It renders a branded
  placeholder with a label describing the intended shot; pass `src` and it renders the
  real image at the same size and shape.
- **Copy** — all text sits in `src/data/*.ts`.
- **Contact form** — [src/pages/Contact.tsx](src/pages/Contact.tsx) currently shows a
  success state locally. Point `handleSubmit` at the form endpoint when it exists.
- **Privacy policy** — [src/pages/Privacy.tsx](src/pages/Privacy.tsx) is placeholder
  wording pending legal review.

Deploying to a static host: the site uses client-side routing, so configure the host to
rewrite unknown paths to `index.html`.
