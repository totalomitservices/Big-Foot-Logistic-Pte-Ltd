
'use client';

import React, { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';

export default function HeaderClient({ children }: { children: React.ReactNode }) {
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
      {children}
    </header>
  );
}
