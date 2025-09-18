
'use client';

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Phone, Mail, Clock, ArrowRight } from 'lucide-react';
import Link from 'next/link';

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
      <section 
        className="relative h-[70vh] w-full bg-primary overflow-hidden"
      >
        <div className="absolute inset-0 bg-primary/70" />

        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
            <div className="text-center text-primary-foreground">
                 <h1 className="font-headline text-4xl md:text-5xl font-bold">
                    Contact Us
                </h1>
                <p className="mt-4 text-lg md:text-xl font-light max-w-2xl">
                    We’re here to help you with reliable logistics solutions. For enquiries, reach out to us at <a href="mailto:enquiries@bigfoot.com.sg" className="underline hover:text-accent transition-colors pointer-events-auto">enquiries@bigfoot.com.sg</a>.
                </p>
            </div>
        </div>
      </section>

      <section className="py-16 lg:py-24 bg-secondary">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-background shadow-lg p-8 lg:p-12">
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
                                    <a href="tel:+6563244722" className="text-muted-foreground hover:text-primary transition-colors">+65 6324 4722</a>
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
