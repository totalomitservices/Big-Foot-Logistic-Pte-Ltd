
import Image from 'next/image';
import type { Metadata } from 'next';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Land Transit | Bigfoot Logistics',
  description: 'Reliable and efficient ground transportation services including container trucking, cold chain, and dry cargo movement.'
};

export default function LandTransitPage() {

  return (
    <div className="relative bg-background text-foreground">
      {/* Hero Section */}
      <section className="relative w-full h-[40vh] md:h-[50vh]">
        <Image
          src="https://raw.githubusercontent.com/Ram-0609/Bigfoot-Logistics-Images/main/land%20transit%20.jpeg"
          alt="Truck on a highway"
          fill
          priority
          className="object-cover"
          data-ai-hint="land transport"
        />
        
        <div className="relative z-10 flex h-full flex-col items-start justify-center text-left text-white px-4 md:px-12 lg:px-24">
          <h1 className="font-headline text-4xl md:text-5xl font-semibold text-white drop-shadow-lg">
            <span style={{ backgroundColor: 'hsl(var(--primary))', padding: '0.2rem 0.6rem' }}>Land Transit</span>
          </h1>
          <p className="mt-4 text-lg md:text-xl font-light text-white drop-shadow-lg max-w-2xl">
            <span style={{ backgroundColor: 'hsl(var(--primary))', padding: '0.2rem 0.6rem' }}>Reliable and efficient ground transportation.</span>
          </p>
          <div className="mt-8">
            <Button asChild size="lg" variant="accent" className="transition-transform duration-300 hover:scale-105">
              <Link href="/contact">Get a Quote</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto space-y-12">

            <div>
              <h2 className="text-3xl font-headline font-bold text-primary mb-4">Container Trucking</h2>
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                We offer Quality Container Trucking services as per the comfortability of our customers. We acquaint ourselves as one of the most trusted Container trucking service providers in Singapore. Our pricing is among the best in the industry. We offer safe, dry, and secure storage and transportation of containers from reaching to a wide classification of customers. We offer a full line of dry containers, high cube container, open top, flat racks, tank, and refrigerated containers. Containers of all types – 10′, 20′, 24′, 40′, closed and open top are handled via our trucking service. We provide on time Containerized door to door services. We have our own fleet of containers and containerized vehicles. Our containers pass through the most stringent test before loading – like humidity check, leakage check, and floor check only after these tests a container in loaded and set for the road.
              </p>
            </div>
            
            <div>
              <h2 className="text-3xl font-headline font-bold text-primary mb-4">Cold Chain Movement</h2>
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                Our specialized services in Cold cargo movement include items like Food, Beverages, Fruits and Vegetables and other perishable items. Our Containers are equipped to handle perishables in refrigerated state by controlling the temperature to as low as -4’c -0’c. We have Specialty Containers 20 ft/40 ft/ 40ft High Cube Refrigerated Containers. These are containers that can be used for the movement of refrigerated Cargo. Specially designed insulation ensures minimum heat leakage and makes these containers suitable for extreme tropical and hot climatic conditions. Refrigerated containers are suited for domestic trucking application.
              </p>
            </div>

            <div>
              <h2 className="text-3xl font-headline font-bold text-primary mb-4">Dry Cargo Movement</h2>
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                We provide excellent services for dry cargo movement. The containers which we use for this purpose are built as per international standards, and are used for the movement of conventional dry cargo. These are used in domestic movement. Our container services are available for 20/40 ft size cargo. These containers offer the added advantage of extra volumetric capacity due to their additional height, and are useful in the movement of light and heavy cargo. Our dry cargo container comes in a wide range of sizes standard sizes 20ft – 6m to 40ft – 12m full size containers. They are made to be weatherproof and absolutely secure for your cargo. Our dry cargo containers can be used for Bulk cargo like Coal, Grains, Steel, Fertilizers, and others.
              </p>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
}
