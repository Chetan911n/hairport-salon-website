import type { Metadata } from 'next';
import PageHeader from '@/components/PageHeader';
import ContactForm from '@/components/ContactForm';
import LocationSection from '@/components/LocationSection';
import BookingCTA from '@/components/BookingCTA';

export const metadata: Metadata = {
  title: 'Contact Us & Phone Inquiry — THE HAIRPORT Nashik',
  description: 'Get in touch with THE HAIRPORT Nashik Road. Call +91 98224 45566 or send an inquiry for appointments, bridal packages, and hair consultations.',
};

export default function ContactPage() {
  return (
    <>
      <PageHeader
        eyebrow="Get In Touch"
        title="We are Ready to Help"
        italicTitle="With Your Style Goals."
        description="Call us directly at +91 98224 45566 or visit our salon at Royal Regency, Near Datta Mandir Signal, Nashik Road."
        imageSrc="/images/image4_booking_reviews_feed_bg.jpg"
        imageAlt="THE HAIRPORT Contact Reception Desk"
        breadcrumbs={[
          { label: 'Home', href: '/' }
        ]}
      />

      <section className="py-16 bg-[#0C0C0C]">
        <ContactForm />
      </section>

      <LocationSection />
      <BookingCTA />
    </>
  );
}
