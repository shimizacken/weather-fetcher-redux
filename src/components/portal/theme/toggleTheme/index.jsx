import React, { Component } from 'React';
import { connect } from 'react-redux';
import RadioButton from '../../../portal/radioButton';
import themeTypes from '../../../../services/themes';
import { TOGGLE_THEME, THEME_CHANGED } from '../../../../constants';
import { getPersistedTheme } from '../../../../services/ui/theme';
import styles from './styles.scss';

class ToggleTheme extends Component {

    defaultThemeType = getPersistedTheme();

    toggleTheme = e => {
        
        this.props.toggle(parseInt(e.target.value));
        this.props.themeChanged();
    }

    render() {

        return(
            <div
                className={styles.rootToggleTheme}
            >
                <RadioButton
                    text='☀'
                    value={themeTypes.default}
                    name='themeType'
                    checked={this.defaultThemeType === themeTypes.default}
                    onChange={this.toggleTheme}
                />
                <RadioButton
                    text='☽'
                    value={themeTypes.dark}
                    name='themeType'
                    checked={this.defaultThemeType === themeTypes.dark}
                    onChange={this.toggleTheme}
                />
            </div>
        );

    }
}

const mapStateToProps = state => ({
    themeType: state.themeType
});

const mapDispatchToProps = dispatch => ({
    toggle: themeType => dispatch({
        type: TOGGLE_THEME,
        themeType: themeType
    }),
    themeChanged: () => dispatch({ type: THEME_CHANGED })
});

export default connect(mapStateToProps, mapDispatchToProps)(ToggleTheme);