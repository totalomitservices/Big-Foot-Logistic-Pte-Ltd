
'use client';

import { Toaster } from '@/components/ui/toaster';
import WhatsappButton from '@/components/whatsapp-button';
import Footer from '@/components/layout/footer';

export default function ClientLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <>
            <div className="flex flex-col min-h-screen">
                <main className="flex-grow">{children}</main>
                <Footer />
            </div>
            <Toaster />
            <WhatsappButton />
        </>
    )
}
