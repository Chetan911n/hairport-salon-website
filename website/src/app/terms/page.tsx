import type { Metadata } from 'next';
import PageHeader from '@/components/PageHeader';

export const metadata: Metadata = {
  title: 'Terms of Service — THE HAIRPORT Nashik',
  description: 'Terms of Service for haircut bookings, appointment cancellations, and salon policies at THE HAIRPORT Nashik Road.',
};

export default function TermsPage() {
  return (
    <>
      <PageHeader
        eyebrow="Legal Notice"
        title="Terms of"
        italicTitle="Service."
        description="Review salon booking rules, appointment arrival times, and cancellation policies at THE HAIRPORT Nashik Road."
        imageSrc="/images/image5_products_location_cta_footer_bg.jpg"
        imageAlt="THE HAIRPORT Terms of Service"
        breadcrumbs={[{ label: 'Home', href: '/' }]}
      />

      <section className="py-20 bg-[#0C0C0C] text-white">
        <div className="container-luxury max-w-3xl space-y-6 text-sm leading-relaxed text-[#F8FAFC]">
          <div className="rounded-2xl border border-[#FACC15]/40 bg-[#1E293B]/80 p-8 backdrop-blur-md">
            <h3 className="font-display text-xl font-bold text-[#FACC15] mb-4">1. Appointment Arrival</h3>
            <p>Please arrive 5 to 10 minutes before your scheduled appointment time to enjoy our Chesterfield lounge and complimentary warm beverage consultation.</p>
          </div>

          <div className="rounded-2xl border border-[#FACC15]/40 bg-[#1E293B]/80 p-8 backdrop-blur-md">
            <h3 className="font-display text-xl font-bold text-[#FACC15] mb-4">2. Cancellation Policy</h3>
            <p>If you need to reschedule or cancel your appointment, please inform us at least 2 hours in advance via phone or WhatsApp at +91 98224 45566.</p>
          </div>
        </div>
      </section>
    </>
  );
}
