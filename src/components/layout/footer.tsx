
'use client';

import dynamic from 'next/dynamic';

// The footer is complex, so we lazy load it.
const FooterContentClient = dynamic(() => import('./footer-content'), { 
  ssr: false,
  loading: () => <footer className="h-96 bg-footer-navy animate-pulse" />
});


export default function Footer() {
  return (
    <div className="relative z-10">
      <FooterContentClient />
    </div>
  );
}
