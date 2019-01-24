import { createStore } from 'redux';
import reducers from '../reducers';
import { units } from '../services/openweathermap/units';

const store = createStore(reducers);

window.STORE = store;

export default store;