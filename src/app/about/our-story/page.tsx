
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { ArrowRight } from 'lucide-react';

export default function OurStoryPage() {
  return (
    <div className="bg-background text-foreground">
      {/* Hero Section */}
      <section className="relative h-[80vh] w-full">
        <Image
          src="https://github.com/Ram-0609/Bigfoot-Logistics-Images/blob/main/Our%20story.jpg?raw=true"
          alt="Team collaborating on a logistics plan"
          fill
          priority
          className="object-cover"
          data-ai-hint="logistics planning"
        />
        <div className="relative z-10 flex h-full flex-col items-start justify-center text-left text-white px-4 md:px-12 lg:px-24">
          <h1 className="font-headline text-4xl md:text-5xl font-bold drop-shadow-lg">
            Our Story
          </h1>
          <p className="mt-4 text-lg md:text-xl font-light drop-shadow-lg">
            Building trust in logistics since 1992.
          </p>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto space-y-12">
            
            {/* Who We Are */}
            <div>
              <h2 className="text-3xl font-headline font-bold text-primary mb-4">Who We Are</h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Founded in 1992, BIG FOOT LOGISTIC PTE LTD started with a simple goal: to provide reliable and efficient logistics services that put our customers first. Over the years, we have grown steadily, adapting to the ever-changing needs of the industry while staying true to our core values of trust and service excellence.
              </p>
            </div>

            {/* Our Journey */}
            <div>
              <h2 className="text-3xl font-headline font-bold text-primary mb-4">Our Journey</h2>
              <p className="text-lg text-muted-foreground leading-relaxed mb-4">
                Our journey has always been about the relationships we nurture. Many of our clients have been with us for over 30 years, reflecting the loyalty and confidence we’ve earned along the way. With an outstanding 99.9% customer retention rate over the past 12 years, we take pride in being more than just a service provider — we are a trusted partner in growth.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Today, BIG FOOT LOGISTIC is recognized as a complete logistics solutions provider, offering services from transportation and warehousing to freight forwarding, permit clearance, manpower management, and more. Supported by a skilled team with both local and international expertise, we continue to deliver value-driven solutions that help businesses succeed at every stage of their supply chain.
              </p>
            </div>

            {/* Quote Highlight */}
            <div className="border-l-4 border-accent pl-6 py-4">
              <blockquote className="text-xl italic text-primary">
                "Our success is built on the trust of our clients. We are not just moving cargo; we are building partnerships that last."
              </blockquote>
              <p className="mt-2 text-right text-muted-foreground">- CEO, Bigfoot Logistics</p>
            </div>

            {/* What Makes Us Different */}
            <div>
              <h2 className="text-3xl font-headline font-bold text-primary mb-4">What Makes Us Different</h2>
              <ul className="list-disc list-inside space-y-2 text-lg text-muted-foreground">
                <li><span className="font-semibold">Customer-Centric:</span> We build lasting relationships based on trust and mutual success.</li>
                <li><span className="font-semibold">Proven Reliability:</span> Decades of experience with an exceptional customer retention rate.</li>
                <li><span className="font-semibold">Comprehensive Solutions:</span> A full suite of logistics services under one roof.</li>
              </ul>
            </div>

          </div>

          {/* CTA */}
          <div className="text-center mt-20">
            <Button asChild size="lg" variant="accent">
              <Link href="/about/vision-mission">
                Discover our Vision & Mission <ArrowRight className="ml-2" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
