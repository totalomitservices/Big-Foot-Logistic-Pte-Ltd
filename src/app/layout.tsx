
import type { Metadata } from 'next';
import './globals.css';
import ClientLayout from './client-layout';
import { lato, poppins } from '@/app/fonts';

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
      <body className={`${lato.variable} ${poppins.variable} font-body antialiased bg-background text-foreground`}>
        <ClientLayout>
          {children}
        </ClientLayout>
      </body>
    </html>
  );
}
