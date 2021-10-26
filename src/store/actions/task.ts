import { setType } from 'store/actions/actionTypes/task';

import { ITask, TaskType } from 'types/task';

export default interface ITaskAction {
  type: typeof setType;
  payload: { id?: number; newType: TaskType; newCard?: ITask };
}
