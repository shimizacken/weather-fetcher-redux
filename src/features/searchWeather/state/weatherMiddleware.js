import { FETCH_WEATHER_SUCCESS } from './constants';
import { ResponseCode } from 'app/services/net/responseCode';
import { setHistory } from 'app/features/searchHistory/state/searchHistoryActions';
import { selectMetricType } from 'app/features/metricType';
import { getUnitNameByValue } from 'app/services/openWeatherMap/units';
import { historyListLocalStorageKey } from 'app/features/searchHistory/bll/historyListStorageKey';
import { mapWeatherResponse } from '../bll/mapWeatherResponse';
import { setWeather, fetchWeatherError } from './weatherActions';
import { buildHistoryItem } from './buildHistoryItem';

export const weatherMiddleware = ({ dispatch, getState }) => (next) => (action) => {
  if (action.type === FETCH_WEATHER_SUCCESS) {
    if (action?.payload?.cod === ResponseCode.NOT_FOUND) {
      dispatch(fetchWeatherError(action.payload));
    } else {
      const mappedWeather = mapWeatherResponse(action.payload);
      const metricType = getUnitNameByValue(selectMetricType(getState()));
      const historyItem = buildHistoryItem(mappedWeather, metricType);

      dispatch(setWeather(mappedWeather));
      dispatch(setHistory(historyItem));

      window.localStorage.setItem(historyListLocalStorageKey, JSON.stringify(getState().searchHistory));
    }
  }

  return next(action);
};
