import uuid from 'uuid';
import {
  SET_WEATHER,
  FETCH_WEATHER_PENDING,
  FETCH_WEATHER_ERROR,
  FETCH_WEATHER_SUCCESS,
  SET_FETCH_WEATHER_FLAG
} from './constants';
import { setHistory } from 'app/features/searchHistory/state/actions';
  
export const setWeather = weather => ({
    type: SET_WEATHER,
    weather
  });

export const fetchWeatherPending = {
  type: FETCH_WEATHER_PENDING
};

export const fetchWeatherSuccess = weather => ({
  type: FETCH_WEATHER_SUCCESS,
  weather
});

export const fetchWeatherError = {
  type: FETCH_WEATHER_ERROR
};

  export const setWeatherFetchFlag = isPending => ({
    type: SET_FETCH_WEATHER_FLAG,
    isPending
  });

  export const fetchWeather = (url) => (dispatch, getState) => {

    dispatch(fetchWeatherPending);
    dispatch(setWeatherFetchFlag(true));

    return fetch(url)
      .then(response => response.json())
      .then(data => {

        if (data && data.cod !== 200) {
          throw data.message;
        }
        
        dispatch(setWeather(data));

        const historyItem = {
          id: uuid.v4(),
          history: data,
          tempType: getState().metricType,
          date: new Date()
        };

        dispatch(setHistory(historyItem));
      })
      .catch(error => {
        console.error(error);
        dispatch(fetchWeatherError);
      })
      .finally(() => dispatch(setWeatherFetchFlag(false)));
};