import { randomAction } from 'app/state/common/randomAction';
import { TemperatureUnits } from 'app/services/openWeatherMap/units';
import { metricType } from '../metricTypeReducer';
import { setTempUnit } from '../metricTypeActions';

describe('metricType test suite', () => {
  describe('default', () => {
    it('should return celsius type (metric) as initialState, when not match action is passed', () => {
      const action = randomAction();

      expect(metricType(undefined, action)).toMatchSnapshot();
    });
  });

  describe('default', () => {
    it('should return celsius type (metric)', () => {
      const state = {
        metricType: undefined
      };
      const action = setTempUnit(TemperatureUnits.celsius);

      expect(metricType(state, action)).toMatchSnapshot();
    });

    it('should return fahrenheit type (imperial)', () => {
      const state = {
        metricType: undefined
      };
      const action = setTempUnit(TemperatureUnits.fahrenheit);

      expect(metricType(state, action)).toMatchSnapshot();
    });

    it('should return kelvin type (empty string)', () => {
      const state = {
        metricType: undefined
      };
      const action = setTempUnit(TemperatureUnits.kelvin);

      expect(metricType(state, action)).toMatchSnapshot();
    });
  });
});
