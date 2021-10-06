import { taskType } from './task';

export interface ICard {
  pictureType: 'task' | 'bug';
  id: number;
  description: string;
  initialState: taskType;
}
