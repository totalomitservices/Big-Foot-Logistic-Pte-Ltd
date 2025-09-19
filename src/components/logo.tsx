
import Image, { type ImageProps } from 'next/image';
import { cn } from '@/lib/utils';

type LogoProps = {
  className?: string;
} & Omit<ImageProps, 'src' | 'alt' | 'fill' | 'sizes'>;

export function Logo({ className, ...props }: LogoProps) {
  return (
    <div className={cn('relative h-[150px] w-[150px]', className)}>
      <Image
        src="https://raw.githubusercontent.com/swathitom1207/logo-image-/main/contact%20us%202.png"
        alt="Bigfoot Logistics Logo"
        fill
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 150px"
        className="object-contain"
        {...props}
      />
    </div>
  );
}
