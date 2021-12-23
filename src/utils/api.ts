import axios from 'axios';

import { baseUrl } from 'utils/apiRoutes';
import { apiTimeout } from 'utils/constants';

const axiosInstance = axios.create({
  baseURL: baseUrl,
  timeout: apiTimeout,
});
axiosInstance.interceptors.response.use(response => response.data);

export default axiosInstance;
