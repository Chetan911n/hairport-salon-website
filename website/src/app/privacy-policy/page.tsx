import type { Metadata } from 'next';
import PageHeader from '@/components/PageHeader';

export const metadata: Metadata = {
  title: 'Privacy Policy — THE HAIRPORT Nashik',
  description: 'Privacy Policy and data protection guidelines for online appointments and client privacy at THE HAIRPORT Nashik Road.',
};

export default function PrivacyPolicyPage() {
  return (
    <>
      <PageHeader
        eyebrow="Legal Notice"
        title="Privacy"
        italicTitle="Policy."
        description="Your privacy is paramount. Learn how we handle appointment details, contact information, and personal data."
        imageSrc="/images/image5_products_location_cta_footer_bg.jpg"
        imageAlt="THE HAIRPORT Legal Privacy Policy"
        breadcrumbs={[{ label: 'Home', href: '/' }]}
      />

      <section className="py-20 bg-[#0C0C0C] text-white">
        <div className="container-luxury max-w-3xl space-y-6 text-sm leading-relaxed text-[#F8FAFC]">
          <div className="rounded-2xl border border-[#FACC15]/40 bg-[#1E293B]/80 p-8 backdrop-blur-md">
            <h3 className="font-display text-xl font-bold text-[#FACC15] mb-4">1. Data Collection</h3>
            <p>We collect essential appointment information such as your name, phone number, preferred service, and appointment time solely to confirm salon chair bookings and provide customer support.</p>
          </div>

          <div className="rounded-2xl border border-[#FACC15]/40 bg-[#1E293B]/80 p-8 backdrop-blur-md">
            <h3 className="font-display text-xl font-bold text-[#FACC15] mb-4">2. Zero Third-Party Sharing</h3>
            <p>Your contact data is strictly confidential. We do not sell, rent, or share personal phone numbers or client records with third-party advertisers.</p>
          </div>
        </div>
      </section>
    </>
  );
}
