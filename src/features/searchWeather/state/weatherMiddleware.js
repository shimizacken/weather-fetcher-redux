import { END_REMOVE_ITEM_FROM_HISTORY, FETCH_WEATHER_SUCCESS } from './constants';
import { setWeather } from './weatherActions';
import { setHistory } from 'app/features/searchHistory/state/searchHistoryActions';
import { mapWeatherResponse } from '../bll/mapWeatherResponse';
import { buildHistoryItem } from './buildHistoryItem';
import { selectMetricType } from 'app/features/metricType';

export const weatherMiddleware = ({ dispatch, getState }) => next => action => {
  if (action.type === FETCH_WEATHER_SUCCESS) {
    const mappedWeather = mapWeatherResponse(action.payload);

    dispatch(setWeather(mappedWeather));

    const historyItem = buildHistoryItem(mappedWeather, selectMetricType(getState()));

    dispatch(setHistory(historyItem));

    window.localStorage.setItem('_history_list_', JSON.stringify(getState().searchHistory));
  }

  if (action.type === END_REMOVE_ITEM_FROM_HISTORY) {
    window.localStorage.setItem('_history_list_', JSON.stringify(getState().searchHistory));
  }

  return next(action);
};
