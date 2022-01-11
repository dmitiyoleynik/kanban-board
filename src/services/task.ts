import { ITask, TaskType } from 'types/task';

const updateTaskType = (tasks: ITask[], id: number, newType: TaskType) => ({
  ...tasks.find(t => t.id === id),
  type: newType,
});

export { updateTaskType };
