import React from 'react';
import PropTypes from 'prop-types';
import styles from './style.scss';

export const RemoveButton = ({ removeItem, id }) => {
  const remove = () => removeItem(id);

  return (
    <div className={styles.removeButton} onClick={remove} title="Remove from history">
      X
    </div>
  );
};

RemoveButton.propTypes = {
  id: PropTypes.string.isRequired,
  removeItem: PropTypes.func.isRequired
};
