
import Image, { type ImageProps } from 'next/image';
import { cn } from '@/lib/utils';

type LogoProps = {
  className?: string;
} & Omit<ImageProps, 'src' | 'alt' | 'fill' | 'sizes'>;

export function Logo({ className, ...props }: LogoProps) {
  return (
    <div className={cn('relative h-[140px] w-[140px]', className)}>
      <Image
        src="https://github.com/Ram-0609/Bigfoot-Logistics-Images/blob/main/bfl_logo.png?raw=true"
        alt="Bigfoot Logistics Logo"
        fill
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 140px"
        className="object-contain"
        {...props}
      />
    </div>
  );
}
