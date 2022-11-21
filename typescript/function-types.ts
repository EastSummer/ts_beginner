/*
 * @Descripttion: 
 * @version: 
 * @Author: chenpengfei
 * @Date: 2021-07-28 16:46:33
 * @LastEditors: chenpengfei
 * @LastEditTime: 2022-11-18 10:07:14
 */

// Functions 文档地址：https://www.typescriptlang.org/docs/handbook/functions.html

// 来到我们的第一个例子，约定输入，约定输出
function add1(x: number, y: number): number {
  return x + y
}

// 可选参数后不允许添加确定参数，及可选参数置于最后一项
const add2 = (x: number, y: number, z?: number): number => {
  if (typeof z === 'number') {
    return x + y + z
  } else {
    return x + y
  }
}

// 函数本身的类型 “：”后均为类型申明
const add3: (x: number, y: number, z?: number) => number = add2

// interface 描述函数类型
interface ISum {
  (x: number, y: number, z?: number): number
}
const sum1: ISum = (x, y, z) => {
  return x + y + z
}
let sum2: ISum = sum1
