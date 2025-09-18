
'use client';

import { useState, useRef, useEffect, useCallback } from 'react';
import Image from 'next/image';
import { gsap } from 'gsap';
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent } from '@/components/ui/dialog';
import { X, ArrowRight } from 'lucide-react';
import Link from 'next/link';

const logos = [
  { name: 'Auric Pacific', src: 'https://raw.githubusercontent.com/swathitom1207/logo-/main/AURIC%20PACIFIC%20logo.jpg', description: 'A leading food and beverage group in Singapore.', website: 'https://www.auricpacific.com/' },
  { name: 'BC Ban Choon Marketing', src: 'https://raw.githubusercontent.com/swathitom1207/logo-/main/BC%20BAN%20CHOON%20MARKETTING%20PTE%20LTD%20logo.png', description: 'A major player in the fresh produce industry, supplying fruits and vegetables across Singapore.', website: 'https://www.bctrading.com.sg/' },
  { name: 'Foodfare', src: 'https://raw.githubusercontent.com/swathitom1207/logo-/main/FOODFARE%20logo.png', description: 'A social enterprise that provides quality and affordable food in Singapore.', website: 'https://www.foodfare.com.sg/' },
  { name: 'PSA', src: 'https://raw.githubusercontent.com/swathitom1207/logo-/main/PSA%20logo.jpg', description: 'A leading global port group and trusted partner to cargo stakeholders.', website: 'https://www.globalpsa.com/' },
  { name: 'Samsung', src: 'https://raw.githubusercontent.com/swathitom1207/logo-/main/SAMSUNG%20logo.webp', description: 'A global leader in technology, electronics, and innovation.', website: 'https://www.samsung.com/' },
  { name: 'Singapore Jamco', src: 'https://raw.githubusercontent.com/swathitom1207/logo-/main/SINGAPORE%20JAMCO%20PRIVATE%20LIMITED%20logo.png', description: 'A premier provider of aircraft interior products and services.', website: 'https://www.jamco.co.jp/en/company/network/singapore.html' },
  { name: 'SPH', src: 'https://raw.githubusercontent.com/swathitom1207/logo-/main/SPH%20logo.png', description: 'A leading media organization in Asia, with a portfolio of newspapers, magazines, and digital platforms.', website: 'https://www.sph.com.sg/' },
  { name: 'Swensens', src: 'https://raw.githubusercontent.com/swathitom1207/logo-/main/SWENSENS%20logo.png', description: 'A beloved international ice cream brand known for its sundaes.', website: 'https://www.swensens.com.sg/' },
  { name: 'YCH', src: 'https://raw.githubusercontent.com/swathitom1207/logo-/main/YCH%20logo.avif', description: 'Singapore\'s leading integrated end-to-end supply chain management and logistics partner.', website: 'https://www.ych.com/' },
  { name: 'Changi Airport', src: 'https://raw.githubusercontent.com/swathitom1207/logo-/main/changi%20airport%20SINGAPORE%20logo.png', description: 'One of the world\'s busiest and best-rated international aviation hubs.', website: 'https://www.changiairport.com/' },
  { name: 'SIA Engineering', src: 'https://raw.githubusercontent.com/swathitom1207/logo-/main/sia%20engineering%20logo.jpg', description: 'A major provider of aircraft maintenance, repair, and overhaul (MRO) services in the Asia-Pacific region.', website: 'https://www.siaec.com.sg/' },
];

type Logo = typeof logos[0];

