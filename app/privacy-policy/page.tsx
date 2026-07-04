import type { Metadata } from 'next';
import PageHeader from '@/components/PageHeader';

export const metadata: Metadata = {
  title: 'Privacy Policy',
  description: 'Hairport privacy policy.',
};

export default function PrivacyPolicyPage() {
  return (
    <>
      <PageHeader eyebrow="Legal" title="Privacy" goldWord="Policy" />
      <section className="pb-28 pt-4 md:pb-40">
        <div className="container-luxury max-w-3xl space-y-6 text-sm leading-relaxed text-muted">
          <p className="rounded-lg border border-gold/30 bg-gold/5 p-4 text-gold">
            Placeholder legal copy. This page must be reviewed and finalized
            by a qualified professional before publishing, and updated to
            reflect exactly what data this site collects and how it is used.
          </p>
          <h2 className="font-display text-xl text-white">Information we collect</h2>
          <p>
            When you use our contact or booking forms, we may collect your
            name, phone number, email address and any message you provide,
            solely to respond to your enquiry or manage your appointment.
          </p>
          <h2 className="font-display text-xl text-white">How we use your information</h2>
          <p>
            Information submitted through this site is used only to
            communicate with you about your enquiry or booking. We do not
            sell personal information to third parties.
          </p>
          <h2 className="font-display text-xl text-white">Cookies</h2>
          <p>
            This site may use essential cookies required for basic
            functionality. Add details here about any analytics or
            marketing cookies actually in use.
          </p>
          <h2 className="font-display text-xl text-white">Contact</h2>
          <p>
            For questions about this policy, contact the salon using the
            details on our Contact page.
          </p>
        </div>
      </section>
    </>
  );
}
