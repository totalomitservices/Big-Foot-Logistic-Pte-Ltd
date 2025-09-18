
"use client";

import React, { useState, useEffect } from 'react';
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

const contactInfo = {
  email: 'enquiries@bigfoot.com.sg',
  phone: '+65 6324 4722',
};

const NavLink = ({ children, className }: { children: React.ReactNode, className?: string }) => (
    <div className={cn("font-medium text-base hover:text-accent focus-visible:ring-0 focus-visible:ring-offset-0 hover:bg-transparent focus:bg-transparent text-primary-foreground px-3 py-2", className)}>
        {children}
    </div>
)

const DesktopNav = () => {
    const [openDropdown, setOpenDropdown] = React.useState<string | null>(null);
    const handleOpenChange = (label: string, open: boolean) => {
        setOpenDropdown(open ? label : null);
    };

    return (
        <nav className="hidden md:flex items-center">
            {navLinks.map((link) => (
                <div key={link.href}>
                    {link.subLinks ? (
                        <DropdownMenu onOpenChange={(open) => handleOpenChange(link.label, open)} open={openDropdown === link.label}>
                            <DropdownMenuTrigger asChild>
                                <Button variant="ghost" asChild>
                                   <NavLink>
                                        {link.label}
                                        <ChevronDown className="ml-1 h-4 w-4 transition-transform duration-200" />
                                    </NavLink>
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
                        <Link href={link.href}>
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

    return (
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
                            <Logo className="text-white h-20 w-20" />
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
      "fixed top-4 left-1/2 -translate-x-1/2 z-50 transition-all duration-300 ease-in-out",
      "w-[calc(100%-2rem)] max-w-7xl",
      scrolled ? "w-full max-w-max rounded-full bg-foreground/70 backdrop-blur-md shadow-lg" : "bg-transparent"
    )}>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between h-16">
                <div className="flex-shrink-0">
                    <Link href="/">
                        <Logo className="text-primary-foreground h-20 w-20" priority />
                    </Link>
                </div>

                <div className="hidden md:flex items-center justify-center flex-1">
                    <DesktopNav />
                </div>


                <div className="hidden md:flex items-center justify-end space-x-4">
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
