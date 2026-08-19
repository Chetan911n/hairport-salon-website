import type { Metadata } from 'next';
import PageHeader from '@/components/PageHeader';
import Services from '@/components/Services';
import BookingCTA from '@/components/BookingCTA';

export const metadata: Metadata = {
  title: 'Hair Treatments (Blue Tox, Nanoplastia, Keratin) — THE HAIRPORT Nashik',
  description: 'Advanced hair restructuring and smoothing therapies including Bluetox, Nanoplastia, Keratin, Smoothing, and Perming for Men & Women at THE HAIRPORT Nashik Road.',
};

export default function HairTreatmentsPage() {
  return (
    <>
      <PageHeader
        eyebrow="Specialized Hair Treatments"
        title="Blue Tox, Nanoplastia &amp;"
        italicTitle="Keratin Therapies."
        description="Restructure, smooth, and align your hair with premium Bluetox, Nanoplastia, Keratin, and Perming therapies for Men & Women."
        imageSrc="/images/image2_services_bg.jpg"
        imageAlt="THE HAIRPORT Hair Treatments"
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
