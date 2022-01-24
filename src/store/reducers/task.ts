import { TaskAction } from 'store/actions/task';
import { FETCH_TASKS, fulfilledAction, UPDATE_TASK } from 'store/actionTypes';

import { ITask } from 'types/task';

export type ITaskState = {
  items: ITask[];
};

const initialState: ITaskState = {
  items: [],
};

export default function tasks(state: ITaskState = initialState, action: TaskAction): ITaskState {
  switch (action.type) {
    case UPDATE_TASK: {
      const { payload } = action;
      const updatedTask = payload as ITask;

      return { ...state, items: [...state.items.filter(t => t.id !== updatedTask.id), updatedTask] };
    }
    case fulfilledAction(FETCH_TASKS): {
      const { payload } = action;
      const items = payload as ITask[];

      return { ...state, items };
    }
    default:
      return state;
  }
}
