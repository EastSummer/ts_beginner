/*
 * @Descripttion: 
 * @version: 
 * @Author: chenpengfei
 * @Date: 2021-07-28 16:46:33
 * @LastEditors: chenpengfei
 * @LastEditTime: 2022-11-15 10:43:42
 */
// Basic Types 文档地址：https://www.typescriptlang.org/docs/handbook/basic-types.html#boolean
// 7种原始类型：Boolean Null Undefined Number BigInt String Symbol

let isDone: boolean = false

let age: number = 10

let firstName: string = 'viking'
let message: string = `Hello, ${firstName}`

// undefined 和 null 是所有类型的子类型
let u: undefined = undefined
let n:null = null

/**
 * 在新版的 ts 中，有一个特殊的配置是 strictNullChecks，在有些编辑器中默认为 true。它会严格检查 null 以及 undefined 类型，它只能赋值给本身的类型或者 any。
 * 文档在此：https://www.typescriptlang.org/docs/handbook/release-notes/typescript-2-0.html
 * 可以在 tsconfig.json 将它设置为 false，就没有严格检查了。这个可以按照自己的喜好，开启或者关闭。
 */
let num: number = undefined

let notSure: any = 4
notSure = 'maybe a string'
notSure = true

notSure.myName
notSure.getName()