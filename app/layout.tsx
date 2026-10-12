import type { Metadata } from 'next';
import { Inter, Playfair_Display } from 'next/font/google';
import './globals.css';
import Nav from '@/components/Nav';
import Footer from '@/components/Footer';
import SmoothScrollProvider from '@/components/SmoothScrollProvider';
import ScrollProgress from '@/components/ScrollProgress';
import PageLoader from '@/components/PageLoader';
import SystemError from '@/components/SystemError';

// Set to false to restore regular operations at any time
const SYSTEM_MAINTENANCE_OVERRIDE = true;

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-sans',
});

const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-serif',
});

export const metadata: Metadata = {
  title: 'THE HAIRPORT — Premium Barber Salon Nashik Road',
  description: 'Experience Nashik’s finest master barber salon. Precision haircuts, skin fades, hot towel razor shaves, and luxury hair spa by Prashant Sir & team.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  if (SYSTEM_MAINTENANCE_OVERRIDE) {
    return (
      <html lang="en" className={`${inter.variable} ${playfair.variable}`}>
        <body className="bg-[#0B0F19] font-sans text-[#E2E8F0] antialiased">
          <SystemError />
        </body>
      </html>
    );
  }

  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable} scroll-smooth`}>
      <body className="bg-[#0C0C0C] font-sans text-[#F8FAFC] antialiased selection:bg-[#FACC15] selection:text-black">
        <SmoothScrollProvider>
          {/* Top 2px Antique Gold Scroll Progress Bar */}
          <ScrollProgress />
          
          {/* Black & Gold Intro Loader */}
          <PageLoader />

          {/* Fixed Scrolled Navigation */}
          <Nav />

          {/* Main Page Content */}
          <main className="relative z-10">{children}</main>

          {/* Footer */}
          <Footer />
        </SmoothScrollProvider>
      </body>
    </html>
  );
}
