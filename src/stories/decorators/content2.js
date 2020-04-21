import React from 'react';
import classNames from 'classnames';
import styles from './content.scss';

export const content2 = className => story => {
  return (
    <div className={styles.contentMainWrapper}>
      <div className={classNames(styles.content, className)}>{story()}</div>
    </div>
  );
};
