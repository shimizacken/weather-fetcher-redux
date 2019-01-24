import { createStore } from 'redux';
import reducers from '../reducers';
import { units } from '../services/openweathermap/units';

const store = createStore(reducers, {
    weather: {
        currentWeather: []
    },
    currentTempType: units.celsius,
    favorites: [],
    historyList: []
});

window.STORE = store;

export default store;