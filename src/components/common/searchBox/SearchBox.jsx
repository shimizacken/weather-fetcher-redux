import React from 'react';
import { Button } from '..';
import styles from './styles.scss';

export const SearchBox = () => {
  return (
    <div className={styles.searchboxWrapper}>
      <input
        type="text"
        value={this.props.value}
        onChange={this.props.onChange}
        placeholder="Type city name and hit the enter..."
      />
      <div className={styles.buttonWrapper}>
        <Button disabled={this.props.displayLoader} />
      </div>
    </div>
  );
};
