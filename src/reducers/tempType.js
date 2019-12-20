import { SET_TEMPERATURE_UNIT } from '../constants';
import { units } from '../services/openWeatherMap/units';

const initialState = units.celsius;

export const metricType = (state = initialState, action) => {
    if(action.type === SET_TEMPERATURE_UNIT){
      return action.tempType;
    }

  return state;
};
