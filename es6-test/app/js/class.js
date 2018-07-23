
// 定义类
class Point {
	// constructor是构造方法,this代表实例对象
	constructor(x, y) {
		this.x = x;
		this.y = y;
	}
	toString() {
		return '(' + this.x + ', ' + this.y + ')';
	}
}
var point = new Point(2, 3);
point.toString();			// (2, 3)
point.hasOwnProperty('x');	// true
point.hasOwnProperty('y');	// true
point.hasOwnProperty('toString');			// false
point.__proto__.hasOwnProperty('toString');	// true

// 类的内部所有定义的方法，都是不可枚举的
Object.keys(Point.prototype);		// []
Object.getOwnPropertyNames(Point.prototype);	// ["constructor","toString"]

// 类的属性名，可以采用表达式
let methodName = "getArea";
class Square {
	constructor(length) {
		// ...
	}
	[methodName]() {
		// ...
	}
}


// constructor方法是类的默认方法，通过new命令生成对象实例时，自动调用该方法
// 一个类必须有constructor方法，如果没有显式定义，一个空的constructor方法会被默认添加


// 通过实例的__proto__属性为Class添加方法
var p1 = new Point(2,3);
var p2 = new Point(3,2);

p1.__proto__.printName = function () { return 'Oops' };
p1.printName();	// "Oops"
p2.printName();	// "Oops"

var p3 = new Point(4,2);
p3.printName();	// "Oops"


// Class表达式
const MyClass = class Me {
	getClassName() {
		return Me.name;		// name属性总是返回紧跟在class关键字后面的类名
	}
};
let inst = new MyClass();	// 这个类的名字是MyClass而不是Me，Me只在Class的内部代码可用，指代当前类
inst.getClassName();		// Me

// 采用Class表达式，可以写出立即执行的Class
let person = new class {
	constructor(name) {
		this.name = name;
	}
	sayName() {
		console.log(this.name);
	}
}('张三');
person.sayName();		// "张三"


// Class的继承
// super在这里表示父类的构造函数，用来新建父类的this对象
// 子类必须在constructor方法中调用super方法，因为子类没有自己的this对象，而是继承父类的this对象，然后对其进行加工
class ColorPoint extends Point {
	constructor(x, y, color) {
		super(x, y);	// 调用父类的constructor(x, y)
		this.color = color;
	}

	toString() {
		return this.color + ' ' + super.toString();	// 调用父类的toString()
	}
}

let cp = new ColorPoint(25, 8, 'green');
cp instanceof ColorPoint;		// true
cp instanceof Point;			// true


// 类的prototype属性和__proto__属性
// 子类的__proto__属性，表示构造函数的继承，总是指向父类
// 子类prototype属性的__proto__属性，表示方法的继承，总是指向父类的prototype属性
class A {}
class B extends A {}
B.__proto__ === A;	// true
B.prototype.__proto__ === A.prototype;	// true

// Object.getPrototypeOf方法可以用来从子类上获取父类
Object.getPrototypeOf(ColorPoint) === Point;	// true 判断一个类是否继承了另一个类


// super作为函数调用时，代表父类的构造函数；ES6 要求，子类的构造函数必须执行一次super函数
class A {
	constructor() {
		console.log(new.target.name);
	}
}
class B extends A {
	constructor() {
		super();	//super()内部的this指向的是B
	}
}
new A();	// A
new B();	// B

// super作为对象时，在普通方法中，指向父类的原型对象；在静态方法中，指向父类
class A {
	p() {
		return 2;
	}
}
class B extends A {
	constructor() {
		super();
		console.log(super.p());	// super.p()相当于A.prototype.p()
	}
}
var b = new B();	// 2

// 由于super指向父类的原型对象，所以定义在父类实例上的方法或属性，是无法通过super调用的
class A {
	constructor() {
		this.p = 2;
	}
}
class B extends A {
	get m() {
		return super.p;
	}
}
let b = new B();
b.m;	// undefined


// Class的取值函数（getter）和存值函数（setter）
class MyClass {
	constructor() {
		// ...
	}
	get prop() {
		return 'getter';
	}
	set prop(value) {
		console.log('setter: ' + value);
	}
}

let inst = new MyClass();
inst.prop = 123;	// setter: 123
inst.prop;			// 'getter'


// Class 的静态方法
// 类相当于实例的原型，所有在类中定义的方法，都会被实例继承
// 如果在一个方法前，加上static关键字，就表示该方法不会被实例继承，而是直接通过类来调用，这就称为“静态方法”
class Foo {
	static classMethod() {
		return 'hello';
	}
}

Foo.classMethod();		// 'hello'
var foo = new Foo();
// foo.classMethod();	// TypeError: foo.classMethod is not a function

// 父类的静态方法，可以被子类继承
class Bar1 extends Foo {}
Bar1.classMethod();		// 'hello'

// 静态方法也是可以从super对象上调用的
class Bar2 extends Foo {
	static classMethod() {
		return super.classMethod() + ', too';
	}
}
Bar2.classMethod();


// Mixin模式:将多个类的接口“混入”（mix in）另一个类
function mix(...mixins) {
	class Mix {}
	for(let mixin of mixins) {
		copyProperties(Mix, mixin);
		copyProperties(Mix.prototype, mixin.prototype);
	}
	return Mix;
}

function copyProperties(target, source) {
	for(let key of Reflect.ownKeys(source)) {
		if(key !== "constructor" &&
			key !== "prototype" &&
			key !== "name"
		) {
			let desc = Object.getOwnPropertyDescriptor(source, key);
			Object.defineProperty(target, key, desc);
		}
	}
}

// 上面代码的mix函数，可以将多个对象合成为一个类。使用的时候，只要继承这个类即可
class DistributedEdit extends mix(Loggable, Serializable) {
	// ...
}









