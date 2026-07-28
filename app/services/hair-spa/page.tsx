import type { Metadata } from 'next';
import PageHeader from '@/components/PageHeader';
import Services from '@/components/Services';
import BookingCTA from '@/components/BookingCTA';

export const metadata: Metadata = {
  title: 'Hair Spa & Scalp Therapy — THE HAIRPORT Nashik',
  description: 'Deep conditioning scalp massage, warm water wash, and nourishing hair spa treatments at THE HAIRPORT Nashik Road.',
};

export default function HairSpaServicePage() {
  return (
    <>
      <PageHeader
        eyebrow="Specialized Services"
        title="Warm Water Wash &amp;"
        italicTitle="Hair Spa Therapy."
        description="Scalp massage, warm water hair wash, and deep conditioning scalp revitalization."
        imageSrc="/images/image2_services_bg.jpg"
        imageAlt="THE HAIRPORT Hair Spa Services"
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
