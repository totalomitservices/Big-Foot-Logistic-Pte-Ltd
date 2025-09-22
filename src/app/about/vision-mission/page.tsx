
import Image from 'next/image';
import { Rocket, Goal, Star } from 'lucide-react';
import type { Metadata } from 'next';

const values = [
  {
    title: 'Our Vision',
    description: 'Our vision is to be the most trusted and innovative logistics partner, known for delivering seamless, end-to-end solutions that enable businesses to grow confidently worldwide. We strive to set new standards in service excellence, technology adoption, and customer satisfaction, staying ahead in a fast-changing world.',
    icon: Goal,
  },
  {
    title: 'Our Mission',
    description: 'Our mission is simple but powerful: to achieve sustainable growth while ensuring complete customer satisfaction. We do this by embracing technology, innovation, and a forward-thinking approach, supported by our skilled team and efficient processes. Every service we deliver is grounded in reliability, professionalism, and excellence, ensuring value for every client.',
    icon: Rocket,
  },
  {
    title: 'Our Values',
    description: 'We are guided by principles of integrity, customer focus, and a commitment to quality. These values are the foundation of our long-term partnerships and drive our daily operations.',
    icon: Star,
  },
];

export const metadata: Metadata = {
    title: 'Vision & Mission | Bigfoot Logistics',
    description: 'Learn about the vision, mission, and guiding principles of Bigfoot Logistics. Discover what drives us to deliver excellence in logistics and supply chain management.',
};

export default function VisionMissionPage() {
  return (
    <div className="relative bg-background text-foreground">
      {/* Hero Section */}
      <section className="relative w-full h-[40vh] md:h-[50vh]">
        <Image
          src="https://raw.githubusercontent.com/Ram-0609/Bigfoot-Logistics-Images/main/vision-mission.jpg"
          alt="Compass pointing towards a destination, symbolizing our vision"
          fill
          priority
          className="object-cover"
          data-ai-hint="direction compass"
        />
        
        <div className="relative z-10 flex h-full flex-col items-start justify-center text-left text-white px-4 md:px-12 lg:px-24">
          <h1 className="font-headline text-4xl md:text-5xl font-bold">
            Vision & Mission
          </h1>
          <p className="mt-4 text-lg md:text-xl font-thin">
            Guiding our journey, defining our purpose.
          </p>
        </div>
      </section>
      
      {/* Values Section */}
      <section className="py-16 lg:py-24 bg-secondary">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
                <h2 className="text-3xl font-headline font-bold text-primary">Our Guiding Principles</h2>
            </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 lg:gap-8">
                {values.map((item) => {
                  const Icon = item.icon;
                  return (
                    <div key={item.title} className="relative mt-8">
                      <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 bg-primary text-accent-foreground rounded-full p-4 shadow-lg">
                          <Icon className="w-12 h-12 text-accent" aria-hidden="true" />
                      </div>
                      <div className="bg-card text-card-foreground rounded-lg shadow-lg h-full">
                          <div className="p-8 pt-20 text-center">
                              <h3 className="text-2xl font-headline text-primary font-bold mb-4">{item.title}</h3>
                              <p className="text-muted-foreground leading-relaxed">{item.description}</p>
                          </div>
                      </div>
                    </div>
                  );
                })}
          </div>
        </div>
      </section>
    </div>
  );
}
