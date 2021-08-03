/*
 * @Descripttion: 
 * @version: 
 * @Author: chenpengfei
 * @Date: 2021-07-29 13:58:02
 * @LastEditors: chenpengfei
 * @LastEditTime: 2021-07-29 14:00:50
 */
export default class Counter {
  constructor() {
    this.number = 0
  }
  addOne() {
    this.number += 1
  }
  minusOne() {
    this.number -= 1
  }
}