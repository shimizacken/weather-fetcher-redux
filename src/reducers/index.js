import { combineReducers } from 'redux';
import { weather, fetchWeatherFlag } from './weather';
import { metricType } from './tempType';
import { historyList } from './history';

export default combineReducers({
    weather: weather,
    metricType: metricType,
    historyList: historyList,
    fetchWeatherFlag: fetchWeatherFlag
});