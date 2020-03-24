import { randomAction } from 'app/state/common/randomAction';
import { fetchingWeatherApiState } from '../fetchingWeatherApiStateReducer';
import { FETCH_WEATHER_SUCCESS, FETCH_WEATHER_PENDING, FETCH_WEATHER_ERROR } from '../constants';

describe('fetchingWeatherApiState test suite', () => {
    it('should return default state when action not matches', () => {
        const action = randomAction();

        expect(fetchingWeatherApiState(undefined, action)).toMatchSnapshot();
    });

    it('should return default state on success', () => {
        const action = {
            type: FETCH_WEATHER_SUCCESS
        };

        expect(fetchingWeatherApiState(undefined, action)).toMatchSnapshot();
    });

    it('should return state for pending', () => {
        const action = {
            type: FETCH_WEATHER_PENDING
        };

        expect(fetchingWeatherApiState(undefined, action)).toMatchSnapshot();
    });

    it('should return state for error', () => {
        const action = {
            type: FETCH_WEATHER_ERROR
        };

        expect(fetchingWeatherApiState(undefined, action)).toMatchSnapshot();
    });
});