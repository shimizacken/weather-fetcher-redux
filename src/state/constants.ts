import uuid from 'uuid';

export const RANDOM_ACTION_TYPE: string = `@@rand/action/${uuid.v4()}`;

export const pending: string = 'pending';
export const success: string = 'success';
export const error: string = 'error';

/**
 * Append '_pending' suffix to given action type.
 */
export const pendingType: string = (actionType: string) => `${actionType}_${pending}`;

/**
 * Append '_success' suffix to given action type.
 */
export const successType: string = (actionType: string) => `${actionType}_${success}`;

/**
 * Append '_error' suffix to given action type.
 */
export const errorType: string = (actionType: string) => `${actionType}_${error}`;
