//let 声明变量  代码块内有效
//暂时性死去 当前块中let声明的变量唯一
//{} 块级作用域 可任意嵌套

var map = new Map();
map.set('first', 'hello');
map.set('second', 'world');
//获取键名
for(let [key] of map){
	console.log(key);
}
//获取键值
for(let [,value] of map){
	console.log(value);
}



