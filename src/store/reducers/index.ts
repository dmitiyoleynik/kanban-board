import { combineReducers } from 'redux';

import tasks, { ITaskState } from 'store/reducers/task';

export type IAppState = {
  tasks: ITaskState;
};

export default combineReducers({ tasks });
