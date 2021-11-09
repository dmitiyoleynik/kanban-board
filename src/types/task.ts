import { taskTypes } from 'utils/constants';

type TaskType = typeof taskTypes[number];

interface ITask {
  id: number;
  title: string;
  assignedTo: string;
  tags?: string[];
  type: TaskType;
}

export type { TaskType, ITask };
