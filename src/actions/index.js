import axios from 'axios'

export const FETCH_CITY_WEATHER = 'FETCH_CITY_WEATHER';
const API_KEY = '7f9eb6ac12c1f9bb70c46745d236904e';
const ROOT_URL = `https://api.openweathermap.org/data/2.5/weather?appid=${API_KEY}`

export function fetchCityWeather(city) {
  const url = `${ROOT_URL}&q=${city}`;
  const req = axios.get(url);
  return {
    type: FETCH_CITY_WEATHER,
    payload: req
  }
}