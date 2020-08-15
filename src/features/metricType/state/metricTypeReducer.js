import {SET_TEMPERATURE_UNIT} from './constants';
import {Units} from 'app/services/openWeatherMap';

const initialState = Units.celsius;

export const metricType = (state = initialState, action) => {
    if (action.type === SET_TEMPERATURE_UNIT) {
        return action.tempType;
    }

    return state;
};
