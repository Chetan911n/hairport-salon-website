import Hero from '@/components/Hero';
import About from '@/components/About';
import Services from '@/components/Services';
import Branches from '@/components/Branches';
import Testimonials from '@/components/Testimonials';
import BookingCTA from '@/components/BookingCTA';

export default function HomePage() {
  return (
    <>
      <Hero />
      <About />
      <Services />
      <Branches />
      <Testimonials />
      <BookingCTA />
    </>
  );
}
