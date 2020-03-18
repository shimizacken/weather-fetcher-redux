export const RANDOM_ACTION_TYPE: string;

export type PENDING = string;
export type SUCCESS = string;
export type ERROR = string;

/**
 * Append '_pending' suffix to given action type.
 */
export type pendingType = (actionType: string) => string;

/**
 * Append '_success' suffix to given action type.
 */
export type successType = (actionType: string) => string;

/**
 * Append '_error' suffix to given action type.
 */
export type errorType = (actionType: string) => string;
