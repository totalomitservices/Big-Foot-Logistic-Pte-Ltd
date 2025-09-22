
import type { Metadata } from 'next';
import OurStoryClient from '@/components/pages/about/our-story-client';

export const metadata: Metadata = {
  title: 'Our Story | Bigfoot Logistics',
  description: 'Discover the journey of Bigfoot Logistics, from our founding in 1992 to becoming a trusted leader in logistics. Learn about our values, our growth, and our commitment to our clients.',
};

export default function OurStoryPage() {
  return <OurStoryClient />;
}
