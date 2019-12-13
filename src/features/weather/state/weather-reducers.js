import { SET_WEATHER, SET_FETCH_WEATHER_FLAG } from './constants';

const initialState = {};

export const weather = (state = initialState, action) => {
  if(action.type === SET_WEATHER) {
    return {
      ...state,
      weather: action.weather
    };
  }
  
  return state;
};

export const fetchWeatherFlag = (state = false, action) => {
  if(action.type === SET_FETCH_WEATHER_FLAG) {
      return action.isPending;
  }
  
  return state;
};
