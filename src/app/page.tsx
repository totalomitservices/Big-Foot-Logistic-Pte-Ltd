
import Hero from '@/components/pages/home/hero';
import Services from '@/components/pages/home/services';
import dynamic from 'next/dynamic';

const WhyChooseUs = dynamic(() => import('@/components/pages/home/why-choose-us'), {
  loading: () => <div className="h-[50vh] w-full bg-secondary animate-pulse" />,
});

const LogoWall = dynamic(() => import('@/components/pages/home/logo-wall'), {
  loading: () => <div className="h-[50vh] w-full bg-background animate-pulse" />,
});

export default function Home() {
  return (
    <div className="relative">
      <Hero />
      <main>
        <Services />
        <WhyChooseUs />
        <LogoWall />
      </main>
    </div>
  );
}
