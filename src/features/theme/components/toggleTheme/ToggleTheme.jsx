import React from 'React';
import { useDispatch } from 'react-redux';
import { RadioButton } from '../../../../components/common';
import { ThemeTypes } from '../../bll/themeTypes';
import { getPersistedTheme } from '../../bll/getPersistedTheme';
import { toggleTheme, themeChanged } from '../../state/actions';
import styles from './styles.scss';

export const ToggleTheme = () => {
  const dispatch = useDispatch();
  const defaultThemeType = getPersistedTheme();

  const toggle = e => {
    dispatch(toggleTheme(e.target.value));
    dispatch(themeChanged(e.target.value));
  };

  return (
    <div className={styles.rootToggleTheme}>
      <RadioButton
        text="☀"
        value={ThemeTypes.light}
        name="themeType"
        checked={defaultThemeType === ThemeTypes.light}
        onChange={toggle}
      />
      <RadioButton
        text="☽"
        value={ThemeTypes.dark}
        name="themeType"
        checked={defaultThemeType === ThemeTypes.dark}
        onChange={toggle}
      />
    </div>
  );
};
