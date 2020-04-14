import React from 'react';
import classNames from 'classnames';
import styles from './Modal.module.scss';

export const Modal = ({ title, content, footer, open }) => {
  return (
    <div className={classNames(styles.modalBackground, open && styles.open)}>
      <div className={classNames('modal-wrapper', styles.modalWrapper)}>
        <div className={styles.modalHeader}>
          <span className={styles.close}>&times;</span>
          <h2>{title}</h2>
        </div>
        <div className={styles.modalBody}>{content}</div>
        <div className={styles.modalFooter}>
          <h3>{footer}</h3>
        </div>
      </div>
    </div>
  );
};
