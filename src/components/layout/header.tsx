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
    subLinks: servicesData.map(s => ({ href: s.href, label: s.title }))
  },
  { href: '/#clients', label: 'Clients' },
  { href: '/#contact', label: 'Contact Us' },
];

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [hasMounted, setHasMounted] = useState(false);

  useEffect(() => {
    setHasMounted(true);
  }, []);

  useEffect(() => {
    if (!hasMounted) return;

    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    
    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Check on mount
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, [hasMounted]);

  const isTransparent = hasMounted && pathname === '/' && !scrolled;

  const handleMouseEnter = (label: string) => {
    if (hasMounted) {
      setOpenDropdown(label);
    }
  };

  const handleMouseLeave = () => {
    if (hasMounted) {
      setOpenDropdown(null);
    }
  };

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        isTransparent ? "bg-transparent" : "bg-primary shadow-md"
      )}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-24">
          <div className="flex-shrink-0">
            <Link href="/">
              <Logo className={cn(isTransparent ? 'text-primary-foreground' : 'text-primary-foreground')} />
            </Link>
          </div>

          {/* Desktop Navigation */}
          {hasMounted && (
            <nav className="hidden md:flex md:space-x-1">
              {navLinks.map((link) => (
                <div key={link.href}>
                  {link.subLinks ? (
                    <DropdownMenu onOpenChange={(isOpen) => setOpenDropdown(isOpen ? link.label : null)} open={openDropdown === link.label}>
                      <DropdownMenuTrigger asChild>
                        <Button 
                          variant="ghost" 
                          className={cn(
                            "font-medium hover:text-accent transition-colors duration-300 flex items-center focus-visible:ring-0 focus-visible:ring-offset-0 hover:bg-transparent",
                            isTransparent ? "text-primary-foreground" : "text-primary-foreground"
                          )}
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
                      className={cn(
                        "font-medium hover:text-accent transition-colors duration-300 flex items-center focus-visible:ring-0 focus-visible:ring-offset-0 px-4 py-2",
                         isTransparent ? "text-primary-foreground" : "text-primary-foreground"
                      )}
                    >
                      {link.label}
                    </Link>
                  )}
                </div>
              ))}
            </nav>
          )}

          {/* Contact Info */}
          {hasMounted && (
            <div className="hidden md:flex items-center justify-end space-x-4">
              <div className={cn("text-right text-sm", isTransparent ? "text-primary-foreground" : "text-primary-foreground")}>
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
          )}
          
          {/* Mobile Menu */}
          {hasMounted && (
            <div className="md:hidden">
              <Sheet open={mobileMenuOpen} onOpenChange={setMobileMenuOpen}>
                <SheetTrigger asChild>
                  <Button variant="ghost" size="icon" className={cn("hover:text-accent", isTransparent ? "text-primary-foreground" : "text-primary-foreground")}>
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
          )}
        </div>
      </div>
    </header>
  );
}
