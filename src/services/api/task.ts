import { ITask } from 'types/task';

import axiosInstance from 'utils/api';
import { tasksRelativeUrl } from 'utils/apiRoutes';

export const fetchTasks = async (): Promise<ITask[]> => {
  const tasks = await axiosInstance.get<ITask[], ITask[]>(tasksRelativeUrl);

  return tasks;
};
