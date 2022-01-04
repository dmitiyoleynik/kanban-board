import { ITaskState } from 'store/reducers/task';

import { TaskType } from 'types/task';

const moveTask = (tasks: ITaskState, payload: { id: number; newType: TaskType }) => ({
  ...tasks.items.find(t => t.id === payload.id),
  type: payload.newType,
});

export { moveTask };
