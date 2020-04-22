import { SET_WEATHER, FETCH_WEATHER, FETCH_WEATHER_ERROR } from './constants';

export const searchWeather = promiseFunc => ({
  type: FETCH_WEATHER,
  payload: promiseFunc
});

export const setWeather = weather => ({
  type: SET_WEATHER,
  weather
});

export const fetchWeatherError = error => ({
  type: FETCH_WEATHER_ERROR,
  payload: error
});
