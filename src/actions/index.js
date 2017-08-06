import axios from 'axios';

const OWM_KEY = process.env.OWM_KEY;

export const FETCH_WEATHER = 'FETCH_WEATHER';

export function fetchWeather(city) {
  const url = `http://api.openweathermap.org/data/2.5/forecast?q=${city},us&${OWM_KEY}`;
  const request = axios.get(url);

  return {
    type: FETCH_WEATHER,
    payload: request
  };
}
