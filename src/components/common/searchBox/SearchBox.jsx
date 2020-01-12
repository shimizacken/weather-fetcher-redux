import React from 'react';
import PropTypes from 'prop-types';
import { Button } from '..';
import styles from './styles.scss';

export const SearchBox = ({ value, onChange, displayLoader }) => {
  return (
    <div className={styles.searchboxWrapper}>
      <input type="text" value={value} onChange={onChange} placeholder="Type city name and hit the enter..." />
      <div className={styles.buttonWrapper}>
        <Button text="Search" disabled={displayLoader} />
      </div>
    </div>
  );
};

SearchBox.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  displayLoader: PropTypes.bool.isRequired
};
