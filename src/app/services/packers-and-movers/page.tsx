
import Image from 'next/image';

export default function PackersAndMoversPage() {
  const listClassName = "list-disc list-inside space-y-4 text-lg text-muted-foreground";

  return (
    <div className="bg-background text-foreground">
      {/* Hero Section */}
      <section className="relative h-[60vh] w-full">
        <Image
          src="https://github.com/Ram-0609/Bigfoot-Logistics-Images/blob/main/Packers-and-Movers-768x513.jpg?raw=true"
          alt="Packers and movers carefully handling items"
          fill
          priority
          className="object-cover"
          data-ai-hint="moving boxes"
        />
        <div className="absolute inset-0 bg-primary/70" />
        <div className="relative z-10 flex h-full flex-col items-center justify-center text-center text-white px-4">
          <h1 className="font-headline text-4xl md:text-5xl font-semibold">
            Packers and Movers
          </h1>
          <p className="mt-4 text-lg md:text-xl font-light">
            Your trusted partner for a seamless move.
          </p>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto space-y-12">

            <div>
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                Big-Foot Packers and Movers provide packing and Moving Services on truly personalized basis, we provide tailor made solutions for according to your every need. Our packing and moving services contains safely packing of all your goods in related packing materials in which they can be relocated easily. Each and every item is packed according to its priority based upon its delicacy and importance. We are here using world class packing materials to protect goods from natural and unnatural disasters. The material we use in packaging of goods not only save your belongings from outer environment even it help us to make relocation easier and damage free. Every items are packed and marked separately so that those can be easily unpacked and identified by the team who are going to be re-settle them at destination point. While in the moving process we take care about the fuss and furriers of movement of consignment of your goods and items to be relocated to places. In this process we take care that goods are to be transferred to other location are loaded in carriers in which they can be safely moved or whether they are according to the need. You’re going to get free estimate by getting in contact with us for the below Movers services.
              </p>
              <ul className={listClassName}>
                <li>Corporate Move</li>
                <li>Office Move</li>
                <li>Residential Move</li>
                <li>Hospital Equipment Move</li>
                <li>Furniture Move</li>
                <li>Musical Instruments Move</li>
                <li>International Move</li>
                <li>Packing</li>
              </ul>
            </div>
            
            <div className="relative w-full aspect-video">
                <Image
                    src="https://raw.githubusercontent.com/swathitom1207/logo-image-/refs/heads/main/Packers%20and%20Movers%202.webp"
                    alt="Moving truck"
                    fill
                    className="object-cover rounded-lg shadow-lg"
                    data-ai-hint="moving truck"
                />
            </div>

          </div>
        </div>
      </section>
    </div>
  );
}
