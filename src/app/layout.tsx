import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Header, Footer } from "@/components/layout";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || "https://metrixai.io"),
  title: {
    default: "MetrixAI - AI-Powered Talent Intelligence Platform",
    template: "%s | MetrixAI",
  },
  description:
    "MetrixAI is the first AI-powered Talent Intelligence Platform that brings career pathing, skill mapping, development plans, coaching and succession planning together in one place.",
  keywords: [
    "talent intelligence",
    "AI HR",
    "career pathing",
    "skill mapping",
    "succession planning",
    "employee development",
    "HR technology",
    "talent management",
  ],
  authors: [{ name: "MetrixAI" }],
  creator: "MetrixAI",
  publisher: "MetrixAI",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://metrixai.io",
    siteName: "MetrixAI",
    title: "MetrixAI - AI-Powered Talent Intelligence Platform",
    description:
      "MetrixAI brings career pathing, skill mapping, development plans, coaching and succession planning together in one place.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "MetrixAI - Talent Intelligence Platform",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "MetrixAI - AI-Powered Talent Intelligence Platform",
    description:
      "MetrixAI brings career pathing, skill mapping, development plans, coaching and succession planning together in one place.",
    images: ["/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={inter.variable}>
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" href="/icon.svg" type="image/svg+xml" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/manifest.json" />
        {/* Calendly styles */}
        <link
          href="https://assets.calendly.com/assets/external/widget.css"
          rel="stylesheet"
        />
      </head>
      <body className="min-h-screen bg-white text-gray-900 antialiased">
        <a href="#main-content" className="skip-to-content">
          Skip to main content
        </a>
        <Header />
        <main id="main-content">{children}</main>
        <Footer />

        {/* Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "MetrixAI",
              url: "https://metrixai.io",
              logo: "https://metrixai.io/logo.png",
              description:
                "AI-powered Talent Intelligence Platform for career pathing, skill mapping, and succession planning.",
              contactPoint: {
                "@type": "ContactPoint",
                email: "info@metrixai.io",
                contactType: "sales",
              },
              sameAs: [],
            }),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebSite",
              name: "MetrixAI",
              url: "https://metrixai.io",
            }),
          }}
        />
      </body>
    </html>
  );
}
