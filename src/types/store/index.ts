import { ActionCreator, AnyAction } from 'redux';
import { Epic } from 'redux-observable';

import { RootState } from 'store';
import { RootAction } from 'store/actions';

export interface IAppAction<T> extends AnyAction {
  payload?: T;
}

export type AppActionCreator<T = undefined> = ActionCreator<IAppAction<T>>;
export type AppEpic = Epic<RootAction, RootAction, RootState, unknown>;
