import type { Metadata } from 'next';
import Image from 'next/image';
import { Playfair_Display, Inter } from 'next/font/google';
import './globals.css';
import SmoothScrollProvider from '@/components/SmoothScrollProvider';
import Nav from '@/components/Nav';
import Footer from '@/components/Footer';
import CursorGlow from '@/components/CursorGlow';
import { branches, seo } from '@/data/site';

const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-playfair',
  display: 'swap',
  weight: ['400', '500', '600', '700'],
});

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

export const metadata: Metadata = {
  metadataBase: new URL(seo.siteUrl),
  title: {
    default: seo.defaultTitle,
    template: '%s | Hairport',
  },
  description: seo.defaultDescription,
  keywords: ['unisex salon Nashik', 'hair salon Nashik', 'Hairport', 'bridal salon Nashik', 'hair spa Nashik'],
  openGraph: {
    title: seo.defaultTitle,
    description: seo.defaultDescription,
    url: seo.siteUrl,
    siteName: 'Hairport',
    locale: 'en_IN',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: seo.defaultTitle,
    description: seo.defaultDescription,
  },
  robots: { index: true, follow: true },
};

const verifiedBranch = branches.find((b) => b.status === 'verified')!;

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'HairSalon',
  name: 'Hairport',
  image: `${seo.siteUrl}/images/og-cover.jpg`,
  address: {
    '@type': 'PostalAddress',
    streetAddress: verifiedBranch.address,
    addressLocality: 'Nashik',
    addressRegion: 'Maharashtra',
    postalCode: verifiedBranch.pincode,
    addressCountry: 'IN',
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: verifiedBranch.lat,
    longitude: verifiedBranch.lng,
  },
  url: seo.siteUrl,
  priceRange: '₹₹₹',
  aggregateRating: verifiedBranch.rating
    ? {
        '@type': 'AggregateRating',
        ratingValue: verifiedBranch.rating,
        reviewCount: verifiedBranch.reviewCount,
      }
    : undefined,
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${playfair.variable} ${inter.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="bg-[#0F172A] text-[#F8FAFC] font-body antialiased relative min-h-screen">
        {/* Full-Length Stacked Luxury Barbershop Background Image */}
        <div className="absolute inset-0 pointer-events-none -z-10 overflow-hidden bg-[#0F172A]">
          <Image
            src="/images/gentsbox_full_scroll_bg.png"
            alt="THE HAIRPORT Ultra Luxury Continuous Scroll Barbershop Background"
            fill
            priority
            className="object-cover object-top opacity-95"
          />
          {/* Subtle Ambient Vignette Overlay */}
          <div className="absolute inset-0 bg-[#0F172A]/20" />
        </div>

        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[100] focus:bg-[#FACC15] focus:text-[#0F172A] focus:px-4 focus:py-2 focus:rounded"
        >
          Skip to content
        </a>
        <SmoothScrollProvider>
          <CursorGlow />
          <Nav />
          <main id="main-content" className="relative z-10">{children}</main>
          <Footer />
        </SmoothScrollProvider>
      </body>
    </html>
  );
}
