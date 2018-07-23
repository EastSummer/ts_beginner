// 函数新特性

// Rest and Spread 操作符：用来声明任意数量的方法参数
function func1(...args){
    args.forEach(arg => console.log(arg))
}
func1(1, 2, 3)

// generator函数：控制函数的执行过程，手工暂停和恢复代码执行
function* doSomething(){
    console.log("start")
    yield
    console.log("finish")
}
var func3 = doSomething();  // start
func3.next();   // finish

// eg price<=15 stop
function* getStockPrice(stock) {
    while (true) {
        yield Math.random()*100
    }
}
var priceGenerator = getStockPrice("IBM");
var limitPrice = 15,
    price = 100;
while (price > limitPrice) {
    price = priceGenerator.next().value;
    console.log(`the generator return ${price}`)
}
console.log(`buying at ${price}`)

// destructuring析构表达式：通过表达式将对象或数组拆解成任意数量的变量
var {code, price} = {
    code: "IBM",
    price: 100
};
var [num1, , num3, ...others] = [1, 2, 3, 4, 5]

// Lambda表达式
var sum = (arg1, arg2) => arg1 + arg2;

// for in 
var arr = [1, 2, 3]
// arr.desc = "arr"
for(let i in arr){
    console.log(arr[i]);// 1 2 3 arr
}
for(let i of arr){
    console.log(i);     // 1 2 3
    
}


