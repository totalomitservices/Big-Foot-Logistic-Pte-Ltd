
import Image from 'next/image';
import type { Metadata } from 'next';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Freight Forwarding | Bigfoot Logistics',
  description: 'Seamlessly connecting your business to the world with our air and sea freight forwarding services.'
};

export default function FreightForwardingPage() {
  const listClassName = "list-disc list-inside space-y-2 text-lg text-muted-foreground";

  return (
    <div className="relative bg-background text-foreground">
      {/* Hero Section */}
      <section className="relative w-full h-[40vh] md:h-[50vh]">
        <Image
          src="https://raw.githubusercontent.com/Ram-0609/Bigfoot-Logistics-Images/refs/heads/main/freight%20forwarding%20.jpeg"
          alt="Freight forwarding services"
          fill
          priority
          className="object-cover"
          data-ai-hint="air freight"
        />
        
        <div className="relative z-10 flex h-full flex-col items-start justify-center text-left text-white px-4 md:px-12 lg:px-24">
          <h1 className="font-headline text-4xl md:text-5xl font-semibold text-white drop-shadow-lg">
            <span style={{ backgroundColor: 'hsl(var(--primary))', padding: '0.2rem 0.6rem' }}>Freight Forwarding</span>
          </h1>
          <p className="mt-4 text-lg md:text-xl font-light text-white drop-shadow-lg max-w-2xl">
            <span style={{ backgroundColor: 'hsl(var(--primary))', padding: '0.2rem 0.6rem' }}>Seamlessly connecting your business to the world.</span>
          </p>
          <div className="mt-8">
            <Button asChild size="lg" variant="accent" className="transition-transform duration-300 hover:scale-105">
              <Link href="/contact">Get a Quote</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto space-y-12">

            {/* Air Import */}
            <div>
              <h2 className="text-3xl font-headline font-bold text-primary mb-4">Air Import</h2>
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                With a comprehensive range of air import services, we offer consolidation/Deconsolidation and back to back services as and when required. We have built an extensive network of agents that makes us able to provide secure, efficient and timely delivery of Import. The vast number of Import range covered by us and the large volumes handled by us enable us to consolidate direct containers from specific locations which in turn enables us to control transit time and cost. We provide efficient import service to our importers. The alacrity with which we work shows our ability to handle fragile and sensitive shipments. We have a committed network of integrated air and ground services that enables us to handle from pick up to prompt delivery. The services we offer in Air Import include:
              </p>
              <ul className={listClassName}>
                <li>Documentation</li>
                <li>Customs and Airport Customs declarations</li>
                <li>Local Forwarding and Transportation</li>
                <li>Door-to-Door Delivery</li>
                <li>Sea-Air/Air-Sea Transshipment</li>
                <li>Break-bulk Air Import</li>
                <li>Effective Space Solutions</li>
                <li>Competitive Freight Rates</li>
                <li>Committed Transit Times</li>
                <li>Excellent Rapport with major Airlines</li>
                <li>Consolidation Services</li>
                <li>Specialized services for High value / Fragile / Over dimensional / Hazardous Goods</li>
              </ul>
            </div>

            {/* Air Export */}
            <div>
              <h2 className="text-3xl font-headline font-bold text-primary mb-4">Air Export</h2>
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                Our Air export services are from Singapore and Malaysia to anywhere in the world. We Offer worldwide Air Export services in association with our extensive international network of Agents and Associates. We tailor our services to Customer’s needs from Air Export services precisely for each and every shipment. Whether it is direct flights with reserved cargo capacity and constant supervision, regularly consolidated air -cargo departures, or special projects. We can meet any kind of requirement regarding Air Export. Our services in Air Export include:
              </p>
              <ul className={listClassName}>
                <li>Domestic Pickup</li>
                <li>Multimodal Transportation during Trans-Shipment</li>
                <li>Consolidation and Deconsolidation Services</li>
                <li>Door-to-Door Delivery Services</li>
                <li>Documentation</li>
                <li>Customs Declaration</li>
                <li>Competitive Freight Rates</li>
                <li>Committed Transit Times</li>
                <li>Excellent Rapport with major Airlines</li>
              </ul>
            </div>

            {/* Sea Import */}
            <div>
              <h2 className="text-3xl font-headline font-bold text-primary mb-4">Sea Import</h2>
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                We Offer complete Sea import solutions to our valued customers in Singapore and Malaysia. Our clients can depend on us for timely and safe delivery of Cargo. We are reckoned for our commitment, fair business practices, and rich experience. Our well-connected network and potential to deal with shipping requirements have made us a reckoned service provider of sea Import services and have won many a clients.As a Customer centric organization, our reputation is primarily based on the quality of services we offer. All our services are rendered by trained professionals who are specifically trained in their domain. Our professionals take special measures to ensure proper execution of the Import services rendered, safety of the Cargo and convenience of our Customers. Our Services in Sea Import include:
              </p>
              <ul className={listClassName}>
                <li>Door Pickup from Origin</li>
                <li>Multimodal Transportation to the Port of Discharge</li>
                <li>Sea Transportation to Destination</li>
                <li>Door Delivery to the Customer</li>
                <li>LCL and FCL Multi country Consolidation services</li>
                <li>Handling and clearing Sea Import Documents</li>
                <li>Customs declaration of Sea Import</li>
                <li>Break-Bulk Services</li>
              </ul>
            </div>

            {/* Sea Export */}
            <div>
              <h2 className="text-3xl font-headline font-bold text-primary mb-4">Sea Export</h2>
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                We are well equipped and expertise in handling Sea Export from Singapore and Malaysia to anywhere in the world. Experience is what sets us apart from other similar service providers. We have an entire family of services to suit a variety of our customer needs. With fast transit periods, optimum prices, prompt arrival and departure we give you with a reliable sea Export service that provides solutions to almost all your needs. We have clearly defined processes in place which gives you reliability as well as saves costs. Our services in Sea Export include:
              </p>
              <ul className={listClassName}>
                <li>LCL/FCL services to destinations all over the world</li>
                <li>Consolidation/De services at major ports</li>
                <li>Port-to-Port and Door-to-Door Services</li>
                <li>Efficient and rapid customs administration for all products</li>
                <li>Reserved space on major ocean carriers through preferential Space Allocation at very competitive rates</li>
                <li>Reliable and Hassle Free Customs declarations</li>
              </ul>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
}
