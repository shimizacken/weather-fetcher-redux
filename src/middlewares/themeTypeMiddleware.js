import { THEME_CHANGED } from '../constants';

export const themeTypeMiddleware = ({ getState }) => next => action => {
  if (action.type === THEME_CHANGED) {
    window.localStorage.setItem('_theme_type_', getState().themeType);
  }

  return next(action);
};
