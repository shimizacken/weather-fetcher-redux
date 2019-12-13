import uuid from 'uuid';
import {
    SET_WEATHER,
    SET_CURRENT_WEATHER,
    END_FETCH_WEATHER,
    FETCH_WEATHER_PENDING,
    FETCH_WEATHER_ERROR,
    FETCH_WEATHER_SUCCESS
  } from './constants';
import { setHistory } from '../../../actions';
import { END_ADD_TO_SEARCH_HISTORY } from '../../../constants';
  
export const setWeather = weather => ({
    type: SET_WEATHER,
    weather
  });

export const fetchWeatherPending = {
  type: FETCH_WEATHER_PENDING
};

export const fetchWeatherSuccess = () => ({
  type: FETCH_WEATHER_SUCCESS
});

export const fetchWeatherError = {
  type: FETCH_WEATHER_ERROR
};

  export const setCurrentWeather = currentWeather => ({
    type: SET_CURRENT_WEATHER,
    currentWeather
  });

  export const endFetchWeather = () => ({
    type: END_FETCH_WEATHER
  });

  export const fetchWeather = (url) => (dispatch, getState) => {

    dispatch(fetchWeatherPending);

    return fetch(url)
      .then(response => response.json())
      .then(data => {

        if (data && data.cod !== 200) {
          throw data.message;
        }
        
        dispatch(setWeather(data));
        dispatch(endFetchWeather());

        const historyItem = {
          id: uuid.v4(),
          history: data,
          tempType: getState().metricType,
          date: new Date()
        };

        dispatch(setHistory(historyItem));
        dispatch({
          type: END_ADD_TO_SEARCH_HISTORY
        });
      })
      .catch(error => {
        console.error(error);
      })
      .finally(() => dispatch(endFetchWeather()));
};