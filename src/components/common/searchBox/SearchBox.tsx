import React from 'react';
import PropTypes from 'prop-types';
import { Button } from '..';
import { ButtonTypes } from '../button/buttonTypes';
import styles from './SearchBox.scss';

interface SearchBoxProps {
  value: string;
  onChange: () => void;
  displayLoader: boolean;
}

export const SearchBox: React.FC<SearchBoxProps> = ({ value, onChange, displayLoader }) => {
  return (
    <div className={styles.searchBoxWrapper}>
      <input
        type="text"
        value={value}
        onChange={onChange}
        placeholder="Type city name and hit the enter..."
        data-cy="search-weather-button-input"
      />
      <div className={styles.buttonWrapper}>
        <Button text="Search" disabled={displayLoader} buttonType={ButtonTypes.SUBMIT} dataCy="search-weather-button" />
      </div>
    </div>
  );
};

