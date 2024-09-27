function getLatLongFromCEP(cep: string): Promise<{ lat: number, lng: number }> {
    return new Promise((resolve, reject) => {
        const geocoder = new google.maps.Geocoder();
        
        geocoder.geocode({ 'address': cep }, (results, status) => {
            if (status === 'OK' && results && results.length > 0) {
                const location = results[0].geometry.location;
                const latitude = location.lat();
                const longitude = location.lng();
                // Retorna latitude e longitude resolvendo a Promise
                resolve({ lat: latitude, lng: longitude });
            } else if (status !== 'OK') {
                reject("Geocode falhou devido a: " + status);
            } else {
                reject("Nenhum resultado encontrado.");
            }
        });
    });
}

export default { getLatLongFromCEP };
