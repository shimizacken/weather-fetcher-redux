import uuid from 'uuid';
import { END_REMOVE_ITEM_FROM_HISTORY, FETCH_WEATHER_SUCCESS } from './constants';
import { setWeather } from './weatherActions';
import { setHistory } from '../../searchHistory/state/searchHistoryActions';
import { selectMetricType } from './weatherSelectors';

const flatResult = weather => {
  const city = weather.weather?.[0];
  const { main } = weather;

  return {
    name: weather.name,
    currentWeather: city?.main,
    description: city?.description,
    country: weather.sys?.country,
    temperature: main.temp,
    icon: city?.icon
  };
};

export const weatherMiddleware = ({ dispatch, getState }) => next => action => {
  if (action.type === FETCH_WEATHER_SUCCESS) {
    const mapped = flatResult(action.payload);

    dispatch(setWeather(mapped));

    const historyItem = {
      id: uuid.v4(),
      ...mapped,
      tempType: selectMetricType(getState()),
      date: new Date()
    };

    dispatch(setHistory(historyItem));
    window.localStorage.setItem('_history_list_', JSON.stringify(getState().searchHistory));
  }

  if (action.type === END_REMOVE_ITEM_FROM_HISTORY) {
    window.localStorage.setItem('_history_list_', JSON.stringify(getState().searchHistory));
  }

  return next(action);
};
