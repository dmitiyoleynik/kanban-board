import { createSelector } from 'reselect';
import { RootState } from 'store';

import { TaskType } from 'types/task';

const selectTasks = (state: RootState) => state.tasks.tasks;

const selectTaskByType = createSelector(
  selectTasks,
  (_: RootState, type: TaskType) => type,
  (tasks, type) => tasks.filter(task => task.type === type),
);

export { selectTaskByType };
