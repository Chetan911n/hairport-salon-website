import type { Metadata } from 'next';
import PageHeader from '@/components/PageHeader';
import Testimonials from '@/components/Testimonials';
import BookingCTA from '@/components/BookingCTA';

export const metadata: Metadata = {
  title: 'Testimonials',
  description: 'What guests say about their experience at Hairport, Nashik.',
};

export default function TestimonialsPage() {
  return (
    <>
      <PageHeader
        eyebrow="Testimonials"
        title="Guest"
        goldWord="experiences."
        description="Hairport's Nashik Road location holds a verified 4.4★ rating across 189 public reviews. The quotes below are illustrative placeholders — replace with real, permissioned guest reviews before launch."
      />
      <Testimonials />
      <BookingCTA />
    </>
  );
}
