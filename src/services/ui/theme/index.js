import { ThemeTypes } from '../../themes';

export const getPersistedTheme = () => {
  const themeType = window.localStorage.getItem('_theme_type_');

  if (themeType) {
    return parseInt(themeType);
  }

  return ThemeTypes.default;
};
