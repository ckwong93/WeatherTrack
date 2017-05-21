import axios from 'axios';
const API_KEY = 'f578fc9103919ab6eade4f922112de13';
export const FETCH_WEATHER = 'FETCH_WEATHER';
const ROOT_URL = `http://samples.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`

export function fetchWeather(city) {
  const url = `${ROOT_URL}&q=${city},us`;
  const request = axios.get(url);

  return {
    type: FETCH_WEATHER,
    payload: request
  };
}
