
import type { Metadata } from 'next';
import OurStoryClient from '@/components/pages/about/our-story-client';

export const metadata: Metadata = {
  title: 'Our Story | Bigfoot Logistics',
};

export default function OurStoryPage() {
  return <OurStoryClient />;
}
