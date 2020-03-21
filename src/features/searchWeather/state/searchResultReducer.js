import { SET_WEATHER } from './constants';

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
