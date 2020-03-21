import { combineReducers } from 'redux';
import { weatherSearch } from 'app/features/searchWeather';
import { themeType } from 'app/features/theme';
import { metricType } from 'app/features/metricType';
import { searchHistory } from 'app/features/searchHistory';

export const reducers = combineReducers({
  weatherSearch,
  metricType,
  searchHistory,
  themeType
});
