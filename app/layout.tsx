import type { Metadata } from 'next';
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
      <body className="bg-[#F8F6F2] text-[#2B2B2B] font-body antialiased relative min-h-screen">
        {/* Warm Editorial Luxury Background Layer */}
        <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
          {/* Warm Off-White / Cream Linen Gradient */}
          <div className="absolute inset-0 bg-gradient-to-b from-[#F8F6F2] via-[#F4EFE6] to-[#F8F6F2]" />
          
          {/* Soft Travertine Ambient Glow */}
          <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-[1000px] h-[600px] rounded-full bg-[radial-gradient(circle_at_center,_rgba(239,232,222,0.6),_transparent_70%)] blur-2xl" />
          <div className="absolute top-1/3 right-0 w-[600px] h-[500px] rounded-full bg-[radial-gradient(circle_at_center,_rgba(168,116,68,0.04),_transparent_70%)] blur-3xl" />
          
          {/* Fine Handmade Paper Texture (3% Opacity) */}
          <div className="absolute inset-0 opacity-[0.03] bg-[url('https://www.transparenttextures.com/patterns/handmade-paper.png')]" />
        </div>

        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[100] focus:bg-[#A87444] focus:text-white focus:px-4 focus:py-2 focus:rounded"
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
