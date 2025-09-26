
"use client";

import { useState, useEffect } from 'react';
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
    return (
         <Link href={href} onClick={onClick} className={cn(
            "font-medium text-base focus-visible:ring-0 focus-visible:ring-offset-0 px-3 py-2 rounded-md transition-colors text-black hover:text-red-500",
            className
        )}>
            {children}
        </Link>
    );
};

function DesktopNav() {
    return (
        <nav className="hidden md:flex items-center gap-1" aria-label="Main navigation">
            {navLinks.map((link) => (
                <div key={link.label}>
                    {link.subLinks ? (
                         <DropdownMenu>
                            <DropdownMenuTrigger asChild>
                                <Button variant="ghost" className="hover:bg-transparent focus:bg-transparent text-base font-medium px-3 py-2 flex items-center gap-1 text-black hover:text-red-500 focus-visible:ring-0 focus-visible:ring-offset-0 data-[state=open]:text-red-500">
                                    {link.label}
                                    <ChevronDown className="relative top-[1px] ml-1 h-4 w-4 transition duration-200 group-data-[state=open]:rotate-180" aria-hidden="true" />
                                </Button>
                            </DropdownMenuTrigger>
                            <DropdownMenuContent className="bg-white/90 backdrop-blur-sm text-foreground border-red-500/20">
                                {link.subLinks.map((subLink) => (
                                    <DropdownMenuItem key={subLink.href} asChild className="focus:bg-red-500 focus:text-accent-foreground">
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
    const [hasMounted, setHasMounted] = useState(false);
    useEffect(() => {
        setHasMounted(true);
    }, []);

    return (
        <div className="md:hidden">
            <Sheet>
                <SheetTrigger asChild>
                    <Button variant="ghost" size="icon" className="hover:text-red-500 text-black">
                        <Menu className="h-6 w-6" />
                        <span className="sr-only">Open menu</span>
                    </Button>
                </SheetTrigger>
                <SheetContent side="left" className="w-[85vw] max-w-sm bg-primary text-primary-foreground p-0">
                    <div className="flex flex-col h-full">
                         <div className="p-6">
                            <SheetClose asChild>
                                <Link href="/" className="mb-8" aria-label="Back to homepage">
                                    <Logo />
                                </Link>
                            </SheetClose>
                        </div>
                        <nav className="flex flex-col space-y-1 px-4" aria-label="Mobile navigation">
                            {navLinks.map((link) => (
                                <div key={link.label}>
                                    {link.subLinks ? (
                                        <Collapsible>
                                            <CollapsibleTrigger className="flex justify-between items-center w-full font-bold text-lg hover:text-red-500 transition-colors py-3 px-2 rounded-md">
                                                <span>{link.label}</span>
                                                <ChevronDown className="h-5 w-5 transition-transform duration-200 data-[state=open]:-rotate-180" aria-hidden="true" />
                                            </CollapsibleTrigger>
                                            <CollapsibleContent>
                                                <div className="flex flex-col space-y-2 pl-6 py-2 border-l border-red-500/50 ml-2">
                                                    {link.subLinks.map((subLink) => (
                                                        <SheetClose asChild key={subLink.href}>
                                                            <Link
                                                                href={subLink.href}
                                                                className="text-base hover:text-red-500 transition-colors py-1"
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
                                                className={cn(
                                                    "font-bold text-lg hover:text-red-500 transition-colors block py-3 px-2 rounded-md",
                                                    hasMounted && pathname === link.href && "text-red-500 bg-black/10"
                                                )}
                                            >
                                                {link.label}
                                            </Link>
                                        </SheetClose>
                                    )}
                                </div>
                            ))}
                        </nav>
                        <div className="mt-auto space-y-4 p-6 border-t border-white/10">
                            <a href={`mailto:${contactInfo.email}`} className="flex items-center gap-3 hover:text-red-500 transition-colors text-sm">
                                <Mail className="h-5 w-5" aria-hidden="true" />
                                <span>{contactInfo.email}</span>
                            </a>
                            <a href={`tel:${contactInfo.phone.replace(/\s/g, '')}`} className="flex items-center gap-3 hover:text-red-500 transition-colors text-sm">
                                <Phone className="h-5 w-5" aria-hidden="true" />
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
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }
      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [lastScrollY]);

  return (
    <header
      className={cn(
        "fixed top-4 left-0 w-full z-50 transition-transform duration-300 ease-in-out",
        isVisible ? "translate-y-0" : "-translate-y-[calc(100%+2rem)]"
      )}
    >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="relative flex items-center justify-between backdrop-blur-md shadow-lg rounded-full bg-white/80 transition-all duration-300 px-2 h-[68px]">
                <div className="flex items-center flex-shrink-0">
                    <Link href="/" aria-label="Bigfoot Logistics Homepage">
                        <Logo/>
                    </Link>
                </div>
                
                <DesktopNav />
                
                <div className="hidden md:flex items-center gap-2">
                    <div className="h-6 w-px mx-2 bg-black/20" />
                    <a href={`mailto:${contactInfo.email}`} className="icon-btn icon-btn-email" aria-label="Email Us">
                         <Mail />
                    </a>
                    <a href={`tel:${contactInfo.phone.replace(/\s/g, '')}`} className="icon-btn icon-btn-phone" aria-label="Call Us">
                         <Phone />
                    </a>
                </div>

                <MobileNav />
            </div>
        </div>
    </header>
  );
}
