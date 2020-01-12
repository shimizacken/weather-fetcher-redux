import { randomAction } from 'app/state/common/randomAction';
import { metricType } from '../metricTypeReducer';

describe('metricType test suite', () => {
  describe('default', () => {
    it('should return ', () => {
      const action = randomAction();

      expected(metricType(undefined, action)).toMatchSnapshot();
    });
  });
});
