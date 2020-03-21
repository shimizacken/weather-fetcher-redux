import { FETCH_WEATHER_PENDING, FETCH_WEATHER_SUCCESS, FETCH_WEATHER_ERROR } from './constants';

const initialState = false;

export const isFetchingWeather = (state = initialState, action) => {
  if (action.type === FETCH_WEATHER_SUCCESS || action.type === FETCH_WEATHER_ERROR) {
    return initialState;
  }

  if (action.type === FETCH_WEATHER_PENDING) {
    return true;
  }

  return state;
};
