import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import styles from './Modal.module.scss';

export const Modal = ({ title, content, footer, open, onClose }) => {
  return (
    <div className={classNames(styles.modalBackground, open && styles.open)}>
      <div className={classNames('modal-wrapper', styles.modalWrapper)}>
        <div className={styles.modalHeader}>
          <span className={styles.close} onClick={onClose}>
            &times;
          </span>
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

Modal.protoTypes = {
  title: PropTypes.string,
  content: PropTypes.node,
  footer: PropTypes.node,
  open: PropTypes.bool,
  onClose: PropTypes.func
};

Modal.defaultProps = {
  title: undefined,
  content: undefined,
  footer: undefined,
  open: false,
  onClose: undefined
};
