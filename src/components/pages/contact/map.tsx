'use client';

import 'leaflet/dist/leaflet.css';
import { useEffect, useRef } from 'react';
import { Home as HomeIcon, Plus } from 'lucide-react';
import type L from 'leaflet';

const mapLocations = [
  { lat: 1.3159, lon: 103.7023, city: 'Singapore HQ', country: 'Singapore' },
  { lat: 10.3636, lon: 78.823, city: 'India Office', country: 'India' },
  { lat: -34.195, lon: 142.148, city: 'Australia Office', country: 'Australia' },
];

const WORLD_VIEW = { center: [20, 0] as L.LatLngTuple, zoom: 2 };

export default function Map() {
  const mapRef = useRef<HTMLDivElement>(null);
  const mapInstanceRef = useRef<L.Map | null>(null);

  useEffect(() => {
    // Ensure this code only runs in the browser
    if (typeof window === 'undefined' || !mapRef.current) {
      return;
    }

    // If map is already initialized, do nothing.
    if (mapInstanceRef.current) {
      return;
    }

    let mapInstance: L.Map;

    const initMap = async () => {
      const L = await import('leaflet');

      // Check if the DOM element is already used by another map instance
      if ((mapRef.current as any)._leaflet_id) {
        return;
      }
      
      mapInstance = L.map(mapRef.current!, {
        center: WORLD_VIEW.center,
        zoom: WORLD_VIEW.zoom,
        minZoom: WORLD_VIEW.zoom,
        zoomControl: false,
        scrollWheelZoom: false,
      });
      mapInstanceRef.current = mapInstance;

      L.tileLayer(
        'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
        {
          attribution:
            '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
          noWrap: true,
        }
      ).addTo(mapInstance);

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
          .addTo(mapInstance)
          .bindTooltip(`${loc.city} — ${loc.country}`)
          .on('click', () => {
            mapInstance.flyTo([loc.lat, loc.lon], 6, {
              animate: true,
              duration: 1.5,
            });
          });
      });
    };
    
    initMap();

    // Cleanup function to run when the component unmounts
    return () => {
      if (mapInstanceRef.current) {
        mapInstanceRef.current.remove();
        mapInstanceRef.current = null;
      }
    };
  }, []); // Empty dependency array ensures this effect runs only once

  const handleZoomIn = () => mapInstanceRef.current?.zoomIn();
  const handleGoHome = () => mapInstanceRef.current?.flyTo(WORLD_VIEW.center, WORLD_VIEW.zoom);

  return (
    <section className="relative h-[50vh] w-full z-10">
      <div ref={mapRef} className="w-full h-full" id="map-container"></div>
      <div className="leaflet-top leaflet-right absolute top-0 right-0 z-40 p-2.5">
        <div className="leaflet-control leaflet-bar glassmorphic-controls">
          <button type="button" onClick={handleZoomIn} title="Zoom in" role="button" aria-label="Zoom in" className="cursor-pointer">
            <Plus size={18} />
          </button>
          <button type="button" onClick={handleGoHome} title="Home" role="button" aria-label="Home" className="cursor-pointer">
            <HomeIcon size={18} />
          </button>
        </div>
      </div>
      <div className="absolute bottom-5 left-5 text-black/50 text-xs pointer-events-none z-40">
        🗺️ Drag to move • Hover pins • Click pins to zoom
      </div>
    </section>
  );
}
