/*
 * @Descripttion: 
 * @version: 
 * @Author: chenpengfei
 * @Date: 2021-07-30 15:14:40
 * @LastEditors: chenpengfei
 * @LastEditTime: 2021-07-30 15:53:03
 */
import { timer, timer2} from './timer';

beforeEach(() => {
  jest.useFakeTimers();
})

// test('测试 timer', (done) => {
//   timer(() => {
//     expect(1).toBe(1)
//     done()
//   })
// })

test('测试 timer', () => {
  const fn = jest.fn()
  timer(fn)
  // 立刻执行timers，跳过等待
  jest.runAllTimers()
  expect(fn).toHaveBeenCalledTimes(1)
})

test('测试 timer2', () => {
  const fn = jest.fn()
  timer2(fn)
  // 立刻执行 已创建的在队列里的定时器
  jest.runOnlyPendingTimers()
  expect(fn).toHaveBeenCalledTimes(1)
})

test('测试 timer new', () => {
  const fn = jest.fn()
  timer2(fn)
  // 快进 3s
  jest.advanceTimersByTime(3000)
  expect(fn).toHaveBeenCalledTimes(1)
  jest.advanceTimersByTime(3000)
  expect(fn).toHaveBeenCalledTimes(2)
})