import { combineReducers } from 'redux';
import { searchResult } from './searchResultReducer';
import { fetchingWeatherApiState } from './fetchingWeatherApiStateReducer';

export const weatherSearch = combineReducers({
  searchResult,
  fetchingWeatherApiState
});
