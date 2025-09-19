
'use client';

import dynamic from 'next/dynamic';

const FooterMap = dynamic(() => import('./footer-map'), { 
  ssr: false, 
  loading: () => <div className="aspect-video bg-black/20 animate-pulse" /> 
});

export default function FooterMapClient() {
  return <FooterMap />;
}
