
'use client';

import Image from 'next/image';
import useEmblaCarousel from 'embla-carousel-react';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import { useCallback } from 'react';
import { Button } from '@/components/ui/button';

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
  { name: 'Fairprice', src: 'https://raw.githubusercontent.com/swathitom1207/logo-/main/fairprice%20logo.jpg' },
  { name: 'SIA Engineering', src: 'https://raw.githubusercontent.com/swathitom1207/logo-/main/sia%20engineering%20logo.jpg' },
];

const duplicatedLogos = [...logos, ...logos, ...logos, ...logos];

export default function LogoWall() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true });

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  return (
    <section id="clients" className="py-16 lg:py-24 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-4xl font-headline font-bold text-primary">
            Trusted by Industry Leaders
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">
            We partner with businesses of all sizes to power their supply chains and drive growth.
          </p>
        </div>
        <div className="mt-12 relative">
          <div className="overflow-hidden" ref={emblaRef}>
            <div className="flex">
              {duplicatedLogos.map((logo, index) => (
                <div key={`${logo.name}-${index}`} className="flex-shrink-0 flex-[0_0_25%] min-w-0 mx-4">
                  <div className="relative h-24 w-full transition-all duration-300 filter grayscale hover:grayscale-0 transform hover:scale-110">
                    <Image
                      src={logo.src}
                      alt={logo.name}
                      fill
                      className="object-contain"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
           <div className="absolute top-1/2 -translate-y-1/2 left-[-1rem] right-[-1rem] flex justify-between">
            <Button variant="outline" size="icon" onClick={scrollPrev}>
              <ArrowLeft className="h-4 w-4" />
            </Button>
            <Button variant="outline" size="icon" onClick={scrollNext}>
              <ArrowRight className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
