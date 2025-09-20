
import type { Metadata } from 'next';
import './globals.css';
import { federo, openSans } from '@/app/fonts';
import { cn } from '@/lib/utils';
import Header from '@/components/layout/header';
import Footer from '@/components/layout/footer';
import { Toaster } from '@/components/ui/toaster';

export const metadata: Metadata = {
  title: 'Bigfoot Logistics',
  description: 'Trusted logistics and supply chain solutions worldwide, driven by innovation and reliability.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="!scroll-smooth">
      <body className={cn(
          'font-body antialiased bg-background text-foreground',
          federo.variable,
          openSans.variable
      )}>
        <div className="relative">
          <Header />
          <main className="flex-grow">{children}</main>
          <Footer />
          <Toaster />
        </div>
      </body>
    </html>
  );
}
