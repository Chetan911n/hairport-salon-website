import type { Metadata } from 'next';
import PageHeader from '@/components/PageHeader';

export const metadata: Metadata = {
  title: 'Terms & Conditions',
  description: 'Hairport terms and conditions.',
};

export default function TermsPage() {
  return (
    <>
      <PageHeader eyebrow="Legal" title="Terms &" goldWord="Conditions" />
      <section className="pb-28 pt-4 md:pb-40">
        <div className="container-luxury max-w-3xl space-y-6 text-sm leading-relaxed text-muted">
          <p className="rounded-lg border border-gold/30 bg-gold/5 p-4 text-gold">
            Placeholder legal copy. Have these terms reviewed by a qualified
            professional and updated to reflect Hairport&apos;s actual booking,
            cancellation and payment policies before publishing.
          </p>
          <h2 className="font-display text-xl text-white">Appointments</h2>
          <p>
            Bookings made through this website are requests and are subject
            to confirmation by the salon. Please arrive on time; late
            arrival may affect the length or availability of your service.
          </p>
          <h2 className="font-display text-xl text-white">Cancellations</h2>
          <p>
            State your actual cancellation and no-show policy here.
          </p>
          <h2 className="font-display text-xl text-white">Pricing</h2>
          <p>
            Prices are confirmed at the salon and are subject to change
            without prior notice on this website.
          </p>
        </div>
      </section>
    </>
  );
}
