/*
 * @Descripttion: 
 * @version: 
 * @Author: chenpengfei
 * @Date: 2021-07-29 16:40:22
 * @LastEditors: chenpengfei
 * @LastEditTime: 2021-07-30 15:12:53
 * Api: https://jestjs.io/docs/mock-function-api
 * Api: https://jestjs.io/docs/jest-object
 */

// 用文件内容替换真实代码
// automock: true ---- config文件
jest.mock('./mock')
// jest.unmock('./mock')

import { fetchData } from './mock';

// 来着真正的mock文件
const { getNumber } = jest.requireActual('./mock')

test('测试 fetchData', () => {
  return fetchData().then((data) => {
    expect(eval(data)).toEqual('123')
  })
})

test('测试 fetchData', () => {
  expect(getNumber()).toEqual(123)
})
