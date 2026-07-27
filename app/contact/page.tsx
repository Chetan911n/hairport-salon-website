import type { Metadata } from 'next';
import { Phone, Mail, MapPin, MessageCircle } from 'lucide-react';
import PageHeader from '@/components/PageHeader';
import ContactForm from '@/components/ContactForm';
import Reveal from '@/components/Reveal';
import { branches, contact } from '@/data/site';

export const metadata: Metadata = {
  title: 'Contact',
  description: 'Get in touch with Hairport, Nashik — visit, call, or send a message.',
};

const verifiedBranch = branches.find((b) => b.status === 'verified')!;

export default function ContactPage() {
  return (
    <>
      <PageHeader
        eyebrow="Contact"
        title="Let's get you"
        goldWord="booked in."
        description="Call our reception hotline or visit our flagship salon at Shop 3-5 Laxman Villa, Nashik Road."
      />

      <section className="pb-28 pt-8 md:pb-40">
        <div className="container-luxury grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
          {/* Dark Charcoal Contact Details Box */}
          <Reveal>
            <div className="rounded-2xl border border-[#C5A059]/40 bg-[#2B2B2B] p-8 md:p-10 shadow-2xl space-y-8">
              <h3 className="font-display text-2xl font-bold text-[#F8F6F2] border-b border-[#C5A059]/30 pb-3">
                Salon Details
              </h3>

              <div className="flex gap-4">
                <MapPin className="mt-1 shrink-0 text-[#E2C067]" size={24} />
                <div>
                  <p className="text-[#F8F6F2] font-bold text-xl">{verifiedBranch.name}</p>
                  <p className="mt-1.5 text-sm font-medium text-[#F4EFE6] leading-relaxed">
                    {verifiedBranch.address}, {verifiedBranch.pincode}
                  </p>
                  <p className="mt-2 text-xs font-bold text-[#E2C067]">
                    Landmark: {verifiedBranch.landmark || 'Near Datta Mandir Stop & Taran Talav Rd'}
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <Phone className="mt-1 shrink-0 text-[#E2C067]" size={24} />
                <div>
                  <a href={`tel:${contact.phone}`} className="text-[#F8F6F2] hover:text-[#E2C067] transition-colors font-bold text-lg block">{contact.phoneFormatted}</a>
                  <p className="mt-0.5 text-xs font-medium text-[#F4EFE6]/70">Verified Reception Hotline</p>
                </div>
              </div>

              <div className="flex gap-4">
                <MessageCircle className="mt-1 shrink-0 text-[#E2C067]" size={24} />
                <div>
                  <a href={`https://wa.me/${contact.phone}`} target="_blank" rel="noopener noreferrer" className="text-[#F8F6F2] hover:text-[#E2C067] transition-colors font-bold text-lg block">{contact.phoneFormatted}</a>
                  <p className="mt-0.5 text-xs font-medium text-[#F4EFE6]/70">WhatsApp Booking Support</p>
                </div>
              </div>

              <div className="flex gap-4">
                <Mail className="mt-1 shrink-0 text-[#E2C067]" size={24} />
                <div>
                  <p className="text-[#F8F6F2] font-bold text-base">{contact.email}</p>
                  <p className="mt-0.5 text-xs font-medium text-[#F4EFE6]/70">Official Salon Email</p>
                </div>
              </div>

              <div className="overflow-hidden rounded-xl border border-[#C5A059]/40 shadow-lg">
                <iframe
                  title="Hairport — Nashik Road map"
                  className="h-56 w-full"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  src={`https://maps.google.com/maps?q=${encodeURIComponent(
                    verifiedBranch.mapsQuery
                  )}&z=15&output=embed`}
                />
              </div>
            </div>
          </Reveal>

          {/* Dark Charcoal Form Box */}
          <Reveal delay={0.15}>
            <ContactForm />
          </Reveal>
        </div>
      </section>
    </>
  );
}
