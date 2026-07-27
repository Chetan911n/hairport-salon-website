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
      <body className="bg-[#0A1628] text-[#F4F6F8] font-body antialiased relative min-h-screen">
        {/* Imperial Royal Navy & Crest Gold Wallpaper */}
        <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
          <div 
            style={{
              backgroundImage: 'url("/option3_bg.jpg")',
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }}
            className="absolute -inset-10 animate-wallpaper-flow opacity-30 mix-blend-luminosity"
          />
          {/* Deep Imperial Navy Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-b from-[#0A1628]/95 via-[#122238]/90 to-[#0A1628]/98" />
          <div className="absolute inset-0 opacity-[0.03] mix-blend-overlay bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]"></div>
        </div>

        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[100] focus:bg-gold focus:text-bg focus:px-4 focus:py-2 focus:rounded"
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
