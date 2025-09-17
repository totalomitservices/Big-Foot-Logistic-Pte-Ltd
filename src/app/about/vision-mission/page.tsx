
import { Target, Rocket, Handshake } from 'lucide-react';
import Image from 'next/image';

const timelineEvents = [
  {
    icon: <Rocket className="h-8 w-8 text-accent" />,
    title: 'Our Vision',
    description: 'Our vision is to be the most trusted and innovative logistics partner, known for delivering seamless, end-to-end solutions that enable businesses to grow confidently worldwide. We strive to set new standards in service excellence, technology adoption, and customer satisfaction, staying ahead in a fast-changing world.',
  },
  {
    icon: <Target className="h-8 w-8 text-accent" />,
    title: 'Our Mission',
    description: 'Our mission is simple but powerful: to achieve sustainable growth while ensuring complete customer satisfaction. We do this by embracing technology, innovation, and a forward-thinking approach, supported by our skilled team and efficient processes. Every service we deliver is grounded in reliability, professionalism, and excellence, ensuring value for every client.',
  },
  {
    icon: <Handshake className="h-8 w-8 text-accent" />,
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
      
      {/* Timeline Section */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative max-w-2xl mx-auto">
            <div className="absolute left-1/2 -translate-x-1/2 h-full w-0.5 bg-border"></div>
            {timelineEvents.map((event, index) => (
              <div
                key={index}
                className="relative flex items-center mb-12"
              >
                <div className="hidden md:flex w-1/2">
                  {index % 2 === 0 ? <div /> : 
                    <div className="flex-1 pr-8 text-right">
                      <h3 className="text-2xl font-headline font-bold text-primary">{event.title}</h3>
                      <p className="mt-2 text-muted-foreground">{event.description}</p>
                    </div>
                  }
                </div>

                <div className="absolute left-1/2 -translate-x-1/2 bg-secondary p-3 rounded-full border-4 border-background">
                  {event.icon}
                </div>

                <div className="w-full md:w-1/2 md:pl-8">
                   <div className="flex-1">
                      <h3 className={`text-2xl font-headline font-bold text-primary ${index % 2 !== 0 ? 'md:hidden' : ''}`}>{event.title}</h3>
                      <p className={`mt-2 text-muted-foreground ${index % 2 !== 0 ? 'md:hidden' : ''}`}>{event.description}</p>
                      
                      {index % 2 !== 0 && (
                         <div className="hidden md:block">
                            <h3 className="text-2xl font-headline font-bold text-primary text-left">{event.title}</h3>
                            <p className="mt-2 text-muted-foreground text-left"></p>
                         </div>
                      )}
                    </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
