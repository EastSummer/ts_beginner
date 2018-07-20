// 参数新特性

// 参数类型 在参数后面使用冒号来指定参数类型
/**
 * any 任意类型
 * string 字符串
 * number 数字
 * boolean 布尔
 * void 声明变量的返回值
 */
var myname: string = "xxx";
var alias: any = "yyy"
var age: number = 13
var man: boolean = true
function test1(): void {    // 不需要返回值
    // return "" 
}
function test2(name: string): string {  // 参数必须为string
    return "";
}
// test2(13)

// 自定义类型
class Person {
    name: string;
    age: number;
}
var zhangsan: Person = new Person();
zhangsan.name = "zhangsan"
zhangsan.age = 12

// 默认参数 在参数声明后面用等号来指定参数的默认值
function text3(a:string, b:string="b"){
    console.log(a)
    console.log(b)
}
text3("a")

// 可选参数 在方法的参数声明后面用问号来标明此参数为可选参数
function text4(a:string, b?:string){
    console.log(a)
    console.log(b)
}
text4("a")


