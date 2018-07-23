// Reflect 是一个内置的对象，它提供可拦截JavaScript操作的方法
// Reflect 不是一个函数对象，因此它是不可构造的

// Reflect.get(target, name, receiver) 查找并返回target对象的name属性，如果没有该属性，则返回undefined
// Object
var obj = {
	foo: 1,
	bar: 2,
	get baz() {
		return this.foo + this.bar;
	},
};
Reflect.get(obj, "baz");			// 3

// Array
Reflect.get(["zero", "one"], 1);	// "one"

// Proxy with a get handler
var x = {p: 1};
var obj = new Proxy(x, {
  get(t, k, r) { return k + "bar"; }
});
Reflect.get(obj, "foo");			// "foobar"

// 如果name属性部署了读取函数，则读取函数的this绑定receiver
var receiverObj = {
	foo: 4,
	bar: 4,
};
Reflect.get(obj, 'baz', receiverObj);// 8


// Reflect.set(target, name, value, receiver) 设置target对象的name属性等于value
// Object
var obj = {};
Reflect.set(obj, "prop", "value");	// true
obj.prop;							// "value"

// Array
var arr = ["duck", "duck", "duck"];
Reflect.set(arr, 2, "goose");		// true
arr[2];								// "goose"

// It can truncate an array.
Reflect.set(arr, "length", 1);		// true
arr;								// ["duck"];

// 如果name属性设置了赋值函数，则赋值函数的this绑定receiver
var obj = {
	foo: 4,
	set baz(value) {
		return this.foo = value;
	},
};
var myReceiverObject = {
	foo: 0,
};
Reflect.set(myObject, 'bar', 1, myReceiverObject);
myObject.foo;						// 4
myReceiverObject.foo;				// 1


// Reflect.has(obj, name) 对应name in obj里面的in运算符
Reflect.has({x: 0}, "x");			// true
Reflect.has({x: 0}, "y");			// false
Reflect.has({x: 0}, "toString");	// 如果该属性存在于原型链中，返回true 

// Proxy 对象的 .has() 句柄方法
obj = new Proxy({}, {
  has(t, k) { return k.startsWith("door"); }
});
Reflect.has(obj, "doorbell");		// true
Reflect.has(obj, "dormitory");		// false


// Reflect.deleteProperty(obj, name) 等同于delete obj[name]，用于删除对象的属性
var obj = { x: 1, y: 2 };
Reflect.deleteProperty(obj, "x");	// true
obj; // { y: 2 }

var arr = [1, 2, 3, 4, 5];
Reflect.deleteProperty(arr, "3");	// true
arr;								// [1, 2, 3, , 5]

// 如果属性不存在，返回 true
Reflect.deleteProperty({}, "foo");	// true



//实例：使用 Proxy 实现观察者模式
const queuedObservers = new Set();

const observe = fn => queuedObservers.add(fn);
const observable = obj => new Proxy(obj, {set});

function set(target, key, value, receiver) {
  const result = Reflect.set(target, key, value, receiver);
  queuedObservers.forEach(observer => observer());
  return result;
}

const person = observable({
  name: '张三',
  age: 20
});

function print() {
  console.log(`${person.name}, ${person.age}`)
}

observe(print);
person.name = '李四';


// Reflect.ownKeys() 返回一个由目标对象自身的属性键组成的数组
Reflect.ownKeys({z: 3, y: 2, x: 1});	// [ "z", "y", "x" ]
Reflect.ownKeys([]);					// ["length"]

var sym = Symbol.for("comet");
var sym2 = Symbol.for("meteor");
var obj = {[sym]: 0, "str": 0, "773": 0, "0": 0,
           [sym2]: 0, "-1": 0, "8": 0, "second str": 0};
Reflect.ownKeys(obj);					// [ "0", "8", "773", "str", "-1", "second str", Symbol(comet), Symbol(meteor) ]









