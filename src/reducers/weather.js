import { SET_WEATHER, START_FETCH_WEATHER, END_FETCH_WEATHER } from '../constants';

const initialState = [];

export const weather = (state = initialState, action) => {
  switch (action.type) {
    case SET_WEATHER:
      return Object.assign({}, state, {
        weather: action.weather
      });
    default:
      return state;
  }
};

export const fetchWeatherFlag = (state = false, action) => {
  switch (action.type) {
    case START_FETCH_WEATHER:
      return true;
    case END_FETCH_WEATHER:
      return false;
    default:
      return state;
  }
};
