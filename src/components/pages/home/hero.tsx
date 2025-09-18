
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import TrackingForm from './tracking-form';

const heroImage = PlaceHolderImages.find((img) => img.id === 'hero-image');

export default function Hero() {
  return (
    <section id="home" className="relative w-full h-[70vh] md:h-screen">
      {heroImage && (
        <Image
          src={heroImage.imageUrl}
          alt={heroImage.description}
          fill
          priority
          className="object-contain"
          data-ai-hint={heroImage.imageHint}
        />
      )}
      <div className="absolute inset-0 bg-primary/30"></div>
      <div className="relative z-10 flex h-full flex-col items-center justify-center text-center text-white px-4 md:px-12 lg:px-24 w-full gap-8 md:flex-row md:justify-between md:text-left pt-20 md:pt-0">
        <div className="flex flex-col items-center md:items-start max-w-xl">
          <h1 className="font-headline text-3xl md:text-4xl font-bold uppercase tracking-tighter drop-shadow-lg">
            Moving Your World,
            <br />
            One Shipment at a Time.
          </h1>
          <p className="mt-6 max-w-lg text-lg md:text-xl text-gray-200 drop-shadow">
            Global logistics and supply chain solutions, tailored for your business needs. We ensure your cargo travels safely and arrives on time, every time.
          </p>
          <div className="mt-8">
            <Button
              asChild
              size="lg"
              variant="accent"
              className="transition-all duration-300 transform hover:scale-105 shadow-lg"
            >
              <Link href="#services">Read More</Link>
            </Button>
          </div>
        </div>
        <div className="w-full max-w-md">
            <TrackingForm />
        </div>
      </div>
    </section>
  );
}
