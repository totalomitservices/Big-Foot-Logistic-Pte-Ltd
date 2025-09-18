
"use client";

import { ChevronDown, Mail, Phone, Menu } from 'lucide-react';
import Link from 'next/link';
import { Logo } from '@/components/logo';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from '../ui/button';
import { useState, useEffect } from 'react';
import { Sheet, SheetContent, SheetTrigger } from '../ui/sheet';
import { servicesData } from '@/data/services';
import { cn } from '@/lib/utils';

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
  {
    href: '#services',
    label: 'Services',
    subLinks: servicesData.map(s => ({ href: s.href, label: s.title }))
  },
  { href: '/clients', label: 'Clients' },
  { href: '/contact', label: 'Contact Us' },
];

export default function HeaderClient() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);

  const handleMouseEnter = (label: string) => {
    setOpenDropdown(label);
  };

  const handleMouseLeave = () => {
    setOpenDropdown(null);
  };

  return (
    <header className="absolute top-0 z-50 w-full bg-transparent">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-24">
          <div className="flex-shrink-0">
            <Link href="/">
              <Logo className="text-primary-foreground" />
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex md:items-center md:space-x-1">
            {navLinks.map((link) => (
              <div key={link.href}>
                {link.subLinks ? (
                  <DropdownMenu onOpenChange={(isOpen) => setOpenDropdown(isOpen ? link.label : null)} open={openDropdown === link.label}>
                    <DropdownMenuTrigger asChild>
                      <Button 
                        variant="ghost" 
                        className="font-medium text-base hover:text-accent focus-visible:ring-0 focus-visible:ring-offset-0 hover:bg-transparent focus:bg-transparent text-primary-foreground"
                        onMouseEnter={() => handleMouseEnter(link.label)}
                        onMouseLeave={handleMouseLeave}
                      >
                        {link.label}
                        <ChevronDown className="ml-2 h-4 w-4" />
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent 
                      onMouseEnter={() => handleMouseEnter(link.label)}
                      onMouseLeave={handleMouseLeave}
                    >
                      {link.subLinks.map((subLink) => (
                        <DropdownMenuItem key={subLink.href} asChild>
                          <Link href={subLink.href}>{subLink.label}</Link>
                        </DropdownMenuItem>
                      ))}
                    </DropdownMenuContent>
                  </DropdownMenu>
                ) : (
                  <Link
                    href={link.href}
                    className="font-medium text-base hover:text-accent transition-colors duration-300 px-4 py-2 text-primary-foreground hover:underline underline-offset-4"
                  >
                    {link.label}
                  </Link>
                )}
              </div>
            ))}
          </nav>

          {/* Contact Info */}
          <div className="hidden md:flex items-center justify-end space-x-4">
            <div className="text-right text-sm text-primary-foreground">
                <a href="mailto:enquiries@bigfoot.com.sg" className="flex items-center justify-end gap-2 hover:text-accent transition-colors">
                  <Mail className="h-4 w-4" />
                  <span>enquiries@bigfoot.com.sg</span>
                </a>
                 <a href="tel:+6563244722" className="flex items-center justify-end gap-2 hover:text-accent transition-colors mt-1">
                  <Phone className="h-4 w-4" />
                  <span>+65 6324 4722</span>
                </a>
              </div>
          </div>
          
          {/* Mobile Menu */}
          <div className="md:hidden">
            <Sheet open={mobileMenuOpen} onOpenChange={setMobileMenuOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className="hover:text-accent text-primary-foreground">
                  <Menu className="h-6 w-6" />
                  <span className="sr-only">Open menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="left" className="w-[300px] sm:w-[400px] bg-primary text-primary-foreground">
                 <div className="flex flex-col h-full p-6">
                    <Link href="/" onClick={() => setMobileMenuOpen(false)} className="mb-8">
                      <Logo className="text-white" />
                    </Link>
                    <nav className="flex flex-col space-y-4">
                      {navLinks.map((link) =>
                        link.subLinks ? (
                          <div key={link.label}>
                            <h3 className="font-bold text-lg mb-2">{link.label}</h3>
                            <div className="flex flex-col space-y-2 pl-4">
                              {link.subLinks.map((subLink) => (
                                <Link
                                  key={subLink.href}
                                  href={subLink.href}
                                  onClick={() => setMobileMenuOpen(false)}
                                  className="text-base hover:text-accent transition-colors"
                                >
                                  {subLink.label}
                                </Link>
                              ))}
                            </div>
                          </div>
                        ) : (
                          <Link
                            key={link.href}
                            href={link.href}
                            onClick={() => setMobileMenuOpen(false)}
                            className="font-bold text-lg hover:text-accent transition-colors"
                          >
                            {link.label}
                          </Link>
                        )
                      )}
                    </nav>
                     <div className="mt-auto space-y-4">
                       <a href="mailto:enquiries@bigfoot.com.sg" className="flex items-center gap-2 hover:text-accent transition-colors">
                         <Mail className="h-4 w-4" />
                         <span>enquiries@bigfoot.com.sg</span>
                       </a>
                       <a href="tel:+6563244722" className="flex items-center gap-2 hover:text-accent transition-colors">
                          <Phone className="h-4 w-4" />
                          <span>+65 6324 4722</span>
                        </a>
                     </div>
                 </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  );
}
