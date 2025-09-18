
'use client';

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Phone, Mail, Clock, ArrowRight, Building, Plus, Home as HomeIcon } from 'lucide-react';
import Link from 'next/link';
import 'leaflet/dist/leaflet.css';
import { useEffect, useRef } from 'react';

const coreServices = [
    { name: 'Land Transit', href: '/services/land-transit'},
    { name: 'Freight Forwarding', href: '/services/freight-forwarding'},
    { name: 'Warehousing', href: '/services/warehousing'},
    { name: 'Packers & Movers', href: '/services/packers-and-movers'},
    { name: 'Training', href: '/services/training'},
]

const mapLocations = [
  { lat: 28.6139, lon: 77.209, city: 'New Delhi', country: 'India' },
  { lat: 1.3521, lon: 103.8198, city: 'Singapore', country: 'Singapore' },
  { lat: -35.2809, lon: 149.13, city: 'Canberra', country: 'Australia' },
];

const WORLD_VIEW = { center: [20, 0], zoom: 2 };

const officeLocations = [
  {
    name: 'Singapore HQ',
    address: '8 Joo Koon Rd, Singapore 628972',
    phone: '+65 6324 4722',
    email: 'sg.office@bigfoot.com.sg',
  },
  {
    name: 'India Office',
    address: '10 Business Hub, Mumbai, 400001, India',
    phone: '+91 22 1234 5678',
    email: 'in.office@bigfoot.com.sg',
  },
  {
    name: 'Australia Office',
    address: '25 Trade Street, Sydney, NSW 2000, Australia',
    phone: '+61 2 9876 5432',
    email: 'au.office@bigfoot.com.sg',
  },
];


