import { API } from '../constants';
import { 
    startFetchWeather,
    endFetchWeather,
    setHistory
} from '../actions';
const uniqid = require('uniqid');

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
        dispatch(setHistory({
            id: uniqid(),
            history: data,
            tempType: getState().metricType,
            date: new Date()
        }));
    })
    .catch(error => {
        
        console.error(error);
        dispatch(endFetchWeather());
    })
};