import { setType } from 'store/actionTypes';

import { AppActionCreator } from 'types/store';
import { TaskType } from 'types/task';

interface IChangeTaskArgs {
  id: number;
  newType: TaskType;
}

export const changeTaskType: AppActionCreator<IChangeTaskArgs> = ({ id, newType }) => {
  console.log({ id, newType });

  return { type: setType, payload: { id, newType } };
};

export type ChangeTaskAction = ReturnType<typeof changeTaskType>;

export type TaskActions = ChangeTaskAction;
export type TaskActionCreators = typeof changeTaskType;
