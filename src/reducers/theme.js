import { DEFAULT_THEME, DARK_THEME } from '../constants';
import { themeType } from '../services/themes';

const initialState = themeType.default;


export default (state = initialState, action) => {
  
    switch (action.type) {
        case DARK_THEME:
            return themeType.dark;
        default:
            return themeType.default;
  }
}