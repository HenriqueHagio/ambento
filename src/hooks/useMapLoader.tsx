import { center } from '@/libs/map';
import { useJsApiLoader } from '@react-google-maps/api';
import { useState, useCallback } from 'react';

const useMapLoader = () => {
  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: process.env.NEXT_PUBLIC_API_KEY_MAP || "",
    libraries: ['places', 'geometry'],
  });

  const [map, setMap] = useState<google.maps.Map | null>(null);

  const onLoad = useCallback((mapInstance: google.maps.Map) => {
    const bounds = new google.maps.LatLngBounds(center);
    mapInstance.fitBounds(bounds);

    google.maps.event.addListenerOnce(mapInstance, 'bounds_changed', () => {
      if ((mapInstance.getZoom() ?? 0) > 13) {
        mapInstance.setZoom(13); 
      }
    });

    setMap(mapInstance);
  }, []);

  const onUnmount = useCallback(() => {
    setMap(null);
  }, []);

  return {
    isLoaded,
    map,
    onLoad,
    onUnmount
  };
};
export { useMapLoader};
