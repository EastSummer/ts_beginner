/*
 * @Descripttion: 
 * @version: 
 * @Author: chenpengfei
 * @Date: 2021-07-29 13:58:45
 * @LastEditors: chenpengfei
 * @LastEditTime: 2021-07-29 16:16:58
 */
import Counter from './counter';

let counter = null

beforeAll(() => {
  // 测试之前的准备 钩子
})

beforeEach(() => {
  // 每个测试用例执行前 钩子
  counter = new Counter()
})

afterEach(() => {
  // 每个测试用例执行后 钩子
})


afterAll(() => {
  //所以测试用例结束后 钩子
})

// 分组
describe('※ 测试增加相关代码', () => {
  test('测试 addOne', () => {
    counter.addOne()
    expect(counter.number).toBe(1)
  })

})

describe('※ 测试减少相关代码', () => {
  test('测试 minusOne', () => {
    counter.minusOne()
    expect(counter.number).toBe(-1)
  })
})

test.only('只测试当前用例', () => {
  
})