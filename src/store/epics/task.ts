import { combineEpics, ofType } from 'redux-observable';
import { map, switchMap } from 'rxjs/operators';

import { fetchTasks } from 'services/api/task';
import { updateTaskType } from 'services/task';

import { fetchTasksFulfilled, updateTask } from 'store/actions/task';
import { FETCH_TASKS, SET_TYPE } from 'store/actionTypes';

import { AppEpic } from 'types/store';
import { TaskType } from 'types/task';

const fetchTasksEpic: AppEpic = action$ => action$.pipe(ofType(FETCH_TASKS), switchMap(fetchTasks), map(fetchTasksFulfilled));
const changeTaskType: AppEpic = (action$, state$) =>
  action$.pipe(
    ofType(SET_TYPE),
    map(action => updateTaskType(state$, action.payload as { id: number; newType: TaskType })),
    map(updateTask),
  );

export default combineEpics(fetchTasksEpic, changeTaskType);
