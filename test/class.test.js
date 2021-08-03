/*
 * @Descripttion: 
 * @version: 
 * @Author: chenpengfei
 * @Date: 2021-07-30 16:21:50
 * @LastEditors: chenpengfei
 * @LastEditTime: 2021-07-30 16:43:15
 */
jest.mock('./util')
// jest.mock 发现 util 是一个类，会自动把类的构造函数和方法变成 jest.fn()
import Util from './util';
import demoFunction from './class';

test('测试 demoFunction', () => {
  demoFunction()
  // Util 被执行
  expect(Util).toHaveBeenCalled()
  // a 方法被执行
  expect(Util.mock.instances[0].a).toHaveBeenCalled()
})


// // 等同于在__mockes__下创建mock文件
// jest.mock('./util', () => {
//   const Util = jest.fn(() => {
//     console.log('constructor --');
//   })
//   Util.prototype.a = jest.fn(() => {
//     console.log('a --');
//   })
//   Util.prototype.b = jest.fn(() => {
//     console.log('b --');
//   })
//   return Util
// })