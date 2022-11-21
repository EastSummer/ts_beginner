/*
 * @Descripttion: 
 * @version: 
 * @Author: chenpengfei
 * @Date: 2021-07-28 16:46:33
 * @LastEditors: chenpengfei
 * @LastEditTime: 2022-11-18 09:50:07
 */
// Interface 文档地址：https://www.typescriptlang.org/docs/handbook/interfaces.html

/**
 * Interface 接口
 * 1. 对对象的形状shape进行描述
 * 2. Duck Typing 鸭子类型 (wiki百科定义：如果某个东西长得像鸭子，像鸭子一样游泳，像鸭子一样嘎嘎叫，那它就可以被看成是一只鸭子。)
 * 3. 此概念不存在于JavaScript中，所以ts编译以后interface不会被转换过去，只作为类型检查
 */

// 我们定义了一个接口 IPerson1
interface IPerson1 {
  readonly id: number;
  name: string;
}

// 接着定义了一个变量 viking，它的类型是 IPerson1。这样，我们就约束了 viking 的形状必须和接口 IPerson1 一致。
let viking: IPerson1 = {
  id: 1,
  name: 'viking',
}

//有时我们希望不要完全匹配一个形状，那么可以用可选属性：
interface IPerson2 {
  name: string
  age?: number
}

let viking2: IPerson2 = {
  name: 'viking2',
}

//接下来还有只读属性，有时候我们希望对象中的一些字段只能在创建的时候被赋值，那么可以用 readonly 定义只读属性
interface IPerson3 {
  readonly id: number;
  name: string;
  age: number;
}

let viking3: IPerson3 = {
  id: 1,
  name: 'viking',
  age: 20,
}

viking3.id = 2




