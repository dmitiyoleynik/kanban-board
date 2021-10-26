import ITaskAction from 'store/actions/task';
import { setType } from 'store/actionTypes/task';

import { ITask } from 'types/task';

interface ICardState {
  tasks: ITask[];
}

const initialState: ICardState = {
  tasks: [
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

export default function tasks(state: ICardState = initialState, action: ITaskAction): ICardState {
  switch (action.type) {
    case setType: {
      const { newType } = action.payload;
      const newCardList: ITask[] = state.tasks.map(task => (task.id !== action.payload.id ? task : { ...task, type: newType }));

      return { ...state, tasks: [...newCardList] };
    }
    default:
      return state;
  }
}
