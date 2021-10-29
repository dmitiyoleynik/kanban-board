import { setType } from 'store/actionTypes';

import { AppActionCreator } from 'types/store';
import { TaskType } from 'types/task';

interface IChangeTaskArgs {
  id: number;
  newType: TaskType;
}

export const changeTaskType: AppActionCreator<IChangeTaskArgs> = (payload: IChangeTaskArgs) => {
  const { id, newType } = payload;

  return { type: setType, payload: { id, newType } };
};

export type ChangeTaskAction = ReturnType<typeof changeTaskType>;

export type TaskActions = ChangeTaskAction;
export type TaskActionCreators = typeof changeTaskType;
