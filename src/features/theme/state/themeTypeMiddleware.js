import { TOGGLE_THEME } from './constants';

export const themeTypeMiddleware = () => next => action => {
  if (action.type === TOGGLE_THEME) {
    window.localStorage.setItem('_theme_type_', action.themeType);
  }

  return next(action);
};
