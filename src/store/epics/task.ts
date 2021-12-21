import { Epic, ofType } from 'redux-observable';
import { map, switchMap } from 'rxjs/operators';

import { fetchTasks } from 'services/api/task';

import { RootState } from 'store';
import { RootAction } from 'store/actions';
import { fetchTasksFulfilled } from 'store/actions/task';
import { FETCH_TASKS } from 'store/actionTypes';

export const fetchTasksEpic: Epic<RootAction, RootAction, RootState, unknown> = action$ =>
  action$.pipe(ofType(FETCH_TASKS), switchMap(fetchTasks), map(fetchTasksFulfilled));
