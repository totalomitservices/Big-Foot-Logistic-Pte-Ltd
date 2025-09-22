
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { clients } from '@/data/clients';

const logos = clients.map(client => ({ name: client.name, src: client.logoUrl }));

const doubledLogos = [...logos, ...logos];

export default function LogoWall() {
  return (
    <section id="clients" className="py-16 lg:py-24 bg-background border-t border-border">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-4xl font-headline font-bold text-primary">
            Our Valuable Clients
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">
            We partner with businesses of all sizes to power their supply chains and drive growth.
          </p>
        </div>
        
        <div className="mt-12 w-full overflow-hidden group">
          <figure className="flex animate-scroll group-hover:[animation-play-state:paused]" aria-label="Our trusted clients">
            {doubledLogos.map((logo, index) => (
              <div key={`${logo.name}-${index}`} className="flex-shrink-0 mx-4">
                <div className="relative h-20 w-32 transition-transform duration-300 transform hover:scale-110 bg-white shadow-md rounded-lg p-2">
                  <Image
                    src={logo.src}
                    alt={`${logo.name} logo`}
                    fill
                    sizes="128px"
                    className="object-contain"
                  />
                </div>
              </div>
            ))}
          </figure>
        </div>

         <div className="mt-12 text-center">
            <Button asChild className="btn-animated-border" variant="outline">
                <Link href="/clients">
                    <span>View All Our Clients</span>
                </Link>
            </Button>
        </div>
      </div>
    </section>
  );
}
