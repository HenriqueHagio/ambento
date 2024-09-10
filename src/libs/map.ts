const center: google.maps.LatLngLiteral = {
    lat: -23.5505,
    lng: -46.6333
  };

  const defaultBounds = {
    north: center.lat + 0.1,
    south: center.lat - 0.1,
    east: center.lng + 0.1,
    west: center.lng - 0.1,
  };

  const completeOptions = {
    bounds: defaultBounds,
    componentRestrictions: {country: 'br'},
  }

  export { center, defaultBounds, completeOptions};
