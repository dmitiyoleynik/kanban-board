import ITaskAction from 'store/actions/task';
import { setType } from 'store/actions/actionTypes/task';

import { ITask } from 'types/task';

interface ITaskState {
  tasks: ITask[];
}

const initialState: ITaskState = {
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

export default function tasks(state: ITaskState = initialState, action: ITaskAction): ITaskState {
  switch (action.type) {
    case setType: {
      const { newType, id } = action.payload;
      const newCardList: ITask[] = state.tasks.map(task => (task.id !== id ? task : { ...task, type: newType }));

      return { ...state, tasks: [...newCardList] };
    }
    default:
      return state;
  }
}
