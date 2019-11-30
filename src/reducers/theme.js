import { TOGGLE_THEME } from '../constants';
import { ThemeTypes } from '../services/themes';

const initialState = ThemeTypes.default;

export const themeType = (state = initialState, action) => {
  switch (action.type) {
    case TOGGLE_THEME:
      return action.themeType;
    default:
      return state;
  }
};
