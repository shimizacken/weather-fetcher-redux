import { ThemeTypes } from './themeTypes';

export const getPersistedTheme = storage => {
  const themeType = storage.getItem('_theme_type_');

  return themeType ? themeType : ThemeTypes.light;
};
