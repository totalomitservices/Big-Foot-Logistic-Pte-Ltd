
import Image from 'next/image';
import { cn } from '@/lib/utils';

type LogoProps = {
  className?: string;
};

export function Logo({ className }: LogoProps) {
  return (
    <div className={cn('relative w-[160px] h-[60px]', className)}>
      <Image
        src="https://github.com/Ram-0609/Bigfoot-Logistics-Images/blob/main/bfl_logo.png?raw=true"
        alt="Bigfoot Logistics Logo"
        fill
        sizes="(max-width: 768px) 100vw, 160px"
        className="object-contain"
        priority
      />
    </div>
  );
}
