
import Image from 'next/image';

export default function LiveStockHandlingPage() {
  const listClassName = "list-disc list-inside space-y-2 text-lg text-muted-foreground";

  return (
    <div className="bg-background text-foreground">
      {/* Hero Section */}
      <section className="relative w-full h-[40vh] md:h-[60vh]">
        <Image
          src="https://github.com/Ram-0609/Bigfoot-Logistics-Images/blob/main/Live%20Stock%20Handling.jpg?raw=true"
          alt="Safe handling of livestock"
          fill
          priority
          className="object-cover"
          data-ai-hint="livestock transport"
        />
        <div className="absolute inset-0 bg-primary/70" />
        <div className="relative z-10 flex h-full flex-col items-center justify-center text-center text-white px-4">
          <h1 className="font-headline text-4xl md:text-5xl font-semibold">
            Live Stock Handling
          </h1>
          <p className="mt-4 text-lg md:text-xl font-light">
            Expert care for your valuable live assets.
          </p>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto space-y-12">
            <div>
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                We handle all kinds of Livestock including Poultry, Cattle, and others. Our Cargo handling team has relevant experience and expertise in handling of Livestock. Livestock is the KORBAN IBADAT Project awarded to us in the year 2005 and is an ongoing project. This is a hallmark of our perfection in executing a project. The planning skills of our Operations staff mean that your Livestock will be handled with extreme care and will reach the destination safely & on time. Handling of specialized Livestock requires particular skills – We plan each cargo carefully to ensure a balanced handling; ship carefully to allow a safe and comfortable trip for your livestock Our services in this area include
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
