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
    <div className="aspect-[3/2] rounded-none relative group flip-card">
      <div className="relative w-full h-full flip-card-inner group-hover:[transform:rotateY(180deg)]">
        {/* Front of the card */}
        <div className="absolute w-full h-full flip-card-front">
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
            <h3 className="font-headline text-2xl font-light text-white drop-shadow-md">
              {service.title}
            </h3>
          </div>
        </div>

        {/* Back of the card */}
        <div className="absolute w-full h-full bg-primary text-primary-foreground p-6 flex flex-col justify-center items-center text-center flip-card-back">
          <h3 className="font-headline text-2xl font-light mb-2">{service.title}</h3>
          <p className="text-sm text-primary-foreground/80 mb-4">{service.description}</p>
          <Button asChild variant="secondary">
            <Link href={service.href}>Learn More</Link>
          </Button>
        </div>
      </div>
    </div>
  );
}
