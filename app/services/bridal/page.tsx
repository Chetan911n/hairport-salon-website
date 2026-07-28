import type { Metadata } from 'next';
import PageHeader from '@/components/PageHeader';
import Services from '@/components/Services';
import BookingCTA from '@/components/BookingCTA';

export const metadata: Metadata = {
  title: 'Bridal & Groom Packages — THE HAIRPORT Nashik',
  description: 'Unrivaled wedding grooming and bridal package styling by Prashant Sir and senior team at Nashik Road.',
};

export default function BridalServicePage() {
  return (
    <>
      <PageHeader
        eyebrow="Specialized Services"
        title="Bridal &amp; Wedding Groom"
        italicTitle="Packages."
        description="A considered, unhurried bridal experience — from trial consultation to final wedding day styling."
        imageSrc="/images/image2_services_bg.jpg"
        imageAlt="THE HAIRPORT Bridal & Groom Packages"
        breadcrumbs={[
          { label: 'Home', href: '/' },
          { label: 'Services', href: '/services' }
        ]}
      />

      <Services />
      <BookingCTA />
    </>
  );
}
