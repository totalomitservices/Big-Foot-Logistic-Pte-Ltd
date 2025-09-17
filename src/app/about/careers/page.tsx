
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

export default function CareersPage() {
  return (
    <div className="bg-background text-foreground">
      {/* Hero Section */}
      <section className="relative h-[60vh] w-full">
        <Image
          src="https://picsum.photos/seed/careers-hero/1920/400"
          alt="Diverse team working together in an office"
          fill
          priority
          className="object-cover"
          data-ai-hint="diverse team"
        />
        <div className="absolute inset-0 bg-primary/70" />
        <div className="relative z-10 flex h-full flex-col items-center justify-center text-center text-white px-4">
          <h1 className="font-headline text-4xl md:text-5xl font-bold">
            Join Our Team
          </h1>
          <p className="mt-4 text-lg md:text-xl font-light">
            Be a part of a company that moves the world.
          </p>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-headline font-bold text-primary">
              Grow With Us
            </h2>
            <p className="mt-4 text-lg text-muted-foreground leading-relaxed">
              At Bigfoot Logistics, we believe our people are our greatest asset. We are always looking for talented, passionate individuals to join our growing team. Explore our open positions and find where you fit in.
            </p>
            <div className="mt-12">
              <Button asChild size="lg" variant="accent">
                <Link href="#contact">
                  View Open Positions
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
