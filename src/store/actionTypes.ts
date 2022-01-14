export const FETCH_TASKS = 'TASKS/FETCH_TASKS';
export const SET_TYPE = 'TASKS/SET_TYPE';
export const UPDATE_TASK = 'TASKS/UPDATE_TASK';

export const fulfilledAction = (action: string): string => `${action}_FULFILLED`;
export const failedAction = (action: string): string => `${action}_FAILED`;
