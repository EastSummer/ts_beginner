<!--
 * @Descripttion: 
 * @version: 
 * @Author: chenpengfei
 * @Date: 2021-07-28 16:46:34
 * @LastEditors: chenpengfei
 * @LastEditTime: 2023-01-17 09:38:44
-->
[IMooc Doc](https://www.imooc.com/wiki/vue3zhihu/c2.html)

动态类型语言(Dynamically Typed Language) js ruby python  
静态类型语言(Statically Typed Language) c c++ c# java

Typescript 官网地址: https://www.typescriptlang.org/zh/
使用 nvm 来管理 node 版本: https://github.com/nvm-sh/nvm
```ts
// 安装Typescript
npm install -g typescript
// 使用 tsc 全局命令
// 查看 tsc 版本
tsc -v
// 编译 ts 文件
tsc fileName.ts
```

### 目录
#### [原始数据类型和 Any 类型](./basic-types.ts)
#### [数组和元组](./array-and-tuple.ts)
#### [原始数据类型和 Any 类型](./array-and-tuple.ts)
#### [interface 接口](./interface-basic.ts)
#### [function 函数](./function-types.ts)
#### [类型推论，联合类型 和 类型断言](./type-inference-and-more.ts)
#### [枚举 Enums](./enums.ts)
#### [泛型 Generics](./generics.ts)
#### [类型别名 和 交叉类型](./type-alias.ts)
#### [声明文件](./declaration-files.ts)
#### [内置类型](./built-in-types.ts)


---

Utility Types
1. [官方Doc](https://www.typescriptlang.org/docs/handbook/utility-types.html)
2. [TypeScript Utility Types 源码阅读](https://zhuanlan.zhihu.com/p/129009772)
* ```Partial```
  ```ts
  // https://blog.csdn.net/roamingcode/article/details/104111165
  type Partial<T> = {
      [P in keyof T]?: T[P];
  }
  ```
* ```Omit 帮助类型``` 从另一个对象类型中剔除某些属性，并创建一个新的对象类型
  ```ts
  // https://segmentfault.com/a/1190000022429482
  type Omit<T, K extends keyof any> = Pick<T, Exclude<keyof T, K>>
  ```
* ```Pick``` 从一个复合类型中，取出几个想要的类型的组合
  ```ts
  // https://blog.csdn.net/qq_28992047/article/details/106879772
  type Pick<T, K extends keyof T> = {
    [key in k]: T[key]
  }
  ```

[interface和type区别](https://juejin.cn/post/6844903749501059085)

类型推论(Type Inference)：TypeScript会在没有明确指定类型的时候推测出一个类型
联合类型(Union Types)：```let union: number | string```
类型断言(Type Assertion)：用来手动指定一个值的类型```as```

class
* ```Public``` 修饰的属性或方法是共有的
* ```Private``` 修饰的属性或方法是私有的
* ```Protected``` 修饰的属性或方法是受保护的
* ```readonly``` 只读
* ```implements```

Generics 泛型
* ```function Test<T>(param: T): T```
* 约束泛型 ```extends```

type-alias 类型别名```type```
declare 声明语句```xx.d.ts 声明文件```





css: https://cli.vuejs.org/zh/guide/css.html#css-modules