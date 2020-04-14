import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Button, ConfirmationModal } from 'app/components/common';
import { clearAllSearchHistory } from '../state/searchHistoryActions';

export const RemoveHistoryModalContainer = () => {
  const dispatch = useDispatch();
  const [open, setOpen] = useState(false);

  const clearAll = () => {
    setOpen(true);
  };

  const onClose = () => setOpen(false);

  const onConfirm = () => {
    dispatch(clearAllSearchHistory);
    setOpen(false);
  };

  return (
    <div>
      <Button text="clear all" onClick={clearAll} />
      <ConfirmationModal
        title="Clear all history list"
        contentText="Are you sure you want to clear all searches history?"
        open={open}
        onClose={onClose}
        onCancel={onClose}
        onConfirm={onConfirm}
      />
    </div>
  );
};
