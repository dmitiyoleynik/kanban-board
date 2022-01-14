import { combineReducers } from 'redux';

import tasks, { ITaskState } from 'store/reducers/task';
import errors, { IErrorState } from './error';

export type IAppState = {
  tasks: ITaskState;
  errors: IErrorState;
};

export default combineReducers({ tasks, errors });
