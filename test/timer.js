/*
 * @Descripttion: 
 * @version: 
 * @Author: chenpengfei
 * @Date: 2021-07-30 15:14:23
 * @LastEditors: chenpengfei
 * @LastEditTime: 2021-07-30 15:32:50
 */
export const timer = (callback) => {
  setTimeout(() => {
    callback()
  }, 3000)
}

export const timer2 = (callback) => {
  setTimeout(() => {
    callback()
    setTimeout(()=> {
      callback()
    }, 3000)
  }, 3000)
}