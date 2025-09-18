
import Header from '@/components/layout/header';
import Image from 'next/image';

export default function TrainingPage() {
  return (
    <div className="relative bg-background text-foreground">
      <Header />
      {/* Hero Section */}
      <section className="relative w-full h-[50vh] md:h-[60vh]">
        <Image
          src="https://picsum.photos/seed/training-hero/1920/400"
          alt="Team in a training session"
          fill
          priority
          className="object-cover"
          data-ai-hint="corporate training"
        />
        <div className="absolute inset-0 bg-primary/70" />
        <div className="relative z-10 flex h-full flex-col items-center justify-center text-center text-white px-4">
          <h1 className="font-headline text-4xl md:text-5xl font-bold">
            Training
          </h1>
          <p className="mt-4 text-lg md:text-xl font-light">
            Empowering our team with knowledge and skills.
          </p>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-headline font-bold text-primary">
              Content Coming Soon
            </h2>
            <p className="mt-4 text-lg text-muted-foreground leading-relaxed">
              We are currently preparing the content for this page. Please check back later for more information on our Training programs.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
