import axios from 'axios';

const OWM_KEY = '48d3550688c5f41b4d7c351e8cf5f135';

export const FETCH_WEATHER = 'FETCH_WEATHER';

export function fetchWeather(city) {
  const url = `http://api.openweathermap.org/data/2.5/forecast?q=${city},us&appid=${OWM_KEY}`;
  const request = axios.get(url); // axios returns a promise which doesnt actually contain any data

  // console.log('request:', request);

  return {
    type: FETCH_WEATHER,
    payload: request
    // the 'redux-promise' middleware blocks this payload promise from axios and returns the actual data that was resolved
    // the 'redux-promise' middleware resolves the promises from axios and creates a new action to send to reducers
  };
}
