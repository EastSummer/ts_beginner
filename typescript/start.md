动态类型语言(Dynamically Typed Language) js ruby python
静态类型语言(Statically Typed Language) c c++ c# java

Interface 接口
1. 对对象的形状shape进行描述
2. Duck Typing 鸭子类型

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