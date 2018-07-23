
// Promise 对象用于异步计算。一个 Promise 表示一个现在或将来可用，亦或永远不可用的值
var promise = new Promise(function(resolve, reject) {
	// ... some code

	if(true) { /* 异步操作成功 */
		resolve(value);
	} else {
		reject(error);
	}
});

promise.then(function(value) {
	// success
}, function(error) {
	// failure
});


//用Promise对象实现的Ajax操作
var getJSON = function(url) {
	var promise = new Promise(function(resolve, reject) {
		var client = new XMLHttpRequest();
		client.open("GET", url);
		client.onreadystatechange = handler;
		client.responseType = "json";
		client.setRequestHeader("Accept", "application/json");
		client.send();

		function handler() {
			if(this.readyState !== 4) {
				return;
			}
			if(this.status === 200) {
				resolve(this.response);
			} else {
				reject(new Error(this.statusText));
			}
		};
	});

	return promise;
};

getJSON("/posts.json").then(function(json) {
	console.log('Contents: ' + json);
}, function(error) {
	console.error('出错了', error);
});


// Promise.all(iterable) 方法指当所有在可迭代参数中的 promises 已完成，或者第一个传递的 promise（指 reject）失败时，返回 promise
var p1 = Promise.resolve(3);
var p2 = 1337;
var p3 = new Promise((resolve, reject) => {
  setTimeout(resolve, 100, "foo");
}); 

Promise.all([p1, p2, p3]).then(values => { 
  console.log(values); // [3, 1337, "foo"] 
});


// async function 声明定义了一个异步函数，它返回一个 AsyncFunction 对象
// async function name([param[, param[, ... param]]]) { statements }
// name 方法的名称	param 要传递给函数的参数的名称	statements 这些包含了方法体的语句
function resolveAfter2Seconds(x) {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve(x);
    }, 2000);
  });
}

async function add1(x) {
  var a = resolveAfter2Seconds(20);
  var b = resolveAfter2Seconds(30);
  return x + await a + await b;
}

add1(10).then(v => {
  console.log(v);  // prints 60 after 2 seconds.
});

async function add2(x) {
  var a = await resolveAfter2Seconds(20);
  var b = await resolveAfter2Seconds(30);
  return x + a + b;
}

add2(10).then(v => {
  console.log(v);  // prints 60 after 4 seconds.
});


// await 操作符被用于等待由一个async function返回的一个Promise
// 如果一个 Promise 被传递到一个 await 表达，它会等待 Promise 的解析并返回解析的的值
async function f1() {
  var x = await resolveAfter2Seconds(10);
  console.log(x); // 10
}
f1();

// 如果该值不是一个 Promise，它将该值转换为已解决的Promise，并等待它
async function f2() {
  var y = await 20;
  console.log(y); // 20
}
f2();

// 如果 promise 被拒绝，则拒绝的值被抛出
async function f3() {
  try {
    var z = await Promise.reject(30);
  } catch (e) {
    console.log(e); // 30
  }
}
f3();


// AsyncFunction 构造函数 创建一个新的  async function 对象
// new AsyncFunction([arg1[, arg2[, ...argN]],] functionBody)
// 通过 AsyncFunction 构造器创建一个异步函数
var AsyncFunction = Object.getPrototypeOf(async function(){}).constructor;
var a = new AsyncFunction('a', 
                          'b',
                          'return await resolveAfter2Seconds(a) + await resolveAfter2Seconds(b);');
a(10, 20).then(v => {
  console.log(v); // 4 秒后打印出 30
});

