'use client';

import Image from 'next/image';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { Card } from '@/components/ui/card';
import { clients } from '@/data/clients';

export default function ClientsPage() {
  return (
    <div className="relative bg-background text-foreground">
      {/* Hero Section */}
       <section
        className="relative w-full bg-cover bg-center h-[40vh] md:h-[50vh]"
      >
        <Image 
            src="https://raw.githubusercontent.com/Ram-0609/Bigfoot-Logistics-Images/main/Clients.jpg" 
            alt="Handshake symbolizing a client partnership"
            fill
            priority
            className="object-cover"
            data-ai-hint="client partnership"
        />
        
        <div className="relative z-10 flex h-full flex-col items-start justify-center text-left text-white px-4 md:px-12 lg:px-24">
          <h1 className="font-headline text-4xl md:text-5xl font-bold">
            Our Clients
          </h1>
          <p className="mt-4 text-lg md:text-xl font-thin max-w-2xl">
            Delivering tailored logistics solutions across industries.
          </p>
          <div className="mt-8">
            <Button asChild size="lg" variant="accent">
              <Link href="#client-showcase">Discover Our Partnerships</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Client Showcase Section */}
      <section id="client-showcase" className="py-16 lg:py-24 bg-secondary">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-16">
            {clients.map((client, index) => (
              <div
                key={client.name}
                className="grid md:grid-cols-2 gap-12 items-center"
              >
                <div
                  className={`relative h-80 w-full md:h-96 ${index % 2 === 0 ? 'md:order-1' : 'md:order-2'}`}
                >
                  <Card className="h-full w-full bg-background flex items-center justify-center p-4">
                    <div className="relative h-full w-full">
                         <Image
                            src={client.logoUrl}
                            alt={`${client.name} logo`}
                            fill
                            className="object-contain"
                            sizes="(max-width: 768px) 100vw, 50vw"
                        />
                    </div>
                  </Card>
                </div>
                <div className={`${index % 2 === 0 ? 'md:order-2' : 'md:order-1'}`}>
                  <h3 className="text-2xl font-headline font-bold text-primary mb-4">
                    {client.name}
                  </h3>
                  <p className="text-lg text-muted-foreground leading-relaxed">
                    {client.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
