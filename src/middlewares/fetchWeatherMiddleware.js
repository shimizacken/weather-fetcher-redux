import { API, END_ADD_TO_SEARCH_HISTORY } from '../constants';
import { 
    startFetchWeather,
    endFetchWeather,
    setHistory
} from '../actions';
import { normalize } from 'normalizr';
const uniqid = require('uniqid');

export const fetchWeatherMiddleware = ({ dispatch, getState }) => next => action => {

    if (action.type !== API) {
    
        return next(action);
    }

    const { url, success } = action.payload;
    
    dispatch(startFetchWeather());

    fetch(url)
        .then(response => response.json())
        .then(data => {
 
        // if (schema) {

        //     data = normalize(data, schema);
        // }
        
        if (data && data.cod !== 200) {
            throw data.message;
            return;
        }

        dispatch(success(data));
        dispatch(endFetchWeather());

        const historyItem = {
            id: uniqid(),
            history: data,
            tempType: getState().metricType,
            date: new Date()
        };

        dispatch(setHistory(historyItem));
        dispatch({
            type: END_ADD_TO_SEARCH_HISTORY
        })
    })
    .catch(error => {
        console.error(error);
        dispatch(endFetchWeather());
    });
};