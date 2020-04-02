import { FETCH_WEATHER_PENDING, FETCH_WEATHER_SUCCESS, FETCH_WEATHER_ERROR } from './constants';

const initialState = {
  isFetching: false,
  isError: false,
  errorMessage: ''
};

export const fetchingWeatherApiState = (state = initialState, action) => {
  if (action.type === FETCH_WEATHER_SUCCESS) {
    return initialState;
  }

  if (action.type === FETCH_WEATHER_PENDING) {
    return {
      ...state,
      isFetching: true,
      isError: false,
      errorMessage: ''
    };
  }

  if (action.type === FETCH_WEATHER_ERROR) {
    return {
      ...state,
      isFetching: false,
      isError: true,
      errorMessage: action?.payload?.message
    };
  }

  return state;
};
