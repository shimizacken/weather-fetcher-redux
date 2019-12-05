import { combineReducers } from 'redux';
import { weather, fetchWeatherFlag } from './weather';
import { metricType } from './tempType';
import { searchHistory } from './history';
import { themeType } from '../features/theme/state';

export default combineReducers({
  weather,
  metricType,
  searchHistory,
  fetchWeatherFlag,
  themeType
});
