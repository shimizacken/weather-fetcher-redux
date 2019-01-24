import { combineReducers } from 'redux';
import { weather } from './weather';
import { currentTempType } from './tempType';
import { historyList } from './history';

export default combineReducers({
    weather: weather,
    currentTempType: currentTempType,
    historyList: historyList
});