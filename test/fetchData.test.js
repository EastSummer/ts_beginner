/*
 * @Descripttion: 
 * @version: 
 * @Author: chenpengfei
 * @Date: 2021-07-29 09:53:04
 * @LastEditors: chenpengfei
 * @LastEditTime: 2021-07-29 13:52:09
 */

import { fetchData } from './fetchData';

// 回调类型异步函数测试
// test('fetchData 返回结果为 {success: true}', (done) => {
//   fetchData((data) => {
//     expect(data).toEqual({success: true})
//     done();
//   })
// })

// promise异步函数测试
// test('fetchData 返回结果为 {success: true}', () => {
//   return fetchData().then((response) => {
//     expect(response.data).toEqual({success: true})
//   })
// })

// 404 异步函数测试
// test('fetchData 返回结果为 404', () => {
//   // expect.assertions(1);
//   return fetchData().catch((e) => {
//     expect(e.toString().indexOf('404')>-1).toBe(true)
//   })
// })

// promise异步函数测试
// test('fetchData 返回结果为 {success: true}', () => {
//   // toMatchObject 是否包含某内容
//   return expect(fetchData()).resolves.toMatchObject({
//     data: {success: true}
//   })
// })

// 404 异步函数测试
// test('fetchData 返回结果为 404', () => {
//   return expect(fetchData()).rejects.toThrow()
// })

// async异步函数测试
// test('etchData 返回结果为 {success: true}', async () => {
//   await expect(fetchData()).resolves.toMatchObject({
//     data: {success: true}
//   })
// })

// 404 异步函数测试
// test('fetchData 返回结果为 404', async () => {
//   await expect(fetchData()).rejects.toThrow()
// })

// async异步函数测试
test('etchData 返回结果为 {success: true}', async () => {
  const res = await fetchData()
  expect(res.data).toEqual({success: true})
})

// 404 异步函数测试
test('fetchData 返回结果为 404', async () => {
  // expect.assertions(1);
  try {
    await fetchData()
  } catch (error) {
    // console.log(error.toString())
    expect(error.toString()).toEqual('')
  }
})