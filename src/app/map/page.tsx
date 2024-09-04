'use client';

import React, { useCallback, useState } from 'react';
import { GoogleMap, Marker, useJsApiLoader } from '@react-google-maps/api';

const center: google.maps.LatLngLiteral = {
  lat: -23.5505,
  lng: -46.6333
};

function Map() {
  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: process.env.NEXT_PUBLIC_API_KEY || "",
    libraries: ['places'] 
  });

  const [map, setMap] = useState<google.maps.Map | null>(null);
  const [value, setValue] = useState('');
  const [markerPosition, setMarkerPosition] = useState<google.maps.LatLngLiteral | null>(null);
  const [selectedMaterial, setSelectedMaterial] = useState('');

  const onLoad = useCallback((mapInstance: google.maps.Map) => {
    const bounds = new google.maps.LatLngBounds(center);
    mapInstance.fitBounds(bounds);
    setMap(mapInstance);
  }, []);

  const onUnmount = useCallback(() => {
    setMap(null);
  }, []);

  const handleMaterialChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedMaterial(e.target.value);
  };

  const findNearbyDisposalPoints = useCallback(() => {
    if (map && selectedMaterial) {
      const request: google.maps.places.PlaceSearchRequest = {
        location: center,
        radius: 5000, // Change this to a number
        keyword: selectedMaterial,
        type: 'recycling_center' // Adjust the type as needed
      }

      const service = new google.maps.places.PlacesService(map);
      service.nearbySearch(request, (results, status) => {
        if (status === google.maps.places.PlacesServiceStatus.OK && results) {
          const nearestPlace = results[0]; // Assuming you want the nearest one
          setMarkerPosition({
            lat: nearestPlace.geometry?.location?.lat() ?? center.lat,
            lng: nearestPlace.geometry?.location?.lng() ?? center.lng,
          });
          map.panTo({
            lat: nearestPlace.geometry?.location?.lat() ?? center.lat,
            lng: nearestPlace.geometry?.location?.lng() ?? center.lng,
          });
        } else {
          alert('No disposal points found for this material.');
        }
      });
    }
  }, [map, selectedMaterial]);

  return isLoaded ? (
    <>
      <GoogleMap
        mapContainerStyle={Styles}
        center={center}
        zoom={15}
        onLoad={onLoad}
        onUnmount={onUnmount}
      >
        {markerPosition && <Marker position={markerPosition} />}
      </GoogleMap>
      <div>
        <select value={selectedMaterial} onChange={handleMaterialChange}>
          <option value="">Select a material</option>
          <option value="gesso">Gesso</option>
          <option value="metal">Metal</option>
          <option value="plastic">Plastic</option>
          {/* Add more materials as needed */}
        </select>
        <button onClick={findNearbyDisposalPoints}>Find Nearby Disposal Points</button>
      </div>
    </>
  ) : <></>;
}

const Styles = {
  width: '100vw',
  height: '100vh'
};

export default React.memo(Map);
