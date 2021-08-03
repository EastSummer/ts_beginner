/*
 * @Descripttion: 
 * @version: 
 * @Author: chenpengfei
 * @Date: 2021-07-29 09:36:25
 * @LastEditors: chenpengfei
 * @LastEditTime: 2021-07-29 11:05:46
 */
import axios from 'axios';

// 回调类型异步函数测试
// export const fetchData = (fn) => {
//   axios.get('http://www.dell-lee.com/react/api/demo.json').then(
//     response => fn(response.data)
//   )
// }

// promise异步函数测试
export const fetchData = () => {
  return axios.get('http://www.dell-lee.com/react/api/demo.json')
}