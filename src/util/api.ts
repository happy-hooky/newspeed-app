import Secure from '@/util/Secure';
import axios from 'axios';

const api = axios.create({
  baseURL: 'https://66e908b8-16ad-4f81-9a4a-7a95c1701959.mock.pstmn.io/',
});

api.defaults.timeout = 1000 * 60 * 10;
api.defaults.timeoutErrorMessage = 'TIMEOUT_ERROR';

api.interceptors.request.use(async (config) => {
  const token = await Secure().getValueFor('auth');

  config.headers.Authorization = token;
  return config;
});

api.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    console.log(error);
    return Promise.reject(error);
  },
);

export default api;
