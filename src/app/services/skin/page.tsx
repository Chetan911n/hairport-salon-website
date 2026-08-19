import type { Metadata } from 'next';
import PageHeader from '@/components/PageHeader';
import Services from '@/components/Services';
import BookingCTA from '@/components/BookingCTA';

export const metadata: Metadata = {
  title: 'Skin Cleanup & Facials — THE HAIRPORT Nashik',
  description: 'Deep pore cleansing, exfoliation, face massage, and clarifying mask for healthy skin at THE HAIRPORT Nashik Road.',
};

export default function SkinServicePage() {
  return (
    <>
      <PageHeader
        eyebrow="Specialized Services"
        title="Skin Cleanup &amp;"
        italicTitle="Facial Therapy."
        description="Deep pore cleansing, exfoliation, face massage, and clarifying mask for clear, healthy skin."
        imageSrc="/images/image4_booking_reviews_feed_bg.jpg"
        imageAlt="THE HAIRPORT Skin Cleanup Services"
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
