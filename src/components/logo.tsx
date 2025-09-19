
import Image from 'next/image';
import { cn } from '@/lib/utils';

type LogoProps = {
  className?: string;
};

export function Logo({ className }: LogoProps) {
  return (
    <div className={cn('relative w-32 h-12', className)}>
      <Image
        src="https://github.com/Ram-0609/Bigfoot-Logistics-Images/blob/main/bfl_logo.png?raw=true"
        alt="Bigfoot Logistics Logo"
        fill
        sizes="(max-width: 768px) 100vw, 128px"
        className="object-contain"
        priority
      />
    </div>
  );
}

    