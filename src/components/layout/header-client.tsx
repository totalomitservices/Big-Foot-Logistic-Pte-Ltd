
"use client";

import React, { useState, useEffect } from 'react';
import { Mail, Phone, Menu, ChevronDown } from 'lucide-react';
import Link from 'next/link';
import { Logo } from '@/components/logo';
import { Button } from '../ui/button';
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetClose
} from '../ui/sheet';
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
import { usePathname } from 'next/navigation';

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

function NavLink({ href, children, className, onClick }: { href: string; children: React.ReactNode, className?: string, onClick?: () => void }) {
    const pathname = usePathname();
    const isActive = pathname === href;
    
    return (
         <Link href={href} onClick={onClick} className={cn(
            "font-medium text-base hover:text-accent focus-visible:ring-0 focus-visible:ring-offset-0 px-3 py-2 rounded-md transition-colors text-black",
            isActive && "bg-black/10",
            className
        )}>
            {children}
        </Link>
    );
};

function DesktopNav() {
    return (
        <nav className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
                <div key={link.label}>
                    {link.subLinks ? (
                        <DropdownMenu>
                            <DropdownMenuTrigger asChild>
                                <Button variant="ghost" className="hover:bg-black/10 focus:bg-black/10 hover:text-accent text-base font-medium px-3 py-2 flex items-center gap-1 text-black data-[state=open]:bg-black/10">
                                    {link.label}
                                    <ChevronDown className="relative top-[1px] ml-1 h-4 w-4 transition duration-200 group-data-[state=open]:rotate-180" />
                                </Button>
                            </DropdownMenuTrigger>
                            <DropdownMenuContent className="bg-white/90 backdrop-blur-sm text-foreground border-accent/20">
                                {link.subLinks.map((subLink) => (
                                    <DropdownMenuItem key={subLink.href} asChild className="focus:bg-accent/50 focus:text-accent-foreground">
                                        <Link href={subLink.href}>{subLink.label}</Link>
                                    </DropdownMenuItem>
                                ))}
                            </DropdownMenuContent>
                        </DropdownMenu>
                    ) : (
                        <NavLink href={link.href!}>{link.label}</NavLink>
                    )}
                </div>
            ))}
        </nav>
    );
};

function MobileNav() {
    const pathname = usePathname();

    return (
        <div className="md:hidden">
            <Sheet>
                <SheetTrigger asChild>
                    <Button variant="ghost" size="icon" className="hover:text-accent text-black">
                        <Menu className="h-6 w-6" />
                        <span className="sr-only">Open menu</span>
                    </Button>
                </SheetTrigger>
                <SheetContent side="left" className="w-[300px] sm:w-[400px] bg-primary text-primary-foreground p-0">
                    <div className="flex flex-col h-full">
                         <div className="p-6">
                            <SheetClose asChild>
                                <Link href="/" className="mb-8">
                                    <Logo />
                                </Link>
                            </SheetClose>
                        </div>
                        <nav className="flex flex-col space-y-2 px-6">
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
                                                        <SheetClose asChild key={subLink.href}>
                                                            <Link
                                                                href={subLink.href}
                                                                className="text-base hover:text-accent transition-colors"
                                                            >
                                                                {subLink.label}
                                                            </Link>
                                                        </SheetClose>
                                                    ))}
                                                </div>
                                            </CollapsibleContent>
                                        </Collapsible>
                                    ) : (
                                        <SheetClose asChild>
                                            <Link
                                                href={link.href!}
                                                className={cn("font-bold text-lg hover:text-accent transition-colors block py-2", pathname === link.href && "text-accent")}
                                            >
                                                {link.label}
                                            </Link>
                                        </SheetClose>
                                    )}
                                </div>
                            ))}
                        </nav>
                        <div className="mt-auto space-y-4 p-6 border-t border-white/10">
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


export default function HeaderClient() {
  const [hasMounted, setHasMounted] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    setHasMounted(true);
  }, []);

  useEffect(() => {
    if (!hasMounted) return;

    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [hasMounted]);
  
  const headerProps: { 'data-scrolled'?: boolean } = {};
  if (hasMounted) {
    headerProps['data-scrolled'] = isScrolled;
  }

  return (
    <header 
        className="fixed top-4 left-0 w-full z-50 transition-all duration-300"
        {...headerProps}
    >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="relative flex items-center justify-between backdrop-blur-md shadow-lg rounded-full px-2 bg-white/80 transition-all duration-300 data-[scrolled=true]:bg-white/90 py-1">
                <div className="flex items-center flex-shrink-0">
                    <Link href="/">
                        <Logo/>
                    </Link>
                </div>

                <div className="flex-1 flex justify-end items-center">
                    <DesktopNav />
                    
                    <div className="hidden md:flex items-center gap-2">
                        <div className="h-6 w-px mx-2 bg-black/20" />
                        <a href={`mailto:${contactInfo.email}`} className="icon-btn icon-btn-email" aria-label="Email Us">
                             <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-mail"><rect width="20" height="16" x="2" y="4" rx="2"></rect><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path></svg>
                        </a>
                        <a href={`tel:${contactInfo.phone.replace(/\s/g, '')}`} className="icon-btn icon-btn-phone" aria-label="Call Us">
                             <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-phone"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
                        </a>
                    </div>

                    <MobileNav />
                </div>
            </div>
        </div>
    </header>
  );
}
