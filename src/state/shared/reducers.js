import { combineReducers } from 'redux';
import { searchResult, fetchWeatherFlag } from 'app/features/weather';
import { metricType } from 'app/features/metricType';
import { themeType } from 'app/features/theme/state';
import { searchHistory } from 'app/features/searchHistory';

export const reducers = combineReducers({
  searchResult,
  metricType,
  searchHistory,
  fetchWeatherFlag,
  themeType
});
