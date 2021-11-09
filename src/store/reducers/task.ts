import { TaskAction } from 'store/actions/task';
import { SET_TYPE } from 'store/actionTypes';

import { ITask } from 'types/task';

interface ITaskState {
  items: ITask[];
}

const initialState: ITaskState = {
  items: [
    {
      id: 1,
      title: 'Todo task',
      type: 'To do',
      assignedTo: 'Dmytro Oliinyk',
      tags: ['bug', 'fixit'],
    },
    {
      id: 2,
      title: 'Done task',
      type: 'Done',
      assignedTo: 'Dmytro Oliinyk',
      tags: ['andry chirt'],
    },
  ],
};

export default function tasks(state: ITaskState = initialState, action: TaskAction): ITaskState {
  switch (action.type) {
    case SET_TYPE: {
      const { payload } = action;
      const newCardList: ITask[] = state.items.map(task => (task.id !== payload?.id ? task : { ...task, type: payload.newType }));

      return { ...state, items: newCardList };
    }
    default:
      return state;
  }
}
