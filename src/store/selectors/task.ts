import { createSelector } from 'reselect';
import { RootState } from 'store';

import { TaskType } from 'types/task';

const selectAllTasks = (state: RootState) => state.tasks.tasks;

const selectTasks = (columnTasksType: TaskType) => createSelector(selectAllTasks, tasks => tasks.filter(task => task.type === columnTasksType));

export { selectTasks };
