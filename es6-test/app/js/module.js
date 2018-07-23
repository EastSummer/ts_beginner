
// export 命令用于规定模块的对外接口
// import 命令用于输入其他模块提供的功能


// export 一个模块就是一个独立的文件。该文件内部的所有变量，外部无法获取
// 对外部输出了三个变量
export var firstName = 'Michael';
export var lastName = 'Jackson';
export var year = 1958;

// 另外一种输出方法
var firstName = 'Michael';
var lastName = 'Jackson';
var year = 1958;
export {firstName, lastName, year};

// 输出函数或类（class）
export function multiply(x, y) {
	return x * y;
};

// as关键字重命名
function v1() { ... }
function v2() { ... }
export {
	v1 as streamV1,
	v2 as streamV2,
	v2 as streamLatestVersion
};

// 输出常量
// 写法一
export var m = 1;
// 写法二
var m = 1;
export {m};
// 写法三
var n = 1;
export {n as m};


// import 从外部模块或其他脚本中导入函数，对象或原始类型
import {firstName, lastName, year} from './profile';		// 括号里面的变量名，必须与被导入模块对外接口的名称相同
function setName(element) {
  element.textContent = firstName + ' ' + lastName;
}

import { lastName as surname } from './profile';			// 变量重命名

import * as circle from './circle';							// 整体加载

// export default
export default function () {				// 默认输出
	console.log('foo');
}
import customName from './export-default';	// 为该匿名函数指定名字



// export 与 import 的复合写法
export { foo, bar } from 'my_module';
// 等同于
import { foo, bar } from 'my_module';
export { foo, bar };

// 接口改名
export { foo as myFoo } from 'my_module';

// 整体输出
export * from 'my_module';

// 默认接口
export { default } from 'foo';


// import() 动态加载
const main = document.querySelector('main');

import(`./section-modules/${someVariable}.js`)			// import()返回一个 Promise 对象
  .then(module => {
    module.loadPageInto(main);
  })
  .catch(err => {
    main.textContent = err.message;
  });

























