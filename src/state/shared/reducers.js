import { combineReducers } from 'redux';
import { searchResult, fetchWeatherFlag } from 'app/features/weather';
import { themeType } from 'app/features/theme/state';
import { metricType } from 'app/features/metricType';
import { searchHistory } from 'app/features/searchHistory';

export const reducers = combineReducers({
  searchResult,
  metricType,
  searchHistory,
  fetchWeatherFlag,
  themeType
});