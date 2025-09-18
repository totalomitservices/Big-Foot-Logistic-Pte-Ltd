import { Facebook, Instagram, Linkedin, Mail, MapPin, Phone, Building } from 'lucide-react';
import Link from 'next/link';
import { Logo } from '@/components/logo';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const officeLocations = [
  {
    name: 'Singapore HQ',
    address: '123 Logistics Lane, Transport City, 98765, Singapore',
    phone: '+65 6324 4722',
    email: 'sg.office@bigfoot.com.sg',
  },
  {
    name: 'India Office',
    address: '10 Business Hub, Mumbai, 400001, India',
    phone: '+91 22 1234 5678',
    email: 'in.office@bigfoot.com.sg',
  },
  {
    name: 'Australia Office',
    address: '25 Trade Street, Sydney, NSW 2000, Australia',
    phone: '+61 2 9876 5432',
    email: 'au.office@bigfoot.com.sg',
  },
];


export default function Footer() {
  return (
    <footer id="contact" className="bg-primary text-primary-foreground">
      <div className='py-16 lg:py-24 bg-background'>
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
                              <a href={`mailto:${office.email}`} className="flex items-center justify-center gap-2 hover:text-primary transition-colors"><Mail className="h-4 w-4"/>{office.email}</a>
                          </CardContent>
                      </Card>
                  ))}
              </div>
          </div>
      </div>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Company Profile */}
          <div className="md:col-span-1">
            <Logo className="text-primary-foreground -mt-16" />
            <p className="text-primary-foreground/80 text-sm">
              BIG FOOT LOGISTIC PTE LTD was founded in the year 1992. The Company had since developed a wide range of logistic and port services in tune with current market demands. Built with a strong customer focus as its foundation, the company has been garnering intense support from our customers, whom till today still form the backbone of the company’s continual growth.
            </p>
          </div>


          {/* Contact Info & Follow Us */}
          <div className="space-y-8">
            <div>
              <h3 className="text-lg font-headline font-bold uppercase tracking-wider text-accent">Contact Info</h3>
              <ul className="space-y-3 text-sm mt-4">
                <li className="flex items-start gap-3">
                  <MapPin className="h-5 w-5 mt-1 text-accent flex-shrink-0" />
                  <span>123 Logistics Lane, Transport City, 98765, World</span>
                </li>
                <li className="flex items-center gap-3">
                  <Mail className="h-5 w-5 text-accent flex-shrink-0" />
                  <a href="mailto:enquiries@bigfoot.com.sg" className="hover:text-accent transition-colors">enquiries@bigfoot.com.sg</a>
                </li>
                <li className="flex items-center gap-3">
                  <Phone className="h-5 w-5 text-accent flex-shrink-0" />
                  <a href="tel:+6563244722" className="hover:text-accent transition-colors">+65 6324 4722</a>
                </li>
              </ul>
            </div>
            <div className="space-y-4 pt-4">
              <h3 className="text-lg font-headline font-bold uppercase tracking-wider text-accent">Follow Us</h3>
              <div className="flex gap-6 mt-4">
                <Link href="https://www.facebook.com/BigfootGroups/" target="_blank" rel="noopener noreferrer" className="hover:text-accent hover:scale-125 transition-all duration-200">
                  <Facebook className="h-5 w-5" />
                </Link>
                <Link href="https://sg.linkedin.com/company/big-foot-logistic" target="_blank" rel="noopener noreferrer" className="hover:text-accent hover:scale-125 transition-all duration-200">
                  <Linkedin className="h-5 w-5" />
                </Link>
                <Link href="https://www.instagram.com/reel/DOoFDBfDhch/?utm_source=ig_web_copy_link" target="_blank" rel="noopener noreferrer" className="hover:text-accent hover:scale-125 transition-all duration-200">
                  <Instagram className="h-5 w-5" />
                </Link>
              </div>
            </div>
          </div>

          {/* Google Map */}
          <div>
            <h3 className="text-lg font-headline font-bold uppercase tracking-wider text-accent mb-4">Our Location</h3>
            <div className="aspect-video overflow-hidden shadow-lg transition-all duration-300 hover:shadow-accent/30 hover:shadow-2xl hover:scale-105">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.287879482597!2d-122.421728323497!3d37.78328227197178!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80858099b2446733%3A0x4f67a213a77d540e!2sSan%20Francisco%20City%20Hall!5e0!3m2!1sen!2sus!4v1700000000000"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen={true}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Google Map of our location"
              ></iframe>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Strip */}
      <div className="bg-primary/50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-6 text-center text-primary-foreground/70">
          <p className="text-sm">© 2024 Bigfoot Logistic Pte Ltd. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
}
