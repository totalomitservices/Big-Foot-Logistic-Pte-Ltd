
'use client';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { Card } from '@/components/ui/card';

const clients = [
  {
    name: 'FairPrice',
    logoUrl: 'https://raw.githubusercontent.com/swathitom1207/logo-/main/fairprice%20logo.jpg',
    description: 'We provide efficient distribution and supply chain management for FairPrice, ensuring their wide range of products are always available to customers across Singapore.',
  },
  {
    name: 'Foodfare',
    logoUrl: 'https://raw.githubusercontent.com/swathitom1207/logo-/main/FOODFARE%20logo.png',
    description: 'Our tailored logistics solutions help Foodfare manage their food supply chain with precision, maintaining freshness and quality from source to service.',
  },
  {
    name: 'Swensen’s',
    logoUrl: 'https://raw.githubusercontent.com/swathitom1207/logo-/main/SWENSENS%20logo.png',
    description: 'For Swensen’s, we offer a temperature-controlled supply chain that guarantees their ice cream and other products are delivered in perfect condition.',
  },
  {
    name: 'Auric Pacific',
    logoUrl: 'https://raw.githubusercontent.com/swathitom1207/logo-/main/AURIC%20PACIFIC%20logo.jpg',
    description: 'We partner with Auric Pacific to manage their diverse portfolio of food and beverage brands, providing seamless warehousing and distribution services.',
  },
  {
    name: 'PSA',
    logoUrl: 'https://raw.githubusercontent.com/swathitom1207/logo-/main/PSA%20logo.jpg',
    description: 'As a key partner to PSA, we provide specialized port cargo handling and container transportation, contributing to the efficiency of the world’s busiest port.',
  },
  {
    name: 'SPH',
    logoUrl: 'https://raw.githubusercontent.com/swathitom1207/logo-/main/SPH%20logo.png',
    description: 'Our logistics services for SPH ensure timely and secure distribution of media and other materials, supporting their extensive network.',
  },
  {
    name: 'Samsung',
    logoUrl: 'https://raw.githubusercontent.com/swathitom1207/logo-/main/SAMSUNG%20logo.webp',
    description: 'We provide secure and specialized electronics logistics for Samsung, handling their high-value products with the utmost care and precision.',
  },
  {
    name: 'Changi Airport',
    logoUrl: 'https://raw.githubusercontent.com/swathitom1207/logo-/main/changi%20airport%20SINGAPORE%20logo.png',
    description: 'Our partnership with Changi Airport involves providing critical ground handling and air cargo logistics, ensuring smooth operations at one of the world\'s best airports.',
  },
  {
    name: 'Changi General Hospital',
    logoUrl: 'https://raw.githubusercontent.com/KAVI9715/sample-content/main/changi-general-hospital-logo-png_seeklogo-348653.png',
    description: 'We deliver specialized healthcare logistics for Changi General Hospital, ensuring that medical supplies and equipment are handled in compliance with strict regulatory standards.',
  },
  {
    name: 'DHL Express',
    logoUrl: 'https://raw.githubusercontent.com/swathitom1207/logo-/main/dhl%20express%20logo.png',
    description: 'In collaboration with DHL Express, we enhance their last-mile delivery and freight forwarding capabilities, providing reliable and swift logistics support.',
  },
  {
    name: 'Choice Logistics',
    logoUrl: 'https://raw.githubusercontent.com/swathitom1207/logo-/main/choice%20logistics%20logo.avif',
    description: 'We provide Choice Logistics with flexible warehousing and transportation solutions, supporting their mission to deliver exceptional service to their own clients.',
  },
  {
    name: 'YCH Group',
    logoUrl: 'https://raw.githubusercontent.com/swathitom1207/logo-/main/YCH%20logo.avif',
    description: 'Our collaboration with YCH Group focuses on integrated supply chain solutions, leveraging technology to optimize logistics from end to end.',
  },
  {
    name: 'Singapore Jamco',
    logoUrl: 'https://raw.githubusercontent.com/swathitom1207/logo-/main/SINGAPORE%20JAMCO%20PRIVATE%20LIMITED%20logo.png',
    description: 'We provide specialized logistics for Singapore Jamco’s aviation interior products, ensuring delicate components are handled with precision and care.',
  },
  {
    name: 'SIA Engineering',
    logoUrl: 'https://raw.githubusercontent.com/swathitom1207/logo-/main/sia%20engineering%20logo.jpg',
    description: 'Our partnership with SIA Engineering Company involves managing the complex logistics of aircraft maintenance, repair, and overhaul (MRO) operations.',
  },
];


export default function ClientsPage() {
  return (
    <div className="bg-background text-foreground">
      {/* Hero Section */}
       <section
        className="relative w-full bg-cover bg-center h-[50vh] md:h-[60vh]"
      >
        <Image 
            src="https://picsum.photos/seed/clients-hero/1920/1080" 
            alt="Clients hero"
            fill
            priority
            className="object-contain"
            data-ai-hint="collaboration handshake"
        />
        <div className="absolute inset-0 bg-primary/70" />
        <div className="relative z-10 flex h-full flex-col items-center justify-center text-center text-white px-4">
          <h1 className="font-headline text-4xl md:text-5xl font-bold">
            Our Clients
          </h1>
          <p className="mt-4 text-lg md:text-xl font-light max-w-2xl">
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
                className="grid md:grid-cols-2 gap-12 items-center animate-fade-in"
                style={{ animationDelay: `${index * 150}ms`, animationFillMode: 'backwards' }}
              >
                <div
                  className={`relative h-48 w-full md:h-64 ${index % 2 === 0 ? 'md:order-1' : 'md:order-2'}`}
                >
                  <Card className="h-full w-full bg-background flex items-center justify-center p-8">
                    <div className="relative h-full w-full">
                         <Image
                            src={client.logoUrl}
                            alt={`${client.name} logo`}
                            fill
                            className="object-contain"
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
