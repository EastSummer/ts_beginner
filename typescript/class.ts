/*
 * @Descripttion: 
 * @version: 
 * @Author: chenpengfei
 * @Date: 2021-07-28 16:46:33
 * @LastEditors: chenpengfei
 * @LastEditTime: 2022-11-21 10:56:17
 */

/**
 * 面向对象编程的三大特点
 * 封装（Encapsulation）：将对数据的操作细节隐藏起来，只暴露对外的接口。外界调用端不需要（也不可能）知道细节，就能通过对外提供的接口来访问该对象
 * 继承（Inheritance）：子类继承父类，子类除了拥有父类的所有特性外，还有一些更具体的特性
 * 多态（Polymorphism）：由继承而产生了相关的不同的类，对同一个方法可以有不同的响应
 * 文档：https://www.typescriptlang.org/docs/handbook/classes.html
 */
class Animal {
  readonly name: string;
  constructor(name) {
    this.name = name
  }
  run() {
    return `${this.name} is running`
  }
}
const snake = new Animal('lily')
console.log(snake.run())

class Dog extends Animal {
  bark() {
    return `${this.name} is barking`
  }
}

const xiaobao = new Dog('xiaobao')
console.log(xiaobao.run())
console.log(xiaobao.bark())

class Cat extends Animal {
  static categories = ['mammal']
  constructor(name) {
    super(name)
    console.log(this.name)
  }
  run() {
    return 'Meow, ' + super.run()
  }
}
const maomao = new Cat('maomao')
console.log(maomao.run())
console.log(Cat.categories)

/**
 * 类成员的访问修饰符: https://www.typescriptlang.org/docs/handbook/classes.html#public-private-and-protected-modifiers
 * public 修饰的属性或方法是公有的，可以在任何地方被访问到，默认所有的属性和方法都是 public 的
 * private 修饰的属性或方法是私有的，不能在声明它的类的外部访问
 * protected 修饰的属性或方法是受保护的，它和 private 类似，区别是它在子类中也是允许被访问的
 */