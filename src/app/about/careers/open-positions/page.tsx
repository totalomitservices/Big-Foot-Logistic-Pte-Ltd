
import Image from 'next/image';
import type { Metadata } from 'next';
import OpenPositionsClient from '@/components/pages/careers/open-positions-client';

export const metadata: Metadata = {
  title: 'Open Positions | Bigfoot Logistics',
  description: 'Find your next career opportunity at Bigfoot Logistics. We are hiring for various roles. Apply now and join our growing team.',
};

export default function OpenPositionsPage() {
  return (
    <div className="relative bg-background text-foreground">
      <section className="relative w-full h-[40vh] md:h-[50vh]">
        <Image
          src="https://images.unsplash.com/photo-1521791136064-7986c2920216?q=80&w=2070&auto=format&fit=crop"
          alt="We're hiring banner with a group of diverse professionals"
          fill
          priority
          className="object-cover"
          data-ai-hint="we're hiring"
        />
        
        <div className="relative z-10 flex h-full flex-col items-center justify-center text-center text-white px-4">
          <h1 className="font-headline text-4xl md:text-5xl font-bold">
            Current Openings
          </h1>
          <p className="mt-4 text-lg md:text-xl font-light">
            Find your next opportunity with Bigfoot Logistics.
          </p>
        </div>
      </section>

      <OpenPositionsClient />
    </div>
  );
}
