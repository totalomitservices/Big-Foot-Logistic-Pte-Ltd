
'use client';

import { Toaster } from '@/components/ui/toaster';
import WhatsappButton from '@/components/whatsapp-button';
import Footer from '@/components/layout/footer';
import Header from '@/components/layout/header';
import { usePathname } from 'next/navigation';
import { useEffect } from 'react';

export default function ClientLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    const pathname = usePathname();

    useEffect(() => {
        const body = document.body;
        const header = document.querySelector('.header-scroll');

        if (pathname === '/') {
            body.classList.add('is-home');
             if (header) {
                header.classList.remove('scrolled-header');
            }
        } else {
            body.classList.remove('is-home');
            if (header) {
                header.classList.add('scrolled-header');
            }
        }
    }, [pathname]);

    return (
        <>
            <Header />
            <div className="flex flex-col min-h-screen">
                <main className="flex-grow">{children}</main>
                <Footer />
            </div>
            <Toaster />
            <WhatsappButton />
        </>
    )
}

    