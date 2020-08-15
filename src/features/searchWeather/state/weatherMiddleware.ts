import {ResponseCode} from 'app/services/net/responseCode';

import {mapWeatherResponse} from '../bll/mapWeatherResponse';

import {FETCH_WEATHER_SUCCESS} from './constants';
import {setWeather, fetchWeatherError} from './weatherActions';
import {buildHistoryItem} from './buildHistoryItem';

import {setHistory} from 'app/features/searchHistory/state/searchHistoryActions';
import {selectMetricType} from 'app/features/metricType';
import {getUnitNameByValue} from 'app/services/openWeatherMap/metricUnits';
import {historyListLocalStorageKey} from 'app/features/searchHistory/bll/historyListStorageKey';

export const weatherMiddleware = ({dispatch, getState}) => next => action => {
    if (action.type === FETCH_WEATHER_SUCCESS) {
        if (action?.payload?.cod === ResponseCode.NOT_FOUND) {
            return dispatch(fetchWeatherError(action.payload));
        } else {
            const mappedWeather = mapWeatherResponse(action.payload);
            const metricType = getUnitNameByValue(selectMetricType(getState()));
            const historyItem = buildHistoryItem(mappedWeather, metricType);

            dispatch(setWeather(mappedWeather));
            dispatch(setHistory(historyItem));

            window.localStorage.setItem(
                historyListLocalStorageKey,
                JSON.stringify(getState().searchHistory)
            );
        }
    }

    return next(action);
};
