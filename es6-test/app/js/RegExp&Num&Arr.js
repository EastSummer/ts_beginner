//字符串的正则方法	match()、replace()、search()、split()

//u修饰符	含义为“Unicode模式”，用来正确处理大于\uFFFF的Unicode字符
var u1 = /^\uD83D/u.test('\uD83D\uDC2A');	//false
var u2 = /^\uD83D/.test('\uD83D\uDC2A');	//true

//点（.）字符在正则表达式中，含义是除了换行符以外的任意单个字符。对于码点大于0xFFFF的Unicode字符，点字符不能识别，必须加上u修饰符
var s = '𠮷';
var s1 = /^.$/.test(s)		// false
var s2 = /^.$/u.test(s)		// true

//ES6新增大括号表示Unicode字符，这种表示法在正则表达式中必须加上u修饰符，才能识别。
var s3 = /\u{61}/.test('a')			// false
var s4 = /\u{61}/u.test('a')		// true
var s5 = /\u{20BB7}/u.test('𠮷')	// true

//使用u修饰符后，所有量词都会正确识别码点大于0xFFFF的Unicode字符
//只有在使用u修饰符的情况下，Unicode表达式当中的大括号才会被正确解读，否则会被解读为量词。
var s6 = /a{2}/.test('aa')			// true
var s7 = /a{2}/u.test('aa')			// true
var s8 = /𠮷{2}/.test('𠮷𠮷')		// false
var s9 = /𠮷{2}/u.test('𠮷𠮷')		// true

//y修饰符	匹配必须从头部开始
var r = 'aaa_aa_a';
var r1 = /a+/g;
var r2 = /a+/y;
r1.exec(s)	// ["aaa"]
r2.exec(s)	// ["aaa"]
r1.exec(s)	// ["aa"]
r2.exec(s)	// null


//数值扩展
//将全局方法移植到Number对象上面，逐步减少全局性方法，使得语言逐步模块化
Number.isFinite(15);			//检查一个数值是否为有限的
Number.isNaN(15);				//检查一个值是否为NaN
Number.parseInt('12.34');		// 12
Number.parseFloat('123.45#');	// 123.45
Number.isInteger(25.1) 			//用来判断一个值是否为整数	由于js整数和浮点数是同样的储存方法，所以3和3.0被视为同一个值

//Math对象上新增了17个与数学相关的方法
Math.trunc(4.1);		//去除一个数的小数部分，返回整数部分
Math.sign(-5);			//判断一个数是正数(+1)、负数(-1)、零(+0/-0)、其他值(NaN)
Math.cbrt(8);			//计算一个数的立方根
Math.hypot(3, 4);		//返回所有参数的平方和的平方根	3^2+4^2=5^2
Math.signbit(0);		//判断一个数的符号位是否设置了
Math.signbit(-0);		//Math.sign()用来判断一个值的正负，但是如果参数是-0，它会返回-0

let a = 2;			//指数运算符（**）
a **= 3;				//等同于 a = a * a * a


//数组扩展
let arrayLike = {						//将 类数组对象 或者 可遍历对象 转为真正的数组
    '0': 'a',
    '1': 'b',
    '2': 'c',
    length: 3
};
var arr1 = [].slice.call(arrayLike);	// ['a', 'b', 'c'] ES5的写法
let arr2 = Array.from(arrayLike);		// ['a', 'b', 'c'] ES6的写法
Array.from([1, 2, 3], (x) => x * x);	// [1, 4, 9] 类似于数组的map方法

Array.of(3, 11, 8);		// [3,11,8] 将一组值转换为数组，弥补数组构造函数Array()的不足
Array();				// []
Array(3);				// [, , ,]
Array(3, 11, 8);		// [3, 11, 8]

//Array.prototype.copyWithin()	浅复制数组的一部分到同一数组中的另一个位置，并返回它，而不修改其大小
//Array.prototype.fill()		用一个固定值填充一个数组中从起始索引到终止索引内的全部元素

//Array.prototype.entries()		返回一个新的包含数组中每个索引的键/值对的 迭代器对象(Array Iterator)
var arr = ["a", "b", "c"];
var iterator = arr.entries();
for (let e of iterator) {
    console.log(e);				//[0, "a"] [1, "b"] [2, "c"]
}

//Array.prototype.keys()		返回一个新的包含数组中每个索引的键的 迭代器对象(Array Iterator)
var iterator1 = arr.keys();
console.log(iterator1.next());	// { value: 0, done: false }
console.log(iterator1.next());	// { value: 1, done: false }
console.log(iterator1.next());	// { value: 2, done: false }
console.log(iterator1.next());	// { value: undefined, done: true }

//Array.prototype.values()		返回一个新的包含数组中每个索引的值的 迭代器对象(Array Iterator)
var eArr = arr.values();
for (let letter of eArr) {
  console.log(letter);
}

//Array.prototype.includes()	判断当前数组是否包含某指定的值，返回true/false
[1, 2, NaN].includes(NaN);		// true
[1, 2, 3].includes(3, 2);		// true	第二个值是开始查找的索引

//find() 用于找出第一个符合条件的数组成员，如果没有符合条件的成员则返回undefined
[1, 4, -5, 10].find((n) => n < 0);			// -5
//findIndex() 返回第一个符合条件的数组成员的位置，如果所有成员都不符合条件则返回-1。
[1, 4, 5, 10].findIndex((n) => n > 4);		//2
[0,NaN,2].findIndex(y => Object.is(NaN, y));//1	indexOf方法无法识别数组的NaN成员

//es5 & es6 对空位的处理不同




