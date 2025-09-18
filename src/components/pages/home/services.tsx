
import { servicesData } from '@/data/services';
import ServiceCard from './service-card';

export default function Services() {
  return (
    <section id="services" className="w-full bg-secondary">
      <div className="container mx-auto py-16 px-4 sm:px-6 lg:py-24 lg:px-8 text-center">
        <h2 className="text-4xl font-headline font-bold text-primary mb-4">
          What We Do
        </h2>
        <p className="max-w-2xl mx-auto text-lg text-muted-foreground mb-12">
          We provide a full spectrum of logistics services to meet your needs, ensuring efficiency and reliability from start to finish.
        </p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
        {servicesData.map((service) => (
          <ServiceCard key={service.id} service={service} />
        ))}
      </div>
    </section>
  );
}
