import React, { Component } from 'React';
import { connect } from 'react-redux';
import RadioButton from '../../../portal/radioButton';
import themeTypes from '../../../../services/themes';
import { TOGGLE_THEME } from '../../../../constants';

class ToggleTheme extends Component {

    toggleTheme = e => this.props.toggle(parseInt(e.target.value));

    render() {

        return(
            <div>
                <RadioButton
                    text='☀'
                    value={themeTypes.default}
                    name='themeType'
                    //className={styles.radioButton}
                    checked
                    onChange={this.toggleTheme}
                />
                <RadioButton
                    text='☽'
                    value={themeTypes.dark}
                    name='themeType'
                    //className={styles.radioButton}
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
    })
});

export default connect(mapStateToProps, mapDispatchToProps)(ToggleTheme);