
import Header from '@/components/layout/header';
import Hero from '@/components/pages/home/hero';
import Services from '@/components/pages/home/services';
import WhyChooseUs from '@/components/pages/home/why-choose-us';
import LogoWall from '@/components/pages/home/logo-wall';

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-background text-foreground">
      <div className="relative">
        <Header />
        <Hero />
      </div>
      <main className="flex-grow">
        <Services />
        <WhyChooseUs />
        <LogoWall />
      </main>
    </div>
  );
}
