
"use client";

import React, { useState, useEffect } from 'react';
import { Mail, Phone, Menu, ChevronDown } from 'lucide-react';
import Link from 'next/link';
import { Logo } from '@/components/logo';
import { Button } from '../ui/button';
import { Sheet, SheetContent, SheetTrigger } from '../ui/sheet';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import { cn } from '@/lib/utils';

const navLinks = [
  { href: '/', label: 'Home' },
  { 
    label: 'About Us',
    subLinks: [
      { href: '/about/our-story', label: 'Our Story' },
      { href: '/about/vision-mission', label: 'Vision & Mission' },
      { href: '/about/careers', label: 'Careers' },
    ]
  },
  { 
    label: 'Services',
    subLinks: [
      { href: '/services/freight-forwarding', label: 'Freight Forwarding' },
      { href: '/services/land-transit', label: 'Land Transit' },
      { href: '/services/custom-clearance', label: 'Custom Clearance' },
      { href: '/services/warehousing', label: 'Warehousing' },
      { href: '/services/packers-and-movers', label: 'Packers and Movers' },
      { href: '/services/other-expertise', label: 'Other Expertise' },
    ]
  },
  { href: '/clients', label: 'Clients' },
  { href: '/contact', label: 'Contact Us' },
];

const contactInfo = {
  email: 'enquiries@bigfoot.com.sg',
  phone: '+65 6324 4722',
};

const NavLink = ({ children, className }: { children: React.ReactNode, className?: string }) => (
    <div className={cn("font-medium text-base hover:text-accent focus-visible:ring-0 focus-visible:ring-offset-0 hover:bg-transparent text-primary-foreground px-3 py-2", className)}>
        {children}
    </div>
)

const DesktopNav = () => {
    return (
        <nav className="hidden md:flex items-center">
            {navLinks.map((link) => (
                <div key={link.label}>
                    {link.subLinks ? (
                        <DropdownMenu>
                            <DropdownMenuTrigger asChild>
                                <Button variant="ghost" className="hover:bg-transparent focus:bg-transparent hover:text-accent text-primary-foreground text-base font-medium px-3 py-2">
                                    {link.label}
                                    <ChevronDown className="relative top-[1px] ml-1 h-4 w-4 transition duration-200 group-data-[state=open]:rotate-180" />
                                </Button>
                            </DropdownMenuTrigger>
                            <DropdownMenuContent className="bg-primary/90 backdrop-blur-sm text-primary-foreground border-accent/20">
                                {link.subLinks.map((subLink) => (
                                    <DropdownMenuItem key={subLink.href} asChild className="focus:bg-accent/50 focus:text-accent-foreground">
                                        <Link href={subLink.href}>{subLink.label}</Link>
                                    </DropdownMenuItem>
                                ))}
                            </DropdownMenuContent>
                        </DropdownMenu>
                    ) : (
                        <Link href={link.href!}>
                           <NavLink>{link.label}</NavLink>
                        </Link>
                    )}
                </div>
            ))}
        </nav>
    );
};

const MobileNav = () => {
    const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false);

    const closeMobileMenu = () => setMobileMenuOpen(false);

    return (
        <div className="md:hidden flex-1 flex justify-end">
            <Sheet open={mobileMenuOpen} onOpenChange={setMobileMenuOpen}>
                <SheetTrigger asChild>
                    <Button variant="ghost" size="icon" className="hover:text-accent text-primary-foreground">
                        <Menu className="h-6 w-6" />
                        <span className="sr-only">Open menu</span>
                    </Button>
                </SheetTrigger>
                <SheetContent side="left" className="w-[300px] sm:w-[400px] bg-primary text-primary-foreground">
                    <div className="flex flex-col h-full p-6">
                        <Link href="/" onClick={closeMobileMenu} className="mb-8">
                            <Logo className="text-white" />
                        </Link>
                        <nav className="flex flex-col space-y-2">
                            {navLinks.map((link) => (
                                <div key={link.label}>
                                    {link.subLinks ? (
                                        <Collapsible>
                                            <CollapsibleTrigger className="flex justify-between items-center w-full font-bold text-lg hover:text-accent transition-colors py-2">
                                                {link.label}
                                                <ChevronDown className="h-5 w-5" />
                                            </CollapsibleTrigger>
                                            <CollapsibleContent>
                                                <div className="flex flex-col space-y-2 pl-4 py-2 border-l border-accent/50">
                                                    {link.subLinks.map((subLink) => (
                                                        <Link
                                                            key={subLink.href}
                                                            href={subLink.href}
                                                            onClick={closeMobileMenu}
                                                            className="text-base hover:text-accent transition-colors"
                                                        >
                                                            {subLink.label}
                                                        </Link>
                                                    ))}
                                                </div>
                                            </CollapsibleContent>
                                        </Collapsible>
                                    ) : (
                                        <Link
                                            href={link.href!}
                                            onClick={closeMobileMenu}
                                            className="font-bold text-lg hover:text-accent transition-colors block py-2"
                                        >
                                            {link.label}
                                        </Link>
                                    )}
                                </div>
                            ))}
                        </nav>
                        <div className="mt-auto space-y-4">
                            <a href={`mailto:${contactInfo.email}`} className="flex items-center gap-2 hover:text-accent transition-colors">
                                <Mail className="h-4 w-4" />
                                <span>{contactInfo.email}</span>
                            </a>
                            <a href={`tel:${contactInfo.phone.replace(/\s/g, '')}`} className="flex items-center gap-2 hover:text-accent transition-colors">
                                <Phone className="h-4 w-4" />
                                <span>{contactInfo.phone}</span>
                            </a>
                        </div>
                    </div>
                </SheetContent>
            </Sheet>
        </div>
    );
};


export default function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={cn(
      "fixed top-0 left-0 w-full z-50 transition-all duration-300 ease-in-out",
    )}>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className={cn(
                "relative flex items-center justify-between transition-all duration-300 ease-in-out",
                scrolled ? "h-20" : "h-24"
            )}>
                <div className="flex-shrink-0">
                    <Link href="/">
                        <Logo className="text-primary-foreground h-20 w-auto transition-all duration-300" priority />
                    </Link>
                </div>

                <div className={cn(
                    "hidden md:flex items-center justify-center space-x-2 transition-all duration-300 ease-in-out absolute left-1/2 -translate-x-1/2",
                    "bg-foreground/50 backdrop-blur-md shadow-lg rounded-full",
                     scrolled ? "px-2 py-1" : "px-3 py-2"
                    
                    )}>
                    <DesktopNav />
                    <div className="header-separator" />
                    <a href={`mailto:${contactInfo.email}`} className="text-primary-foreground hover:text-accent transition-colors p-2">
                        <Mail className="h-5 w-5" />
                        <span className="sr-only">Email</span>
                    </a>
                    <a href={`tel:${contactInfo.phone.replace(/\s/g, '')}`} className="text-primary-foreground hover:text-accent transition-colors p-2">
                        <Phone className="h-5 w-5" />
                         <span className="sr-only">Phone</span>
                    </a>
                </div>

                <MobileNav />
            </div>
        </div>
    </header>
  );
}
