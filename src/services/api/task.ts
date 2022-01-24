import { ITask } from 'types/task';

import axiosInstance from 'utils/api';
import { tasksRelativeUrl } from 'utils/apiRoutes';

export const fetchTasks = (): Promise<ITask[]> => axiosInstance.get<ITask[], ITask[]>(tasksRelativeUrl);
