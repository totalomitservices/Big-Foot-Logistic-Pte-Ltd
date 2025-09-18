
import Image from 'next/image';

export default function CustomClearancePage() {
  const listClassName = "list-disc list-inside space-y-2 text-lg text-muted-foreground";

  return (
    <div className="bg-background text-foreground">
      {/* Hero Section */}
      <section className="relative w-full h-[50vh] md:h-[60vh]">
        <Image
          src="https://github.com/Ram-0609/Bigfoot-Logistics-Images/blob/main/Custom-Clearance.jpg?raw=true"
          alt="Customs clearance process"
          fill
          priority
          className="object-contain"
          data-ai-hint="customs documents"
        />
        <div className="absolute inset-0 bg-primary/70" />
        <div className="relative z-10 flex h-full flex-col items-center justify-center text-center text-white px-4">
          <h1 className="font-headline text-4xl md:text-5xl font-semibold">
            Custom Clearance
          </h1>
          <p className="mt-4 text-lg md:text-xl font-light">
            Streamlining your import and export processes.
          </p>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto space-y-12">

            <div>
              <h2 className="text-3xl font-headline font-bold text-primary mb-4">Customs Declaration</h2>
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                We offer wide variety of Customs Declaration services in order to help you for import and export custom clearance. For import consignments we help you with documentation processes such as original invoice, packing list, bill of landing/airway, bill endorsed by the importer or bank, insurance certificate, purchase order or letter of credit, import license and catalogue or literature if the goods are chemical for custom clearance services. Whereas for export clearance, export license or permit and sale contracts are required along with Invoice, Packing list and shipping instruction and other related documents. Once we are through with these documentation procedures, we help you in customs declarations easing your burden of customs declarations quickly and efficiently. Our services in this area include:
              </p>
              <ul className={listClassName}>
                <li>Guidance and consultancy on pre and post shipment services</li>
                <li>Liasoning and follow up with various Govt Organisations</li>
                <li>Documentation procedures i.e. preparation and handling of documents</li>
                <li>All post shipment formalities and endorsements</li>
              </ul>
            </div>

            <div>
              <h2 className="text-3xl font-headline font-bold text-primary mb-4">Insurance</h2>
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                Our Cargo Insurance services are rated amongst the best in the industry for we take care of your cargo’s Insurance right from the port of discharge to the port of destination, covering aspects of natural calamities, Fire, theft, pilferage etc. In case of short landing or damages / pilferages detected after landing inside port area, we arrange survey of damages occurred and assist our customers to file a claim with the insurance company, besides claiming duty remission, wherever applicable. Similarly, if any damages or pilferages take place after customs clearance, on route in transit, from port to final destination, we will arrange for a survey at the unloading point and seek compensation from the insurance company for the loss suffered. All the survey and the claim formalities will be completed simultaneously so that either the declaration and clearance of cargo at port or consumption of the cargo after delivery does not suffer any abnormal delay.
              </p>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
}
