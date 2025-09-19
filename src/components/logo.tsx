
import Image, { type ImageProps } from 'next/image';
import { cn } from '@/lib/utils';

type LogoProps = {
  className?: string;
} & Omit<ImageProps, 'src' | 'alt' | 'fill' | 'sizes'>;

export function Logo({ className, ...props }: LogoProps) {
  return (
    <div className={cn('relative h-16 w-32', className)}>
      <Image
        src="https://raw.githubusercontent.com/swathitom1207/logo-image-/refs/heads/main/contact%20us%202.png"
        alt="Bigfoot Logistics Logo"
        fill
        sizes="(max-width: 768px) 100vw, 128px"
        className="object-contain"
        {...props}
      />
    </div>
  );
}
