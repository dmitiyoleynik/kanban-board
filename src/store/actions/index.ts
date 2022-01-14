import { TaskActionCreator, TaskAction } from 'store/actions/task';
import { ErrorAction, ErrorActionCreator } from './error';

export type RootAction = TaskAction | ErrorAction;
export type RootActionCreator = TaskActionCreator | ErrorActionCreator;
