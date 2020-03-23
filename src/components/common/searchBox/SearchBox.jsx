import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { TextInput } from 'app/components/common/textInput/TextInput';
import { Button, ButtonTypes } from 'app/components/common/button';
import styles from './SearchBox.scss';

export const SearchBox = ({ value, onChange, disabled }) => {
  return (
    <div className={styles.searchBoxWrapper}>
      <TextInput
        value={value}
        onChange={onChange}
        placeholder="Type city name and hit the enter..."
        disabled={disabled}
        className={classNames(styles.searchTextInput)}
        dataCy="search-weather-button-input"
      />
      <div className={classNames(styles.buttonWrapper)}>
        <Button text="Search" disabled={disabled} buttonType={ButtonTypes.SUBMIT} dataCy="search-weather-button" />
      </div>
    </div>
  );
};

SearchBox.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  disabled: PropTypes.bool.isRequired,
  displayResult: PropTypes.bool
};

SearchBox.defaultProps = {
  displayResult: false
};
