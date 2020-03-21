import { SET_WEATHER, FETCH_WEATHER_PENDING, FETCH_WEATHER_SUCCESS, FETCH_WEATHER_ERROR } from './constants';

const initialState = {};

export const searchResult = (state = initialState, action) => {
  if (action.type === SET_WEATHER) {
    return {
      ...state,
      weather: action.weather
    };
  }

  return state;
};

export const fetchWeatherFlag = (state = false, action) => {
  if (action.type === FETCH_WEATHER_SUCCESS || action.type === FETCH_WEATHER_ERROR) {
    return false;
  }

  if (action.type === FETCH_WEATHER_PENDING) {
    return true;
  }

  return state;
};
