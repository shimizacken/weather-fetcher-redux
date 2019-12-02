import { TOGGLE_THEME } from '../constants';
import { ThemeTypes } from '../services/themes';

export const themeType = (state = ThemeTypes.light, action) => {
  if (action.type === TOGGLE_THEME) {
    return action.themeType;
  }

  return state;
};
