
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import TrackingFormDialog from './tracking-form-dialog';

const heroImage = PlaceHolderImages.find((img) => img.id === 'hero-image');

export default function Hero() {
  return (
    <section id="home" className="relative w-full h-[90vh] md:h-screen" aria-labelledby="hero-heading">
      {heroImage && (
        <Image
          src={heroImage.imageUrl}
          alt={heroImage.description}
          fill
          priority
          sizes="100vw"
          className="object-cover hero-image"
          data-ai-hint={heroImage.imageHint}
        />
      )}

      <div className="relative z-10 flex h-full flex-col items-center justify-center text-center text-white px-4">
        <div className="flex flex-col items-center max-w-3xl bg-black/50 p-8 rounded-lg">
          <h1 id="hero-heading" className="font-headline text-4xl md:text-5xl font-bold uppercase tracking-tighter drop-shadow-lg">
            Moving Your World,
            <br />
            One Shipment at a Time.
          </h1>
          <p className="mt-6 max-w-2xl text-lg md:text-xl text-gray-200 drop-shadow">
            Global logistics and supply chain solutions, tailored for your business needs. We ensure your cargo travels safely and arrives on time, every time.
          </p>
          <div className="mt-8 flex flex-col items-center sm:flex-row gap-4">
            <Button
              asChild
              size="lg"
              variant="default"
              className="transition-all duration-300 transform hover:scale-105 shadow-lg w-full sm:w-auto"
            >
              <Link href="/about/group-of-companies">Group Of Companies</Link>
            </Button>
            <TrackingFormDialog />
          </div>
        </div>
      </div>
    </section>
  );
}
