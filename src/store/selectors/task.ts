import { createSelector } from 'reselect';
import { RootState } from 'store';

import { TaskType } from 'types/task';

const selectAllTasks = (state: RootState) => state.tasks.tasks;

const selectTasks = (columnTasksType: TaskType) => (state: RootState) =>
  createSelector(
    selectAllTasks,
    (_: RootState, type: TaskType) => type,
    (tasks, type) => tasks.filter(task => task.type === type),
  )(state, columnTasksType);

export { selectTasks };
