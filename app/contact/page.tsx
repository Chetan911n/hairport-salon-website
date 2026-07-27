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

      <section className="pb-28 pt-4 md:pb-40">
        <div className="container-luxury grid gap-14 lg:grid-cols-[0.9fr_1.1fr]">
          <Reveal>
            <div className="space-y-8">
              <div className="flex gap-4">
                <MapPin className="mt-1 shrink-0 text-[#A87444]" size={22} />
                <div>
                  <p className="text-[#2B2B2B] font-bold text-lg">{verifiedBranch.name}</p>
                  <p className="mt-1 text-sm font-semibold text-[#2B2B2B]">
                    {verifiedBranch.address}, {verifiedBranch.pincode}
                  </p>
                  <p className="mt-1 text-xs font-semibold text-[#A87444]">
                    Landmark: {verifiedBranch.landmark || 'Near Datta Mandir Stop & Taran Talav Rd'}
                  </p>
                </div>
              </div>
              <div className="flex gap-4">
                <Phone className="mt-1 shrink-0 text-[#A87444]" size={22} />
                <div>
                  <a href={`tel:${contact.phone}`} className="text-[#2B2B2B] hover:text-[#A87444] transition-colors font-bold text-base block">{contact.phoneFormatted}</a>
                  <p className="mt-0.5 text-xs font-semibold text-[#6E6A63]">Verified Reception Hotline</p>
                </div>
              </div>
              <div className="flex gap-4">
                <MessageCircle className="mt-1 shrink-0 text-[#A87444]" size={22} />
                <div>
                  <a href={`https://wa.me/${contact.phone}`} target="_blank" rel="noopener noreferrer" className="text-[#2B2B2B] hover:text-[#A87444] transition-colors font-bold text-base block">{contact.phoneFormatted}</a>
                  <p className="mt-0.5 text-xs font-semibold text-[#6E6A63]">WhatsApp Booking Support</p>
                </div>
              </div>
              <div className="flex gap-4">
                <Mail className="mt-1 shrink-0 text-[#A87444]" size={22} />
                <div>
                  <p className="text-[#2B2B2B] font-semibold text-base">{contact.email}</p>
                  <p className="mt-0.5 text-xs font-semibold text-[#6E6A63]">Official Salon Email</p>
                </div>
              </div>

              <div className="overflow-hidden rounded-2xl border border-[#DDD4C6] shadow-card">
                <iframe
                  title="Hairport — Nashik Road map"
                  className="h-64 w-full"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  src={`https://maps.google.com/maps?q=${encodeURIComponent(
                    verifiedBranch.mapsQuery
                  )}&z=15&output=embed`}
                />
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.15}>
            <ContactForm />
          </Reveal>
        </div>
      </section>
    </>
  );
}
