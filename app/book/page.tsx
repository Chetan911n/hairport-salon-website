import { Suspense } from 'react';
import type { Metadata } from 'next';
import PageHeader from '@/components/PageHeader';
import BookingFlow from '@/components/BookingFlow';

export const metadata: Metadata = {
  title: 'Book Appointment',
  description: 'Book your appointment at Hairport, Nashik.',
};

export default function BookPage() {
  return (
    <>
      <PageHeader
        eyebrow="Book Appointment"
        title="Reserve your"
        goldWord="chair."
        description="Choose a service, branch, and time that suits you. This form is a request — our team will confirm your slot."
      />
      <section className="pb-28 pt-4 md:pb-40">
        <div className="container-luxury">
          <Suspense fallback={<div className="text-center text-muted font-sans py-20">Loading booking portal...</div>}>
            <BookingFlow />
          </Suspense>
        </div>
      </section>
    </>
  );
}
