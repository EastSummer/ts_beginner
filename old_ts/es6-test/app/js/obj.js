
//属性的简洁表示法
var birth = '2000/01/01';
var Person = {
  name: '张三',
  birth,												//等同于birth: birth
  hello() { console.log('我的名字是', this.name); }		// 等同于hello: function ()...
};

//CommonJS模块输出变量
var ms = {};

function getItem (key) {
  return key in ms ? ms[key] : null;
}

function setItem (key, value) {
  ms[key] = value;
}

function clear () {
  ms = {};
}

module.exports = { getItem, setItem, clear };		// 等同于 module.exports = {getItem: getItem,setItem: setItem,clear: clear};


//属性名表达式
var obj1 = {				//es5
  foo: true,
  abc: 123
};

let propKey = 'foo';	//es6
let obj1 = {
  [propKey]: true,
  ['a' + 'bc']: 123
};

//Object.is()	比较两个值是否严格相等
	/*Object.is() 会在下面这些情况下认为两个值是相同的：
	两个值都是 undefined
	两个值都是 null
	两个值都是 true 或者都是 false
	两个值是由相同个数的字符按照相同的顺序组成的字符串
	两个值指向同一个对象
	两个值都是数字并且
		都是正零 +0
		都是负零 -0
		都是 NaN
		都是除零和 NaN 外的其它同一个数字*/
Object.is('foo', 'foo');     // true
Object.is(window, window);   // true

Object.is('foo', 'bar');     // false
Object.is([], []);           // false
Object.is({}, {});           // false

var test = { a: 1 };
Object.is(test, test);       // true

// 特例
Object.is(0, -0);            // false
Object.is(-0, -0);           // true
Object.is(NaN, 0/0);         // true


//Object.assign()	将所有可枚举的属性的值从一个或多个源对象复制到目标对象并返回目标对象。	浅拷贝
var obj = { a: 1 };
var copy = Object.assign({}, obj);
console.log(copy);			// { a: 1 }

typeof Object.assign(2);	// "object"		如果该参数不是对象，则会先转成对象，然后返回
Object.assign(obj, null);	//Object.assign 会跳过那些值为 null 或 undefined 的源对象

//属性的遍历
var arr = ["a", "b", "c"];
var obj = { 0 : "a", 1 : "b", 2 : "c"};		//类数组对象

//Object.values()	返回一个给定对象自己的所有可枚举属性值的数组
console.log(Object.values(obj));	// ['a', 'b', 'c']

//Object.entries()	返回一个给定对象自己的可枚举属性[key，value]对的数组
console.log(Object.entries(obj));	// [ ['0', 'a'], ['1', 'b'], ['2', 'c'] ]

//Object.keys()	返回一个表示给定对象的所有可枚举属性的字符串数组
Object.keys(arr); 					// ["0", "1", "2"]
Object.keys(obj); 					// ["0", "1", "2"]

//Object.getOwnPropertyNames()	返回一个由指定对象的所有自身属性的属性名（包括不可枚举属性）组成的数组
Object.getOwnPropertyNames(arr).sort();		// ["0", "1", "2", "length"]
Object.getOwnPropertyNames(obj).sort(); 	// ["0", "1", "2"]

//Object.getOwnPropertySymbols()	返回一个数组，该数组包含了指定对象自身的（非继承的）所有 symbol 属性键
var obj = {};
var a = Symbol("a");
var b = Symbol.for("b");

obj[a] = "localSymbol";
obj[b] = "globalSymbol";

var objectSymbols = Object.getOwnPropertySymbols(obj);
console.log(objectSymbols.length);	// 2
console.log(objectSymbols);			// [Symbol(a), Symbol(b)]
console.log(objectSymbols[0]);		// Symbol(a)

//Object.create()	使用指定的原型对象和其属性创建了一个新的对象
//Object.getPrototypeOf()	返回指定对象的原型（即, 内部[[Prototype]]属性的值）

//keys & values & entries 与for...of组合使用
let {keys, values, entries} = Object;
let obj2 = { a: 1, b: 2, c: 3 };

for (let key of keys(obj2)) {
  console.log(key);				// 'a', 'b', 'c'
}

for (let value of values(obj2)) {
  console.log(value);			// 1, 2, 3
}

for (let [key, value] of entries(obj2)) {
  console.log([key, value]);	// ['a', 1], ['b', 2], ['c', 3]
}


// Null 传导运算符（null propagation operator）?.
// obj?.prop 读取对象属性
// obj?.[expr] 同上
// func?.(...args) 函数或对象方法的调用
// new C?.(...args) 构造函数的调用








