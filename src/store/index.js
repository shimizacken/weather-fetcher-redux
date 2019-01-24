import { createStore } from 'redux';
import reducers from '../reducers';
import { units } from '../services/openweathermap/units';

const initialState = {
    weather: {
        currentWeather: []
    },
    currentTempType: units.celsius,
    favorites: [],
    historyList: []
};

const store = createStore(reducers, initialState);

window.STORE = store;

export default store;