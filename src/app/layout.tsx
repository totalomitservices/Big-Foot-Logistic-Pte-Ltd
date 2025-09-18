
import type { Metadata } from 'next';
import './globals.css';
import ClientLayout from './client-layout';
import { federo, openSans } from '@/app/fonts';
import { cn } from '@/lib/utils';

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
        <ClientLayout>
          {children}
        </ClientLayout>
      </body>
    </html>
  );
}
