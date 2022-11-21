/*
 * @Descripttion: 
 * @version: 
 * @Author: chenpengfei
 * @Date: 2021-07-28 16:46:34
 * @LastEditors: chenpengfei
 * @LastEditTime: 2022-11-21 10:48:33
 */

/**
 * 类型推论 - type inference
 * 文档地址：https://www.typescriptlang.org/docs/handbook/type-inference.html
 */
let str = 'str'

/**
 * 联合类型 - union types
 * 文档地址：https://www.typescriptlang.org/docs/handbook/unions-and-intersections.html#union-types
 */
// 我们只需要用中竖线来分割两个
let numberOrString: number | string
// 当 TypeScript 不确定一个联合类型的变量到底是哪个类型的时候，我们只能访问此联合类型的所有类型里共有的属性或方法：
numberOrString.length
numberOrString.toString()

/**
 * 类型断言 - type assertions
 * 文档地址：https://www.typescriptlang.org/docs/handbook/basic-types.html#type-assertions
 */
function getLength(input: string | number): number {
  const str = input as string
  if (str.length) {
    return str.length
  } else {
    const number = input as number
    return number.toString().length
  }
}

/**
 * 类型守卫 - type guard
 * 文档地址：https://www.typescriptlang.org/docs/handbook/advanced-types.html#type-guards-and-differentiating-types
 * 类型断言是开发者控制的，所以要注意使用场合
 * 最常见的场景父类断言为子类，比如将 HTMLElement 断言为更具体的 HTMLInputElement
 * 还有就是断言为 any，（为了解决一些bug）
 */
function getLength2(input: string | number): number {
  if (typeof input === 'string') {
    return input.length
  } else {
    return input.toString().length
  }
}