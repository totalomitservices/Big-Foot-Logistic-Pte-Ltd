import Image from 'next/image';
import { cn } from '@/lib/utils';

export function Logo({ className }: { className?: string }) {
  return (
    <div className={cn('relative h-[140px] w-[140px]', className)}>
      <Image
        src="https://raw.githubusercontent.com/swathitom1207/logo-image-/main/contact%20us%202.png"
        alt="Bigfoot Logistics Logo"
        fill
        sizes="(max-width: 768px) 100vw,
                (max-width: 1200px) 50vw,
                140px"
        className="object-contain"
      />
    </div>
  );
}
