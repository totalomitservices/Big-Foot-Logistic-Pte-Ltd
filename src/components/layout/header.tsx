"use client";

import { ChevronDown, Mail, Phone } from 'lucide-react';
import Link from 'next/link';
import { Logo } from '@/components/logo';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from '../ui/button';
import { usePathname } from 'next/navigation';

const navLinks = [
  { href: '/', label: 'Home' },
  {
    href: '/about',
    label: 'About Us',
    subLinks: [
      { href: '/about/our-story', label: 'Our Story' },
      { href: '/about/vision-mission', label: 'Vision & Mission' },
      { href: '/about/careers', label: 'Careers' },
    ],
  },
  { href: '/#services', label: 'Services' },
  { href: '/#clients', label: 'Clients' },
  { href: '/#contact', label: 'Contact Us' },
];

export default function Header() {
  const pathname = usePathname();
  const isHomePage = pathname === '/';

  return (
    <header className="sticky top-0 z-20 bg-primary text-primary-foreground shadow-md">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-24">
          <div className="flex-shrink-0">
            <Link href="/">
              <Logo className="text-white" />
            </Link>
          </div>
          <nav className="hidden md:flex md:space-x-8">
            {navLinks.map((link) =>
              link.subLinks ? (
                <DropdownMenu key={link.href}>
                  <DropdownMenuTrigger asChild>
                    <Button
                      variant="ghost"
                      className="font-medium hover:text-accent transition-colors duration-300 text-base"
                    >
                      {link.label}
                      <ChevronDown className="ml-2 h-4 w-4" />
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent>
                    {link.subLinks.map((subLink) => (
                      <DropdownMenuItem key={subLink.href} asChild>
                        <Link href={subLink.href}>{subLink.label}</Link>
                      </DropdownMenuItem>
                    ))}
                  </DropdownMenuContent>
                </DropdownMenu>
              ) : (
                <Link
                  key={link.href}
                  href={link.href}
                  className="font-medium hover:text-accent transition-colors duration-300 flex items-center text-base"
                >
                  {link.label}
                </Link>
              )
            )}
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
