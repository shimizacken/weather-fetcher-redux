import uuid from 'uuid';

export const RANDOM_ACTION_TYPE: string = `@@rand/action/${uuid.v4()}`;

export const PENDING: string = 'pending';
export const SUCCESS: string = 'success';
export const ERROR: string = 'error';

/**
 * Append '_pending' suffix to given action type.
 */
export const pendingType = (actionType: string): string => `${actionType}_${PENDING}`;

/**
 * Append '_success' suffix to given action type.
 */
export const successType = (actionType: string): string => `${actionType}_${SUCCESS}`;

/**
 * Append '_error' suffix to given action type.
 */
export const errorType = (actionType: string): string => `${actionType}_${ERROR}`;
