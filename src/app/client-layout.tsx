
'use client';

import Header from '@/components/layout/header';
import Footer from '@/components/layout/footer';
import { usePathname } from 'next/navigation';
import { useEffect } from 'react';
import { Toaster } from '@/components/ui/toaster';
import WhatsappButton from '@/components/whatsapp-button';

export default function ClientLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    const pathname = usePathname();

    useEffect(() => {
        // Apply body class based on pathname
        const body = document.body;
        if (pathname === '/') {
            body.classList.add('is-home');
        } else {
            body.classList.remove('is-home');
        }
    }, [pathname]);

    return (
        <>
            <Header />
            <main className="flex-grow">{children}</main>
            <Footer />
        </>
    )
}
