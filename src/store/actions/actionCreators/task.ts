import ITaskAction from 'store/actions/task';
import { addTask, setType } from 'store/actions/actionTypes/task';

import { ITask, TaskType } from 'types/task';

const changeTaskType = (id: number, newType: TaskType): ITaskAction => ({
  type: setType,
  payload: { id, newType },
});

const addNewTask = (newTask: ITask) => ({
  type: addTask,
  payload: {},
});

export { changeTaskType };
