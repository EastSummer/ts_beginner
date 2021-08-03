/*
 * @Descripttion: 
 * @version: 
 * @Author: chenpengfei
 * @Date: 2021-07-30 08:49:58
 * @LastEditors: chenpengfei
 * @LastEditTime: 2021-07-30 13:57:20
 */
import { generateConfig, generateAnotherConfig } from './snapshot';

test('测试 generateConfig', () => {
  // 测试配置文件
  expect(generateConfig()).toMatchSnapshot();
})

test('测试 generateAnotherConfig', () => {
  expect(generateAnotherConfig()).toMatchSnapshot({
    time: expect.any(Date)
  });
})