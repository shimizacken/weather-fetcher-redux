export const pending = 'pending';
export const success = 'success';
export const error = 'error';

/**
 * Append '_pending' suffix to given action type.
 */
export const pendingType = actionType => `${actionType}_${pending}`;

/**
 * Append '_success' suffix to given action type.
 */
export const successType = actionType => `${actionType}_${success}`;

/**
 * Append '_error' suffix to given action type.
 */
export const errorType = actionType => `${actionType}_${error}`;
