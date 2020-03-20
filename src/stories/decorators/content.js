import React from 'react';
import styles from './content.scss';

export const content = story => (
  <div className={styles.contentMainWrapper}>
    <div className={styles.content}>{story()}</div>
  </div>
);
