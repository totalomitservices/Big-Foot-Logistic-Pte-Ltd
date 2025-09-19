
import type { Metadata } from 'next';
import './globals.css';
import { federo, openSans } from '@/app/fonts';
import { cn } from '@/lib/utils';
import Header from '@/components/layout/header';
import Footer from '@/components/layout/footer';
import { Toaster } from '@/components/ui/toaster';
import WhatsappButton from '@/components/whatsapp-button';

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
      <head>
          <link
            rel="preload"
            href="/_next/static/media/3e0eca94.p.woff2"
            as="font"
            type="font/woff2"
            crossOrigin="anonymous"
          />
          <link
            rel="preload"
            href="/_next/static/media/2af60835.p.woff2"
            as="font"
            type="font/woff2"
            crossOrigin="anonymous"
          />
      </head>
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
          <WhatsappButton />
        </div>
      </body>
    </html>
  );
}
