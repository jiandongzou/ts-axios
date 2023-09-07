import axios from "axios"
import type { AxiosInstance, AxiosError, InternalAxiosRequestConfig, AxiosResponse } from 'axios'
import { message as Message} from 'ant-design-vue'

const service: AxiosInstance = axios.create({
  baseURL: '/api',
  timeout: 30000
});

/* 请求拦截器 */
service.interceptors.request.use((config: InternalAxiosRequestConfig) => {
  let token = localStorage.getItem("token");
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  };
  return config
}, (error: AxiosError) => {
  Message.error(error.message);
  return Promise.reject(error)
})

service.interceptors.response.use((response: AxiosResponse) => {
  const { data, code,message} = response.data;
  //Message.destroy();
  let errorMsg = '';
  if (code == 200) {
    return data
  } else if (code == -1) {
   
    errorMsg = '失败'
    //alert(errorMsg);
    console.log(errorMsg)
    Message.error(errorMsg)
    //return data
  } else if (code == 201) {
    errorMsg = '用户状态异常'
    Message.error(errorMsg)
  } else if (code == 400) {
    errorMsg = '错误请求'
    Message.error(errorMsg)
  } else if (code == 401) {
    errorMsg = '未授权（缺少token）'
    Message.error(errorMsg)
  } else if (code == 402) {
    errorMsg = '请求无权限'
    Message.error(errorMsg)
  } else if (code == 403) {
    errorMsg = '禁止请求（token存在于黑名单）'
    Message.error(errorMsg)
  } else if (code == 405) {
    errorMsg = 'token错误/无效'
    Message.error(errorMsg)
  } else if (code == 406) {
    errorMsg = 'token过期'
    Message.error(errorMsg)
  } else if (code == 500) {
    errorMsg = '服务器异常'
    Message.error(errorMsg)
  } else {
    Message.error(message);
    return Promise.reject(new Error(message))
  }
}, (error: AxiosError) => {
  Message.error(error.message);
  return Promise.reject(error)
})
export default service;