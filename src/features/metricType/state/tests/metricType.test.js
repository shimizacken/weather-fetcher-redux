import { randomAction } from 'app/state/common/randomAction';
import { metricType } from '../metricTypeReducer';

describe('metricType test suite', () => {
  describe('default', () => {
    it('should return metric type when not match action is passed', () => {
      const action = randomAction();

      expect(metricType(undefined, action)).toMatchSnapshot();
    });
  });
});
