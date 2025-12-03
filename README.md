# MetrixAI Landing Site

A modern, high-polish marketing website for MetrixAI - an AI-powered Talent Intelligence Platform. Built with Next.js 16, TypeScript, Tailwind CSS v4, and Framer Motion.

## Features

- **Modern Stack**: Next.js 16 with App Router, TypeScript, Tailwind CSS v4
- **Smooth Animations**: Framer Motion for entrance and scroll-triggered animations
- **Responsive Design**: Mobile-first approach with breakpoints for all devices
- **Accessibility**: WCAG 2.1 compliant with semantic HTML, ARIA labels, and reduced motion support
- **SEO Optimized**: Meta tags, Open Graph, Twitter cards, structured data, sitemap, robots.txt
- **Form Handling**: React Hook Form with Zod validation
- **Calendly Integration**: Embedded scheduling widget for demo bookings
- **Analytics Ready**: Google Analytics 4 integration

## Pages

- `/` - Home (hero, problem, features, personas, benefits, stats, pricing, CTA)
- `/launch` - Early Access signup
- `/demo` - Demo scheduling with Calendly
- `/pricing` - Pricing plans with FAQ
- `/about` - Company mission and values
- `/privacy` - Privacy Policy
- `/terms` - Terms of Service

## Getting Started

### Prerequisites

- Node.js 18.17 or later
- npm or yarn

### Installation

```bash
# Clone the repository
git clone <repository-url>
cd metrixai-lander

# Install dependencies
npm install

# Copy environment variables
cp .env.example .env.local

# Start development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Environment Variables

Create a `.env.local` file with the following variables:

```env
# Site URL
NEXT_PUBLIC_SITE_URL=https://metrixai.io

# Calendly
NEXT_PUBLIC_CALENDLY_URL=https://calendly.com/metrixai/demo

# Google Analytics 4
NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX

# Form Backend (optional)
AIRTABLE_API_KEY=
AIRTABLE_BASE_ID=
SENDGRID_API_KEY=
```

## Scripts

```bash
# Development
npm run dev          # Start dev server
npm run build        # Production build
npm run start        # Start production server

# Quality
npm run lint         # Run ESLint
npm run lint:fix     # Fix ESLint issues
npm run format       # Format with Prettier
npm run format:check # Check formatting
npm run typecheck    # TypeScript type checking

# Testing
npm run test         # Run tests in watch mode
npm run test:run     # Run tests once
npm run test:coverage # Run tests with coverage
```

## Project Structure

```
src/
├── app/                  # Next.js App Router pages
│   ├── api/             # API routes
│   ├── (pages)/         # Page components
│   ├── globals.css      # Global styles & design tokens
│   └── layout.tsx       # Root layout
├── components/
│   ├── layout/          # Header, Footer
│   ├── sections/        # Page sections (Hero, Features, etc.)
│   └── ui/              # Reusable UI components
├── data/
│   └── copy.json        # Site content/copy
├── lib/
│   ├── analytics.ts     # GA4 tracking helpers
│   ├── calendly.ts      # Calendly configuration
│   └── utils.ts         # Utility functions
└── __tests__/           # Test files
```

## Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Import the repository in [Vercel](https://vercel.com)
3. Configure environment variables
4. Deploy

```bash
# Or use Vercel CLI
npm i -g vercel
vercel
```

### Other Platforms

The site can be deployed to any platform that supports Next.js:

```bash
# Build for production
npm run build

# The output will be in .next/
# Deploy according to your platform's instructions
```

## Customization

### Updating Content

Edit `src/data/copy.json` to update text content across the site.

### Design Tokens

Edit `src/app/globals.css` to modify:
- Brand colors (`--brand-primary`, `--brand-secondary`, etc.)
- Spacing scale
- Border radius values
- Shadow definitions

### Components

All UI components are in `src/components/ui/` and can be customized or extended as needed.

## Calendly Setup

1. Create a Calendly account and event type
2. Set `NEXT_PUBLIC_CALENDLY_URL` to your scheduling link
3. The Calendly widget will automatically load on the `/demo` page and in the modal

## Analytics Setup

1. Create a Google Analytics 4 property
2. Get your Measurement ID (G-XXXXXXXXXX)
3. Set `NEXT_PUBLIC_GA_ID` in your environment variables
4. Events are automatically tracked for:
   - Page views
   - CTA clicks
   - Form submissions
   - Demo scheduling

## Form Backend Setup

The early access form submits to `/api/early-access`. Configure one of these backends:

### Airtable
1. Create an Airtable base with fields: Name, Email, Company, Role, SubmittedAt
2. Get your API key and Base ID
3. Uncomment the Airtable code in `src/app/api/early-access/route.ts`

### SendGrid (Email Notifications)
1. Create a SendGrid account and API key
2. Uncomment the SendGrid code in the API route

## Testing

```bash
# Run tests
npm run test

# Run with UI
npm run test:ui

# Generate coverage report
npm run test:coverage
```

## Accessibility

The site follows WCAG 2.1 guidelines:
- Semantic HTML structure
- ARIA labels on interactive elements
- Skip to content link
- Focus visible styles
- Color contrast ratios >= 4.5:1
- Reduced motion support

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## License

Proprietary - MetrixAI

## Contact

info@metrixai.io
