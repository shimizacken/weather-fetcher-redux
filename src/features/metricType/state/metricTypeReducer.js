import { SET_TEMPERATURE_UNIT } from './constants';
import { TemperatureUnits } from 'app/services/openWeatherMap/units';

const initialState = TemperatureUnits.celsius;

export const metricType = (state = initialState, action) => {
  if (action.type === SET_TEMPERATURE_UNIT) {
    return action.tempType;
  }

  return state;
};
