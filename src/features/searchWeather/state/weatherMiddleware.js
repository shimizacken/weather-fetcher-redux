import { FETCH_WEATHER_SUCCESS } from './constants';
import { setWeather } from './weatherActions';
import { setHistory } from 'app/features/searchHistory/state/searchHistoryActions';
import { selectMetricType } from 'app/features/metricType';
import { getUnitNameByValue } from 'app/services/openWeatherMap/units';
import { mapWeatherResponse } from '../bll/mapWeatherResponse';
import { buildHistoryItem } from './buildHistoryItem';

export const weatherMiddleware = ({ dispatch, getState }) => next => action => {
  if (action.type === FETCH_WEATHER_SUCCESS) {
    const mappedWeather = mapWeatherResponse(action.payload);
    const metricType = getUnitNameByValue(selectMetricType(getState()));
    const historyItem = buildHistoryItem(mappedWeather, metricType);

    dispatch(setWeather(mappedWeather));
    dispatch(setHistory(historyItem));

    window.localStorage.setItem('_history_list_', JSON.stringify(getState().searchHistory));
  }

  return next(action);
};
