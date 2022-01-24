import { SET_ERROR } from 'store/actionTypes';
import { AppActionCreator } from 'types/store';

export const setError: AppActionCreator<unknown> = (error: unknown) => ({ type: SET_ERROR, payload: error });

export type SetErrorAction = ReturnType<typeof setError>;

export type ErrorAction = SetErrorAction;
export type ErrorActionCreator = typeof setError;
