import { SET_WEATHER } from '../constants';

const initialState = {};

export const weather = (state = initialState, action) => {
    
    switch (action.type) {
        case SET_WEATHER:
            return Object.assign({}, state, {
                weather: action.weather
            });

    default:
        return state
  }
};