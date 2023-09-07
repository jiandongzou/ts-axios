import { AxiosRequestConfig } from "axios";
import service from "./request";
const http={
    get<T>(url:string,config?:AxiosRequestConfig):Promise<T>{
        return  service.get(url,config)
    },
    post<T>(url:string,data?:object,config?:AxiosRequestConfig):Promise<T>{
        return  service.post(url,data,config)
    },
    put<T>(url:string,data?:object,config?:AxiosRequestConfig):Promise<T>{
        return  service.put(url,data,config)
    },
    delete<T>(url:string,config?:AxiosRequestConfig):Promise<T>{
        return  service.delete(url,config)
    }
}
export  default http