export default function ContactPage() {
  const mapRef = useRef<HTMLDivElement>(null);
  const mapInstance = useRef<any>(null); // Use any to avoid type issues with leaflet

   useEffect(() => {
    if (typeof window !== 'undefined' && mapRef.current && !mapInstance.current) {
      (async () => {
        const L = await import('leaflet');

        const map = L.map(mapRef.current!, {
          center: WORLD_VIEW.center as L.LatLngTuple,
          zoom: WORLD_VIEW.zoom,
          zoomControl: false,
        });
        mapInstance.current = map;

        L.tileLayer(
          'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
          {
            attribution:
              '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
            noWrap: true,
          }
        ).addTo(map);

        const createPulsingIcon = () => {
          return L.divIcon({
            className: 'pulsing-icon-container',
            html: `<div class="pulsing-icon"></div>`,
            iconSize: [24, 24],
            iconAnchor: [12, 12],
          });
        };

        mapLocations.forEach((loc) => {
          L.marker([loc.lat, loc.lon], { icon: createPulsingIcon() })
            .addTo(map)
            .bindTooltip(`${loc.city} — ${loc.country}`)
            .on('click', () => {
              map.flyTo([loc.lat, loc.lon], 6, {
                animate: true,
                duration: 1.5,
              });
            });
        });
      })();
    }
    
    return () => {
      if (mapInstance.current) {
        mapInstance.current.remove();
        mapInstance.current = null;
      }
    };
  }, []);

  const handleZoomIn = () => mapInstance.current?.zoomIn();
  const handleGoHome = () => mapInstance.current?.flyTo(WORLD_VIEW.center as L.LatLngTuple, WORLD_VIEW.zoom);


  return (
    <div className="bg-secondary text-foreground">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <section className="py-16 lg:py-24 bg-secondary">
          <div className="text-center mb-12">
            <h1 className="font-headline text-4xl md:text-5xl font-bold text-primary">
              Contact Us
            </h1>
            <p className="mt-4 text-lg md:text-xl font-light max-w-2xl mx-auto text-muted-foreground">
              We’re here to help you with reliable logistics solutions. For enquiries, reach out to us at <a href="mailto:enquiries@bigfoot.com.sg" className="underline hover:text-accent transition-colors">enquiries@bigfoot.com.sg</a>.
            </p>
          </div>
          <div className="bg-background shadow-lg p-8 lg:p-12">
            <div className="mb-12">
              <div className="bg-primary text-primary-foreground p-4 text-center">
                <h3 className="font-headline text-lg font-semibold mb-2">Our Core Services</h3>
                <div className="flex flex-wrap justify-center items-center gap-x-6 gap-y-2">
                  {coreServices.map(service => (
                    <Link key={service.name} href={service.href} className="text-sm hover:text-accent transition-colors flex items-center gap-1">
                      {service.name} <ArrowRight className="h-3 w-3" />
                    </Link>
                  ))}
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
              <div className="lg:col-span-2 space-y-8">
                <div>
                  <h3 className="text-2xl font-headline font-bold text-primary mb-4">Get in Touch</h3>
                  <p className="text-muted-foreground mb-6">
                    Have a question or need a quote? Reach out to us. We’re available around the clock to support your logistics needs.
                  </p>
                </div>
                <div className="space-y-4 text-lg">
                  <div className="flex items-center gap-4">
                    <Phone className="h-6 w-6 text-accent" />
                    <div>
                      <h4 className="font-semibold">Phone</h4>
                      <a href="tel:+6563244722" className="text-muted-foreground hover:text-primary transition-colors">+65 6324 4722</a>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <Mail className="h-6 w-6 text-accent" />
                    <div>
                      <h4 className="font-semibold">Email</h4>
                      <a href="mailto:enquiries@bigfoot.com.sg" className="text-muted-foreground hover:text-primary transition-colors">enquiries@bigfoot.com.sg</a>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <Clock className="h-6 w-6 text-accent" />
                    <div>
                      <h4 className="font-semibold">Working Hours</h4>
                      <p className="text-muted-foreground">Mon - Fri: 9am - 6pm</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="lg:col-span-3">
                <h3 className="text-2xl font-headline font-bold text-primary mb-6">Send Us a Message</h3>
                <form className="space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <Input type="text" placeholder="Your Name" required />
                    <Input type="email" placeholder="Your Email" required />
                  </div>
                  <Input type="tel" placeholder="Your Phone Number" />
                  <Textarea placeholder="Your Message" rows={6} required />
                  <Button type="submit" variant="accent" size="lg" className="w-full">
                    Send Message
                  </Button>
                </form>
              </div>
            </div>
          </div>
        </section>

        <section className='py-16 lg:py-24 bg-background'>
          <div className="text-center mb-12">
            <h2 className="text-3xl font-headline font-bold text-primary">Our Offices</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {officeLocations.map(office => (
              <Card key={office.name} className="flex flex-col text-center">
                <CardHeader>
                  <CardTitle className="flex items-center justify-center gap-2 text-xl text-accent">
                    <Building />{office.name}
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-3 text-muted-foreground flex-grow">
                  <p>{office.address}</p>
                  <p className="flex items-center justify-center gap-2"><Phone className="h-4 w-4" />{office.phone}</p>
                  <a href={`mailto:${office.email}`} className="flex items-center justify-center gap-2 hover:text-primary transition-colors"><Mail className="h-4 w-4" />{office.email}</a>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>
      </div>

      <section 
        className="h-[70vh] w-full relative"
      >
        <div ref={mapRef} className="w-full h-full" id="map-container"></div>
         <div className="leaflet-top leaflet-right absolute top-0 right-0 z-[1000] p-2.5">
          <div className="leaflet-control leaflet-bar glassmorphic-controls">
            <button onClick={handleZoomIn} title="Zoom in" role="button" aria-label="Zoom in" className="cursor-pointer">
              <Plus size={18} />
            </button>
            <button onClick={handleGoHome} title="Home" role="button" aria-label="Home" className="cursor-pointer">
              <HomeIcon size={18} />
            </button>
          </div>
        </div>
        <div className="absolute bottom-5 left-5 text-black/50 text-xs pointer-events-none z-[1000]">
              🗺️ Drag to move • Hover pins • Click pins to zoom
        </div>

      </section>

    </div>
  );
}
