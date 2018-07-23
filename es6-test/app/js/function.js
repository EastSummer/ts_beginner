//函数的扩展

//函数参数的默认值
function log1(x, y) {
	y = y || 'World';		// typeof(y)==='undefined' ? y='World' : null;
	console.log(x, y);
}

function log2(x, y = 'World') {
	console.log(x, y);
}

log1('Hello', '')		// Hello World
log2('Hello', '')		// Hello

//参数变量是默认声明的，所以不能用let或const再次声明
function fooError(x = 5) {
	let x = 1;			// error
 	const x = 2;		// error
}

//与解构赋值默认值结合使用
function foo({x, y = 5}) {
  console.log(x, y);
}
foo({x: 1});			// 1, 5
foo({x: 1, y: 2});		// 1, 2

//双重默认值
function m1({x = 0, y = 0} = {}) {
  return [x, y];
}
m1();			// [0, 0]
m1({});			// [0, 0]
m1({x: 3});		// [3, 0]

(function (a, b, c = 5) {}).length;	// 2	返回没有指定默认值的参数个数
(function (a = 0, b, c) {}).length;	// 0	如果设置了默认值的参数不是尾参数，那么length属性也不再计入后面的参数了
(function (a, b = 1, c) {}).length;	// 1

var x = 1;
function foo1(x, y = function() { x = 2; }) {
  var x = 3;
  y();
  console.log(x);
}
foo1(); // 3	x=1(外部x不受影响)

//rest参数（形式为“...变量名”）将多余的参数放入数组中
function add(...values) {
  let sum = 0;
  for (var val of values) {
    sum += val;
  }
  return sum;
}
add(2, 5, 3);	// 10

//扩展运算符（spread）形式为（...）将一个数组转为用逗号分隔的参数序列
console.log(1, ...[2, 3, 4], 5);	// 1 2 3 4 5
function add(x, y) {
  return x + y;
}
var numbers = [4, 38];
add(...numbers);			// 42

//扩展运算符的应用
//1.合并数组
var arr1 = ['a', 'b'];
var arr2 = ['c'];
var arr3 = ['d', 'e'];
arr1.concat(arr2, arr3);		// ES5的合并数组
[...arr1, ...arr2, ...arr3];	// ES6的合并数组

//2.与解构赋值结合
var	list = [1, 2, 3, 4, 5];
var first1 = list[0], rest1 = list.slice(1);		// ES5的赋值
let [first2, ...rest2] = [1, 2, 3, 4, 5];			// ES6的解构赋值

//3.字符串
var strArr1 = [...'hello'];		// [ "h", "e", "l", "l", "o" ]

//4.Map和Set结构，Generator函数
let map1 = new Map([
  [1, 'one'],
  [2, 'two'],
  [3, 'three'],
]);
let arr4 = [...map1.keys()];	// [1, 2, 3]

var go = function*(){
  yield 1;
  yield 2;
  yield 3;
};
let arr5 = [...go()];			// [1, 2, 3]


//箭头函数

//1.基本用法
var f = v => v;
//等同于
var f = function(v) {
  return v;
};

//2.如果箭头函数不需要参数或需要多个参数，就使用一个圆括号代表参数部分
var f = () => 5;
// 等同于
var f = function () { return 5 };

var sum = (num1, num2) => num1 + num2;
// 等同于
var sum = function(num1, num2) {
  return num1 + num2;
};

//3.如果箭头函数的代码块部分多于一条语句，就要使用大括号将它们括起来，并且使用return语句返回
var sum = (num1, num2) => { return num1 + num2; }

//4.由于大括号被解释为代码块，所以如果箭头函数直接返回一个对象，必须在对象外面加上括号
var getTempItem = id => ({ id: id, name: "Temp" });

//5.与变量解构结合使用
const full = ({ first, last }) => first + ' ' + last;
// 等同于
function full(person) {
  return person.first + ' ' + person.last;
}

//6.简化回调函数
var result = values.sort(function (a, b) {		// 正常函数写法
  return a - b;
});
var result = values.sort((a, b) => a - b);		// 箭头函数写法

const numbers = (...nums) => nums;				// 与rest参数结合
numbers(1, 2, 3, 4, 5);							// [1,2,3,4,5]

//7.箭头函数的嵌套
function insert1(value) {
  return {into: function (array) {
    return {after: function (afterValue) {
      array.splice(array.indexOf(afterValue) + 1, 0, value);
      return array;
    }};
  }};
}
insert1(2).into([1, 3]).after(1);				// [1, 2, 3]

//上面这个函数，可以使用箭头函数改写。
let insert2 = (value) => ({into: (array) => ({after: (afterValue) => {
  array.splice(array.indexOf(afterValue) + 1, 0, value);
  return array;
}})});
insert2(2).into([1, 3]).after(1);				// [1, 2, 3]


//函数绑定运算符(::)，双冒号左边是一个对象，右边是一个函数    ES7  Babel转码器支持
//foo::bar; 等同于 bar.bind(foo);
//foo::bar(...arguments); 等同于 bar.apply(foo, arguments);

//尾调用（Tail Call）	函数的最后一步是调用另一个函数
function f(x){
  return g(x);
}
//尾递归		只保留一个调用帧，复杂度 O(1) 
function factorial(n, total = 1) {
  if (n === 1) return total;
  return factorial(n - 1, n * total);
}
factorial(5);		// 120










