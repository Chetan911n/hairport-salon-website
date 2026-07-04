import type { Metadata } from 'next';
import PageHeader from '@/components/PageHeader';
import GalleryGrid from '@/components/GalleryGrid';
import BookingCTA from '@/components/BookingCTA';

export const metadata: Metadata = {
  title: 'Gallery',
  description: 'A look inside Hairport — styling, colour and bridal work.',
};

export default function GalleryPage() {
  return (
    <>
      <PageHeader
        eyebrow="Gallery"
        title="Work we're"
        goldWord="proud of."
        description="Photography below is placeholder editorial imagery for layout purposes — replace with real, licensed Hairport photography before launch."
      />
      <section className="py-16 md:py-24">
        <div className="container-luxury">
          <GalleryGrid />
        </div>
      </section>
      <BookingCTA />
    </>
  );
}
