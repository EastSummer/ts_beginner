/*
 * @Descripttion: 
 * @version: 
 * @Author: chenpengfei
 * @Date: 2023-01-16 14:39:22
 * @LastEditors: chenpengfei
 * @LastEditTime: 2023-01-16 15:45:06
 */
type IOperator = 'plus' | 'minus'
// type ICalculator = (operator: IOperator, number: number[]) => number
interface ICalculator {
  (operator: IOperator, number: number[]): number
  plus: (number: number[]) => number
  minus: (number: number[]) => number
}
declare const calculator: ICalculator

// 变成第三方模块
export default calculator