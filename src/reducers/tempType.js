import { SET_TEMP_TYPE } from '../constants';
import { units } from '../services/openweathermap/units';

const initialState = units.celsius;

const metricType = (state = initialState, action) => {
  
    switch (action.type) {
        case SET_TEMP_TYPE:
            return action.tempType
    default:
        return state
  }
}
export { metricType };