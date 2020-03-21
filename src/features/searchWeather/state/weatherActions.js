import { SET_WEATHER, FETCH_WEATHER_PENDING, FETCH_WEATHER } from './constants';

export const searchWeather = promiseFunc => ({
  type: FETCH_WEATHER,
  payload: promiseFunc
});

export const setWeather = weather => ({
  type: SET_WEATHER,
  weather
});

export const fetchWeatherPending = {
  type: FETCH_WEATHER_PENDING
};
