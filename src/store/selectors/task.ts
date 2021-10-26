import { RootState } from 'store';

import { ITask } from 'types/task';

const selectTaskByType =
  (type: string) =>
  (state: RootState): ITask[] =>
    state.tasks.tasks.filter(task => task.type === type);

export { selectTaskByType };
