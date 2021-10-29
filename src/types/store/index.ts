import { ActionCreator, AnyAction } from 'redux';

export interface IAppAction<T> extends AnyAction {
  payload?: T;
}

export type AppActionCreator<T = undefined> = ActionCreator<IAppAction<T>>;
