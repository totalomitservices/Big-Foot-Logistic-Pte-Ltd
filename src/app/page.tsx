
import Hero from '@/components/pages/home/hero';
import Services from '@/components/pages/home/services';
import WhyChooseUs from '@/components/pages/home/why-choose-us';
import LogoWall from '@/components/pages/home/logo-wall';

export default function Home() {
  return (
    <>
      <Hero />
      <main>
        <Services />
        <WhyChooseUs />
        <LogoWall />
      </main>
    </>
  );
}
