
import type { Metadata } from 'next';
import './globals.css';
import { Toaster } from '@/components/ui/toaster';
import Header from '@/components/layout/header';
import Footer from '@/components/layout/footer';
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
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Lato:wght@400;700&family=Poppins:wght@700;900&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="font-body antialiased bg-background text-foreground">
        <Header />
        <div className="flex flex-col min-h-screen">
          {children}
        </div>
        <Footer />
        <Toaster />
        <WhatsappButton />
      </body>
    </html>
  );
}
