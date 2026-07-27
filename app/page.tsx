import Hero from '@/components/Hero';
import Stats from '@/components/Stats';
import Services from '@/components/Services';
import About from '@/components/About';
import Team from '@/components/Team';
import BeforeAfterGallery from '@/components/BeforeAfterGallery';
import BookingProcess from '@/components/BookingProcess';
import Testimonials from '@/components/Testimonials';
import InstagramFeed from '@/components/InstagramFeed';
import GroomingProducts from '@/components/GroomingProducts';
import LocationSection from '@/components/LocationSection';
import BookingCTA from '@/components/BookingCTA';

export default function HomePage() {
  return (
    <>
      {/* 1. Hero Section */}
      <Hero />

      {/* 2. Animated Statistics Counters */}
      <Stats />

      {/* 3. Featured Services */}
      <Services />

      {/* 4. About Us Story */}
      <About />

      {/* 5. Meet Our Barbers */}
      <Team />

      {/* 6. Before & After Interactive Gallery */}
      <BeforeAfterGallery />

      {/* 7. Booking Process Timeline */}
      <BookingProcess />

      {/* 8. Verified Guest Testimonials */}
      <Testimonials />

      {/* 9. Live Instagram Gallery Feed */}
      <InstagramFeed />

      {/* 10. Grooming Products Information Showcase */}
      <GroomingProducts />

      {/* 11. Location & Opening Hours */}
      <LocationSection />

      {/* 12. Final Booking CTA */}
      <BookingCTA />
    </>
  );
}
