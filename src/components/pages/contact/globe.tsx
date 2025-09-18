
'use client';

import 'leaflet/dist/leaflet.css';
import { useEffect, useRef } from 'react';
import { Home as HomeIcon, Plus } from 'lucide-react';

const mapLocations = [
  { lat: 1.3283, lon: 103.7073, city: 'Singapore HQ', country: 'Singapore' },
  { lat: 19.0760, lon: 72.8777, city: 'Mumbai', country: 'India' },
  { lat: -33.8688, lon: 151.2093, city: 'Sydney', country: 'Australia' },
];

const WORLD_VIEW = { center: [20, 0], zoom: 2 };

export default function Globe() {
  const mapRef = useRef<HTMLDivElement>(null);
  const mapInstance = useRef<any>(null);

  useEffect(() => {
    if (typeof window !== 'undefined' && mapRef.current && !mapInstance.current) {
      (async () => {
        const L = await import('leaflet');

        const map = L.map(mapRef.current!, {
          center: WORLD_VIEW.center as L.LatLngTuple,
          zoom: WORLD_VIEW.zoom,
          minZoom: WORLD_VIEW.zoom,
          zoomControl: false,
          scrollWheelZoom: false,
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
    <section className="relative h-[50vh] w-full">
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
  );
}
