/*
 * @Descripttion: 
 * @version: 
 * @Author: chenpengfei
 * @Date: 2021-07-30 08:49:58
 * @LastEditors: chenpengfei
 * @LastEditTime: 2021-07-30 13:56:35
 */
export const generateConfig = () => {
  return {
    server: 'http://localhost',
    port: 8080
  }
}

export const generateAnotherConfig = () => {
  return {
    server: 'http://localhost',
    port: 8080,
    time: new Date()
  }
}