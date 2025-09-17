
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
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';
import { Sheet, SheetContent, SheetTrigger } from '../ui/sheet';
import { cn } from '@/lib/utils';
import { servicesData } from '@/data/services';

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
    subLinks: [
      { href: '/services/land-transit', label: 'Land Transit' },
      { href: '/services/freight-forwarding', label: 'Freight Forwarding' },
      { href: '/services/custom-clearance', label: 'Custom Clearance' },
      { href: '/services/warehousing', label: 'Warehousing' },
      { href: '/services/packers-and-movers', label: 'Packers and Movers' },
      { href: '/services/training', label: 'Training' },
      { href: '/services/other-expertise', label: 'Other Expertise' },
    ]
  },
  { href: '/#clients', label: 'Clients' },
  { href: '/#contact', label: 'Contact Us' },
];

export default function Header() {
  const pathname = usePathname();
  const isHomePage = pathname === '/';
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);

  const headerClasses = cn(
    "absolute top-0 left-0 right-0 z-50 transition-all duration-300",
    {
      "bg-primary text-primary-foreground shadow-md": !isHomePage,
      "bg-transparent text-white": isHomePage,
    }
  );

  return (
    <header className={headerClasses}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-24">
          <div className="flex-shrink-0">
            <Link href="/">
              <Logo className={cn("transition-colors", { "text-white": isHomePage, "text-primary-foreground": !isHomePage })} />
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex md:space-x-8">
            {navLinks.map((link) =>
              link.subLinks ? (
                <DropdownMenu 
                  key={link.label} 
                  open={openDropdown === link.label}
                  onOpenChange={(isOpen) => setOpenDropdown(isOpen ? link.label : null)}
                >
                  <DropdownMenuTrigger asChild>
                     <div
                      onMouseEnter={() => setOpenDropdown(link.label)}
                      onMouseLeave={() => setOpenDropdown(null)}
                      className="flex items-center"
                    >
                    <Button
                      variant="ghost"
                      className={cn("font-medium hover:text-accent transition-colors duration-300 text-base", {
                        "text-white hover:text-accent": isHomePage,
                        "text-primary-foreground hover:text-accent": !isHomePage,
                      })}
                    >
                      {link.label}
                      <ChevronDown className="ml-2 h-4 w-4" />
                    </Button>
                    </div>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent
                    onMouseEnter={() => setOpenDropdown(link.label)}
                    onMouseLeave={() => setOpenDropdown(null)}
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
                  key={link.href}
                  href={link.href}
                  className={cn("font-medium hover:text-accent transition-colors duration-300 flex items-center text-base", {
                    "text-white": isHomePage,
                    "text-primary-foreground": !isHomePage,
                  })}
                >
                  {link.label}
                </Link>
              )
            )}
          </nav>

          {/* Contact Info */}
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
          
          {/* Mobile Menu */}
          <div className="md:hidden">
            <Sheet open={mobileMenuOpen} onOpenChange={setMobileMenuOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon">
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
                       <a href="tel:6563244722" className="flex items-center gap-2 hover:text-accent transition-colors">
                         <Phone className="h-4 w-4" />
                         <span>65 6324 4722</span>
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
