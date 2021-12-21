import { FETCH_TASKS, FETCH_TASKS_FULFILLED, SET_TYPE } from 'store/actionTypes';

import { AppActionCreator } from 'types/store';
import { ITask, TaskType } from 'types/task';

export interface IChangeTaskArgs {
  id: number;
  newType: TaskType;
}

export const changeTaskType: AppActionCreator<IChangeTaskArgs> = (payload: IChangeTaskArgs) => {
  const { id, newType } = payload;

  return { type: SET_TYPE, payload: { id, newType } };
};

export const fetchTasks: AppActionCreator = () => ({ type: FETCH_TASKS });
export const fetchTasksFulfilled: AppActionCreator<ITask[]> = (tasks: ITask[]) => ({
  type: FETCH_TASKS_FULFILLED,
  payload: tasks,
});

export type ChangeTaskAction = ReturnType<typeof changeTaskType>;
export type FetchTaskAction = ReturnType<typeof fetchTasks>;
export type FetchTasksFulfilledAction = ReturnType<typeof fetchTasksFulfilled>;

export type TaskAction = ChangeTaskAction | FetchTaskAction | FetchTasksFulfilledAction;
export type TaskActionCreator = typeof changeTaskType | typeof fetchTasks | typeof fetchTasksFulfilled;
