import { combineEpics } from 'redux-observable';

import task from './task';

export default combineEpics(task);
