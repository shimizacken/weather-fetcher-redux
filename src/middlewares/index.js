import { API } from '../constants';
import { startFetchWeather, endFetchWeather } from '../actions';

export const logMiddeleware = ({ dispatch, getState }) => next => action => {

    console.log('Redux Logger', action.type, getState());
    
    return next(action);
};

export const fetchWeatherMiddleware = ({ dispatch, getState }) => next => action => {

    if (action.type !== API) {
    
        return next(action);
    }

    const { url, success } = action.payload;

    console.log('fetchWeatherMiddleware', url);
    
    dispatch(startFetchWeather());

    fetch(url)
        .then(response => response.json())
        .then(data => {
            // if (schema) {
            //     data = normalize(data, schema);
            // }

        dispatch(success(data));
        dispatch(endFetchWeather());
    })
    .catch(error => {
        
        console.error(error);
        dispatch(endFetchWeather());
    })
};