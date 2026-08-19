import type { Metadata } from 'next';
import PageHeader from '@/components/PageHeader';
import Testimonials from '@/components/Testimonials';
import BookingCTA from '@/components/BookingCTA';

export const metadata: Metadata = {
  title: 'Client Reviews & Testimonials — THE HAIRPORT Nashik',
  description: 'Read 181+ verified 4.5★ Google reviews from clients about haircut precision, beard grooming, and salon experience at THE HAIRPORT Nashik Road.',
};

export default function TestimonialsPage() {
  return (
    <>
      <PageHeader
        eyebrow="Verified Client Feedback"
        title="4.5★ Rated Salon Experience"
        italicTitle="In Nashik Road."
        description="Read authentic client stories and Google Maps reviews about master haircuts, skin fades, and unhurried salon luxury."
        imageSrc="/images/image4_booking_reviews_feed_bg.jpg"
        imageAlt="THE HAIRPORT Testimonials Background"
        breadcrumbs={[
          { label: 'Home', href: '/' }
        ]}
      />

      <Testimonials />
      <BookingCTA />
    </>
  );
}
