import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import type { Service } from '@/data/services';
import { PlaceHolderImages } from '@/lib/placeholder-images';

type ServiceCardProps = {
  service: Service;
};

export default function ServiceCard({ service }: ServiceCardProps) {
  const image = PlaceHolderImages.find((img) => img.id === service.imageId);

  return (
    <div className="aspect-square rounded-none relative">
      <div className="relative w-full h-full">
        <div className="absolute w-full h-full">
          {image && (
            <Image
              src={image.imageUrl}
              alt={service.title}
              fill
              className="object-cover"
              data-ai-hint={image.imageHint}
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
          )}
          <div className="absolute inset-0 bg-black/40 flex items-end p-4">
            <h3 className="font-headline text-2xl font-bold text-white drop-shadow-md">
              {service.title}
            </h3>
          </div>
        </div>
      </div>
    </div>
  );
}
