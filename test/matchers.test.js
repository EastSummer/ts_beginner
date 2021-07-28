/*
 * @Descripttion: 匹配器
 * @version: 
 * @Author: chenpengfei
 * @Date: 2021-07-28 14:40:45
 * @LastEditors: chenpengfei
 * @LastEditTime: 2021-07-28 16:29:24
 * 官方Api https://jestjs.io/docs/expect
 */

// Boolean相关
// test('测试10与10相匹配', () => {
//   // toBe 匹配器 matchers
//   // object.is ===
//   expect(10).toBe(10);
// })

// test('测试对象内容相等', () => {
//   // toEqual 匹配器
//   const a = { one: 1 }
//   expect(a).toEqual({ one: 1 });
// })

// test('测试对象是否是null', () => {
//   // toBeNull 匹配器
//   // toBeUndefined 匹配器
//   // toBeDefined 匹配器 是否被定义过
//   const a = null
//   expect(a).toBeNull();
// })

// test('not 匹配器', () => {
//   // toBeTruthy 匹配器 是否为真
//   // toBeFalsy 匹配器 是否为假
//   const a = 1
//   expect(a).not.toBeFalsy();
//   expect(a).toBeTruthy();
// })


// Number相关
// test('count大于9', () => {
//   // toBeGreaterThan 匹配器
//   const count = 10
//   expect(count).toBeGreaterThan(9);
// })

// test('count小于11', () => {
//   // toBeLessThan 匹配器
//   const count = 10
//   expect(count).toBeLessThan(11);
// })

// test('count大于等于10', () => {
//   // toBeGreaterThanOrEqual 匹配器
//   const count = 10
//   expect(count).toBeGreaterThanOrEqual(10);
// })

// test('count小于等于10', () => {
//   // toBeLessThanOrEqual 匹配器
//   const count = 10
//   expect(count).toBeLessThanOrEqual(10);
// })

// test('浮点数计算', () => {
//   // toBeCloseTo 匹配器
//   const num1 = 0.1
//   const num2 = 0.2
//   expect(num1 + num2).toBeCloseTo(0.3);
// })


// String相关
test('正则表达式的字符', () => {
  // toMatch 匹配器
  const str = 'http://www.baidu.com'
  // expect(str).toMatch('baidu');
  expect(str).toMatch(/baidu/);
})


// Array Set 相关
test('数组匹配器', () => {
  // toContain 匹配器 包含
  const arr = ['a', 'b', 'c']
  const set = new Set(arr)
  expect(arr).toContain('c');
  expect(set).toContain('c');
})


// 异常 相关
const throwNewErrorFunc = () => {
  throw new Error('this is a new error')
}
test('异常匹配器', () => {
  // toThrow 匹配器 可匹配异常内容
  expect(throwNewErrorFunc).toThrow('this is a new error');
})
