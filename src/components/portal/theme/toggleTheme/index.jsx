import React from 'React';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import RadioButton from '../../../portal/radioButton';
import { ThemeTypes } from '../../../../services/themes';
import { TOGGLE_THEME, THEME_CHANGED } from '../../../../constants';
import { getPersistedTheme } from '../../../../services/ui/theme';
import styles from './styles.scss';

const ToggleTheme = ({ toggle, themeChanged }) => {
  const defaultThemeType = getPersistedTheme();

  const toggleTheme = e => {
    toggle(parseInt(e.target.value));
    themeChanged();
  };

  return (
    <div className={styles.rootToggleTheme}>
      <RadioButton
        text="☀"
        value={ThemeTypes.default}
        name="themeType"
        checked={defaultThemeType === ThemeTypes.default}
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
      themeType: themeType
    }),
  themeChanged: () => dispatch({ type: THEME_CHANGED })
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
