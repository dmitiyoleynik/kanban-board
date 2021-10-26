import ITaskAction from 'store/actions/task';
import { setType } from 'store/actionTypes/task';

import { TaskType } from 'types/task';

const setTaskTo = (id: number, newType: TaskType): ITaskAction => ({
  type: setType,
  payload: { id, newType },
});

export { setTaskTo };
