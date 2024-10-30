/**
 * 1. 根域名
 * 2. 超时时间
 * 3. 请求拦截器
 */
import axios from "axios";
import { getToken } from "@/utils";

const request = axios.create({
  baseURL: '/',
  timeout: 10000
});

request.interceptors.request.use(config => {
  // 注入 token
  const token = getToken()
  if (token) {
    config.headers.Authorization = `Bearer ${token}`
  }
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