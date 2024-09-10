'use client';

import React, { useCallback, useEffect, useRef, useState } from 'react';
import { GoogleMap, InfoWindow, Marker, useJsApiLoader } from '@react-google-maps/api';
import { center, completeOptions } from '../../libs/map';

function Map() {
  // Carregar mapa
  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: process.env.NEXT_PUBLIC_API_KEY || "",
    libraries: ['places', 'geometry'],
  });

  const [map, setMap] = useState<google.maps.Map | null>(null);
  const [markers, setMarkers] = useState<any[]>([]);
  const [selectedMaterial, setSelectedMaterial] = useState('');
  const [selectedPlace, setSelectedPlace] = useState<any | null>(null);
  const inputRef = useRef<HTMLInputElement | null>(null);
  const [addressMarker, setAddressMarker] = useState<any | null>(null);
  const [circle, setCircle] = useState<google.maps.Circle | null>(null);
  const [autocomplete, setAutocomplete] = useState<google.maps.places.Autocomplete | null>(null);

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

  const handleMaterialChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedMaterial(e.target.value);
  };

  // Inicializa o autocomplete
  useEffect(() => {
    if (inputRef.current && isLoaded) {
      const autocompleteInstance = new google.maps.places.Autocomplete(inputRef.current, completeOptions);
      setAutocomplete(autocompleteInstance);
    }
  }, [isLoaded]);

  const findNearbyDisposalPoints = useCallback(() => {
    if (map && selectedMaterial && autocomplete) {
      const place = autocomplete.getPlace();
      if (place?.geometry?.location) {
        const newAddressMarker = {
          position: {
            lat: place.geometry.location.lat(),
            lng: place.geometry.location.lng(),
          },
          icon: 'https://img.icons8.com/?size=40&id=52671&format=png&color=000000', // Ícone azul
          name: place.name,
          address: place.formatted_address,
        };
        setAddressMarker(newAddressMarker);

        // Remove o círculo anterior, se houver
        if (circle) {
          circle.setMap(null);
        }

        // Cria um novo círculo com raio de 10 km
        const newCircle = new google.maps.Circle({
          map: map!,
          center: newAddressMarker.position,
          radius: 10000, // Raio de 10 km
          fillColor: '#9FC6E5',
          fillOpacity: 0.2,
          strokeColor: '#9FC6E5',
          strokeOpacity: 0.8,
          strokeWeight: 2,
        });

        setCircle(newCircle); // Armazena o círculo no estado

        // Busca os pontos de coleta próximos
        const request: google.maps.places.PlaceSearchRequest = {
          location: newAddressMarker.position,
          radius: 10000,
          keyword: "coleta " + selectedMaterial,
        };

        const service = new google.maps.places.PlacesService(map);
        service.nearbySearch(request, (results, status) => {
          if (status === google.maps.places.PlacesServiceStatus.OK && results) {
            // Atualizar a lista de marcadores com os pontos de coleta encontrados
            const newMarkers = results
              .filter((place) => {
                if (place.geometry?.location && newCircle.getCenter()) {
                  const latLng = new google.maps.LatLng(place.geometry.location.lat(), place.geometry.location.lng());
                  const centerLatLng = newCircle.getCenter();
                  if (centerLatLng) {
                    const distance = google.maps.geometry.spherical.computeDistanceBetween(latLng, centerLatLng);
                    return distance <= newCircle.getRadius(); // Filtra os que estão dentro do raio do círculo
                  }
                }
                return false; // Ignora marcadores se a localização ou centro estiver faltando
              })
              .map((place) => ({
                position: {
                  lat: place.geometry?.location?.lat() ?? center.lat,
                  lng: place.geometry?.location?.lng() ?? center.lng,
                },
                name: place.name,
                address: place.vicinity,
              }));

            setMarkers(newMarkers);

            // Ajustar o mapa para exibir todos os marcadores dentro do círculo
            const bounds = new google.maps.LatLngBounds();
            newMarkers.forEach((marker) => bounds.extend(marker.position));
            map.fitBounds(bounds);

            // Verifica se o zoom é muito próximo, define um zoom mínimo de 13
            google.maps.event.addListenerOnce(map, 'bounds_changed', () => {
              if ((map.getZoom() ?? 0) > 13) {
                map.setZoom(13); // Define o zoom mínimo
              }
            });
          } else {
            alert('Nenhum ponto encontrado para este material.');
          }
        });
      } else {
        alert('Por favor, selecione um endereço válido.');
      }
    }
  }, [map, selectedMaterial, autocomplete, circle]);

  const handleMarkerClick = (place: any) => {
    setSelectedPlace(place);
  };

  const handleInfoWindowClose = () => {
    setSelectedPlace(null);
  };

  return isLoaded ? (
    <>
      <div className='d-flex'>
        <select className='form-select me-sm-2 w-25' value={selectedMaterial} onChange={handleMaterialChange}>
          <option value="">Selecione um material</option>
          <option value="eletrodomesticos">Eletrodomésticos</option>
          <option value="eletronicos">Eletrônicos</option>
          <option value="entulhos">Entulhos</option>
          <option value="gesso">Gesso</option>
          <option value="moveis">Móveis</option>
          <option value="remedios">Remédios</option>
          <option value={'seringas' || 'agulhas'}>Seringas e agulhas</option>
        </select>
        <input className='form-control me-sm-2 w-50' ref={inputRef} placeholder='Informe o endereço' />
        <button className='btn btn-secondary my-2 my-sm-0' onClick={findNearbyDisposalPoints}>Buscar</button>
      </div>
      <GoogleMap mapContainerStyle={Styles} center={center} zoom={13} onLoad={onLoad} onUnmount={onUnmount}>

        {addressMarker && (
          <Marker
            position={addressMarker.position}
            icon={addressMarker.icon} // Ícone azul
            onClick={() => handleMarkerClick(addressMarker)}
          />
        )}

        {markers.map((place, index) => (
          <Marker key={index} position={place.position} onClick={() => handleMarkerClick(place)} />
        ))}

        {selectedPlace && (
          <InfoWindow position={selectedPlace.position} onCloseClick={handleInfoWindowClose}>
            <div>
              <h2>{selectedPlace.name}</h2>
              <p>{selectedPlace.address}</p>
            </div>
          </InfoWindow>
        )}
      </GoogleMap>
    </>
  ) : <></>;
}

const Styles = {
  width: '98vw',
  height: '85vh',
};

export default React.memo(Map);
