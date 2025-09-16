import Image from 'next/image';

export function Logo({ className }: { className?: string }) {
  return (
    <div className={`flex items-center gap-2 text-primary ${className}`}>
      <div className="relative h-[150px] w-[150px]">
        <Image
          src="https://raw.githubusercontent.com/swathitom1207/logo-image-/main/contact%20us%202.png"
          alt="Bigfoot Logistics Logo"
          fill
          className="object-contain"
          quality={100}
        />
      </div>
    </div>
  );
}
