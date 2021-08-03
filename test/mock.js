/*
 * @Descripttion: 
 * @version: 
 * @Author: chenpengfei
 * @Date: 2021-07-29 16:40:22
 * @LastEditors: chenpengfei
 * @LastEditTime: 2021-07-30 15:08:12
 */
import axios from 'axios';

export const runCallback = (callback) => {
  callback('param')
}

export const createObject = (classItem) => {
  new classItem
}

export const getData = () => {
  return axios.get('http://www.dell-lee.com/react/api/demo.json').then(
    res => res.data
  )
}

export const fetchData = () => {
  // 假设res.data是string
  return axios.get('/').then(res => res.data)
}

export const getNumber = () => (123)