
import Image from 'next/image';

export default function OtherExpertisePage() {
  return (
    <div className="bg-background text-foreground">
      {/* Hero Section */}
      <section className="relative h-[40vh] w-full">
        <Image
          src="https://picsum.photos/seed/expertise-hero/1920/400"
          alt="Diverse logistics operations"
          fill
          priority
          className="object-cover"
          data-ai-hint="logistics operations"
        />
        <div className="absolute inset-0 bg-primary/70" />
        <div className="relative z-10 flex h-full flex-col items-center justify-center text-center text-white px-4">
          <h1 className="font-headline text-4xl md:text-5xl font-bold">
            Other Expertise
          </h1>
          <p className="mt-4 text-lg md:text-xl font-light">
            Specialized solutions for unique challenges.
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
              We are currently preparing the content for this page. Please check back later for more information on our other areas of expertise.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
