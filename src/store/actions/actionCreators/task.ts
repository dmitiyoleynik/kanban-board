import ITaskAction from 'store/actions/task';
import { setType } from 'store/actions/actionTypes/task';

import { TaskType } from 'types/task';

const changeTaskType = (id: number, newType: TaskType): ITaskAction => ({
  type: setType,
  payload: { id, newType },
});

export { changeTaskType };
