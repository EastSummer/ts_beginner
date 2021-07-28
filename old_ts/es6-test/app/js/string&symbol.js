//字符串扩展
//es5不识别32位的UTF-16字符(Unicode编号大于0xFFFF)

var s1 = "𠮷"		//码点是0x20BB7,UTF-16编码为0xD842 0xDFB7(十进制为55362 57271),需要4个字节储存
s1.length 			// 2

//String.codePointAt
s1.charAt(0)			// ''
s1.charAt(1)			// ''
s1.charCodeAt(0)		// 55362
s1.charCodeAt(1)		// 57271
s1.codePointAt(0)	// 134071 十六进制的20BB7
s1.codePointAt(1)	// 57271

//String.fromCharCode
String.fromCharCode(0x20BB7)		// "ஷ"
String.fromCodePoint(0x20BB7)		// "𠮷"

//字符串的遍历器接口
var text = String.fromCodePoint(0x20BB7);
for (let i = 0; i < text.length; i++) {
  console.info(text[i]);
}
for (let i of text) {
  console.info(i);
}

//includes()：返回布尔值，表示是否找到了参数字符串。
//startsWith()：返回布尔值，表示参数字符串是否在源字符串的头部。
//endsWith()：返回布尔值，表示参数字符串是否在源字符串的尾部。
//第二参数为搜索的起始位置
var s2 = 'Hello world!';

s2.startsWith('Hello')		// true
s2.startsWith('world', 6)	// true
s2.endsWith('Hello', 5)		// true
s2.includes('Hello', 6)		// false

//repeat()方法返回一个新字符串，表示将原字符串重复n次
'x'.repeat(3)		// "xxx"
'hello'.repeat(2)	// "hellohello"
'na'.repeat(0)		// ""
'na'.repeat(2.9)	// "nana" 小数会被取整

//字符串长度补全
//padStart()		//头部补全
//padEnd()			//尾部补全
'x1'.padStart(5, 'ab')		// 'ababx'
'x2'.padEnd(4, 'ab')			// 'xaba'
'abc'.padStart(10, '0123456789')	// '0123456abc'
'x3'.padEnd(4)		// 'x   ' 如果省略第二个参数，默认使用空格补全长度

//模板字符串			所有模板字符串的空格和换行都会被保留  .trim()消除
// 普通字符串
console.log(`In JavaScript '\n' is a line-feed.`);
// 多行字符串
console.log(`string text line 1
string text line 2`);
// 字符串中嵌入变量
var name = "Bob", time = "today";
console.log(`Hello ${name}, how are you ${time}?`);		//大括号内部可以放入任意的JavaScript表达式，可以进行运算，以及引用对象属性和调用函数





//Symbol是一种新的原始数据类型，表示独一无二的值
//它是 JavaScript 语言的第七种数据类型
//前六种是：undefined、null、布尔值（Boolean）、字符串（String）、数值（Number）、对象（Object）
var s1 = Symbol('foo');
var s11 = Symbol('foo');
s1.toString();									// "Symbol(foo)"
s1 === s11;											// false
s1.toString === s11.toString;		//true

var mySymbol = Symbol();
// 第一种写法
var s2 = {};
s2[mySymbol] = 'Hello!';
// 第二种写法
var s2 = {
  [mySymbol]: 'Hello!'
};

s2[mySymbol];	// "Hello!"

//Object.getOwnPropertySymbols()方法返回一个数组，成员是当前对象的所有用作属性名的 Symbol值
var obj = {};
var a = Symbol('a');
var b = Symbol('b');
obj[a] = 'Hello';
obj[b] = 'World';

Object.getOwnPropertySymbols(obj);	// [Symbol(a), Symbol(b)]

//Reflect.ownKeys()方法可以返回所有类型的键名，包括常规键名和 Symbol键名
var obj = {
  [Symbol('my_key')]: 1,
  enum: 2,
  nonEnum: 3
};

Reflect.ownKeys(obj);	// ["enum", "nonEnum", Symbol(my_key)]

//Symbol.for()方法会根据给定的键 key，来从运行时的 symbol 注册表中找到对应的 symbol
//如果找到了，则返回它，否则，新建一个与该键关联的 symbol，并放入全局 symbol注册表中
var s3 = Symbol.for('foo');
var s4 = Symbol.for('foo');
s3 === s4;				// true

//Symbol.keyFor(sym) 方法用来获取 symbol 注册表中与某个 symbol 关联的键
var globalSym = Symbol.for("foo");	// 创建一个 symbol 并放入 Symbol 注册表，key 为 "foo"
Symbol.keyFor(globalSym);						// "foo"
var localSym = Symbol();						// 创建一个 symbol，但不放入 symbol 注册表中
Symbol.keyFor(localSym);						// undefined


