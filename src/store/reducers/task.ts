import { IChangeTaskArgs, TaskAction } from 'store/actions/task';
import { FETCH_TASKS_FULFILLED, SET_TYPE } from 'store/actionTypes';

import { ITask } from 'types/task';

export type ITaskState = {
  items: ITask[];
};

const initialState: ITaskState = {
  items: [],
};

export default function tasks(state: ITaskState = initialState, action: TaskAction): ITaskState {
  switch (action.type) {
    case SET_TYPE: {
      const { payload } = action;
      const { id, newType } = payload as IChangeTaskArgs;
      const newCardList: ITask[] = state.items.map(task => (task.id !== id ? task : { ...task, type: newType }));

      return { ...state, items: newCardList };
    }
    case FETCH_TASKS_FULFILLED: {
      const { payload } = action;
      const items = payload as ITask[];

      return { ...state, items };
    }
    default:
      return state;
  }
}
