export interface LoginData{
    username:string
}
/* 登录接口返回值类型 */
export interface LoginRes {
    token: string,
    mame:string
  }

  export interface UserInfo{
    id: string,
    username: string,
    avatar:string,
    description: string,
  }