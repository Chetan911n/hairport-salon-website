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
        description="Phone, email and WhatsApp details below are placeholders — no verified public contact number could be confirmed for this listing. Replace before launch."
      />

      <section className="pb-28 pt-4 md:pb-40">
        <div className="container-luxury grid gap-14 lg:grid-cols-[0.9fr_1.1fr]">
          <Reveal>
            <div className="space-y-8">
              <div className="flex gap-4">
                <MapPin className="mt-1 shrink-0 text-gold" size={20} />
                <div>
                  <p className="text-white">{verifiedBranch.name}</p>
                  <p className="mt-1 text-sm text-muted">
                    {verifiedBranch.address}, {verifiedBranch.pincode}
                  </p>
                </div>
              </div>
              <div className="flex gap-4">
                <Phone className="mt-1 shrink-0 text-gold" size={20} />
                <div>
                  <p className="text-white">{contact.phonePlaceholder}</p>
                  <p className="mt-1 text-xs text-muted">Placeholder — unverified</p>
                </div>
              </div>
              <div className="flex gap-4">
                <MessageCircle className="mt-1 shrink-0 text-gold" size={20} />
                <div>
                  <p className="text-white">{contact.whatsappPlaceholder}</p>
                  <p className="mt-1 text-xs text-muted">Placeholder — unverified</p>
                </div>
              </div>
              <div className="flex gap-4">
                <Mail className="mt-1 shrink-0 text-gold" size={20} />
                <div>
                  <p className="text-white">{contact.emailPlaceholder}</p>
                  <p className="mt-1 text-xs text-muted">Placeholder — unverified</p>
                </div>
              </div>

              <div className="overflow-hidden rounded-2xl border border-border">
                <iframe
                  title="Hairport — Nashik Road map"
                  className="h-64 w-full grayscale invert-[0.92] contrast-[1.1]"
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
