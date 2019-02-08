import { combineReducers } from 'redux';
import { weather, fetchWeatherFlag } from './weather';
import { metricType } from './tempType';
import { searchHistory } from './history';
import { themeType } from './theme';

export default combineReducers({
    weather,
    metricType,
    searchHistory,
    fetchWeatherFlag,
    themeType
});