
import Hero from '@/components/pages/home/hero';
import Services from '@/components/pages/home/services';
import dynamic from 'next/dynamic';
import type { Metadata } from 'next';

const WhyChooseUs = dynamic(() => import('@/components/pages/home/why-choose-us'), {
  loading: () => <div className="h-[50vh] w-full bg-secondary animate-pulse" />,
});

const LogoWall = dynamic(() => import('@/components/pages/home/logo-wall'), {
  loading: () => <div className="h-[50vh] w-full bg-background animate-pulse" />,
});

export const metadata: Metadata = {
  title: 'Bigfoot Logistics | Your Trusted Partner in Global Supply Chain Solutions',
  description: 'Bigfoot Logistics offers reliable and innovative logistics and supply chain solutions worldwide. From freight forwarding to warehousing, we are committed to driving your business forward.',
};

export default function Home() {
  return (
    <>
      <Hero />
      <Services />
      <WhyChooseUs />
      <LogoWall />
    </>
  );
}
