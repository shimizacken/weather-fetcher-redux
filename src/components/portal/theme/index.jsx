import React, { Component } from 'React';
import { connect } from 'react-redux';
import styles from './styles.scss';

class Theme extends Component {

    render() {

        const theme = true ? styles.rootDarkTheme : styles.rootDefaultTheme;
        document.getElementsByTagName('body')[0].setAttribute('class', theme);

        return(
            <div>
                {this.props.children}
            </div>
        );

    }
}

export default Theme;