import type { Metadata } from 'next';
import PageHeader from '@/components/PageHeader';
import BookingCTA from '@/components/BookingCTA';
import { HelpCircle } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Frequently Asked Questions — THE HAIRPORT Nashik',
  description: 'Find answers about haircut appointments, warm water hair wash, pricing, parking, and salon hours at THE HAIRPORT Nashik Road.',
};

const faqs = [
  {
    q: 'Do I need an advance appointment or are walk-ins welcome?',
    a: 'While we welcome walk-ins at our Nashik Road salon, we highly recommend booking an online appointment or calling +91 98224 45566 to guarantee zero wait time.'
  },
  {
    q: 'Are warm water hair wash services available everyday?',
    a: 'Yes! We feature daily warm and cold water hair wash systems for ultimate scalp comfort during shampooing and hair spa therapies.'
  },
  {
    q: 'Who are the senior barbers at THE HAIRPORT?',
    a: 'Our flagship team is led by Prashant Sir, who was trained by celebrity stylist Alim Hakim, along with senior fade and beard specialists Tejas and Kunal.'
  },
  {
    q: 'Are there separate sections for men and women?',
    a: 'Yes, THE HAIRPORT features dedicated, private sections for both men and women with complete privacy.'
  }
];

export default function FAQPage() {
  return (
    <>
      <PageHeader
        eyebrow="Help & FAQ"
        title="Frequently Asked"
        italicTitle="Questions."
        description="Everything you need to know about our salon services, appointments, parking, and grooming rituals at Nashik Road."
        imageSrc="/images/image5_products_location_cta_footer_bg.jpg"
        imageAlt="THE HAIRPORT FAQ Background"
        breadcrumbs={[
          { label: 'Home', href: '/' }
        ]}
      />

      <section className="py-24 bg-[#0C0C0C] text-white">
        <div className="container-luxury max-w-4xl mx-auto space-y-6">
          {faqs.map((faq, i) => (
            <div key={i} className="rounded-2xl border border-[#FACC15]/40 bg-[#1E293B]/80 p-8 shadow-2xl backdrop-blur-md">
              <div className="flex items-start gap-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-black text-[#FACC15] border border-[#FACC15]/40">
                  <HelpCircle size={20} />
                </div>
                <div>
                  <h3 className="font-display text-xl font-bold text-[#FACC15]">
                    {faq.q}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-[#F8FAFC]">
                    {faq.a}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <BookingCTA />
    </>
  );
}
