'use client';
import { useEffect, useRef } from 'react';

export default function GoogleMap() {
  const mapRef = useRef(null);
  const mapInstanceRef = useRef(null);

  useEffect(() => {
    if (typeof window !== 'undefined' && window.google && mapRef.current) {
      // Create map
      const map = new window.google.maps.Map(mapRef.current, {
        center: { lat: -26.2023, lng: 28.0436 }, // Johannesburg coordinates
        zoom: 12,
        styles: [
          {
            featureType: 'water',
            elementType: 'geometry',
            stylers: [{ color: '#e9e9e9' }, { lightness: 17 }]
          },
          {
            featureType: 'landscape',
            elementType: 'geometry',
            stylers: [{ color: '#f3f3f3' }, { lightness: 20 }]
          },
          {
            featureType: 'road.highway',
            elementType: 'geometry.fill',
            stylers: [{ color: '#ff0000' }, { lightness: 0 }]
          },
          {
            featureType: 'road.arterial',
            elementType: 'geometry.fill',
            stylers: [{ color: '#ffffff' }, { lightness: 30 }]
          }
        ]
      });

      // Add marker
      new window.google.maps.Marker({
        position: { lat: -26.2023, lng: 28.0436 },
        map: map,
        title: 'Johannesburg, South Africa'
      });

      mapInstanceRef.current = map;
    }
  }, []);

  return (
    <div
      ref={mapRef}
      style={{
        width: '100%',
        height: '300px',
        borderRadius: '8px',
        border: '1px solid #ddd'
      }}
    />
  );
}
