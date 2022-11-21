/*
 * @Descripttion: 
 * @version: 
 * @Author: chenpengfei
 * @Date: 2021-07-28 16:46:33
 * @LastEditors: chenpengfei
 * @LastEditTime: 2022-11-21 14:31:20
 */
// 枚举 Enums 文档地址：https://www.typescriptlang.org/docs/handbook/enums.html

// 数字枚举，一个数字枚举可以用 enum 这个关键词来定义，我们定义一系列的方向，然后这里面的值，枚举成员会被赋值为从 0 开始递增的数字,
enum DirectionNum {
  Up,
  Down,
}
console.log(DirectionNum.Up)  // 0
console.log(DirectionNum[0])  // Up
// tsc enums.ts =>
// var DirectionNum;
// (function (DirectionNum) {
//     DirectionNum[DirectionNum["Up"] = 0] = "Up";
//     DirectionNum[DirectionNum["Down"] = 1] = "Down";
// })(DirectionNum || (DirectionNum = {}));
// console.log(DirectionNum.Up); // 0
// console.log(DirectionNum[0]); // Up
// console.log(DirectionNum) // {0: 'Up', 1: 'Down', Up: 0, Down: 1}

// 整数枚举控制起始数
enum DirectionNum100 {
  Up = 100,
  Down,
}
console.log(DirectionNum100.Up) // 100
console.log(DirectionNum100.Down) // 101
 
/**
 * 常量整数枚举
 * 和普通枚举的区别是,普通枚举可以使用整数访问枚举值
 * 但是常数枚举只能使用string访问,不能使用整数进行访问
 * 提升性能，会直接把值翻译成结果，内联枚举用法但不会翻译
 */
const enum EnumNum {
  Up,
  Down,
}
console.log(EnumNum.Up) // 0
// tsc enums.ts =>
// console.log(0 /* EnumNum.Up */); // 0
console.log(EnumNum[0]) // 只有使用字符串文本才能访问常数枚举成员

// 常量字符串枚举
const enum Direction {
  Up = 'UP',
  Down = 'DOWN',
}
const value = 'UP'
if (value === Direction.Up) {
  console.log('go up!')
}
// tsc enums.ts =>
// var value = 'UP';
// if (value === "UP" /* Direction.Up */) {
//     console.log('go up!');
// }