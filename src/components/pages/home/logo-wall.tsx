
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import Link from 'next/link';

const logos = [
  { name: 'Auric Pacific', src: 'https://raw.githubusercontent.com/swathitom1207/logo-/main/AURIC%20PACIFIC%20logo.jpg' },
  { name: 'BC Ban Choon Marketing', src: 'https://raw.githubusercontent.com/swathitom1207/logo-/main/BC%20BAN%20CHOON%20MARKETTING%20PTE%20LTD%20logo.png' },
  { name: 'Foodfare', src: 'https://raw.githubusercontent.com/swathitom1207/logo-/main/FOODFARE%20logo.png' },
  { name: 'PSA', src: 'https://raw.githubusercontent.com/swathitom1207/logo-/main/PSA%20logo.jpg' },
  { name: 'Samsung', src: 'https://raw.githubusercontent.com/swathitom1207/logo-/main/SAMSUNG%20logo.webp' },
  { name: 'Singapore Jamco', src: 'https://raw.githubusercontent.com/swathitom1207/logo-/main/SINGAPORE%20JAMCO%20PRIVATE%20LIMITED%20logo.png' },
  { name: 'SPH', src: 'https://raw.githubusercontent.com/swathitom1207/logo-/main/SPH%20logo.png' },
  { name: 'Swensens', src: 'https://raw.githubusercontent.com/swathitom1207/logo-/main/SWENSENS%20logo.png' },
  { name: 'YCH', src: 'https://raw.githubusercontent.com/swathitom1207/logo-/main/YCH%20logo.avif' },
  { name: 'Changi Airport', src: 'https://raw.githubusercontent.com/swathitom1207/logo-/main/changi%20airport%20SINGAPORE%20logo.png' },
  { name: 'Changi General Hospital', src: 'https://raw.githubusercontent.com/KAVI9715/sample-content/main/changi-general-hospital-logo-png_seeklogo-348653.png' },
  { name: 'Choice Logistics', src: 'https://raw.githubusercontent.com/swathitom1207/logo-/main/choice%20logistics%20logo.avif' },
  { name: 'DHL Express', src: 'https://raw.githubusercontent.com/swathitom1207/logo-/main/dhl%20express%20logo.png' },
  { name: 'FairPrice', src: 'https://raw.githubusercontent.com/swathitom1207/logo-/main/fairprice%20logo.jpg' },
  { name: 'SIA Engineering', src: 'https://raw.githubusercontent.com/swathitom1207/logo-/main/sia%20engineering%20logo.jpg' },
];

const doubledLogos = [...logos, ...logos];

export default function LogoWall() {
  return (
    <section id="clients" className="py-16 lg:py-24 bg-background border-t border-border">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-4xl font-headline font-bold text-primary">
            Trusted by Industry Leaders
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">
            We partner with businesses of all sizes to power their supply chains and drive growth.
          </p>
        </div>
        
        <div className="mt-12 w-full overflow-hidden group">
          <figure className="flex animate-scroll group-hover:[animation-play-state:paused]" aria-label="Our trusted clients">
            {doubledLogos.map((logo, index) => (
              <div key={`${logo.name}-${index}`} className="flex-shrink-0 mx-4">
                <div className="relative h-20 w-32 transition-transform duration-300 transform hover:scale-110 bg-white shadow-md rounded-lg">
                  <Image
                    src={logo.src}
                    alt={`${logo.name} logo`}
                    fill
                    sizes="160px"
                    className="object-contain"
                  />
                </div>
              </div>
            ))}
          </figure>
        </div>

         <div className="mt-12 text-right">
            <Button asChild className="btn-animated-border" variant="outline">
                <Link href="/clients">
                    <span>View All Our Clients <ArrowRight className="ml-2 inline"/></span>
                </Link>
            </Button>
        </div>
      </div>
    </section>
  );
}
