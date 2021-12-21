import { ITask } from 'types/task';

const normalizeTask = (task: ITask): ITask => {
  const { id, title, assignedTo, tags, type } = task as ITask;
  return { id, title, assignedTo, tags, type };
};

export const normalizeTaskFromApiResponse = (tasks: ITask[]): ITask[] => tasks.map(normalizeTask);
