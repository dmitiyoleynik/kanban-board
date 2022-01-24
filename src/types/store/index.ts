import { ActionCreator, AnyAction } from 'redux';
import { Epic } from 'redux-observable';

import { RootState } from 'store';
import { RootAction } from 'store/actions';

export interface IAppAction<T> extends AnyAction {
  payload?: T;
}

export type AppActionCreator<T = void> = ActionCreator<IAppAction<T>>;
export type AppEpic<TInAction extends RootAction = RootAction, TOutAction extends TInAction = TInAction> = Epic<TInAction, TOutAction, RootState, unknown>;
