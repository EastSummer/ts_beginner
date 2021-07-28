// Set 类似于数组，但是成员的值都是唯一的，没有重复的值
var set = new Set([1, 2, 3, 4, 4]);
[...set];			// [1, 2, 3, 4]
set.size;			// 4

// 去除数组的重复成员
var array = [1, 2, 3, 4, 4];
[...new Set(array)];						// [1, 2, 3, 4]

// add() 方法用来向一个 Set 对象的末尾添加一个指定的值
var mySet = new Set();
mySet.add(5).add("some text");	// 可以链式调用

// clear() 方法用来清空一个 Set 对象中的所有元素
var mySet = new Set([1,2,3,4,5]);
mySet.size;					// 5
mySet.clear();
mySet.size;					// 0

// delete() 方法可以从一个 Set 对象中删除指定的元素
var mySet = new Set();
mySet.add("foo");
mySet.delete("bar");	// 返回 false，不包含 "bar" 这个元素
mySet.delete("foo");	// 返回 true，删除成功

// has() 方法返回一个布尔值来指示对应的值value是否存在Set对象中
var mySet = new Set();
mySet.add("foo");
mySet.has("foo");			// returns true
mySet.has("bar");			// returns false

// Array.from方法可以将 Set 结构转为数组
Array.from(new Set([1, 2, 3, 4, 5]));		// [1, 2, 3, 4, 5]

// forEach()方法根据集合中元素的顺序，对每个元素都执行提供的 callback函数一次
var set = new Set([1, 2, 3]);
set.forEach((value, key) => console.log(value * 2) );

// 使用 Set 可以很容易地实现并集（Union）、交集（Intersect）和差集（Difference）
var a = new Set([1, 2, 3]);
var b = new Set([4, 3, 2]);
// 并集
let union = new Set([...a, ...b]);		// Set {1, 2, 3, 4}
// 交集
let intersect = new Set([...a].filter(x => b.has(x)));		// set {2, 3}
// 差集
let difference = new Set([...a].filter(x => !b.has(x)));	// Set {1}


// WeakSet 对象是一个无序的集合, 可以用它来存储任意的对象值, 并且对这些对象值保持弱引用
var ws = new WeakSet();
var obj = {};
var foo = {};

ws.add(obj);	// 在WeakSet对象中添加一个新元素
ws.has(obj);	// true
ws.has(foo);    // false, 对象 foo 并没有被添加进 ws 中 
ws.delete(obj); // 从集合中删除 obj 对象
ws.has(obj);    // false, obj 对象已经被删除了
ws.clear();		// 清空整个 WeakSet 对象


// Map对象就是简单的键/值映射。其中键和值可以是任意值(对象或者原始值)
var myMap = new Map();
var keyObj = {},
    keyFunc = function () {},
    keyString = "a string";
 
// set() 设置Map对象中键的值。返回该Map对象
myMap.set(keyString, "和键'a string'关联的值");
myMap.set(keyObj, "和键keyObj关联的值");
myMap.set(keyFunc, "和键keyFunc关联的值");
 
myMap.size;					// 3 返回Map对象的元素数量
 
// get() 返回键对应的值，如果不存在，则返回undefined
myMap.get(keyString);		// "和键'a string'关联的值"
myMap.get(keyObj);			// "和键keyObj关联的值"
myMap.get(keyFunc);			// "和键keyFunc关联的值"
 
myMap.get("a string");		// "和键'a string'关联的值" 因为keyString === 'a string'
myMap.get({});				// undefined, 因为keyObj !== {}
myMap.get(function() {});	// undefined, 因为keyFunc !== function () {}

// has() 返回一个布尔值，表示Map实例是否包含键对应的值
myMap.has(keyObj);			// returns true
myMap.has("a string");		// returns true

// delete() 移除Map对象中指定的元素
myMap.delete(keyFunc);		// 返回 true 成功地移除元素
myMap.has(keyFunc);			// 返回 false

// clear() 移除Map对象中的所有元素
myMap.clear();
myMap.size;					// 0

// Map结构转为数组结构
var map = new Map([
	[1, 'one'],
	[2, 'two'],
	[3, 'three'],
]);

[...map.keys()];			// [1, 2, 3]
[...map.values()];			// ['one', 'two', 'three']
[...map];					// [[1,'one'], [2, 'two'], [3, 'three']]


// WeakMap 对象是键/值对的集合，且其中的键是弱引用的。其键只能是对象，而值则可以是任意的
var wm1 = new WeakMap(),
    wm2 = new WeakMap(),
    wm3 = new WeakMap();
var o1 = {},
    o2 = function(){},
    o3 = window;

wm1.set(o1, 37);
wm1.set(o2, "azerty");
wm2.set(o1, o2);			// value可以是任意值,包括一个对象
wm2.set(o3, undefined);
wm2.set(wm1, wm2);			// 键和值可以是任意对象,甚至另外一个WeakMap对象
wm1.get(o2);				// "azerty"
wm2.get(o2);				// undefined,wm2中没有o2这个键
wm2.get(o3);				// undefined,值就是undefined

wm1.has(o2);				// true
wm2.has(o2);				// false
wm2.has(o3);				// true (即使值是undefined)

wm3.set(o1, 37);
wm3.get(o1);				// 37
wm3.clear();
wm3.get(o1);				// undefined,wm3已被清空
wm1.has(o1);				// true
wm1.delete(o1);
wm1.has(o1);				// false











