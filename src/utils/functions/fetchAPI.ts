import axios, { AxiosRequestConfig } from 'axios';
import qs from 'qs';
import configureApp from 'configureApp.json';

const { CancelToken } = axios;
const source = CancelToken.source();

const axiosConfig: AxiosRequestConfig = {
  method: 'GET',
  baseURL: configureApp.baseUrl,
  timeout: configureApp.timeout,
  cancelToken: source.token,
  paramsSerializer: qs.stringify,
};

const fetchAPI = axios.create(axiosConfig);

export function setAuthToken(token: string) {
  fetchAPI.defaults.headers.common.Authorization = `Bearer ${token}`;
}

export const deleteAuthToken = () => {
  delete fetchAPI.defaults.headers.common.Authorization;
};

export default fetchAPI;
