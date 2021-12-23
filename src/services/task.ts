import { StateObservable } from 'redux-observable';

import { IAppState } from 'store/reducers';

import { TaskType } from 'types/task';

const updateTaskType = (state: StateObservable<IAppState>, payload: { id: number; newType: TaskType }) => ({
  ...state.value.tasks.items.find(t => t.id === payload.id),
  type: payload.newType,
});

export { updateTaskType };
