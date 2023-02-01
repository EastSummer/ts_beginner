/*
 * @Descripttion: 
 * @version: 
 * @Author: chenpengfei
 * @Date: 2023-01-16 13:49:46
 * @LastEditors: chenpengfei
 * @LastEditTime: 2023-01-16 13:54:24
 */

// 此文件没有任何的实际实现代码，只有类型声明（比如 interface function class ...）
// 编译时此文件没有输出
declare function axios1(url: string): string
interface IAxios {
  get: (url: string) => string
  post: (url:string, data: any) => string
}
declare const axios2: IAxios

