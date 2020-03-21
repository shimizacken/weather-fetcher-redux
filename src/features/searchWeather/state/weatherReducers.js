import { SET_FETCH_WEATHER_FLAG, FETCH_WEATHER_SUCCESS, SET_WEATHER } from './constants';

const initialState = {};

export const searchResult = (state = initialState, action) => {
  if (action.type === SET_WEATHER) {
    return initialState;
  }

  if (action.type === FETCH_WEATHER_SUCCESS) {
    return {
      ...state,
      weather: action.payload
    };
  }

  return state;
};

export const fetchWeatherFlag = (state = false, action) => {
  if (action.type === SET_FETCH_WEATHER_FLAG) {
    return action.isPending;
  }

  return state;
};
