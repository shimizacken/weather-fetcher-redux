import React from 'React';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { RadioButton } from '../../../../components/common';
import { ThemeTypes } from '../../../../services/themes';
import { TOGGLE_THEME, THEME_CHANGED } from '../../../../constants';
import { getPersistedTheme } from '../../../../services/ui/theme';
import styles from './styles.scss';

const ToggleTheme = ({ toggle, themeChanged }) => {
  const defaultThemeType = getPersistedTheme();

  const toggleTheme = e => {
    toggle(e.target.value);
    themeChanged(e.target.value);
  };

  return (
    <div className={styles.rootToggleTheme}>
      <RadioButton
        text="☀"
        value={ThemeTypes.light}
        name="themeType"
        checked={defaultThemeType === ThemeTypes.light}
        onChange={toggleTheme}
      />
      <RadioButton
        text="☽"
        value={ThemeTypes.dark}
        name="themeType"
        checked={defaultThemeType === ThemeTypes.dark}
        onChange={toggleTheme}
      />
    </div>
  );
};

const mapStateToProps = state => ({
  themeType: state.themeType
});

const mapDispatchToProps = dispatch => ({
  toggle: themeType =>
    dispatch({
      type: TOGGLE_THEME,
      themeType
    }),
  themeChanged: themeType => dispatch({ type: THEME_CHANGED, themeType })
});

const connected = connect(mapStateToProps, mapDispatchToProps)(ToggleTheme);

export { connected as ToggleTheme };

ToggleTheme.propTypes = {
  toggle: PropTypes.func,
  themeChanged: PropTypes.func
};

ToggleTheme.defaultProps = {
  toggle: undefined,
  themeChanged: undefined
};
