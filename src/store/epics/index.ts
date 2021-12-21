import { combineEpics } from 'redux-observable';

import { fetchTasksEpic } from 'store/epics/task';

export const rootEpic = combineEpics(fetchTasksEpic);
