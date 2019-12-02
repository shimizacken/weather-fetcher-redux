import { ThemeTypes } from '../../themes';

export const getPersistedTheme = () => {
  const themeType = window.localStorage.getItem('_theme_type_');

  return themeType ? themeType : ThemeTypes.light;
};
