import uuid from 'uuid';
import { END_REMOVE_ITEM_FROM_HISTORY } from './constants';
import { SET_WEATHER_END } from 'app/features/weather';
import { setHistory } from './searchHistoryActions';

export const historyListMiddleware = ({ dispatch, getState }) => next => action => {
  if (action.type === SET_WEATHER_END) {

    const searchResult = getState()?.searchResult;
    
    const historyItem = {
      id: uuid.v4(),
      history: searchResult?.weather,
      tempType: getState()?.metricType,
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
