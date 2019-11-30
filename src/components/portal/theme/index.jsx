import React from 'React';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { ThemeTypes } from '../../../services/themes';
import styles from './styles.scss';

const Theme = ({ themeType, children }) => {
  const theme = themeType === ThemeTypes.dark ? styles.rootDarkTheme : styles.rootDefaultTheme;

  document.getElementsByTagName('body')[0].setAttribute('class', theme);

  return <div>{children}</div>;
};

const mapStateToProps = state => ({
  themeType: state.themeType
});

const connected = connect(mapStateToProps)(Theme);

export { connected as Theme };

Theme.propTypes = {
  themeType: PropTypes.oneOf(Object.values(ThemeTypes)),
  children: PropTypes.node
};

Theme.defaultProps = {
  themeType: ThemeTypes.default,
  children: undefined
};
