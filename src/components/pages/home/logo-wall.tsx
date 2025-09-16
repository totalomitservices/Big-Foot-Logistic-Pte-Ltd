import {
  TechCorpLogo,
  InnovateLogo,
  GlobalTradeLogo,
  ApexIndustriesLogo,
  QuantumLogisticsLogo,
  EcoFreightLogo,
} from '@/components/client-logos';

const logos = [
  { name: 'TechCorp', component: TechCorpLogo },
  { name: 'Innovate', component: InnovateLogo },
  { name: 'GlobalTrade', component: GlobalTradeLogo },
  { name: 'Apex Industries', component: ApexIndustriesLogo },
  { name: 'Quantum Logistics', component: QuantumLogisticsLogo },
  { name: 'EcoFreight', component: EcoFreightLogo },
];

export default function LogoWall() {
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
        <div className="mt-12 grid grid-cols-2 gap-8 md:grid-cols-3 lg:grid-cols-6 items-center">
          {logos.map((logo) => (
            <div key={logo.name} className="flex justify-center">
              <logo.component className="h-10 text-muted-foreground/60 transition-all duration-300 filter grayscale hover:grayscale-0 hover:text-foreground" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
