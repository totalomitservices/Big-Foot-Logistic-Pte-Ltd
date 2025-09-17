
import Image from 'next/image';

export default function OtherExpertisePage() {
    const listClassName = "list-disc list-inside space-y-2 text-lg text-muted-foreground";

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
          <div className="max-w-4xl mx-auto space-y-12">
            <div>
              <h2 className="text-3xl font-headline font-bold text-primary mb-4">Live Stock Handling</h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                We handle all kinds of Livestock including Poultry, Cattle, and others. Our Cargo handling team has relevant experience and expertise in handling of Livestock. Livestock is the KORBAN IBADAT Project awarded to us in the year 2005 and is an ongoing project. This is a hallmark of our perfection in executing a project. The planning skills of our Operations staff mean that your Livestock will be handled with extreme care and will reach the destination safely & on time. Handling of specialized Livestock requires particular skills – We plan each cargo carefully to ensure a balanced handling; ship carefully to allow a safe and comfortable trip for your livestock Our services in this area include.
              </p>
            </div>
            <div>
              <h2 className="text-3xl font-headline font-bold text-primary mb-4">Port Handling</h2>
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                Our port handling services include discharge and loading of bulk, container, project cargo & dangerous goods. Care is taken during entire operation of loading /unloading at ports to ensure safe handling and delivery of all kinds of cargo including dry/ liquid cargo, dangerous goods/over dimensional cargo and all other types of cargo. We offer services at other berths of the port as handling agents. Container stuffing / de-stuffing facility is also being provided by our Port Management Service and is outside the dock premises. We take care of the entire operation of loading/unloading at ports and ensure a swift handling and delivery of all kinds of cargo.
              </p>
               <h3 className="text-2xl font-headline font-semibold text-primary mt-6 mb-4">Our services in this area include:</h3>
              <ul className={listClassName}>
                <li>Vessels Coordination with the Port Authorities, Immigrations & Customs</li>
                <li>Handling all the Formalities & Paperwork’s for in & outbound Vessel</li>
                <li>Customs Handling and Clearance</li>
                <li>Yard & Warehouse Arrangement</li>
              </ul>
            </div>
             <div>
              <h2 className="text-3xl font-headline font-bold text-primary mb-4">Logistics Consultancy</h2>
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                Our logistics consultancy program relies upon the quality of the initial diagnostic assignment to identify key development opportunities. To make a Logistics Diagnostic Project successful, we make the evaluation objectively, preferably with a vision for your tomorrow’s needs and with demonstrable specialist expertise and broad experience of the state-of-the-art across a variety of industries. Our Consultancy services include the configuration of logistics networks and the optimization of modes, which help you in streamlining your supply chain performance, and we have the level of technical expertise required to find an optimum solution which is very significant. 
              </p>
               <h3 className="text-2xl font-headline font-semibold text-primary mt-6 mb-4">Our services in this area include consultancy for:</h3>
              <ul className={listClassName}>
                <li>Inbound Supply Chain Network Optimization</li>
                <li>Outbound Supply Chain Network Optimization</li>
                <li>Warehouse Rationalization and Inventory Reduction</li>
                <li>Transport Mode Optimization</li>
                <li>Transport Vehicle Optimization</li>
                <li>3PL / 4PL Network Outsourcing</li>
                <li>Total Logistics & Supply chain Management Etc.</li>
              </ul>
            </div>
            <div>
                <h2 className="text-3xl font-headline font-bold text-primary mb-4">Quality Inspection</h2>
                <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                    We offer quality inspection services of Cargo on behalf of our customers at various stages of Freight Forwarding via SGS. Total Quality Control is the key to our inspection standards. The major characteristics of our inspection are Reliability Maintainability Adoption of SGS Standards Standard parameters for Cargo Inspection Inspection of Cargo at various stages reducing risk of Loss/Damages to the customer. Inspection occurs during critical transportation, custody transfer and storage operations. Our independent inspection, analysis and testing services help protect the quantity and quality of commodities for our Customers. Our Quality Assurance provides the facility an Exporter or an Importer can be rest assured that Machinery, component, material meets pre-stated quality standards and will perform satisfactory during service. Our Quality Control Inspection is concerned with actual measurement or testing or supervision of Exporters final product control, either by inspection of each unit or by sample testing.
                </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
