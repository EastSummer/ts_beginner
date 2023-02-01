/*
 * @Descripttion: 
 * @version: 
 * @Author: chenpengfei
 * @Date: 2021-05-14 14:57:14
 * @LastEditors: chenpengfei
 * @LastEditTime: 2023-01-30 14:42:52
 */

/**
 * 类型别名 内置类型
 * 文档地址：https://github.com/Microsoft/TypeScript/tree/master/src/lib
 */

// global objects
const a: Array<number> = [1,2,3]
// 这里可以看到这个类型，不同的文件中有多处定义，但是它们都是 内部定义的一部分，然后根据不同的版本或者功能合并在了一起，一个interface 或者 类多次定义会合并在一起。这些文件一般都是以 lib 开头，以 d.ts 结尾，表示他是一个内置对象类型
const date = new Date()
date.getTime()
const reg = /abc/
reg.test('abc')

// build-in object
// 我们还可以使用一些 build in object，内置对象，比如 Math 与其他全局对象不同的是，Math 不是一个构造器。Math 的所有属性与方法都是静态的。
Math.pow(2, 2)

// DOM and BOM 标准对象
// document 对象，返回的是一个 HTMLElement
let body = document.body
// document 上面的query 方法，返回的是一个 nodeList 类型
let allLis = document.querySelectorAll('li')
allLis.keys()
//当然添加事件也是很重要的一部分，document 上面有 addEventListener 方法，注意这个回调函数，因为类型推断，这里面的 e 事件对象也自动获得了类型，这里是个 mouseEvent 类型，因为点击是一个鼠标事件，现在我们可以方便的使用 e 上面的方法和属性。
document.addEventListener('click', (e) => {
  e.preventDefault()
})


/**
 * 类型别名 Utility Types
 * Typescript 还提供了一些功能性、帮助性的类型，这些类型，大家在 js 的世界是看不到的，这些类型叫做 utility types，提供一些简洁明快而且非常方便的功能。
 * 文档地址：https://www.typescriptlang.org/docs/handbook/utility-types.html
 */
interface IPerson1 {
  name: string
  age: number
}
let viking1: IPerson1 = { name: 'viking', age: 20 }
// Partial 它可以把传入的类型都变成可选
type IPartial = Partial<IPerson1>
let viking2: IPartial = { name: 'viking' }
// Omit 它返回的类型可以忽略传入类型的某个属性
type IOmit = Omit<IPerson1, 'name'>
let viking3: IOmit = { age: 20 }

