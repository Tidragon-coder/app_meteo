
import axios from 'axios';

export class MeteoAPI {
    static async fetchWeatherFromCoords(coords) {
        return (
            await axios.get(
                `https://api.open-meteo.com/v1/forecast?latitude=${coords.lat}&longitude=${coords.lng}&daily=weathercode,temperature_2m_max,sunrise,sunset,windspeed_10m_max&timezone=auto&current_weather=true`
            )
        ).data
    }

    static async fetchCityFromCoords(coords) {
        try {
            const response = await axios.get(
                `https://nominatim.openstreetmap.org/reverse?format=json&lat=${coords.lat}&lon=${coords.lng}`,
                {
                    headers: {
                        'User-Agent': 'MeteoApp/1.0'
                    }
                }
            );
            const data = response.data;
            
            if (data && data.address) {
                const { city, village, town, municipality } = data.address;
                return city || village || town || municipality || "Ville inconnue";
            }
            
            return "Ville inconnue";
        } catch (error) {
            console.error("Erreur lors de la récupération de la ville:", error);
            return "Ville inconnue";
        }
    }

    static async fetchCityCoordsFromCity(city) {
        try {
            const response = await axios.get(
                `https://geocoding-api.open-meteo.com/v1/search?name=${city}&count=1&language=fr`,
                {
                    headers: {
                        'User-Agent': 'MeteoApp/1.0'
                    }
                }
            );
            
            if (response.data && response.data.results && response.data.results.length > 0) {
                const { latitude: lat, longitude: lng } = response.data.results[0];
                return { lat, lng };
            }
            throw new Error("Ville non trouvée");
        }
        catch (error) {
            console.error("Erreur lors de la recherche des coordonnées:", error);
            throw "Pas de coordonnées trouvées pour la recherche : " + city;
        }
    }
}
