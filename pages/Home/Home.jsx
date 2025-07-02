import { useNavigation } from '@react-navigation/native';
import { useEffect, useState } from 'react';
import { Alert, View } from 'react-native';
import { s } from './Home.style';

import { Container } from '../../components/Container/Container';
import { MeteoAdvanced } from '../../components/MeteoAdvanced/MeteoAdvanced';
import { MeteoBasic } from '../../components/MeteoBasic/MeteoBasic';
import { Searchbar } from '../../components/Searchbar/Searchbar';

import { getCurrentPositionAsync, requestForegroundPermissionsAsync } from "expo-location";
import { MeteoAPI } from '../../api/meteo';

import { getWeatherInterpretation } from '../../services/meteo-service';


export function Home({ }) {
  const [coords, setCoords] = useState();
  const [weather, setWeather] = useState();
  const [city, setCity] = useState("Chargement...");
  const nav = useNavigation();
  const currentWeather = weather?.current_weather;


  useEffect(() => {
    getUserCoords();
  }, []);

  useEffect(() => {
    if (coords) {
      fetchWeather(coords);
      fetchCity(coords);
    }
  }, [coords]);

async function getUserCoords() {
  try {
    const { status } = await requestForegroundPermissionsAsync();

    if (status === 'granted') {
      const location = await getCurrentPositionAsync();
      setCoords({ lat: location.coords.latitude, lng: location.coords.longitude });
    } else {
      // Permission refusée
      setCoords({ lat: 48.85, lng: 2.35 }); // coordonnées par défaut
    }
  } catch (error) {
    // En cas d'erreur (par exemple si getCurrentPositionAsync échoue)
    console.error("Erreur de localisation :", error);
    setCoords({ lat: 48.85, lng: 2.35 }); // fallback
  }
}

  async function fetchWeather(coordinates) {
    const weatherResponse =
      await MeteoAPI.fetchWeatherFromCoords(coordinates);

    setWeather(weatherResponse)
  }

  async function fetchCity(coordinates) {
    try {
      const cityResponse = await MeteoAPI.fetchCityFromCoords(coordinates);
      if (cityResponse) {
        setCity(cityResponse);
      } else {
        setCity("Ville inconnue");
      }
    } catch (error) {
      console.error("Erreur lors de la récupération de la ville:", error);
      setCity("Ville inconnue");
    }
  }

  async function fetchCoordsByCity(city) {
    try {
      const coords = await MeteoAPI.fetchCityCoordsFromCity(city);
      setCoords(coords);
    } catch (e) {
      console.error("Error fetching coordinates by city:", e);
      Alert.alert("Erreur !", e); 
      alert("Pas de coordonnées trouvées pour la recherche : " + city);
    }
  }

  console.log(weather);

  function goToForecastPage() {
    nav.navigate('Forecast', { city, ...weather.daily });
  }

  return currentWeather ? (
    <Container>
      <View style={s.content}>
        <View style={s.meteo_basic}>
          <MeteoBasic temperature={Math.round(currentWeather?.temperature)}
            city={city}
            interpretation={getWeatherInterpretation(currentWeather?.weathercode)}
            onPress={goToForecastPage}
          />
        </View>
        <View style={s.meteo_searchbar_container}>
          <Searchbar onSubmit={fetchCoordsByCity} />
        </View>
        <View style={s.meteo_advanced}>
          <MeteoAdvanced wind={currentWeather.windspeed} dusk={weather.daily.sunrise[0].split('T')[1]} dawn={weather.daily.sunset[0].split('T')[1]} />
        </View>
      </View>
    </Container>
  ) : null;
}
