
'use client';
import Header from '@/components/layout/header';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

export default function CareersPage() {
  return (
    <div className="relative bg-background text-foreground">
      <Header />
      {/* Hero Section */}
      <section className="relative w-full h-[50vh] md:h-[60vh]">
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
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-headline font-bold text-primary text-center">
              Join the Big-Foot Family
            </h2>
            <p className="mt-4 text-lg text-muted-foreground leading-relaxed">
              At Big-Foot Logistic Pte Ltd, we believe that our people are our greatest asset. As a leader in innovative logistics solutions, we are committed to building a dynamic and inclusive workplace where every individual can grow and make a difference.
            </p>
            
            <div className="mt-12 space-y-8">
                <div>
                    <h3 className="text-2xl font-headline font-semibold text-primary mb-2">Why Work With Us?</h3>
                    <ul className="list-disc list-inside space-y-4 text-lg text-muted-foreground">
                        <li>
                            <span className="font-semibold">Innovative Environment:</span> Be a part of a company that embraces cutting-edge technology and strives for continuous improvement in every aspect of logistics and supply chain management.
                        </li>
                        <li>
                            <span className="font-semibold">Career Growth:</span> We are dedicated to your professional development. Whether you are just starting out or a seasoned professional, you will find opportunities to advance your career and achieve your goals.
                        </li>
                        <li>
                            <span className="font-semibold">Supportive Culture:</span> At Big-Foot Logistic, we foster a collaborative and supportive work environment. We believe in teamwork, open communication, and recognizing the contributions of each member.
                        </li>
                         <li>
                            <span className="font-semibold">Competitive Benefits & Bonuses:</span> Some of our positions offer joining and quarterly bonuses of up to $25,000. We also provide a comprehensive benefits package, including health insurance and opportunities for further training and certifications.
                        </li>
                    </ul>
                </div>
            </div>

            <div className="mt-12 text-center">
              <Button asChild size="lg" variant="accent">
                <Link href="/about/careers/open-positions">
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
