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

      <section className="pb-28 pt-8 md:pb-40 bg-[#0F172A]">
        <div className="container-luxury grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
          {/* Deep Navy Blue Box Fill (#0F172A) with Vibrant Yellow (#FACC15) Box Text */}
          <Reveal>
            <div className="rounded-2xl border border-[#FACC15]/40 bg-[#0F172A] p-8 md:p-10 shadow-2xl space-y-8">
              <h3 className="font-display text-2xl font-bold text-[#FACC15] border-b border-[#FACC15]/30 pb-3">
                Salon Details
              </h3>

              <div className="flex gap-4">
                <MapPin className="mt-1 shrink-0 text-[#FACC15]" size={24} />
                <div>
                  <p className="text-[#FACC15] font-bold text-xl">{verifiedBranch.name}</p>
                  <p className="mt-1.5 text-sm font-medium text-[#F8FAFC] leading-relaxed">
                    {verifiedBranch.address}, {verifiedBranch.pincode}
                  </p>
                  <p className="mt-2 text-xs font-bold text-[#FDE047]">
                    Landmark: {verifiedBranch.landmark || 'Near Datta Mandir Stop & Taran Talav Rd'}
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <Phone className="mt-1 shrink-0 text-[#FACC15]" size={24} />
                <div>
                  <a href={`tel:${contact.phone}`} className="text-[#FACC15] hover:text-[#FDE047] transition-colors font-bold text-lg block">{contact.phoneFormatted}</a>
                  <p className="mt-0.5 text-xs font-medium text-[#F8FAFC]/70">Verified Reception Hotline</p>
                </div>
              </div>

              <div className="flex gap-4">
                <MessageCircle className="mt-1 shrink-0 text-[#FACC15]" size={24} />
                <div>
                  <a href={`https://wa.me/${contact.phone}`} target="_blank" rel="noopener noreferrer" className="text-[#FACC15] hover:text-[#FDE047] transition-colors font-bold text-lg block">{contact.phoneFormatted}</a>
                  <p className="mt-0.5 text-xs font-medium text-[#F8FAFC]/70">WhatsApp Booking Support</p>
                </div>
              </div>

              <div className="flex gap-4">
                <Mail className="mt-1 shrink-0 text-[#FACC15]" size={24} />
                <div>
                  <p className="text-[#FACC15] font-bold text-base">{contact.email}</p>
                  <p className="mt-0.5 text-xs font-medium text-[#F8FAFC]/70">Official Salon Email</p>
                </div>
              </div>

              <div className="overflow-hidden rounded-xl border border-[#FACC15]/40 shadow-lg">
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

          {/* Deep Navy Blue Form Box Fill (#0F172A) with Vibrant Yellow (#FACC15) Box Text */}
          <Reveal delay={0.15}>
            <ContactForm />
          </Reveal>
        </div>
      </section>
    </>
  );
}
