import {
  SET_WEATHER,
  SET_CURRENT_WEATHER,
  API,
  START_FETCH_WEATHER,
  END_FETCH_WEATHER,
  ADD_TO_SEARCH_HISTORY,
  REMOVE_ITEM_FROM_HISTORY,
  END_REMOVE_ITEM_FROM_HISTORY
} from '../constants';

export const setWeather = weather => ({
  type: SET_WEATHER,
  weather
});

export const setCurrentWeather = currentWeather => ({
  type: SET_CURRENT_WEATHER,
  currentWeather
});

export const fetchWeather = url => ({
  type: API,
  payload: {
    url: url,
    success: weather => setWeather(weather)
  }
});

export const startFetchWeather = () => ({
  type: START_FETCH_WEATHER
});

export const endFetchWeather = () => ({
  type: END_FETCH_WEATHER
});

export const setHistory = history => ({
  type: ADD_TO_SEARCH_HISTORY,
  history
});

export const removeItemFromHistoryList = id => ({
  type: REMOVE_ITEM_FROM_HISTORY,
  id
});

export const removeItemFromHistoryListEnded = () => ({
  type: END_REMOVE_ITEM_FROM_HISTORY
});
