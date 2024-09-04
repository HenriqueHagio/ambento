
export async function geocodeAddress(address: string) {
  const url = `https://maps.googleapis.com/maps/api/geocode/json?address=${encodeURIComponent(address)}&key=${ process.env.NEXT_PUBLIC_API_KEY || ""}`;
  
  try {
    const response = await fetch(url);
    const data = await response.json();
    
    if (data.status === 'OK') {
      return data.results[0].geometry.location;
    } else {
      throw new Error(`Geocoding falhou ao procurar as coordenadas: ${data.status}`);
    }
  } catch (error) {
    console.error('Erro:', error);
    throw error;
  }
}