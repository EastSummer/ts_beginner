// 字符串新特性

var a = `多行表达式`
var b = "字符串模板"
console.log(`this is ${b}`)

// 自动拆分字符串
function test(template, name, age){
    console.log(template)
    console.log(name)
    console.log(age)
}
var myName = "xxx"
var myAge = () => {return 18}
test`hello my name is ${myName}, i'm ${myAge()}`
// ["hello my name is ", ", i'm ", ""]
// xxx
// 18


