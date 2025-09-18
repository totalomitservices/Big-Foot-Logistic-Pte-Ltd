
'use client';

import { Toaster } from '@/components/ui/toaster';
import WhatsappButton from '@/components/whatsapp-button';

export default function ClientLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <>
            <div className="flex flex-col min-h-screen">
                {children}
            </div>
            <Toaster />
            <WhatsappButton />
        </>
    )
}
