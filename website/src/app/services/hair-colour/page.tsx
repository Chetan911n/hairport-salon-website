import type { Metadata } from 'next';
import PageHeader from '@/components/PageHeader';
import Services from '@/components/Services';
import BookingCTA from '@/components/BookingCTA';

export const metadata: Metadata = {
  title: 'Hair & Beard Colouring Services — THE HAIRPORT Nashik',
  description: 'Ammonia-free global hair colour and targeted beard grey coverage formulas at THE HAIRPORT Nashik Road.',
};

export default function HairColourServicePage() {
  return (
    <>
      <PageHeader
        eyebrow="Specialized Services"
        title="Ammonia-Free Hair &amp;"
        italicTitle="Beard Colouring."
        description="Global hair colour coverage and targeted beard grey blending for a rich natural shade."
        imageSrc="/images/image1_hero_stats_bg.jpg"
        imageAlt="THE HAIRPORT Hair Colouring Services"
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
