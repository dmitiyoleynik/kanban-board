import { combineEpics, ofType } from 'redux-observable';
import { map, switchMap } from 'rxjs/operators';

import { fetchTasks } from 'services/api/task';
import { RootAction } from 'store/actions';

import { ChangeTaskAction, FetchTaskAction, fetchTasksFulfilled, updateTask } from 'store/actions/task';
import { FETCH_TASKS, SET_TYPE } from 'store/actionTypes';
import { ITaskState } from 'store/reducers/task';

import { AppEpic } from 'types/store';
import { ITask, TaskType } from 'types/task';

const moveTask = (tasks: ITaskState, payload: { id: number; newType: TaskType }): ITask | undefined => tasks.items.find(t => t.id === payload.id);

const fetchTasksEpic: AppEpic = action$ =>
  action$.pipe(ofType<RootAction, string, FetchTaskAction>(FETCH_TASKS), switchMap(fetchTasks), map(fetchTasksFulfilled));
const changeTaskType: AppEpic = (action$, state$) =>
  action$.pipe(
    ofType<RootAction, string, ChangeTaskAction>(SET_TYPE),
    map(action => moveTask(state$.value.tasks, action.payload)),

    // map(action => moveTask(state$.value.tasks, action.payload)),
    map(updateTask),
  );

export default combineEpics(fetchTasksEpic, changeTaskType);
