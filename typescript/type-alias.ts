/*
 * @Descripttion: 
 * @version: 
 * @Author: chenpengfei
 * @Date: 2021-07-28 16:46:34
 * @LastEditors: chenpengfei
 * @LastEditTime: 2022-11-24 16:10:05
 */

/**
 * 类型别名 Type Aliases
 * 类型别名，就是给类型起一个别名，让它可以更方便的被重用。
 * 文档地址：https://www.typescriptlang.org/docs/handbook/advanced-types.html#type-aliases
 */
let sum = (x: number, y: number): number => x + y
const result = sum(1, 2)
// 支持联合类型
type StrOrNumber = string | number
let result11: StrOrNumber = '123'
result11 = 123
// 字符串字面量
const str: 'name' = 'name'
const number: 1 = 1
type Directions = 'Up' | 'Down' | 'Left' | 'Right'
let toWhere: Directions = 'Up'

/**
 * 交叉类型 Intersection Types
 * 文档地址：https://www.typescriptlang.org/docs/handbook/unions-and-intersections.html#intersection-types
 */
interface IName {
  name: string
}
type IPerson = IName & { age: number }
let person: IPerson = { name: '123', age: 123 }
