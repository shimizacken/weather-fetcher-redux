import { SET_WEATHER } from '../constants';

export const setWeather = weather => ({
    type: SET_WEATHER,
    weather
});