import { combineReducers } from 'redux';
import { searchResult } from './searchResultReducer';
import { isFetchingWeather } from './isFetchingWeatherReducer';

export const weatherSearch = combineReducers({
  searchResult,
  isFetchingWeather
});
