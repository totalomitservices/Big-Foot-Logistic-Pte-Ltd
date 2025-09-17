
import Image from 'next/image';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Phone, Mail, Clock, ArrowRight, Building, Globe } from 'lucide-react';
import Link from 'next/link';

const officeLocations = [
  {
    name: 'Singapore HQ',
    address: '123 Logistics Lane, Transport City, 98765, Singapore',
    phone: '+65 6324 4722',
    email: 'sg.office@bigfoot.com.sg',
    position: { top: '57%', left: '79%' },
  },
  {
    name: 'Malaysia Office',
    address: '456 Supply Chain St, Kuala Lumpur, 50480, Malaysia',
    phone: '+60 3-1234 5678',
    email: 'my.office@bigfoot.com.sg',
    position: { top: '56%', left: '78%' },
  },
  {
    name: 'European Hub',
    address: '789 Freight Ave, Rotterdam, 3011, Netherlands',
    phone: '+31 10 987 6543',
    email: 'eu.office@bigfoot.com.sg',
    position: { top: '35%', left: '51%' },
  },
];

const coreServices = [
    { name: 'Land Transit', href: '/services/land-transit'},
    { name: 'Freight Forwarding', href: '/services/freight-forwarding'},
    { name: 'Warehousing', href: '/services/warehousing'},
    { name: 'Packers & Movers', href: '/services/packers-and-movers'},
    { name: 'Training', href: '/services/training'},
]

export default function ContactPage() {
  return (
    <div className="bg-secondary text-foreground">
      {/* Hero Section */}
      <section className="relative h-[70vh] w-full bg-primary text-primary-foreground">
        <Image
          src="https://raw.githubusercontent.com/Ram-0609/Bigfoot-Logistics-Images/726ea8a329a17349633634a3f3747806b7b5141e/world-map-dark.svg"
          alt="World map with office locations"
          fill
          className="object-cover opacity-20"
        />

        {officeLocations.map(office => (
             <div key={office.name} className="group location-dot" style={office.position}>
                <div className="dot"></div>
                <div className="tooltip">
                    <p className="font-bold">{office.name}</p>
                    <p className="text-xs">{office.address.split(',').slice(-2).join(', ')}</p>
                </div>
            </div>
        ))}
       

        <div className="relative z-10 flex h-full flex-col items-center justify-center text-center px-4">
          <h1 className="font-headline text-4xl md:text-5xl font-bold">
            Contact Us
          </h1>
          <p className="mt-4 text-lg md:text-xl font-light max-w-2xl">
            We’re here to help you with reliable logistics solutions.
          </p>
        </div>
      </section>

      {/* Office Locations */}
      <section className="py-16 lg:py-24 bg-background">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-12">
                <h2 className="text-3xl font-headline font-bold text-primary">Our Offices</h2>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  {officeLocations.map(office => (
                      <Card key={office.name} className="flex flex-col text-center">
                          <CardHeader>
                              <CardTitle className="flex items-center justify-center gap-2 text-xl text-accent">
                                <Building />{office.name}
                              </CardTitle>
                          </CardHeader>
                          <CardContent className="space-y-3 text-muted-foreground flex-grow">
                              <p>{office.address}</p>
                              <p className="flex items-center justify-center gap-2"><Phone className="h-4 w-4"/>{office.phone}</p>
                              <p className="flex items-center justify-center gap-2"><Mail className="h-4 w-4"/>{office.email}</p>
                          </CardContent>
                      </Card>
                  ))}
              </div>
          </div>
      </section>

      {/* Contact Form and Details Section */}
      <section className="py-16 lg:py-24 bg-secondary">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-background shadow-lg p-8 lg:p-12">
                 {/* Core Services Banner */}
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
                    {/* Left Column: Contact Details */}
                    <div className="lg:col-span-2 space-y-8">
                        <div>
                            <h3 className="text-2xl font-headline font-bold text-primary mb-4">Get in Touch</h3>
                            <p className="text-muted-foreground mb-6">
                                Have a question or need a quote? Reach out to us. We’re available around the clock to support your logistics needs.
                            </p>
                        </div>
                         <div className="space-y-4 text-lg">
                            <div className="flex items-center gap-4">
                                <Phone className="h-6 w-6 text-accent"/>
                                <div>
                                    <h4 className="font-semibold">Phone</h4>
                                    <a href="tel:6563244722" className="text-muted-foreground hover:text-primary transition-colors">+65 6324 4722</a>
                                </div>
                            </div>
                             <div className="flex items-center gap-4">
                                <Mail className="h-6 w-6 text-accent"/>
                                <div>
                                    <h4 className="font-semibold">Email</h4>
                                    <a href="mailto:enquiries@bigfoot.com.sg" className="text-muted-foreground hover:text-primary transition-colors">enquiries@bigfoot.com.sg</a>
                                </div>
                            </div>
                             <div className="flex items-center gap-4">
                                <Clock className="h-6 w-6 text-accent"/>
                                 <div>
                                    <h4 className="font-semibold">Working Hours</h4>
                                    <p className="text-muted-foreground">Mon - Fri: 9am - 6pm</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Right Column: Contact Form */}
                    <div className="lg:col-span-3">
                        <h3 className="text-2xl font-headline font-bold text-primary mb-6">Send Us a Message</h3>
                        <form className="space-y-6">
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                                <Input type="text" placeholder="Your Name" required />
                                <Input type="email" placeholder="Your Email" required />
                            </div>
                            <Input type="tel" placeholder="Your Phone Number" />
                            <Textarea placeholder="Your Message" rows={6} required />
                            <Button type="submit" variant="accent" size="lg" className="w-full">
                                Send Message
                            </Button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
      </section>
    </div>
  );
}
