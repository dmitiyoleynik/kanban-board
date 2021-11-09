import { createSelector } from 'reselect';

import { RootState } from 'store';

import { ITask, TaskType } from 'types/task';

type Selector<S> = (state: RootState) => S;

const selectAllTasks = (state: RootState) => state.tasks.items;

const selectTasks = (columnTasksType: TaskType): Selector<ITask[]> =>
  createSelector(selectAllTasks, tasks => tasks.filter(task => task.type === columnTasksType));

export { selectTasks };
export type { Selector };
