import Secure from '@/util/secure';
import axios from 'axios';

const api = axios.create({
  baseURL: 'https://285e2bf7-5e72-4669-8459-11ff2d85d741.mock.pstmn.io/',
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
    return Promise.reject(error);
  },
);

export default api;
