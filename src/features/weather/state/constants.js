import { pendingType, successType, errorType } from "../../../state/shared/constants";

export const FETCH_WEATHER = 'weather/fetch';
export const SET_WEATHER = 'weather/set';

export const FETCH_WEATHER_PENDING = pendingType(FETCH_WEATHER);
export const FETCH_WEATHER_SUCCESS = successType(FETCH_WEATHER);
export const FETCH_WEATHER_ERROR = errorType(FETCH_WEATHER);
