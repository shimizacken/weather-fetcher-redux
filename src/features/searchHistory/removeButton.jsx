import React from 'react';
import styles from './style.scss';

export const RemoveButton = ({ removeItem, id }) => (
  <div className={styles.removeButton} onClick={() => removeItem(id)} title="Remove from history">
    X
  </div>
);
