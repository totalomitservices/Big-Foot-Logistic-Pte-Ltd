
import Image from 'next/image';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Phone, Mail, Clock, ArrowRight, Building, Printer } from 'lucide-react';
import Link from 'next/link';
import type { Metadata } from 'next';
import ContactPageClient from '@/components/pages/contact/contact-page-client';

export const metadata: Metadata = {
  title: 'Contact Us | Bigfoot Logistics',
  description: 'Get in touch with Bigfoot Logistics. Find our office locations, contact details, and send us a message for your logistics needs. We are here to help you.',
};

const coreServices = [
    { name: 'Land Transit', href: '/services/land-transit'},
    { name: 'Freight Forwarding', href: '/services/freight-forwarding'},
    { name: 'Warehousing', href: '/services/warehousing'},
    { name: 'Packers & Movers', href: '/services/packers-and-movers'},
    { name: 'Training', href: '/services/training'},
]

const officeLocations = [
  {
    name: 'Singapore HQ',
    address: '30 Quality Rd, Singapore 618803',
    phone: '+65 6324 4722',
    email: 'sg.office@bigfoot.com.sg',
  },
  {
    name: 'India Office',
    address: 'Shop No 1, National Lodge Building, Ts No 3607/25, Sathiyamoorthy Road, Pudukkottai, Tamil Nadu, 622001, India',
    phone: '+91 22 1234 5678',
    email: 'in.office@bigfoot.com.sg',
  },
  {
    name: 'Australia Office',
    address: '546 Eleventh St, Mildura, VIC 3500, Australia',
    phone: '+61 2 9876 5432',
    email: 'au.office@bigfoot.com.sg',
  },
];


export default function ContactPage() {
  return (
    <div className="bg-background text-foreground">
      <section className="relative w-full h-[40vh] md:h-[50vh]">
        <Image
          src="https://raw.githubusercontent.com/Ram-0609/Bigfoot-Logistics-Images/main/contact%20us.png"
          alt="Contact us banner showing customer service representatives"
          fill
          priority
          className="object-cover"
          data-ai-hint="customer service"
        />
        <div className="relative z-10 flex h-full flex-col items-start justify-center text-left text-white px-4 md:px-12 lg:px-24">
          <h1 className="font-headline text-4xl md:text-5xl font-bold">
            Contact Us
          </h1>
          <p className="mt-4 text-lg md:text-xl font-thin">
            We’re here to help with your logistics needs.
          </p>
        </div>
      </section>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <section className="py-16 lg:py-24">
          <div className="text-center mb-12">
            <h2 className="font-headline text-3xl md:text-4xl font-bold text-primary">
              Get In Touch
            </h2>
            <p className="mt-4 text-lg md:text-xl font-light max-w-2xl mx-auto text-muted-foreground">
              We’re here to help you with reliable logistics solutions. For enquiries, reach out to us at <a href="mailto:enquiries@bigfoot.com.sg" className="font-bold text-accent hover:underline transition-colors">enquiries@bigfoot.com.sg</a>.
            </p>
          </div>
          <div className="bg-secondary shadow-lg p-6 md:p-8 lg:p-12">
            <div className="mb-12">
              <div className="bg-primary text-primary-foreground p-4 text-center">
                <h3 className="font-headline text-lg font-semibold mb-2">Our Core Services</h3>
                <div className="flex flex-wrap justify-center items-center gap-x-6 gap-y-2">
                  {coreServices.map(service => (
                    <Link key={service.name} href={service.href} className="text-sm hover:text-accent transition-colors flex items-center gap-1">
                      {service.name} <ArrowRight className="h-3 w-3" />
                    </Link>
                  ))}
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
              <div className="lg:col-span-2 space-y-8">
                <div>
                  <h3 className="text-2xl font-headline font-bold text-primary mb-4">Contact Details</h3>
                  <p className="text-muted-foreground mb-6">
                    Have a question or need a quote? Reach out to us. We’re available around the clock to support your logistics needs.
                  </p>
                </div>
                <div className="space-y-4 text-lg">
                  <div className="flex items-center gap-4">
                    <Phone className="h-6 w-6 text-primary" aria-hidden="true" />
                    <div>
                      <h4 className="font-semibold text-base">Phone</h4>
                      <a href="tel:+6563244722" className="text-muted-foreground hover:text-primary transition-colors text-base">+65 6324 4722</a>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <Printer className="h-6 w-6 text-primary" aria-hidden="true" />
                    <div>
                      <h4 className="font-semibold text-base">Fax</h4>
                      <a href="tel:+6563244711" className="text-muted-foreground hover:text-primary transition-colors text-base">+65 6324 4711</a>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <Mail className="h-6 w-6 text-primary" aria-hidden="true" />
                    <div>
                      <h4 className="font-semibold text-base">Email</h4>
                      <a href="mailto:enquiries@bigfoot.com.sg" className="font-bold text-accent hover:underline transition-colors text-base">enquiries@bigfoot.com.sg</a>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <Clock className="h-6 w-6 text-primary" aria-hidden="true" />
                    <div>
                      <h4 className="font-semibold text-base">Working Hours</h4>
                      <p className="text-muted-foreground text-base">Mon - Fri: 9am - 6pm</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="lg:col-span-3">
                <h3 className="text-2xl font-headline font-bold text-primary mb-6">Send Us a Message</h3>
                <form className="space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <Input type="text" placeholder="Your Name" required aria-label="Your Name" />
                    <Input type="email" placeholder="Your Email" required aria-label="Your Email" />
                  </div>
                  <Input type="tel" placeholder="Your Phone Number" aria-label="Your Phone Number" />
                  <Textarea placeholder="Your Message" rows={6} required aria-label="Your Message" />
                  <Button type="submit" variant="accent" size="lg" className="w-full">
                    Send Message
                  </Button>
                </form>
              </div>
            </div>
          </div>
        </section>

        <section className='py-16 lg:py-24 bg-background'>
          <div className="text-center mb-12">
            <h2 className="text-3xl font-headline font-bold text-primary">Our Offices</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {officeLocations.map(office => (
              <Card key={office.name} className="flex flex-col text-center bg-primary text-primary-foreground">
                <CardHeader>
                  <CardTitle className="flex items-center justify-center gap-2 text-xl text-accent-foreground">
                    <Building aria-hidden="true" />{office.name}
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-3 text-primary-foreground/80 flex-grow">
                  <p>{office.address}</p>
                  <p className="flex items-center justify-center gap-2"><Phone className="h-4 w-4" aria-hidden="true" />{office.phone}</p>
                  <a href={`mailto:${office.email}`} className="flex items-center justify-center gap-2 hover:text-accent transition-colors"><Mail className="h-4 w-4" aria-hidden="true" />{office.email}</a>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>
      </div>
        
      <ContactPageClient />
    </div>
  );
}
