import { combineEpics, ofType } from 'redux-observable';
import { from, of } from 'rxjs';
import { catchError, map, mergeMap } from 'rxjs/operators';

import { fetchTasks } from 'services/api/task';
import { updateTaskType } from 'services/task';

import { RootAction } from 'store/actions';
import { setError } from 'store/actions/error';
import { ChangeTaskAction, fetchTasksFulfilled, updateTask } from 'store/actions/task';
import { FETCH_TASKS, SET_TYPE } from 'store/actionTypes';

import { AppEpic } from 'types/store';

const fetchTasksEpic: AppEpic = action$ =>
  action$.pipe(
    ofType(FETCH_TASKS),
    mergeMap(() =>
      from(fetchTasks()).pipe(
        map(fetchTasksFulfilled),
        catchError(err => of(setError(err))),
      ),
    ),
  );
const changeTaskType: AppEpic = (action$, state$) =>
  action$.pipe(
    ofType<RootAction, string, ChangeTaskAction>(SET_TYPE),
    map(action => updateTaskType(state$.value.tasks.items, action.payload.id, action.payload.newType)),
    map(updateTask),
  );

export default combineEpics(fetchTasksEpic, changeTaskType);
