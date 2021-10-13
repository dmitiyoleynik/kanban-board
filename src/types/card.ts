import { taskType } from './task';

export interface ICard {
  id: number;
  title: string;
  assignedTo: string;
  tags?: string[];
  initialState: taskType;
}
