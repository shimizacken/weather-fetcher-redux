import { combineReducers } from 'redux';
import { searchResult, fetchWeatherFlag } from 'app/features/weather';
import { themeType } from 'app/features/theme/state';
import { metricType } from '../../reducers/tempType';
import { searchHistory } from '../../reducers/history';

export const reducers = combineReducers({
  searchResult,
  metricType,
  searchHistory,
  fetchWeatherFlag,
  themeType
});
