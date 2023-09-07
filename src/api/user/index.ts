import http from "../../utils/http";
import type {LoginData,LoginRes,UserInfo} from "./type"
/**
 * 登录
 */

export function login(data: LoginData) {
    return http.post<LoginRes>('/user/login', data);
}
export function getUserInfo() {
    return http.get<UserInfo>('/user/info');
}
export function test(){
  return http.get('/error');
}