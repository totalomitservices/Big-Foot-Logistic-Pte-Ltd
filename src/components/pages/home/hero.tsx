import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { PlaceHolderImages } from '@/lib/placeholder-images';

const heroImage = PlaceHolderImages.find((img) => img.id === 'hero-image');

export default function Hero() {
  return (
    <section id="home" className="relative h-screen w-full">
      {heroImage && (
        <Image
          src={heroImage.imageUrl}
          alt={heroImage.description}
          fill
          priority
          className="object-cover"
          data-ai-hint={heroImage.imageHint}
        />
      )}
      <div className="absolute inset-0 bg-primary/70" />
      <div className="relative z-10 flex h-full items-center justify-center text-white px-4 md:px-12 lg:px-24">
        <div className="flex flex-col items-start max-w-2xl">
          <h1 className="font-headline text-5xl md:text-7xl font-bold uppercase tracking-tighter drop-shadow-lg">
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
      </div>
    </section>
  );
}
