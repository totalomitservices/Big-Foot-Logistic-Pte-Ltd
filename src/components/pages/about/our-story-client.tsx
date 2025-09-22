
'use client';

import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardHeader, CardTitle } from '@/components/ui/card';
import { ArrowRight, Users, ShieldCheck, Truck, Rocket, Award, CalendarDays } from 'lucide-react';

const coreValues = [
    {
        icon: CalendarDays,
        title: "30+ Years of Experience",
        description: "With over three decades in the logistics industry, we have the expertise to handle all your shipping needs.",
    },
    {
        icon: ShieldCheck,
        title: "Proven Reliability",
        description: "With decades of experience, we have an exceptional customer retention rate that speaks to our dependability.",
    },
    {
        icon: Truck,
        title: "Comprehensive Solutions",
        description: "We offer a full suite of logistics services under one roof, providing seamless, end-to-end solutions.",
    },
];

export default function OurStoryClient() {
  return (
    <div className="relative bg-background text-foreground">
      {/* Hero Section */}
      <section className="relative w-full h-[40vh] md:h-[50vh]">
        <Image
          src="https://raw.githubusercontent.com/Ram-0609/Bigfoot-Logistics-Images/main/Our%20story.jpg"
          alt="Team collaborating on a logistics plan at Bigfoot Logistics"
          fill
          priority
          className="object-cover"
          data-ai-hint="logistics planning"
        />
        
        <div className="relative z-10 flex h-full flex-col items-start justify-center text-left text-white px-4 md:px-12 lg:px-24">
          <h1 className="font-headline text-4xl md:text-5xl font-bold drop-shadow-lg text-black">
            Our Story
          </h1>
          <p className="mt-4 text-lg md:text-xl font-light drop-shadow-lg text-black">
            Building trust in logistics since 1992.
          </p>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-16 lg:py-24 bg-secondary">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="text-3xl font-headline font-bold text-primary mb-4">Who We Are</h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Founded in 1992, BIG FOOT LOGISTIC PTE LTD started with a simple goal: to provide reliable and efficient logistics services that put our customers first. Over the years, we have grown steadily, adapting to the ever-changing needs of the industry while staying true to our core values of trust and service excellence.
            </p>
          </div>

          <div className="relative max-w-4xl mx-auto">
            <div className="absolute left-1/2 -translate-x-1/2 h-full w-0.5 bg-border hidden md:block" aria-hidden="true"></div>
            
            <div className="space-y-12 md:space-y-20">

              {/* Our Journey */}
              <div className="relative md:grid md:grid-cols-2 gap-12 items-center">
                <div className="md:order-2">
                  <div className="relative aspect-video shadow-xl overflow-hidden rounded-lg">
                    <Image src="https://raw.githubusercontent.com/Ram-0609/Bigfoot-Logistics-Images/main/businessman-application-human-digital-business.jpg" alt="Businessmen shaking hands, symbolizing a trusted partnership" fill className="object-cover" data-ai-hint="team handshake" />
                  </div>
                </div>
                <div className="mt-8 md:mt-0 md:text-right">
                  <h3 className="text-2xl font-headline font-bold text-primary mb-4">Our Journey of Trust</h3>
                  <p className="text-lg text-muted-foreground leading-relaxed">
                    Our journey has always been about the relationships we nurture. Many of our clients have been with us for over 30 years, a testament to the loyalty and confidence we’ve earned. With an outstanding 99.9% customer retention rate over the past 12 years, we are more than just a service provider—we are a trusted partner in growth.
                  </p>
                </div>
                <div className="hidden md:flex absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 items-center justify-center">
                    <div className="w-4 h-4 bg-secondary absolute ring-4 ring-border rounded-full z-10" aria-hidden="true"></div>
                    <div className="p-3 bg-accent text-accent-foreground rounded-full shadow-lg z-20"><Rocket className="w-6 h-6" aria-hidden="true" /></div>
                </div>
              </div>

              {/* Complete Solutions */}
              <div className="relative md:grid md:grid-cols-2 gap-12 items-center">
                <div className="md:order-1">
                   <div className="relative aspect-video shadow-xl overflow-hidden rounded-lg">
                    <Image src="https://raw.githubusercontent.com/Ram-0609/Bigfoot-Logistics-Images/main/our%20story%20img%202.jpg" alt="A digital representation of a global logistics network" fill className="object-cover" data-ai-hint="logistics network" />
                  </div>
                </div>
                <div className="mt-8 md:mt-0 md:order-2">
                  <h3 className="text-2xl font-headline font-bold text-primary mb-4">Complete Logistics Solutions</h3>
                  <p className="text-lg text-muted-foreground leading-relaxed">
                    Today, BIG FOOT LOGISTIC is a recognized complete logistics solutions provider. We offer services from transportation and warehousing to freight forwarding, permit clearance, and manpower management. Supported by a skilled team with both local and international expertise, we deliver value-driven solutions that help businesses succeed at every stage of their supply chain.
                  </p>
                </div>
                <div className="hidden md:flex absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 items-center justify-center">
                    <div className="w-4 h-4 bg-secondary absolute ring-4 ring-border rounded-full z-10" aria-hidden="true"></div>
                    <div className="p-3 bg-accent text-accent-foreground rounded-full shadow-lg z-20"><Award className="w-6 h-6" aria-hidden="true" /></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quote Highlight */}
      <section className="py-16 lg:py-24 bg-primary text-primary-foreground">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center max-w-3xl">
            <blockquote className="text-2xl italic">
                "Our success is built on the trust of our clients. We are not just moving cargo; we are building partnerships that last."
            </blockquote>
            <p className="mt-4 text-right text-accent font-semibold">- CEO, Bigfoot Logistics</p>
          </div>
      </section>
      
       {/* What Makes Us Different */}
      <section className="py-16 lg:py-24 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
             <div className="text-center mb-12">
              <h2 className="text-3xl font-headline font-bold text-primary">What Makes Us Different</h2>
            </div>
            <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
              {coreValues.map((value) => {
                const Icon = value.icon;
                return (
                  <Card key={value.title} className="text-center border-0 shadow-none bg-transparent group">
                    <CardHeader className="items-center">
                      <div className="bg-secondary p-4 shadow-lg transition-all duration-300 group-hover:scale-110 group-hover:shadow-accent/30 group-hover:shadow-xl">
                        <Icon className="h-10 w-10 text-accent" aria-hidden="true" />
                      </div>
                      <CardTitle className="mt-4 font-headline text-xl">{value.title}</CardTitle>
                      <p className="mt-2 text-base text-muted-foreground">{value.description}</p>
                    </CardHeader>
                  </Card>
                );
              })}
            </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-secondary">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center">
            <h2 className="text-2xl font-headline font-bold text-primary mb-4">Ready to see our vision in action?</h2>
            <Button asChild size="lg" variant="outline" className="btn-animated-border transition-all duration-300 transform hover:scale-105">
              <Link href="/about/vision-mission">
                <span>Discover our Vision & Mission <ArrowRight className="ml-2 inline" aria-hidden="true" /></span>
              </Link>
            </Button>
        </div>
      </section>

    </div>
  );
}
