/*
 * @Descripttion: 
 * @version: 
 * @Author: chenpengfei
 * @Date: 2021-07-28 16:46:33
 * @LastEditors: chenpengfei
 * @LastEditTime: 2022-11-21 16:45:36
 */

/**
 * 泛型 Generics
 * 是指在定义函数、接口或类的时候，不预先指定具体的类型，而在使用的时候再指定类型的一种特性
 * 文档地址：https://www.typescriptlang.org/docs/handbook/generics.html
 */
function echo<T>(arg: T): T {
  return arg
}
const result1 = echo(true)
// 泛型也可以传入多个值
function swap<T, U>(tuple: [T, U]): [U, T] {
  return [tuple[1], tuple[0]]
}
const result2 = swap(['string', 123])

/**
 * 泛型约束
 * 在函数内部使用泛型变量的时候，由于事先不知道它是哪种类型，所以不能随意的操作它的属性或方法
 */
 function echoWithArr1<T>(arg: T): T {
  console.log(arg.length)
  return arg
}
// 上例中，泛型 T 不一定包含属性 length，我们可以给他传入任意类型，当然有些不包括 length 属性，那样就会报错
function echoWithArr2<T>(arg: T[]): T[] {
  console.log(arg.length)
  return arg
}
const arrs = echoWithArr2([1, 2, 3])
// 实际使用中，不只是数组才具有length属性
interface IWithLength {
  length: number;
}
function echoWithLength<T extends IWithLength>(arg: T): T {
  console.log(arg.length)
  return arg
}
echoWithLength('str')
const result3 = echoWithLength({length: 10})
const result4 = echoWithLength([1, 2, 3])
const result5 = echoWithLength(123)


class Queue<T> {
  private data = [];
  push(item: T) {
    return this.data.push(item)
  }
  pop(): T {
    return this.data.shift()
  }
}
const queue = new Queue<number>()
queue.push(1)
console.log(queue.pop().toFixed())

interface KeyPair<T, U> {
  key: T
  value: U 
}
let kp1: KeyPair<number, string> = { key: 1, value: "string"}
let kp2: KeyPair<string, number> = { key: 'str', value: 2 }
let arr: number[] = [1,2,3]
let arrTwo: Array<number> = [1,2,3]


/**
 * Tips1: 箭头函数的泛型该如何书写
 * 由于直接写会引起 一些 eslint 或者说是 tsx 的标签错误，可以这样写
 * 参考链接：https://stackoverflow.com/questions/32308370/what-is-the-syntax-for-typescript-arrow-functions-with-generics
 *  */ 
// 添加一个空的 extends
const foo1 = <T extends {}>(x: T) => x;
// 还可以添加一个逗号，也等于是破坏了 eslint 将它作为一个标签检验
const foo2 = <T, >(x: T) => x;
