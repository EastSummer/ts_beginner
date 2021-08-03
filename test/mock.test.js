/*
 * @Descripttion: 
 * @version: 
 * @Author: chenpengfei
 * @Date: 2021-07-29 16:40:22
 * @LastEditors: chenpengfei
 * @LastEditTime: 2021-07-30 08:49:37
 */
import axios from 'axios';
import { runCallback, createObject, getData } from './mock';
// 模拟axios
jest.mock('axios')

test('测试 callback', () => {
  // Mock函数，捕捉函数的调用
  const func = jest.fn()
  // 如果func被调用，说明runCallback跑通了
  runCallback(func)
  expect(func).toBeCalled()
  // console.log(func.mock);
  /**
   * calls 传入的顺序
   * instances func运行时的this指向
   * invocationCallOrder 调用的顺序
   * results 执行的返回值
   */
})

test('测试 callback 调用次数', () => {
  const func = jest.fn()
  runCallback(func)
  runCallback(func)
  expect(func.mock.calls.length).toBe(2)
})

test('测试 callback 传参', () => {
  const func = jest.fn()
  runCallback(func)
  expect(func.mock.calls[0]).toEqual(['param'])
})

test('测试 callback 结果', () => {
  // const func = jest.fn(() => 'result')
  // func.mockImplementation(() => 'result') 等价于上面
  const func = jest.fn()
  func.mockReturnValue('result')
  // func.mockReturnValueOnce('result')
  runCallback(func)
  expect(func.mock.result[0]).toBe('result')
})

test('测试 createObject', () => {
  const func = jest.fn()
  createObject(func)
  console.log(func.mock.instances);
  // expect(func.mock.result[0]).toBe('result')
})

test.only('测试 getData', async () => {
  axios.get.mockResolvedValue({data: 'hello'})
  await getData().then((data) => {
    expect(data).toBe('hello')
  })
})