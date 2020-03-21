import { Units } from 'app/services/openWeatherMap/units';
import { SET_TEMPERATURE_UNIT } from './constants';

const initialState = Units.celsius;

export const metricType = (state = initialState, action) => {
  if (action.type === SET_TEMPERATURE_UNIT) {
    return action.tempType;
  }

  return state;
};
