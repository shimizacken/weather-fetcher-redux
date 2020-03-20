import React from 'react';
import PropTypes from 'prop-types';
import { Button } from '..';
import { ButtonTypes } from '../button/buttonTypes';
import styles from './SearchBox.scss';

export const SearchBox = ({ value, onChange, disabled }) => {
  return (
    <div className={styles.searchBoxWrapper}>
      <input
        type="text"
        value={value}
        onChange={onChange}
        placeholder="Type city name and hit the enter..."
        disabled={disabled}
        data-cy="search-weather-button-input"
      />
      <div className={styles.buttonWrapper}>
        <Button text="Search" disabled={disabled} buttonType={ButtonTypes.SUBMIT} dataCy="search-weather-button" />
      </div>
    </div>
  );
};

SearchBox.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  displayLoader: PropTypes.bool.isRequired
};
