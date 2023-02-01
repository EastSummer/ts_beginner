/*
 * @Descripttion: 
 * @version: 
 * @Author: chenpengfei
 * @Date: 2021-07-28 16:46:33
 * @LastEditors: chenpengfei
 * @LastEditTime: 2022-11-22 14:32:18
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

/**
 * 泛型与类和接口
 * 
 */
// 需要一个出入一致的队列，即入为string|number，出也为string|number
class Queue1 {
  private data = []
  push(item) {
    return this.data.push(item)
  }
  pop() {
    return this.data.shift()
  }
}
const queue1 = new Queue1()
queue1.push('1')
queue1.push('str')
const popedVal = queue1.pop()
if (popedVal) {
  console.log(popedVal.toFixed())
}
// 在上述代码中存在一个问题，它允许你向队列中添加任何类型的数据
// 当然，当数据被弹出队列时，也可以是任意类型。
// 若是只给定一种类型，则毫无通用性可言
class Queue2<T> {
  private data: T[] = [];
  push(item: T) {
    return this.data.push(item)
  }
  // 把 pop 返回的类型去掉，让自动推论推断返回的类型：应该是 T 或者 undefined
  // pop(): T {
  pop() {
    return this.data.shift()
  }
}
const queue2 = new Queue2<number>()
queue2.push(1)
console.log(queue2.pop().toFixed())
// 先拿出值来，应该是 number | undefined 类型
const popedValue = queue2.pop()
if (popedValue) {
  // 有值的时候再调用对应的方法
  console.log(popedValue.toFixed())
}
// 泛型和 interface
interface KeyPair<T, U> {
  key: T
  value: U 
}
let kp1: KeyPair<number, string> = { key: 1, value: "string"}
let kp2: KeyPair<string, number> = { key: 'str', value: 2 }
let arr: number[] = [1,2,3]
// Array为内置泛型
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
// 已修复
const foo3 = <T>(x: T) => x;
