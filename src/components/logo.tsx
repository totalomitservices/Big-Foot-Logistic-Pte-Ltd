import Image from 'next/image';

export function Logo({ className }: { className?: string }) {
  return (
    <div className={`relative h-[150px] w-[150px] ${className}`}>
      <Image
        src="https://raw.githubusercontent.com/swathitom1207/logo-image-/main/contact%20us%202.png"
        alt="Bigfoot Logistics Logo"
        fill
        sizes="(max-width: 768px) 100vw,
                (max-width: 1200px) 50vw,
                150px"
        className="object-contain bg-white rounded-full p-2"
      />
    </div>
  );
}
