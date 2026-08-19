import type { Metadata } from 'next';
import PageHeader from '@/components/PageHeader';
import Services from '@/components/Services';
import GroomingProducts from '@/components/GroomingProducts';
import BookingCTA from '@/components/BookingCTA';

export const metadata: Metadata = {
  title: 'Barbershop Services & Verified Rates — THE HAIRPORT Nashik',
  description: 'Explore full salon menu with transparent pricing: Classic haircuts ₹200, Skin fades ₹250, Beard sculpts ₹100, Hair spa ₹300, and Skin cleanups ₹400.',
};

export default function ServicesPage() {
  return (
    <>
      <PageHeader
        eyebrow="Services & Pricing"
        title="Precision Barber Crafts."
        italicTitle="Verified Salon Rates."
        description="Transparent rates sourced directly from our salon register. Every haircut & shave includes personal consultation, warm water wash, and hot towel ritual."
        imageSrc="/images/image2_services_bg.jpg"
        imageAlt="THE HAIRPORT Barber Tools Flatlay"
        breadcrumbs={[
          { label: 'Home', href: '/' }
        ]}
      />

      <Services />
      <GroomingProducts />
      <BookingCTA />
    </>
  );
}
