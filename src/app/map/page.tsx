'use client';

import React, { useCallback, useEffect, useState } from 'react';
import { GoogleMap, InfoWindow, Marker, } from '@react-google-maps/api';
import { center } from '../../libs/map';
import { useMapLoader } from '../../hooks/useMapLoader';
import { useAutoComplete } from '../../hooks/useAutoComplete';
import { useUserContext } from '@/context/userContext';
import geo from '@/utils/geoCoder';

function Map() {
  const [markers, setMarkers] = useState<any[]>([]);
  const [selectedMaterial, setSelectedMaterial] = useState('');
  const [selectedPlace, setSelectedPlace] = useState<any | null>(null);
  const [addressMarker, setAddressMarker] = useState<any | null>(null);
  const [circle, setCircle] = useState<google.maps.Circle | null>(null);
  const { isLoaded, map, onLoad, onUnmount } = useMapLoader();
  const { inputRef, autocomplete } = useAutoComplete(isLoaded);
  const { user } = useUserContext();



  useEffect(() => {
    if (isLoaded && user?.logged) {
      geo.getLatLongFromCEP(user?.cep?.toString() || '')
        .then(({ lat, lng }) => {
          const defaultMarker = {
            position: {
              lat: lat,
              lng: lng,
            },
            icon: 'https://img.icons8.com/?size=40&id=52671&format=png&color=000000',
            name: "Seu endereço"
          };
          setMarkers([defaultMarker]);
        })
        .catch(error => {
          console.error("Error getting lat/lng from CEP:", error);
        });
    }
  }, [isLoaded, user]);

  const handleMaterialChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedMaterial(e.target.value);
  };



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

        if (circle) {
          circle.setMap(null);
        }

        const newCircle = new google.maps.Circle({
          map: map!,
          center: newAddressMarker.position,
          radius: 10000, 
          fillColor: '#9FC6E5',
          fillOpacity: 0.2,
          strokeColor: '#9FC6E5',
          strokeOpacity: 0.8,
          strokeWeight: 2,
        });

        setCircle(newCircle); 

        const request: google.maps.places.PlaceSearchRequest = {
          location: newAddressMarker.position,
          radius: 10000,
          keyword: "coleta " + selectedMaterial,
        };

        const service = new google.maps.places.PlacesService(map);
        service.nearbySearch(request, (results, status) => {
          if (status === google.maps.places.PlacesServiceStatus.OK && results) {
            const newMarkers = results
              .filter((place) => {
                if (place.geometry?.location && newCircle.getCenter()) {
                  const latLng = new google.maps.LatLng(place.geometry.location.lat(), place.geometry.location.lng());
                  const centerLatLng = newCircle.getCenter();
                  if (centerLatLng) {
                    const distance = google.maps.geometry.spherical.computeDistanceBetween(latLng, centerLatLng);
                    return distance <= newCircle.getRadius(); 
                  }
                }
                return false; 
              })
              .map((place) => {
                const photo = place.photos && place.photos[0] ? place.photos[0].getUrl() : ''; 
                const hours = place.opening_hours?.weekday_text ?? []; 
                const formattedHours = hours.length > 0 ? hours.join(', ') : 'Horário não disponível'; 
                return {
                  position: {
                    lat: place.geometry?.location?.lat() ?? center.lat,
                    lng: place.geometry?.location?.lng() ?? center.lng,
                  },
                  name: place.name,
                  address: place.vicinity,
                  img: photo,
                  hours: formattedHours,
                };
              });

            setMarkers(newMarkers);

            const bounds = new google.maps.LatLngBounds();
            newMarkers.forEach((marker) => bounds.extend(marker.position));
            map.fitBounds(bounds);

            google.maps.event.addListenerOnce(map, 'bounds_changed', () => {
              if ((map.getZoom() ?? 0) > 13) {
                map.setZoom(13); 
              }
            });
          } else {
            alert('Nenhum ponto encontrado para este material.');
          }
        });
      } else {
        alert('Endereço não encontrado');
      }
    } else { alert('Endereço ou material não selecionado') }
  }, [map, selectedMaterial, autocomplete, circle]);

  const handleMarkerClick = (place: any) => {
    setSelectedPlace(place);
  };

  const handleInfoWindowClose = () => {
    setSelectedPlace(null);
  };

  return isLoaded ? (
    <>
      <div className='d-flex justify-content-center mb-2'>
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
              {selectedPlace.img && <img src={selectedPlace.img} alt={selectedPlace.name} style={{ width: '20em', height: '10em' }} />}
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
  width: '90vw',
  height: '85vh',
  marginLeft: '3rem'
};

export default React.memo(Map);
