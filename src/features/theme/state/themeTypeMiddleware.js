import { TOGGLE_THEME } from './constants';

export const themeTypeMiddleware = () => next => action => {
  // themeTypeMiddleware
  
  if (action.type === TOGGLE_THEME) {
    window.localStorage.setItem('_theme_type_', action.themeType);
  }

  console.log('themeTypeMiddleware, next: ', next);
  return next(action);
};
