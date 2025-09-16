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
    <div className="flip-card aspect-square rounded-none">
      <div className="flip-card-inner relative w-full h-full">
        <div className="flip-card-front absolute w-full h-full">
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
        <div className="flip-card-back absolute w-full h-full bg-primary text-primary-foreground p-6 flex flex-col justify-center items-center text-center">
          <h3 className="font-headline text-xl font-bold">{service.title}</h3>
          <p className="mt-2 text-sm text-primary-foreground/80">
            {service.description}
          </p>
          <Button asChild variant="secondary" className="mt-4 bg-accent text-accent-foreground hover:bg-accent/90">
            <Link href="#services">Learn More</Link>
          </Button>
        </div>
      </div>
    </div>
  );
}
