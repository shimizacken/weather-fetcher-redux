/* eslint-disable no-undef */
import {randomAction} from 'app/state/common/randomAction';
import {metricType} from '../metricTypeReducer';
import {setTempUnit} from '../metricTypeActions';
import {Units} from 'app/services/openWeatherMap';

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
                metricType: undefined,
            };
            const action = setTempUnit(Units.celsius);

            expect(metricType(state, action)).toMatchSnapshot();
        });

        it('should return fahrenheit type (imperial)', () => {
            const state = {
                metricType: undefined,
            };
            const action = setTempUnit(Units.fahrenheit);

            expect(metricType(state, action)).toMatchSnapshot();
        });

        it('should return kelvin type (empty string)', () => {
            const state = {
                metricType: undefined,
            };
            const action = setTempUnit(Units.kelvin);

            expect(metricType(state, action)).toMatchSnapshot();
        });
    });
});
