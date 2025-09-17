
'use client';

import { useEffect, useRef, useState } from 'react';
import { MapContainer, TileLayer, Marker, useMap } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';
import { gsap } from 'gsap';
import { Home, Plus, Minus } from 'lucide-react';

// Define the locations for the pins
const locations = [
  { lat: 28.6139, lon: 77.209, city: 'New Delhi', country: 'India' },
  { lat: 1.3521, lon: 103.8198, city: 'Singapore', country: 'Singapore' },
  { lat: -35.2809, lon: 149.13, city: 'Canberra', country: 'Australia' },
];

const WORLD_VIEW = { center: [20, 0] as L.LatLngTuple, zoom: 2 };

// Custom pulsing icon for markers
const createPulsingIcon = () => {
  return L.divIcon({
    className: 'pulsing-icon-container',
    html: `<div class="pulsing-icon"></div>`,
    iconSize: [24, 24],
    iconAnchor: [12, 12],
  });
};

// Tooltip component that will be bound to markers
const CustomTooltip = ({ city, country }: { city: string; country: string }) => {
  return (
    <div className="custom-tooltip">
      {city} — {country}
    </div>
  );
};

// Component to handle map animations and controls
const MapController = () => {
  const map = useMap();

  const handleZoomIn = () => map.zoomIn();
  const handleZoomOut = () => map.zoomOut();

  const handleGoHome = () => {
    map.flyTo(WORLD_VIEW.center, WORLD_VIEW.zoom);
  };
  
  // Expose flyTo on the map instance for external use
  useEffect(() => {
    (map as any).flyTo = (center: L.LatLngTuple, zoom: number) => {
        map.flyTo(center, zoom, {
            animate: true,
            duration: 1.5,
            easeLinearity: 0.1,
        });
    };
  }, [map]);


  return (
    <>
      <div className="leaflet-top leaflet-right">
        <div className="leaflet-control leaflet-bar glassmorphic-controls">
          <a onClick={handleZoomIn} title="Zoom in" role="button" aria-label="Zoom in">
            <Plus size={18} />
          </a>
          <a onClick={handleZoomOut} title="Zoom out" role="button" aria-label="Zoom out">
            <Minus size={18} />
          </a>
          <a onClick={handleGoHome} title="Home" role="button" aria-label="Home">
            <Home size={18} />
          </a>
        </div>
      </div>
       <div className="absolute bottom-5 left-5 text-white/50 text-xs pointer-events-none z-[1000]">
            🗺️ Drag to move • Hover pins • Click pins to zoom
      </div>
    </>
  );
};

// Custom Marker component
const AnimatedMarker = ({ position, city, country }: { position: L.LatLngTuple; city: string; country: string; }) => {
  const map = useMap();
  const icon = createPulsingIcon();
  
  const handleClick = () => {
    (map as any).flyTo(position, 6);
  };

  return (
    <Marker position={position} icon={icon} eventHandlers={{ click: handleClick }}>
      <L.Tooltip>
        <CustomTooltip city={city} country={country} />
      </L.Tooltip>
    </Marker>
  );
};

// The main Globe/Map component
const Globe = () => {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) {
    return <div className="w-full h-full absolute inset-0 bg-primary" />;
  }

  return (
    <div className="w-full h-full absolute inset-0" id="map">
      <MapContainer
        center={WORLD_VIEW.center}
        zoom={WORLD_VIEW.zoom}
        scrollWheelZoom={true}
        className="w-full h-full"
        zoomControl={false} // Disable default zoom control
      >
        <TileLayer
          url="https://{s}.basemaps.cartocdn.com/dark_nolabels/{z}/{x}/{y}{r}.png"
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>'
        />

        {locations.map((loc) => (
          <AnimatedMarker
            key={loc.city}
            position={[loc.lat, loc.lon]}
            city={loc.city}
            country={loc.country}
          />
        ))}

        <MapController />
      </MapContainer>
    </div>
  );
};

export default Globe;
