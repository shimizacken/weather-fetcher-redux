import { SET_WEATHER, SET_CURRENT_WEATHER } from '../constants';

export const setWeather = weather => ({
    type: SET_WEATHER,
    weather
});

export const setCurrentWeather = currentWeather => ({
    type: SET_CURRENT_WEATHER,
    currentWeather
});