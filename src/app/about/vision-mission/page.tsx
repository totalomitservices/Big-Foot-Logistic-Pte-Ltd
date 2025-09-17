
import { Target, Rocket, Handshake } from 'lucide-react';
import Image from 'next/image';

const values = [
  {
    icon: <Rocket className="h-10 w-10 text-accent" />,
    title: 'Our Vision',
    description: 'Our vision is to be the most trusted and innovative logistics partner, known for delivering seamless, end-to-end solutions that enable businesses to grow confidently worldwide. We strive to set new standards in service excellence, technology adoption, and customer satisfaction, staying ahead in a fast-changing world.',
  },
  {
    icon: <Target className="h-10 w-10 text-accent" />,
    title: 'Our Mission',
    description: 'Our mission is simple but powerful: to achieve sustainable growth while ensuring complete customer satisfaction. We do this by embracing technology, innovation, and a forward-thinking approach, supported by our skilled team and efficient processes. Every service we deliver is grounded in reliability, professionalism, and excellence, ensuring value for every client.',
  },
  {
    icon: <Handshake className="h-10 w-10 text-accent" />,
    title: 'Our Values',
    description: 'We are guided by principles of integrity, customer focus, and a commitment to quality. These values are the foundation of our long-term partnerships and drive our daily operations.',
  },
];

export default function VisionMissionPage() {
  return (
    <div className="bg-background text-foreground">
      {/* Hero Section */}
      <section className="relative h-[60vh] w-full">
        <Image
          src="https://picsum.photos/seed/vision-hero/1920/400"
          alt="Compass pointing towards a destination"
          fill
          priority
          className="object-cover"
          data-ai-hint="direction compass"
        />
        <div className="absolute inset-0 bg-primary/70" />
        <div className="relative z-10 flex h-full flex-col items-center justify-center text-center text-white px-4">
          <h1 className="font-headline text-4xl md:text-5xl font-bold">
            Vision & Mission
          </h1>
          <p className="mt-4 text-lg md:text-xl font-light">
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
          <div className="relative max-w-4xl mx-auto">
             <div className="absolute left-1/2 -translate-x-1/2 h-full w-1 bg-border rounded-full"></div>
                {values.map((item, index) => (
                <div key={index} className="relative mb-12 animate-fade-in" style={{animationDelay: `${index * 200}ms`}}>
                    <div className="flex items-center">
                    <div className={`flex-1 ${index % 2 === 0 ? 'pr-8 text-right' : 'pl-8 text-left order-2'}`}>
                        <h3 className="text-2xl font-headline text-primary font-bold mb-2">{item.title}</h3>
                        <p className="text-muted-foreground leading-relaxed">{item.description}</p>
                    </div>
                    <div className="absolute left-1/2 -translate-x-1/2 z-10">
                        <div className="bg-background p-4 border-4 border-secondary shadow-lg group-hover:scale-110 transition-transform duration-300">
                           {item.icon}
                        </div>
                    </div>
                     <div className={`flex-1 ${index % 2 === 0 ? 'order-2' : ''}`}></div>
                    </div>
                </div>
                ))}
          </div>
        </div>
      </section>
    </div>
  );
}
