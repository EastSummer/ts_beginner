/*
 * @Descripttion: 
 * @version: 
 * @Author: chenpengfei
 * @Date: 2021-07-28 16:46:33
 * @LastEditors: chenpengfei
 * @LastEditTime: 2022-11-21 15:24:45
 */
// Array 和 Tuple 文档地址：https://www.typescriptlang.org/docs/handbook/basic-types.html#array

//最简单的方法是使用「类型 + 方括号」来表示数组：
let arrOfNumbers: number[] = [1,2,3]
//数组的项中不允许出现其他的类型：
//数组的一些方法的参数也会根据数组在定义时约定的类型进行限制：
arrOfNumbers.push(3)

function test() {
  console.log(arguments)  // 类数组 arguments: IArguments（内置类型） 
  arguments.length
  arguments.forEach
}

// 元组起源于函数式编程
// 元组的表示和数组非常类似，只不过它将类型写在了里面 这就对每一项起到了限定的作用
let user: [string, number] = ['viking', 20]
//但是当我们写少一项 就会报错 同样写多一项也会有问题
user = ['molly', 20, true]