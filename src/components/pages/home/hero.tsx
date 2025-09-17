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
      <div className="relative z-10 flex h-full items-center justify-between text-white px-4 md:px-12 lg:px-24">
        <div className="flex flex-col items-start">
          <h1 className="font-headline text-2xl md:text-4xl font-normal uppercase tracking-tight drop-shadow-lg">
            Moving Your World,
            <br />
            One Shipment at a Time.
          </h1>
          <p className="mt-4 max-w-sm text-sm md:text-base text-gray-200 drop-shadow">
            Global logistics and supply chain solutions, tailored for your business needs. We ensure your cargo travels safely and arrives on time, every time.
          </p>
          <div className="mt-8">
            <Button
              asChild
              size="lg"
              className="border-2 border-[#C5A77D] bg-transparent text-[#C5A77D] hover:bg-[#C5A77D] hover:text-primary transition-all duration-300 transform hover:scale-105 shadow-lg"
            >
              <Link href="#services">Read More</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
