import type { Metadata } from 'next';
import PageHeader from '@/components/PageHeader';
import BookingFlow from '@/components/BookingFlow';

export const metadata: Metadata = {
  title: 'Book Your Barber Chair — THE HAIRPORT Nashik Road',
  description: 'Reserve your haircut appointment online with Prashant Sir or senior barbers at THE HAIRPORT Nashik Road.',
};

export default function BookPage() {
  return (
    <>
      <PageHeader
        eyebrow="Online Chair Reservation"
        title="Reserve Your Master Cut"
        italicTitle="Experience."
        description="Select your service, choose your preferred master barber, and lock in your appointment slot with instant WhatsApp confirmation."
        imageSrc="/images/image1_hero_stats_bg.jpg"
        imageAlt="THE HAIRPORT Barber Chair Booking Background"
        breadcrumbs={[
          { label: 'Home', href: '/' }
        ]}
      />

      <section className="py-20 bg-[#0C0C0C]">
        <BookingFlow />
      </section>
    </>
  );
}
