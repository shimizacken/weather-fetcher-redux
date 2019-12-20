import React from 'React';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import { ThemeTypes } from '../../../services/themes';
import styles from './styles.scss';

export const Theme = ({ children }) => {
  const themeType = useSelector(state => state.themeType);
  const theme = themeType === ThemeTypes.dark ? styles.rootDarkTheme : styles.rootDefaultTheme;
  document.getElementsByTagName('body')[0].setAttribute('class', theme);

  return <div>{children}</div>;
};

Theme.propTypes = {
  children: PropTypes.node
};

Theme.defaultProps = {
  children: undefined
};
