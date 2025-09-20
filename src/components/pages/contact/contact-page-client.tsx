
'use client';

import dynamic from 'next/dynamic';

const Map = dynamic(() => import('@/components/pages/contact/map'), {
  ssr: false,
  loading: () => <div className="h-[50vh] w-full bg-secondary animate-pulse" />
});

export default function ContactPageClient() {
  return <Map />;
}
