
'use client';

import Image from 'next/image';

const values = [
  {
    title: 'Our Vision',
    description: 'Our vision is to be the most trusted and innovative logistics partner, known for delivering seamless, end-to-end solutions that enable businesses to grow confidently worldwide. We strive to set new standards in service excellence, technology adoption, and customer satisfaction, staying ahead in a fast-changing world.',
  },
  {
    title: 'Our Mission',
    description: 'Our mission is simple but powerful: to achieve sustainable growth while ensuring complete customer satisfaction. We do this by embracing technology, innovation, and a forward-thinking approach, supported by our skilled team and efficient processes. Every service we deliver is grounded in reliability, professionalism, and excellence, ensuring value for every client.',
  },
  {
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
             <div className="absolute left-1/2 -translate-x-1/2 h-full w-1 bg-border rounded-full hidden md:block"></div>
                {values.map((item, index) => (
                <div key={index} className={`relative mb-12 animate-fade-in md:flex ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} items-center w-full`}>
                    <div className="md:w-5/12">
                         <div className="relative md:absolute left-1/2 -translate-x-1/2 z-10">
                          {/* Icon removed as requested */}
                        </div>
                    </div>
                     <div className="md:w-full">
                         <div className={`p-6 bg-background shadow-lg text-left`}>
                             <h3 className="text-2xl font-headline text-primary font-bold mb-2">{item.title}</h3>
                             <p className="text-muted-foreground leading-relaxed">{item.description}</p>
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
