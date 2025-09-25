
import type { Metadata } from 'next';
import './globals.css';
import { federo, openSans } from '@/app/fonts';
import { cn } from '@/lib/utils';
import Header from '@/components/layout/header';
import Footer from '@/components/layout/footer';
import dynamic from 'next/dynamic';

const Toaster = dynamic(() => import('@/components/ui/toaster').then(mod => mod.Toaster), { ssr: false });

export const metadata: Metadata = {
  title: {
    default: 'Bigfoot Logistics | Your Trusted Partner in Global Supply Chain Solutions',
    template: '%s | Bigfoot Logistics',
  },
  description: 'Bigfoot Logistics offers reliable and innovative logistics and supply chain solutions worldwide. From freight forwarding to warehousing, we are committed to driving your business forward.',
  keywords: ['logistics', 'supply chain', 'freight forwarding', 'warehousing', 'custom clearance', 'packers and movers', 'Singapore logistics'],
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
        <div className="relative flex flex-col min-h-screen">
          <Header />
          <main className="flex-grow">{children}</main>
          <Footer />
          <Toaster />
        </div>
      </body>
    </html>
  );
}
