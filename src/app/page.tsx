import Header from '@/components/layout/header';
import Hero from '@/components/pages/home/hero';
import Services from '@/components/pages/home/services';
import WhyChooseUs from '@/components/pages/home/why-choose-us';
import LogoWall from '@/components/pages/home/logo-wall';
import RouteOptimizer from '@/components/pages/home/route-optimizer';
import Footer from '@/components/layout/footer';

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-background text-foreground">
      <Header />
      <main className="flex-grow">
        <Hero />
        <Services />
        <WhyChooseUs />
        <RouteOptimizer />
        <LogoWall />
      </main>
      <Footer />
    </div>
  );
}
