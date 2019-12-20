import { combineReducers } from 'redux';
import { searchResult, fetchWeatherFlag } from '../features/weather';
import { metricType } from './tempType';
import { searchHistory } from './history';
import { themeType } from '../features/theme/state';

export const reducers = combineReducers({
  searchResult,
  metricType,
  searchHistory,
  fetchWeatherFlag,
  themeType
});
