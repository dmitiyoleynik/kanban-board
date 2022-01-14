import { createSelector } from 'reselect';

import { RootState } from 'store';
import { Selector } from 'types/store/selector';

import { ITask, TaskType } from 'types/task';

const selectAllTasks = (state: RootState) => state.tasks.items;

const selectTasks = (columnTasksType: TaskType): Selector<ITask[]> =>
  createSelector(selectAllTasks, tasks => tasks.filter(task => task.type === columnTasksType));

export { selectTasks };
