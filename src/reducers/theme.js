import { TOGGLE_THEME } from '../constants';
import themeTypes from '../services/themes';

const initial = themeTypes.default;

const themeType = (state = initial, action) => {

    switch (action.type) {
        case TOGGLE_THEME:
            return action.themeType;
        default:
            return state;
  }
}

export { themeType };