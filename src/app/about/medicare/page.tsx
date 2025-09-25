
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'BIGFOOT Medicare Pte Ltd | Bigfoot Logistics',
  description: 'Learn about BIGFOOT Medicare Pte Ltd, a Singapore-based company providing home healthcare, emergency medical services, and healthcare logistics.',
};

export default function MedicarePage() {
  return (
    <div className="bg-background text-foreground">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl md:text-4xl font-headline font-bold text-primary mb-8">
            BIGFOOT Medicare Pte Ltd
          </h1>
          <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
            <p>
              BIGFOOT Medicare Pte Ltd is a Singapore-based company incorporated on 4 January 2006 under UEN 200600180R. It is an exempt private company limited by shares with its registered office at 8 Joo Koon Road, Singapore 628972. The company’s core activity is home healthcare and emergency medical services, while its secondary activity includes freight transport arrangement, reflecting its integration with the broader logistics network of the Bigfoot Group.
            </p>
            <p>
              With a paid-up capital of SGD 100,000, the company plays a dual role in supporting healthcare delivery and logistical efficiency. Formerly known as Huk Seng Container 2006 Pte Ltd, it has since evolved under the Bigfoot brand to focus on healthcare logistics and services.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
