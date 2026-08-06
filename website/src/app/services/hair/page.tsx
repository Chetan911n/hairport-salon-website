import type { Metadata } from 'next';
import PageHeader from '@/components/PageHeader';
import Services from '@/components/Services';
import BookingCTA from '@/components/BookingCTA';

export const metadata: Metadata = {
  title: 'Haircut & Styling Services — THE HAIRPORT Nashik',
  description: 'Precision haircuts, skin fades, and style architecture tailored to your head shape by Prashant Sir & team.',
};

export default function HairServicePage() {
  return (
    <>
      <PageHeader
        eyebrow="Specialized Services"
        title="Precision Haircuts &amp;"
        italicTitle="Skin Fades."
        description="Scissor and clipper work tailored to your head shape, finished with warm water hair wash & hot towel."
        imageSrc="/images/image2_services_bg.jpg"
        imageAlt="THE HAIRPORT Precision Haircut Services"
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
