import axios from 'axios';

import { baseUrl } from 'utils/apiRoutes';
import { apiTimeout } from 'utils/constants';

const axiosInstance = axios.create({
  baseURL: baseUrl,
  timeout: apiTimeout,
});

async function get<ResponseType>(relativePath: string): Promise<ResponseType> {
  const response = await axiosInstance.get<ResponseType>(relativePath);

  return response.data;
}

export { get };
