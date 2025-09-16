import { Mail, Phone } from 'lucide-react';
import Link from 'next/link';
import { Logo } from '@/components/logo';

const navLinks = [
  { href: '#home', label: 'Home' },
  { href: '#about', label: 'About Us' },
  { href: '#services', label: 'Services' },
  { href: '#clients', label: 'Clients' },
  { href: '#contact', label: 'Contact Us' },
];

export default function Header() {
  return (
    <header className="absolute top-0 left-0 right-0 z-20 bg-transparent text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-24">
          <div className="flex-shrink-0 mt-8">
            <Link href="#home">
              <Logo className="text-white" />
            </Link>
          </div>
          <nav className="hidden md:flex md:space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="font-medium hover:text-accent transition-colors duration-300"
              >
                {link.label}
              </Link>
            ))}
          </nav>
          <div className="hidden md:flex items-center justify-end space-x-4">
             <div className="text-right text-sm">
                <a href="mailto:enquiries@bigfoot.com.sg" className="flex items-center gap-2 hover:text-accent transition-colors">
                  <Mail className="h-4 w-4" />
                  <span>enquiries@bigfoot.com.sg</span>
                </a>
                <a href="tel:6563244722" className="flex items-center gap-2 hover:text-accent transition-colors mt-1">
                  <Phone className="h-4 w-4" />
                  <span>65 6324 4722</span>
                </a>
              </div>
          </div>
        </div>
      </div>
    </header>
  );
}
