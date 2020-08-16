import React from 'react';
import PropTypes from 'prop-types';
import {TextInput, Button, ButtonType} from 'app/components/common';
import styles from './SearchBox.scss';

export const SearchBox = ({value, onChange, disabled}) => {
    return (
        <div className={styles.searchBoxWrapper}>
            <TextInput
                value={value}
                onChange={onChange}
                placeholder="Type city name and hit the enter..."
                disabled={disabled}
                dataCy="search-weather-button-input"
            />
            <div className={styles.buttonWrapper}>
                <Button
                    text="Search"
                    disabled={disabled}
                    buttonType={ButtonType.SUBMIT}
                    dataCy="search-weather-button"
                />
            </div>
        </div>
    );
};

SearchBox.propTypes = {
    value: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
    disabled: PropTypes.bool.isRequired,
};
