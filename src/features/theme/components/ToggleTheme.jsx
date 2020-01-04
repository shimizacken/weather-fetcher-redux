import React from 'React';
import { useDispatch, useSelector } from 'react-redux';
import { RadioButton } from '../../../components/common';
import { ThemeTypes } from '../bll/themeTypes';
import { toggleTheme, themeChanged } from '../state/actions';
import styles from './ToggleTheme.scss';

export const ToggleTheme = () => {
  const dispatch = useDispatch();
  const defaultThemeType = useSelector(state => state.themeType);
  
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
