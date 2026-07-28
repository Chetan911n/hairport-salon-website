import type { Metadata } from 'next';
import PageHeader from '@/components/PageHeader';
import LocationSection from '@/components/LocationSection';
import BookingCTA from '@/components/BookingCTA';

export const metadata: Metadata = {
  title: 'Nashik Road Salon Location — THE HAIRPORT',
  description: 'Visit our flagship Nashik Road salon at Royal Regency near Datta Mandir Signal. Open Monday to Sunday 9 AM - 9 PM.',
};

export default function BranchesPage() {
  return (
    <>
      <PageHeader
        eyebrow="Flagship Location"
        title="Visit THE HAIRPORT"
        italicTitle="Nashik Road Salon."
        description="Located in Royal Regency near Datta Mandir Signal. Climate-controlled salon sanctuary with Chesterfield seating and dedicated men & women sections."
        imageSrc="/images/image5_products_location_cta_footer_bg.jpg"
        imageAlt="THE HAIRPORT Flagship Salon Interior Nashik"
        breadcrumbs={[
          { label: 'Home', href: '/' }
        ]}
      />

      <LocationSection />
      <BookingCTA />
    </>
  );
}
