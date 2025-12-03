# MetrixAI Landing Site - Implementation Tasks

## Project Overview
Rebuilt the MetrixAI marketing site (metrixai.io) from scratch using Next.js 16, TypeScript, Tailwind CSS v4, and Framer Motion. Design inspired by ChangeTools.ai with modern, polished UI/UX.

---

## Completed Tasks

### Phase 1: Project Setup
- [x] Initialize Next.js 16 project with TypeScript and App Router
- [x] Configure Tailwind CSS v4 with design tokens
- [x] Set up project folder structure (src/app, components, lib, data)
- [x] Install core dependencies (framer-motion, react-hook-form, zod, lucide-react, headlessui)
- [x] Install dev dependencies (vitest, testing-library, prettier)

### Phase 2: Design System & Components
- [x] Create global CSS with design tokens (colors, spacing, radii, shadows)
- [x] Implement utility function (cn) for class merging
- [x] Create base UI components:
  - [x] Button (primary, secondary, outline, ghost variants)
  - [x] Input (with label, error, helper text support)
  - [x] Card (default, elevated, outlined, glass variants)
  - [x] Container (responsive widths)
  - [x] Section (with background and spacing options)
  - [x] Badge (status variants)

### Phase 3: Layout Components
- [x] Header with responsive navigation and mobile menu
- [x] Footer with link sections and contact info
- [x] Skip to content link for accessibility

### Phase 4: Section Components
- [x] Hero section with animated dashboard mockup
- [x] Problem section with statistics cards
- [x] FeatureSteps (4-step horizontal/vertical layout)
- [x] PersonaCards (HR, Managers, Employees)
- [x] BenefitsGrid (4 benefit cards)
- [x] StatsStrip (dark background with metrics)
- [x] PricingCards (Core, Growth, Enterprise plans)
- [x] CTASection (final call-to-action)
- [x] CalendlyModal (modal with Calendly embed)
- [x] EarlyAccessForm (validated signup form)

### Phase 5: Pages
- [x] Home page (/) with all sections
- [x] Launch page (/launch) with early access form
- [x] Demo page (/demo) with Calendly embed
- [x] Pricing page (/pricing) with FAQ
- [x] About page (/about) with company info
- [x] Privacy Policy page (/privacy)
- [x] Terms of Service page (/terms)

### Phase 6: Features & Integrations
- [x] Framer Motion animations (entrance, scroll-triggered)
- [x] Reduced motion support (prefers-reduced-motion)
- [x] SEO metadata (title, description, Open Graph, Twitter cards)
- [x] Structured data (JSON-LD for Organization and WebSite)
- [x] Sitemap.xml generation
- [x] Robots.txt generation
- [x] Analytics integration (Google Analytics ready)
- [x] API route for form submissions (/api/early-access)
- [x] Environment variables configuration (.env.example)
- [x] Calendly integration (script loading, embed support)

### Phase 7: Testing & Quality
- [x] Vitest configuration with jsdom
- [x] Test setup with mocks (next/navigation, framer-motion)
- [x] Unit tests for Button component
- [x] Unit tests for Input component
- [x] Unit tests for Card component
- [x] ESLint configuration
- [x] Prettier configuration

### Phase 8: Documentation
- [x] README.md with setup and deployment instructions
- [x] TASKS.md (this file) for tracking implementation

---

## Pending Tasks

### Before Production Deploy
- [ ] Add real Calendly URL to environment variables
- [ ] Configure Google Analytics tracking ID
- [ ] Set up form submission backend (Airtable/Supabase/SendGrid)
- [ ] Create OG image (1200x630px) for social sharing
- [ ] Create favicon and app icons
- [ ] Run Lighthouse audit and fix any issues
- [ ] Test all pages on mobile devices
- [ ] Verify Calendly embed loads correctly
- [ ] Test form submission flow end-to-end

### Optional Enhancements
- [ ] Add video modal for "Watch Demo Video" CTA
- [ ] Add testimonials section
- [ ] Add blog section
- [ ] Implement dark mode
- [ ] Add cookie consent banner
- [ ] Add more comprehensive test coverage
- [ ] Set up Playwright for E2E testing

---

## File Structure

```
metrixai-lander/
├── src/
│   ├── app/
│   │   ├── api/early-access/route.ts
│   │   ├── about/page.tsx
│   │   ├── demo/page.tsx
│   │   ├── launch/page.tsx
│   │   ├── pricing/page.tsx
│   │   ├── privacy/page.tsx
│   │   ├── terms/page.tsx
│   │   ├── globals.css
│   │   ├── layout.tsx
│   │   ├── page.tsx
│   │   ├── robots.ts
│   │   └── sitemap.ts
│   ├── components/
│   │   ├── layout/
│   │   │   ├── Header.tsx
│   │   │   ├── Footer.tsx
│   │   │   └── index.ts
│   │   ├── sections/
│   │   │   ├── Hero.tsx
│   │   │   ├── Problem.tsx
│   │   │   ├── FeatureSteps.tsx
│   │   │   ├── PersonaCards.tsx
│   │   │   ├── BenefitsGrid.tsx
│   │   │   ├── StatsStrip.tsx
│   │   │   ├── PricingCards.tsx
│   │   │   ├── CTASection.tsx
│   │   │   ├── CalendlyModal.tsx
│   │   │   ├── EarlyAccessForm.tsx
│   │   │   └── index.ts
│   │   ├── ui/
│   │   │   ├── Button.tsx
│   │   │   ├── Input.tsx
│   │   │   ├── Card.tsx
│   │   │   ├── Container.tsx
│   │   │   ├── Section.tsx
│   │   │   ├── Badge.tsx
│   │   │   └── index.ts
│   │   └── Analytics.tsx
│   ├── data/
│   │   └── copy.json
│   ├── lib/
│   │   ├── analytics.ts
│   │   ├── calendly.ts
│   │   └── utils.ts
│   └── __tests__/
│       ├── components/
│       │   ├── Button.test.tsx
│       │   ├── Card.test.tsx
│       │   └── Input.test.tsx
│       └── setup.ts
├── public/
│   └── manifest.json
├── .env.example
├── .prettierrc
├── .prettierignore
├── package.json
├── tsconfig.json
├── vitest.config.ts
├── README.md
└── TASKS.md
```

---

## Tech Stack Summary

| Category | Technology |
|----------|------------|
| Framework | Next.js 16 (App Router) |
| Language | TypeScript 5 |
| Styling | Tailwind CSS v4 |
| Animations | Framer Motion |
| Forms | React Hook Form + Zod |
| UI Primitives | Headless UI |
| Icons | Lucide React |
| Testing | Vitest + Testing Library |
| Linting | ESLint + Prettier |
| Deployment | Vercel (recommended) |

---

## Notes

- All animations respect `prefers-reduced-motion` for accessibility
- Form validation uses Zod schemas with React Hook Form
- Calendly integration requires their external script loaded dynamically
- Analytics tracking is ready but requires GA4 ID configuration
- API route is set up for form submissions but needs backend integration
