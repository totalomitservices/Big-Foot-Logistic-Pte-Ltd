
'use client';

import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Rocket } from 'lucide-react';

const heroImage = PlaceHolderImages.find((img) => img.id === 'hero-image');

export default function Hero() {

  return (
    <section id="home" className="relative w-full h-[90vh] md:h-screen">
      {heroImage && (
        <Image
          src={heroImage.imageUrl}
          alt={heroImage.description}
          fill
          priority
          className="object-cover hero-image"
          data-ai-hint={heroImage.imageHint}
        />
      )}
      <div className="relative z-10 flex h-full flex-col items-center justify-center text-center text-white px-4">
        <div className="flex flex-col items-center max-w-3xl">
          <h1 className="font-headline text-4xl md:text-5xl font-bold uppercase tracking-tighter drop-shadow-lg">
            Moving Your World,
            <br />
            One Shipment at a Time.
          </h1>
          <p className="mt-6 max-w-2xl text-lg md:text-xl text-gray-200 drop-shadow">
            Global logistics and supply chain solutions, tailored for your business needs. We ensure your cargo travels safely and arrives on time, every time.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-4">
            <Button
              asChild
              size="lg"
              variant="secondary"
              className="transition-all duration-300 transform hover:scale-105 shadow-lg"
            >
              <Link href="#services">Read More</Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="accent"
              className="transition-all duration-300 transform hover:scale-105 shadow-lg"
            >
              <Link href="/route-optimizer">
                <Rocket className="mr-2" /> Track Your Shipment
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
