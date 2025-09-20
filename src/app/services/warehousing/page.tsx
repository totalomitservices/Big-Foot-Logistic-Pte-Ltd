
import Image from 'next/image';
import type { Metadata } from 'next';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Warehousing | Bigfoot Logistics',
  description: 'Secure, scalable, and strategic warehousing and distribution solutions to manage your inventory effectively.'
};

export default function WarehousingPage() {
    const listClassName = "list-disc list-inside space-y-2 text-lg text-muted-foreground";
  return (
    <div className="relative bg-background text-foreground">
      {/* Hero Section */}
      <section className="relative w-full h-[40vh] md:h-[50vh]">
        <Image
          src="https://raw.githubusercontent.com/Ram-0609/Bigfoot-Logistics-Images/refs/heads/main/Warehousing%20.jpeg"
          alt="Large modern warehouse"
          fill
          priority
          className="object-cover"
          data-ai-hint="warehouse shelves"
        />
        
        <div className="relative z-10 flex h-full flex-col items-start justify-center text-left text-white px-4 md:px-12 lg:px-24">
          <h1 className="font-headline text-4xl md:text-5xl font-semibold text-white drop-shadow-lg">
            <span style={{ backgroundColor: 'hsl(var(--primary))', padding: '0.2rem 0.6rem' }}>Warehousing</span>
          </h1>
          <p className="mt-4 text-lg md:text-xl font-light text-white drop-shadow-lg max-w-2xl">
            <span style={{ backgroundColor: 'hsl(var(--primary))', padding: '0.2rem 0.6rem' }}>Secure, scalable, and strategic storage solutions.</span>
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

            <div>
                <h2 className="text-3xl font-headline font-bold text-primary mb-4">Warehousing & Distribution</h2>
                <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                Improved service, reduced costs and enhanced performance are the goals of our warehousing and distribution operations. Using these areas for competitive advantage we focus on proper planning and continual improvement. Our state of the art technology warehouses provide safe storage of cargo during transit. Besides, we also undertake distribution services to local depots and sales points from our warehouses. Our warehouses have the capacity to handle a large volume of cargo. Be it heavy machinery, small screws or perishables like fruits and vegetables, we can handle all. We provide local expertise in emerging markets, lower inventory and shipping costs, as well as improved technology and customer service. We care about the quality of your products, which is why we are ready to serve you the best while you put the most thought into your investments and expanding your business.
                </p>
            </div>
            
            <div>
              <h2 className="text-3xl font-headline font-bold text-primary mb-4">Warehouse location and Layout</h2>
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                Our warehouses are strategically located near industrial area in the vicinity of Air or Sea port. This makes the trans-shipment of cargo between the warehouse, Production units and cargo simpler and faster. Further, the layout of our warehouses is designed in a way to accommodate free and easy flow of trucks and containers to and from the warehouse premises without any hassles.
              </p>
            </div>

            <div>
              <h2 className="text-3xl font-headline font-bold text-primary mb-4">Storage Space and tracing</h2>
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                Our warehouses accommodate any kind of cargo from heavy machinery to smallest of the machinery spare parts like screws and nuts. Every cargo has an allotted space in our warehouse and tracking is made simple by means of labeling, Bar Coding and computerized warehouse management system.
              </p>
            </div>

            <div>
              <h2 className="text-3xl font-headline font-bold text-primary mb-4">Cold Storage</h2>
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                Our cold storage facility keeps your perishable cargo fresh and consumable for a long time. Temperature is controlled to the required level and quality of the items is taken absolute care of. Our Cold room warehousing includes features as screw compressors, reciprocating compressors and liquid chillers for the various applications for food processing industry, meat processing plant, poultry processing plant, fish food, and Sea food, Our cold storage warehouse are widely used for products as apples, apricots, banana, beans, butter, cabbage, cauliflower, oranges and many other related food products.
              </p>
               <h3 className="text-2xl font-headline font-semibold text-primary mt-6 mb-4">Our services in this are include:</h3>
              <ul className={listClassName}>
                <li>Allocation and Management of space in Cold Storage</li>
                <li>Effective and efficient temperature control system for longevity of perishable materials</li>
              </ul>
            </div>

            <div>
              <h2 className="text-3xl font-headline font-bold text-primary mb-4">Dry Cargo Management</h2>
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                With over large space of owned / leased godown spaces we offer our customers the opportunity of minimizing their investment and provide a modern storage system and material handling equipment. This provides advantages such as decreased order processing time, reduced shipping errors and better inventory tracking. Our Dry Cargo management includes efficient in-warehouse management, inventory management,. An advanced Dry Cargo management system can manage the information of in and out cargo and logistics activities effectively. Customers can check the status of their inventories online in a timely fashion.
              </p>
              <h3 className="text-2xl font-headline font-semibold text-primary mt-6 mb-4">Our services in the area include:</h3>
              <ul className={listClassName}>
                <li>Efficient storage in racks and containers</li>
                <li>BIN Card system</li>
                <li>Appropriate labeling and Bar Coding</li>
                <li>Ensuring 100% availability</li>
                <li>Using RFID analysis to put high moving cargo in the first place</li>
              </ul>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
}
