import type { Metadata } from 'next';
import PageHeader from '@/components/PageHeader';
import GalleryGrid from '@/components/GalleryGrid';
import BookingCTA from '@/components/BookingCTA';

export const metadata: Metadata = {
  title: 'Salon Gallery & Transformations — THE HAIRPORT Nashik',
  description: 'Explore 8K photos of precision haircuts, skin fades, beard sculpts, and salon interior at THE HAIRPORT Nashik Road.',
};

export default function GalleryPage() {
  return (
    <>
      <PageHeader
        eyebrow="Visual Showcase"
        title="Explore Haircuts &amp;"
        italicTitle="Salon Craftsmanship."
        description="A visual collection of real haircut transformations, skin fades, beard grooming, and luxury salon interior moments."
        imageSrc="/images/image4_booking_reviews_feed_bg.jpg"
        imageAlt="THE HAIRPORT Gallery Showcase Background"
        breadcrumbs={[
          { label: 'Home', href: '/' }
        ]}
      />

      <section className="py-20 bg-[#0C0C0C]">
        <GalleryGrid />
      </section>

      <BookingCTA />
    </>
  );
}
