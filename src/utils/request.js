/**
 * 1. 根域名
 * 2. 超时时间
 * 3. 请求拦截器
 */
import axios from "axios";

const request = axios.create({
  baseURL: '/',
  timeout: 10000
});

request.interceptors.request.use(config => {
  return config;
}, error => {
  return Promise.reject(error);
});

request.interceptors.response.use(response => {
  return response.data;
},  error => {
  return Promise.reject(error);
});

export { request }; 