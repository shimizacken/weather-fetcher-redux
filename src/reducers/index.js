import { combineReducers } from 'redux';
import { weather } from './weather';
import { metricType } from './tempType';
import { historyList } from './history';

export default combineReducers({
    weather: weather,
    metricType: metricType,
    historyList: historyList
});