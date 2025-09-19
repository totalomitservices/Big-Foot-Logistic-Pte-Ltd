
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
        const header = document.querySelector('header');
        
        const handleScroll = () => {
            if (header) {
                if (window.scrollY > 50) {
                    header.classList.add('scrolled-header');
                } else {
                    header.classList.remove('scrolled-header');
                }
            }
        };

        window.addEventListener('scroll', handleScroll);
        handleScroll();

        // Apply body class based on pathname
        const body = document.body;
        if (pathname === '/') {
            body.classList.add('is-home');
        } else {
            body.classList.remove('is-home');
        }

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
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
