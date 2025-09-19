
"use client";

import React, { useEffect, useState } from 'react';
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

const NavLink = ({ href, children, className, isScrolled }: { href: string; children: React.ReactNode, className?: string, isScrolled: boolean }) => {
    const pathname = usePathname();
    const isActive = pathname === href;
    
    return (
         <Link href={href} className={cn(
            "font-medium text-base hover:text-accent focus-visible:ring-0 focus-visible:ring-offset-0 px-3 py-2 rounded-md transition-colors",
            isScrolled ? "text-foreground" : "text-white",
            isActive && (isScrolled ? "bg-black/10" : "bg-white/10"),
            className
        )}>
            {children}
        </Link>
    );
};

const DesktopNav = ({ isScrolled }: { isScrolled: boolean }) => {
    return (
        <nav className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
                <div key={link.label}>
                    {link.subLinks ? (
                        <DropdownMenu>
                            <DropdownMenuTrigger asChild>
                                <Button variant="ghost" className={cn("hover:bg-black/10 focus:bg-transparent hover:text-accent text-base font-medium px-3 py-2 flex items-center gap-1", isScrolled ? "text-foreground" : "text-white")}>
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
                        <NavLink href={link.href!} isScrolled={isScrolled}>{link.label}</NavLink>
                    )}
                </div>
            ))}
        </nav>
    );
};

const MobileNav = ({ isScrolled }: { isScrolled: boolean }) => {
    const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false);
    const pathname = usePathname();

    const closeMobileMenu = () => setMobileMenuOpen(false);

    return (
        <div className="md:hidden">
            <Sheet open={mobileMenuOpen} onOpenChange={setMobileMenuOpen}>
                <SheetTrigger asChild>
                    <Button variant="ghost" size="icon" className={cn("hover:text-accent", isScrolled ? "text-foreground" : "text-white")}>
                        <Menu className="h-6 w-6" />
                        <span className="sr-only">Open menu</span>
                    </Button>
                </SheetTrigger>
                <SheetContent side="left" className="w-[300px] sm:w-[400px] bg-primary text-primary-foreground p-0">
                    <div className="flex flex-col h-full">
                         <div className="p-6">
                            <Link href="/" onClick={closeMobileMenu} className="mb-8">
                                <Logo className="text-white h-16 w-auto" />
                            </Link>
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
                                            className={cn("font-bold text-lg hover:text-accent transition-colors block py-2", pathname === link.href && "text-accent")}
                                        >
                                            {link.label}
                                        </Link>
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
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    
    // Set initial state after the component has mounted
    // to avoid hydration mismatch.
    handleScroll();

    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={cn(
        "fixed top-0 left-0 w-full z-50 transition-all duration-300 ease-in-out",
        isScrolled && "scrolled-header"
    )}>
        <div className={cn("container mx-auto px-4 sm:px-6 lg:px-8 transition-all duration-300 ease-in-out", isScrolled ? 'py-2' : 'py-4')}>
            <div className={cn("relative flex items-center justify-between shadow-lg rounded-full px-4 py-2 transition-colors duration-300", isScrolled ? 'bg-white' : 'bg-black/20 backdrop-blur-md')}>
                <div className="flex-shrink-0">
                    <Link href="/">
                        <Logo className="h-12 w-auto transition-all duration-300" priority />
                    </Link>
                </div>

                <div className="flex items-center">
                    <DesktopNav isScrolled={isScrolled} />
                </div>
                
                <div className="hidden md:flex items-center">
                    <div className={cn("h-6 w-px mx-2 transition-colors", isScrolled ? "bg-black/20" : "bg-white/20")} />
                    <a href={`mailto:${contactInfo.email}`} className={cn("hover:text-accent transition-colors p-2", isScrolled ? "text-foreground" : "text-white")}>
                        <Mail className="h-5 w-5" />
                        <span className="sr-only">Email</span>
                    </a>
                    <a href={`tel:${contactInfo.phone.replace(/\s/g, '')}`} className={cn("hover:text-accent transition-colors p-2", isScrolled ? "text-foreground" : "text-white")}>
                        <Phone className="h-5 w-5" />
                         <span className="sr-only">Phone</span>
                    </a>
                </div>

                <MobileNav isScrolled={isScrolled} />
            </div>
        </div>
    </header>
  );
}
