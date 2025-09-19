
'use client';

import Header from '@/components/layout/header';
import Footer from '@/components/layout/footer';

export default function ClientLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <>
            <Header />
            <main className="flex-grow">{children}</main>
            <Footer />
        </>
    )
}
