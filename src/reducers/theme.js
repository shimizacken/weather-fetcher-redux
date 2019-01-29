import { DARK_THEME } from '../constants';
import { themeType } from '../services/themes';

const theme = (state = themeType.default, action) => {

    switch (action.type) {
        case DARK_THEME:
            return themeType.dark;
        default:
            return state;
  }
}

export { theme };