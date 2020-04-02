import { SET_TEMPERATURE_UNIT } from './constants';

export const setTempUnit = (tempType) => ({
  type: SET_TEMPERATURE_UNIT,
  tempType
});
