import { ITask } from 'types/task';

import { get } from 'utils/api';
import { tasksRelativeUrl } from 'utils/apiRoutes';

export const fetchTasks = async (): Promise<ITask[]> => get(tasksRelativeUrl);
