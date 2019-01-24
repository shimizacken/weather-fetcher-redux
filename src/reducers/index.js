import { combineReducers } from 'redux';
import { weather } from './weather';
import { currentTempType } from './tempType';
import { addToHistoryList } from './history';

export default combineReducers({
    weather: weather,
    currentTempType: currentTempType,
    addToHistoryList: addToHistoryList
});