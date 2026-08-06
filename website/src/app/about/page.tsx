import type { Metadata } from 'next';
import PageHeader from '@/components/PageHeader';
import About from '@/components/About';
import Team from '@/components/Team';
import BookingCTA from '@/components/BookingCTA';

export const metadata: Metadata = {
  title: 'Our Barber Heritage — THE HAIRPORT Nashik Road',
  description: 'Learn about 15+ years of master barber craftsmanship at THE HAIRPORT Nashik Road. Founded by Prashant Sir, Alim Hakim trained senior hairstylists.',
};

export default function AboutPage() {
  return (
    <>
      <PageHeader
        eyebrow="About THE HAIRPORT"
        title="15+ Years of Master Barber"
        italicTitle="Heritage & Craftsmanship."
        description="Founded by Prashant Sir, our salon brings celebrity-grade haircut precision, tailored skin fades, and traditional hot towel razor shaves to Nashik Road."
        imageSrc="/images/image3_about_team_bg.jpg"
        imageAlt="THE HAIRPORT Luxury Chesterfield Lounge Interior"
        breadcrumbs={[
          { label: 'Home', href: '/' }
        ]}
      />

      <About />
      <Team />
      <BookingCTA />
    </>
  );
}
