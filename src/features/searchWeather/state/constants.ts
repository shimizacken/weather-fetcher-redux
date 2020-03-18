import { pendingType, successType, errorType } from 'app/state/constants';

export const FETCH_WEATHER: string = 'weather/fetch';
export const SET_WEATHER: string = 'weather/set';
export const SET_WEATHER_END: string = 'weather/set/end';

export const FETCH_WEATHER_PENDING: string = pendingType(FETCH_WEATHER);
export const FETCH_WEATHER_SUCCESS: string = successType(FETCH_WEATHER);
export const FETCH_WEATHER_ERROR: string = errorType(FETCH_WEATHER);

export const SET_FETCH_WEATHER_FLAG: string = 'weather/set-fetch-flag';