export default function LogoWall() {
  const [selectedLogo, setSelectedLogo] = useState<Logo | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  
  const logosRef = useRef<HTMLDivElement>(null);
  const animationRef = useRef<gsap.core.Tween | null>(null);

  const scrollSpeed = 0.1; // Slower speed

  useEffect(() => {
    if (!logosRef.current) return;
    
    const logosContainer = logosRef.current;
    const logosWidth = logosContainer.scrollWidth / 2;

    gsap.set(logosContainer, { x: 0 });

    animationRef.current = gsap.to(logosContainer, {
      x: -logosWidth,
      duration: logosWidth / (10 * scrollSpeed),
      ease: 'none',
      repeat: -1,
      modifiers: {
        x: gsap.utils.unitize(x => parseFloat(x) % logosWidth)
      }
    });

    return () => {
      animationRef.current?.kill();
    };
  }, [scrollSpeed]);

  const handleManualScroll = (direction: 'forward' | 'backward') => {
    if (!animationRef.current) return;

    const currentProgress = animationRef.current.progress();
    const newTime = animationRef.current.time() + (direction === 'forward' ? 5 : -5) * scrollSpeed;
    
    gsap.to(animationRef.current, {
        time: newTime,
        duration: 0.5,
        ease: 'power2.out',
    });
  };

  const handleLogoClick = (logo: Logo) => {
    setSelectedLogo(logo);
    setIsModalOpen(true);
  };
  
  const handleOpenChange = (open: boolean) => {
    setIsModalOpen(open);
  }


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
        
        <div 
            className="mt-12 w-full overflow-hidden relative group/carousel"
            onMouseEnter={() => animationRef.current?.pause()}
            onMouseLeave={() => animationRef.current?.play()}
        >
            <div 
              ref={logosRef} 
              className="flex w-max"
            >
              {[...logos, ...logos].map((logo, index) => (
                <div key={`${logo.name}-${index}`} className="flex-shrink-0 w-48 mx-4 p-2">
                  <div 
                    className="relative h-24 w-full transition-transform duration-300 transform hover:scale-110 cursor-pointer p-4 bg-white shadow-md rounded-lg"
                    onClick={() => handleLogoClick(logo)}
                    >
                    <Image
                      src={logo.src}
                      alt={logo.name}
                      fill
                      sizes="200px"
                      className="object-contain"
                    />
                  </div>
                </div>
              ))}
            </div>
            
            {/* Interactive Zones */}
            <div className="absolute inset-y-0 left-0 w-1/4 bg-gradient-to-r from-background to-transparent opacity-0 group-hover/carousel:opacity-100 transition-opacity duration-300 cursor-pointer" onClick={() => handleManualScroll('backward')}></div>
            <div className="absolute inset-y-0 right-0 w-1/4 bg-gradient-to-l from-background to-transparent opacity-0 group-hover/carousel:opacity-100 transition-opacity duration-300 cursor-pointer" onClick={() => handleManualScroll('forward')}></div>

        </div>
         <div className="mt-12 text-center">
            <Button asChild variant="accent" size="lg">
                <Link href="/clients">
                    View All Our Clients <ArrowRight className="ml-2"/>
                </Link>
            </Button>
        </div>
      </div>
      
        <Dialog open={isModalOpen} onOpenChange={handleOpenChange}>
            <DialogContent 
              className="p-0 border-none max-w-md w-full modal-content-glass text-primary-foreground shadow-2xl data-[state=open]:animate-modal-in data-[state=closed]:animate-modal-out"
              onOpenAutoFocus={(e) => e.preventDefault()}
            >
                {selectedLogo && (
                    <div className="p-8 text-center">
                        <div className="relative h-24 w-48 mx-auto mb-6">
                            <Image 
                                src={selectedLogo.src} 
                                alt={selectedLogo.name} 
                                fill 
                                className="object-contain"
                                sizes="200px"
                            />
                        </div>
                        <h3 className="text-2xl font-headline font-bold text-white mb-2">{selectedLogo.name}</h3>
                        <p className="text-primary-foreground/80 mb-6">{selectedLogo.description}</p>
                        {selectedLogo.website && (
                            <Button asChild variant="accent">
                                <a href={selectedLogo.website} target="_blank" rel="noopener noreferrer">
                                    Visit Website <ArrowRight className="ml-2"/>
                                </a>
                            </Button>
                        )}
                    </div>
                )}
            </DialogContent>
        </Dialog>
    </section>
  );
}
