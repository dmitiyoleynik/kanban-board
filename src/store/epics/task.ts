import { combineEpics, Epic, ofType } from 'redux-observable';
import { from, Observable, of } from 'rxjs';
import { ignoreElements, map, mapTo, skip, switchMap } from 'rxjs/operators';

import { fetchTasks } from 'services/api/task';
import { RootAction } from 'store/actions';

import { ChangeTaskAction, FetchTaskAction, fetchTasksFulfilled, FetchTasksFulfilledAction, TaskAction, updateTask } from 'store/actions/task';
import { FETCH_TASKS, SET_TYPE } from 'store/actionTypes';
import { ITaskState } from 'store/reducers/task';

import { AppEpic, IAppAction } from 'types/store';
import { ITask, TaskType } from 'types/task';

const moveTask = (tasks: ITaskState, payload: { id: number; newType: TaskType }): ITask | undefined => tasks.items.find(t => t.id === payload.id);

const fetchTasksEpic: AppEpic = action$ =>
  action$.pipe(
    ofType(FETCH_TASKS),
    switchMap(() => fetchTasks()),
    // switchMap((value: IAppAction<void>, index: number) => fetchTasks()),
    map(fetchTasksFulfilled),
  );
const changeTaskType: AppEpic = (action$, state$) =>
  action$.pipe(
    ofType<RootAction, string, ChangeTaskAction>(SET_TYPE),
    // map(action => moveTask(state$.value.tasks, action.payload)),

    // map(action => moveTask(state$.value.tasks, action.payload)),
    // map(updateTask),
  );

export default combineEpics(fetchTasksEpic, changeTaskType);
