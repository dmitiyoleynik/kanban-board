import { FETCH_TASKS, fulfilledAction, SET_TYPE, UPDATE_TASK } from 'store/actionTypes';

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
export const updateTask: AppActionCreator<ITask> = (task: ITask) => ({ type: UPDATE_TASK, payload: task });
export const fetchTasks: AppActionCreator = () => ({ type: FETCH_TASKS });
export const fetchTasksFulfilled: AppActionCreator<ITask[]> = (tasks: ITask[]) => ({
  type: fulfilledAction(FETCH_TASKS),
  payload: tasks,
});

export type ChangeTaskAction = Required<ReturnType<typeof changeTaskType>>;
export type FetchTaskAction = ReturnType<typeof fetchTasks>;
export type FetchTasksFulfilledAction = ReturnType<typeof fetchTasksFulfilled>;
export type UpdateTaskAction = ReturnType<typeof updateTask>;

export type TaskAction = ChangeTaskAction | FetchTaskAction | FetchTasksFulfilledAction | UpdateTaskAction;
export type TaskActionCreator = typeof changeTaskType | typeof fetchTasks | typeof fetchTasksFulfilled | typeof updateTask;
