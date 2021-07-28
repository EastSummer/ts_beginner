
// 生成器对象是由一个 generator function 返回的,并且它符合可迭代协议和迭代器协议
function* helloWorldGenerator() {
  yield 'hello';
  yield 'world';
  return 'ending';
}

var hw = helloWorldGenerator();
hw.next();		// { value: 'hello', done: false }
hw.next();		// { value: 'world', done: false }
hw.next();		// { value: 'ending', done: true }
hw.next();		// { value: undefined, done: true } done=true表示遍历结束


// yield表达式


// next方法参数
function* f() {
  for(var i = 0; true; i++) {
    var reset = yield i;
    if(reset) { i = -1; }
  }
}

var g = f();
g.next();		// { value: 0, done: false }
g.next();		// { value: 1, done: false } 每次运行到yield表达式，变量reset的值总是undefined
g.next(true);	// { value: 0, done: false } 变量reset就被重置为这个参数（即true）


function* foo(x) {
  var y = 2 * (yield (x + 1));
  var z = yield (y / 3);
  return (x + y + z);
}

var a = foo(5);
a.next();		// Object{value:6, done:false}		x = 5
a.next();		// Object{value:NaN, done:false}	y = 2 * undefined
a.next();		// Object{value:NaN, done:true}		z = undefined

var b = foo(5);
b.next();		// { value:6, done:false }	x = 5
b.next(12);		// { value:8, done:false }	y = 2 * 12
b.next(13);		// { value:42, done:true }	z = 13


// for...of 循环
function *foo() {
  yield 1;
  yield 2;
  yield 3;
  yield 4;
  yield 5;
  return 6;
}

for (let v of foo()) {
  console.log(v);	// 1 2 3 4 5	一旦.next()返回的对象的done属性为true，for...of循环就会中止
}

// 斐波那契数列
function* fibonacci() {
  let [prev, curr] = [0, 1];
  for (;;) {
    [prev, curr] = [curr, prev + curr];
    yield curr;
  }
}

for (let n of fibonacci()) {
  if (n > 1000) break;
  console.log(n);
}

// for...of遍历任意对象(添加iterator接口)
function* objectEntries(obj) {
  let propKeys = Reflect.ownKeys(obj);

  for (let propKey of propKeys) {
    yield [propKey, obj[propKey]];
  }
}

let jane = { first: 'Jane', last: 'Doe' };
for (let [key, value] of objectEntries(jane)) {
  console.log(`${key}: ${value}`);
}

// 扩展运算符（...）、解构赋值、Array.from
function* numbers () {
  yield 1
  yield 2
  return 3
  yield 4
}

// 扩展运算符
[...numbers()];			// [1, 2]
// Array.from 方法
Array.from(numbers());	// [1, 2]
// 解构赋值
let [x, y] = numbers();	// x=1,y=2


// throw() 方法用来向生成器抛出异常，并恢复生成器的执行，返回带有 done 及 value 两个属性的对象
function* gen() {
  while(true) {
    try {
       yield 42;
    } catch(e) {
      console.log("Error caught!");
    }
  }
}

var g = gen();
g.next(); // { value: 42, done: false }
g.throw(new Error("Something went wrong")); // "Error caught!"

// 一旦 Generator 执行过程中抛出错误，且没有被内部捕获，就不会再执行下去了
function* g() {
  yield 1;
  console.log('throwing an exception');
  throw new Error('generator broke!');
  yield 2;
  yield 3;
}

function log(generator) {
  var v;
  console.log('starting generator');
  try {
    v = generator.next();
    console.log('第一次运行next方法', v);
  } catch (err) {
    console.log('捕捉错误', v);
  }
  try {
    v = generator.next();
    console.log('第二次运行next方法', v);
  } catch (err) {
    console.log('捕捉错误', v);
  }
  try {
    v = generator.next();
    console.log('第三次运行next方法', v);
  } catch (err) {
    console.log('捕捉错误', v);
  }
  console.log('caller done');
}

log(g());
// starting generator
// 第一次运行next方法 { value: 1, done: false }
// throwing an exception
// 捕捉错误 { value: 1, done: false }
// 第三次运行next方法 { value: undefined, done: true }
// caller done


// return() 方法返回给定的值并结束生成器
function* gen() { 
  yield 1;
  yield 2;
  yield 3;
}

var g = gen();
g.next();        // { value: 1, done: false }
g.return("foo"); // { value: "foo", done: true }
g.next();        // { value: undefined, done: true }


// yield*表达式 用来在一个 Generator 函数里面执行另一个 Generator 函数
function* foo() {
  yield 'a';
  yield 'b';
}
function* bar() {
  yield 'x';
  yield* foo();
  yield 'y';
}
// 等同于
function* bar() {
  yield 'x';
  yield 'a';
  yield 'b';
  yield 'y';
}
// 等同于
function* bar() {
  yield 'x';
  for (let v of foo()) {
    yield v;
  }
  yield 'y';
}

for (let v of bar()){
  console.log(v);	// "x","a","b","y"
}

// 任何数据结构只要有 Iterator 接口，就可以被yield*遍历
function* gen(){
  yield* ["a", "b", "c"];
}
gen().next();		// { value:"a", done:false }
let read = (function* () {
  yield* 'hello';
})();
read.next().value;	// "h"

// yield*命令取出嵌套数组的所有成员
function* iterTree(tree) {
  if (Array.isArray(tree)) {
    for(let i=0; i < tree.length; i++) {
      yield* iterTree(tree[i]);
    }
  } else {
    yield tree;
  }
}

const tree = [ 'a', ['b', 'c'], ['d', 'e'] ];
for(let x of iterTree(tree)) {
  console.log(x);	// "a","b","c","d","e"
}


// 作为对象属性的Generator函数
let obj = {
  * myGeneratorMethod() {
    // ···
  }
};


//  异步操作同步化
function* loadUI() {
  showLoadingScreen();
  yield loadUIDataAsynchronously();
  hideLoadingScreen();
}
var loader = loadUI();
loader.next();			// 加载UI
loader.next();			// 卸载UI

// Ajax同步
function* main() {
  var result = yield request("http://some.url");
  var resp = JSON.parse(result);
    console.log(resp.value);
}
function request(url) {
  makeAjaxCall(url, function(response){
    it.next(response);
  });
}
var it = main();
it.next();


// 控制流管理
// 回调
step1(function (value1) {
  step2(value1, function(value2) {
    step3(value2, function(value3) {
      step4(value3, function(value4) {
        // Do something with value4
      });
    });
  });
});

// Promise
Promise.resolve(step1)
  .then(step2)
  .then(step3)
  .then(step4)
  .then(function (value4) {
    // Do something with value4
  }, function (error) {
    // Handle any error from step1 through step4
  })
  .done();

// Generator
let steps = [step1Func, step2Func, step3Func];

function *iterateSteps(steps){
  for (var i=0; i< steps.length; i++){
    var step = steps[i];
    yield step();
  }
}

for (var step of iterateSteps(steps)){
  console.log(step);
}

 




