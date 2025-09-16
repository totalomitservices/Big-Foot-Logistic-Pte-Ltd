import { Facebook, Instagram, Linkedin, Mail, MapPin, Phone } from 'lucide-react';
import Link from 'next/link';
import { Logo } from '@/components/logo';

export default function Footer() {
  return (
    <footer id="contact" className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {/* Company Profile */}
          <div className="space-y-4">
            <Logo className="text-primary-foreground" />
            <p className="text-primary-foreground/80 text-sm">
              Bigfoot Logistic Pte Ltd delivers trusted logistics and supply chain solutions worldwide, driven by innovation and reliability.
            </p>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="text-lg font-headline font-bold uppercase tracking-wider text-accent">Contact Info</h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-3">
                <MapPin className="h-5 w-5 mt-1 text-accent flex-shrink-0" />
                <span>123 Logistics Lane, Transport City, 98765, World</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="h-5 w-5 text-accent flex-shrink-0" />
                <a href="mailto:contact@bigfoot.log" className="hover:text-accent transition-colors">contact@bigfoot.log</a>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="h-5 w-5 text-accent flex-shrink-0" />
                <a href="tel:+1234567890" className="hover:text-accent transition-colors">+1 (234) 567-890</a>
              </li>
            </ul>
          </div>

          {/* Google Map */}
          <div>
            <h3 className="text-lg font-headline font-bold uppercase tracking-wider text-accent mb-4">Our Location</h3>
            <div className="aspect-video overflow-hidden rounded-lg shadow-lg transition-all duration-300 hover:shadow-accent/30 hover:shadow-2xl hover:scale-105">
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
          <div className="flex justify-center gap-6 mt-4">
            <Link href="#" className="hover:text-accent hover:scale-125 transition-all duration-200">
              <Facebook className="h-5 w-5" />
            </Link>
            <Link href="#" className="hover:text-accent hover:scale-125 transition-all duration-200">
              <Linkedin className="h-5 w-5" />
            </Link>
            <Link href="#" className="hover:text-accent hover:scale-125 transition-all duration-200">
              <Instagram className="h-5 w-5" />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
