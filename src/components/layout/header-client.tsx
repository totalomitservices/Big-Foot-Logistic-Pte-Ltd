
'use client';

import React, { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';

export default function HeaderClient({ children }: { children: React.ReactNode }) {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={cn("fixed top-0 z-50 w-full transition-colors duration-300", scrolled ? 'bg-foreground/80 backdrop-blur-sm' : 'bg-transparent')}>
      {children}
    </header>
  );
}
