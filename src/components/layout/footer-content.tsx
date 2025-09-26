
import { Facebook, Instagram, Linkedin, Mail, MapPin, Phone, Printer } from 'lucide-react';
import Link from 'next/link';
import { Logo } from '@/components/logo';
import FooterMapClient from './footer-map-client';
import WhatsappButton from '../whatsapp-button';
import { groupOfCompanies } from '@/data/group-of-companies';


export default function FooterContent() {

  return (
    <footer id="contact" className="bg-footer-navy text-primary-foreground">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 items-start">
          {/* Logo and Description */}
          <div className="md:col-span-1">
            <Link href="/" className="inline-block mb-4">
              <Logo />
            </Link>
            <p className="text-sm text-primary-foreground/80 text-justify">
              BIG FOOT LOGISTIC PTE LTD was founded in the year 1992. The Company had since developed a wide range of logistic and port services in tune with current market demands. Built with a strong customer focus as its foundation, the company has been garnering intense support from our customers, whom till today still form the backbone of the company's continual growth.
            </p>
          </div>

          {/* Group of Companies */}
          <div>
            <h3 className="text-lg font-headline font-bold uppercase tracking-wider text-accent text-left">
              <Link href="/about/group-of-companies" className="hover:text-accent transition-colors">
                Group of Companies
              </Link>
            </h3>
            <ul className="space-y-2 text-sm mt-4">
              {groupOfCompanies.map((company) => (
                <li key={company.name}>
                  <Link href={company.href || '/about/group-of-companies'} className="text-primary-foreground/80 hover:text-accent transition-colors">
                    {company.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info & Follow Us */}
          <div className="space-y-8">
            <div>
              <h3 className="text-lg font-headline font-bold uppercase tracking-wider text-accent text-left">Contact Info</h3>
              <ul className="space-y-3 text-sm mt-4">
                <li className="flex items-start gap-3">
                  <MapPin className="h-5 w-5 mt-1 text-accent flex-shrink-0" aria-hidden="true" />
                  <span>8 Joo Koon Road, Singapore 628972.</span>
                </li>
                <li className="flex items-center gap-3">
                  <Mail className="h-5 w-5 text-accent flex-shrink-0" aria-hidden="true" />
                  <a href="mailto:enquiries@bigfoot.com.sg" className="hover:text-accent transition-colors">enquiries@bigfoot.com.sg</a>
                </li>
                <li className="flex items-center gap-3">
                  <Phone className="h-5 w-5 text-accent flex-shrink-0" aria-hidden="true" />
                  <a href="tel:+6563244722" className="hover:text-accent transition-colors">+65 6324 4722</a>
                </li>
                <li className="flex items-center gap-3">
                  <Printer className="h-5 w-5 text-accent flex-shrink-0" aria-hidden="true" />
                  <a href="tel:+6563244711" className="hover:text-accent transition-colors">+65 6324 4711</a>
                </li>
              </ul>
            </div>
             <div className="space-y-4 pt-4 text-left">
              <h3 className="text-lg font-headline font-bold uppercase tracking-wider text-accent">Follow Us</h3>
              <div className="flex gap-6 mt-4">
                <Link href="https://www.facebook.com/BigfootGroups/" target="_blank" rel="noopener noreferrer" aria-label="Follow us on Facebook" className="hover:text-accent hover:scale-125 transition-all duration-200">
                  <Facebook className="h-5 w-5" />
                </Link>
                <Link href="https://sg.linkedin.com/company/big-foot-logistic" target="_blank" rel="noopener noreferrer" aria-label="Follow us on LinkedIn" className="hover:text-accent hover:scale-125 transition-all duration-200">
                  <Linkedin className="h-5 w-5" />
                </Link>
                <Link href="https://www.instagram.com/reel/DOoFDBfDhch/?utm_source=ig_web_copy_link" target="_blank" rel="noopener noreferrer" aria-label="Follow us on Instagram" className="hover:text-accent hover:scale-125 transition-all duration-200">
                  <Instagram className="h-5 w-5" />
                </Link>
              </div>
            </div>
          </div>
          
          {/* Google Map */}
          <div>
            <h3 className="text-lg font-headline font-bold uppercase tracking-wider text-accent mb-4 text-left">Our Location</h3>
            <div className="aspect-video overflow-hidden shadow-lg">
              <FooterMapClient />
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Strip */}
      <div className="bg-black/20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-6 text-center text-primary-foreground/70">
          <p className="text-sm">
            © {new Date().getFullYear()} <Link href="/" className="hover:underline hover:text-accent transition-colors">Bigfoot Logistic Pte Ltd.</Link> All Rights Reserved.
          </p>
        </div>
      </div>
      <WhatsappButton />
    </footer>
  );
}
