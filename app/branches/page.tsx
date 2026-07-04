import type { Metadata } from 'next';
import PageHeader from '@/components/PageHeader';
import Branches from '@/components/Branches';
import BookingCTA from '@/components/BookingCTA';

export const metadata: Metadata = {
  title: 'Branches',
  description: 'Find Hairport locations in Nashik, with hours and directions.',
};

export default function BranchesPage() {
  return (
    <>
      <PageHeader
        eyebrow="Locations"
        title="Visit us in"
        goldWord="Nashik."
        description="One location is publicly verified at time of writing. Additional branches shown are placeholders pending confirmation."
      />
      <Branches />
      <BookingCTA />
    </>
  );
}
