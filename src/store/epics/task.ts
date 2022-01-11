import { combineEpics, ofType } from 'redux-observable';
import { map, switchMap } from 'rxjs/operators';

import { fetchTasks } from 'services/api/task';
import { updateTaskType } from 'services/task';

import { RootAction } from 'store/actions';
import { ChangeTaskAction, fetchTasksFulfilled, updateTask } from 'store/actions/task';
import { FETCH_TASKS, SET_TYPE } from 'store/actionTypes';

import { AppEpic } from 'types/store';

const fetchTasksEpic: AppEpic = action$ =>
  action$.pipe(
    ofType(FETCH_TASKS),
    switchMap(() => fetchTasks()),
    map(fetchTasksFulfilled),
  );
const changeTaskType: AppEpic = (action$, state$) =>
  action$.pipe(
    ofType<RootAction, string, ChangeTaskAction>(SET_TYPE),
    map(action => updateTaskType(state$.value.tasks.items, action.payload.id, action.payload.newType)),
    map(updateTask),
  );

export default combineEpics(fetchTasksEpic, changeTaskType);
