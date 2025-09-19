
'use client';

import Footer from '@/components/layout/footer';
import { usePathname } from 'next/navigation';
import { useEffect } from 'react';

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
            <div className="flex flex-col min-h-screen">
                <main className="flex-grow">{children}</main>
                <Footer />
            </div>
        </>
    )
}
