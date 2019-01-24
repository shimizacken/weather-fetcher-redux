import { SET_WEATHER, SET_CURRENT_WEATHER } from '../constants';

const initialState = {};

export const weather = (state = initialState, action) => {
    
    switch (action.type) {
        case SET_WEATHER:
            return Object.assign({}, state, {
                weather: action.weather
            });
        case SET_CURRENT_WEATHER:
            return Object.assign({}, state, {
                currentWeather: action.currentWeather
            });

    default:
        return state
  }
};