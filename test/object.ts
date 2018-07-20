// 面向对象特性

// class的声明
class Person {
    constructor(name:string){  // 实例化的时候被调用一次
        this.name = name
    }
    // 可以简化成 constructor(public name:string){...}
    // 此处必须声明访问控制符 下面不用再声明name

    private age;    // private 私有
    public name;    // public 共有
    protected ss;   // protected 受保护的 内部和子类被访问

    eat(){          // 默认为public
        console.log("im eatting")
    }
}
var p1 = new Person("batname");
p1.eat();

// 继承 拥有父类所有的属性和方法
class Employee extends Person {

    constructor(name:string, code:string){
        super(name);
        this.code = code;
    }
    code: string;
    work(){
        super.eat();
        this.doWork()
    }
    private doWork(){
        console.log("im working");
    }
}
var el = new Employee("name", "001")
el.work();

// 泛型(generic) 参数化的类型，一般用来限制集合的内容
var workers: Array<Person> = [];
workers[0] = new Person("zhangsan");
workers[1] = new Employee("lisi", "2");
// workers[2] = 4;

// 接口(Interface) 用来建立某种代码约定，使得其他开发者在调用某个方法或创建新的类时必须遵循接口所定义的代码约定
interface IPerson1 {
    name: string;
    age: number;
}
class Person1 {
    constructor(public config: IPerson1){

    }
}
var per1 = new Person1({    // 属性不一致都会报错
    name: "zhangsan",
    age: 18
})

interface Animal {
    eat();
}
class Sheep implements Animal{  // 类实现接口,必须实现方法
    eat(){
        console.log("eat grass");
        
    }
}
class Tiger implements Animal{
    eat(){
        console.log("eat meat");
        
    }
}

// 模块(Module) 模块可以帮助开发者将代码分割为可复用的单元。开发者可以根据自己决定将模块的哪些资源(类、方法、变量)暴露出去供外部使用，哪些资源只能在模块内使用。
// eg: a.ts b.ts

// 注解(annotation) 注解为程序的元素(类、方法、变量)加上更直观更明了的说明，这些说明信息与程序的业务逻辑无关，而是供指定的工具或框架使用的。

// 类型定义文件(*.d.ts) 类型定义文件用来帮助开发者在TypeScript中使用已有的JavaScript包，如：JQuery 
// https://github.com/DefinitelyTyped/DefinitelyTyped
// https://github.com/typings/typings
