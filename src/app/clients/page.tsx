
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { Card } from '@/components/ui/card';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Our Clients | Bigfoot Logistics',
};

const clients = [
  {
    name: 'Auric Pacific',
    logoUrl: 'https://raw.githubusercontent.com/swathitom1207/logo-/main/AURIC%20PACIFIC%20logo.jpg',
    description: 'A leading provider of logistics and supply chain solutions in Asia, focusing on efficient transport and warehousing services.',
  },
  {
    name: 'BC Ban Choon Marketing PTE LTD',
    logoUrl: 'https://raw.githubusercontent.com/swathitom1207/logo-/main/BC%20BAN%20CHOON%20MARKETTING%20PTE%20LTD%20logo.png',
    description: 'A trusted distributor of consumer and industrial products in Singapore, known for reliable supply chain management.',
  },
  {
    name: 'Foodfare',
    logoUrl: 'https://raw.githubusercontent.com/swathitom1207/logo-/main/FOODFARE%20logo.png',
    description: 'A food and beverage service provider offering catering and dining solutions across corporate, healthcare, and educational sectors.',
  },
  {
    name: 'PSA',
    logoUrl: 'https://raw.githubusercontent.com/swathitom1207/logo-/main/PSA%20logo.jpg',
    description: 'One of the world’s top port operators, specializing in container transshipment and maritime services globally.',
  },
  {
    name: 'Samsung',
    logoUrl: 'https://raw.githubusercontent.com/swathitom1207/logo-/main/SAMSUNG%20logo.webp',
    description: 'A global technology giant offering consumer electronics, mobile devices, and semiconductor solutions with innovation at its core.',
  },
  {
    name: 'Singapore Jamco Private Limited',
    logoUrl: 'https://raw.githubusercontent.com/swathitom1207/logo-/main/SINGAPORE%20JAMCO%20PRIVATE%20LIMITED%20logo.png',
    description: 'A leading aerospace engineering company providing aircraft cabin solutions, maintenance, and refurbishment services.',
  },
  {
    name: 'SPH',
    logoUrl: 'https://raw.githubusercontent.com/swathitom1207/logo-/main/SPH%20logo.png',
    description: 'A major media organization in Singapore involved in publishing, digital platforms, and property development.',
  },
  {
    name: 'Swensen’s',
    logoUrl: 'https://raw.githubusercontent.com/swathitom1207/logo-/main/SWENSENS%20logo.png',
    description: 'An international restaurant chain known for its premium ice cream offerings and family-friendly dining experience.',
  },
  {
    name: 'YCH',
    logoUrl: 'https://raw.githubusercontent.com/swathitom1207/logo-/main/YCH%20logo.avif',
    description: 'A supply chain and logistics provider offering end-to-end solutions, including warehousing, freight forwarding, and distribution.',
  },
  {
    name: 'Changi Airport, Singapore',
    logoUrl: 'https://raw.githubusercontent.com/swathitom1207/logo-/main/changi%20airport%20SINGAPORE%20logo.png',
    description: 'A world-class airport recognized for its efficiency, customer service, and innovation in aviation and passenger experience.',
  },
  {
    name: 'Changi General Hospital',
    logoUrl: 'https://raw.githubusercontent.com/KAVI9715/sample-content/main/changi-general-hospital-logo-png_seeklogo-348653.png',
    description: 'A leading healthcare institution providing comprehensive medical services and patient care with a focus on community well-being.',
  },
  {
    name: 'Choice Logistics',
    logoUrl: 'https://raw.githubusercontent.com/swathitom1207/logo-/main/choice%20logistics%20logo.avif',
    description: 'A logistics service provider offering customized transport and distribution solutions across various industries in Singapore.',
  },
  {
    name: 'DHL Express',
    logoUrl: 'https://raw.githubusercontent.com/swathitom1207/logo-/main/dhl%20express%20logo.png',
    description: 'A global leader in express logistics, specializing in fast and reliable international shipping and courier services.',
  },
  {
    name: 'FairPrice',
    logoUrl: 'https://raw.githubusercontent.com/swathitom1207/logo-/main/fairprice%20logo.jpg',
    description: 'Singapore’s largest supermarket chain, providing affordable groceries and household essentials to meet everyday needs.',
  },
  {
    name: 'SIA Engineering',
    logoUrl: 'https://raw.githubusercontent.com/swathitom1207/logo-/main/sia%20engineering%20logo.jpg',
    description: 'A top aerospace engineering company offering aircraft maintenance, repair, and overhaul services with high safety and quality standards.',
  },
];


export default function ClientsPage() {
  return (
    <div className="relative bg-background text-foreground pt-24">
      {/* Hero Section */}
       <section
        className="relative w-full bg-cover bg-center h-[40vh] md:h-[50vh]"
      >
        <Image 
            src="https://raw.githubusercontent.com/Ram-0609/Bigfoot-Logistics-Images/refs/heads/main/Clients.jpg" 
            alt="Clients hero"
            fill
            priority
            className="object-cover"
            data-ai-hint="client partnership"
        />
        
        <div className="relative z-10 flex h-full flex-col items-start justify-center text-left text-white px-4 md:px-12 lg:px-24">
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
                className="grid md:grid-cols-2 gap-12 items-center"
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
