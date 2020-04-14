import React from 'react';
import { Button } from 'app/components/common';
import { Modal } from './Modal';
import styles from './ConfirmationModal.module.scss';

export const ConfirmationModal = ({ title, contentText, open, close, onCancel, onConfirm }) => {
  return (
    <Modal
      title={title}
      contentText={contentText}
      open={open}
      close={close}
      content={
        <div className={styles.buttons}>
          <Button onClick={onCancel} text="Cancel" className={styles.cancelButton} />
          <Button onClick={onConfirm} text="Confirm" />
        </div>
      }
    />
  );
};
