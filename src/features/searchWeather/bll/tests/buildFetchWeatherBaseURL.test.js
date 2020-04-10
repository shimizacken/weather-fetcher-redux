/* eslint-disable no-undef */
import { buildFetchWeatherBaseURL } from '../api';
import { Units } from 'app/services/openWeatherMap/units';

describe('buildFetchWeatherBaseURL test suite', () => {
  describe('token test suite', () => {
    it('should return function', () => {
      const token = 'a1s2d3f4g5h6';

      expect(buildFetchWeatherBaseURL(token)).toMatchSnapshot();
    });
  });

  describe('metric test suite', () => {
    it('should return function', () => {
      const token = 'a1s2d3f4g5h6';
      const metricType = Units.celsius.value;

      expect(buildFetchWeatherBaseURL(token)(metricType)).toMatchSnapshot();
    });
  });

  describe('weather by city name test suite', () => {
    it('should return url based on city name', () => {
      const token = 'a1s2d3f4g5h6';
      const metricType = Units.celsius.value;
      const query = {
        q: 'Drammen'
      };

      expect(buildFetchWeatherBaseURL(token)(metricType)(query)).toMatchSnapshot();
    });
  });

  describe('weather by lat and lon test suite', () => {
    it('should return url based on city name', () => {
      const token = 'a1s2d3f4g5h6';
      const metricType = Units.celsius.value;
      const query = {
        lat: '123',
        log: '456'
      };

      expect(buildFetchWeatherBaseURL(token)(metricType)(query)).toMatchSnapshot();
    });
  });
});
