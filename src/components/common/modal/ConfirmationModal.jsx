import React from 'react';
import PropTypes from 'prop-types';
import { Button } from 'app/components/common';
import { Modal } from './Modal';
import styles from './ConfirmationModal.module.scss';

export const ConfirmationModal = ({ title, contentText, open, onClose, onCancel, onConfirm }) => {
  return (
    <Modal
      title={title}
      open={open}
      onClose={onClose}
      content={
        <div>
          <div>{contentText}</div>
          <div className={styles.buttons}>
            <Button onClick={onCancel} text="Cancel" className={styles.cancelButton} />
            <Button onClick={onConfirm} text="Confirm" />
          </div>
        </div>
      }
    />
  );
};

ConfirmationModal.protoTypes = {
  title: PropTypes.string,
  contentText: PropTypes.string,
  open: PropTypes.bool,
  onClose: PropTypes.func,
  onCancel: PropTypes.func,
  onConfirm: PropTypes.func
};

ConfirmationModal.defaultProps = {
  title: undefined,
  contentText: undefined,
  open: false,
  onClose: undefined,
  onCancel: undefined,
  onConfirm: undefined
};
