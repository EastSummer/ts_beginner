// 基础类型

// 1.布尔值 boolean
// 最基本的数据类型就是简单的true/false值。
let isDone: boolean = false;

// 数字 number
// 和JavaScript一样，TypeScript里的所有数字都是浮点数。
// 除了支持十进制和十六进制字面量，TypeScript还支持ECMAScript 2015中引入的二进制和八进制字面量。
let decLiteral: number = 6;
let hexLiteral: number = 0xf00d;
let binaryLiteral: number = 0b1010;
let octalLiteral: number = 0o744;

// 2.字符串 string
// 和JavaScript一样，可以使用双引号（ "）或单引号（'）表示字符串。
let myName: string = "bob";
myName = "smith";
// 多行表达式 & 字符串模板
let age: number = 37;
let sentence: string = `
    Hello, my name is ${ myName }.
    I'll be ${ age + 1 } years old next month.
`;
// 自动拆分字符串
function test(template, name, age){
    console.log(template)
    console.log(name)
    console.log(age)
}
let myAge = () => {return 18}
test`hello my name is ${myName}, i'm ${myAge()}`
// ["hello my name is ", ", i'm ", ""]
// smith
// 18

// 3.数组 Array
let list1: number[] = [1, 2, 3];    // 1.在元素类型后面接上 []，表示由此类型元素组成的一个数组
let list2: Array<number> = [1, 2, 3];   // 2.使用数组泛型，Array<元素类型>

// 4.元组 Tuple
// 元组类型允许表示一个已知元素数量和类型的数组，各元素的类型不必相同。
let t1: [string, number];    // 比如，你可以定义一对值分别为 string和number类型的元组
t1 = ['hello', 10];          // OK
// t1 = [10, 'hello'];       // Error
// 当访问一个已知索引的元素，会得到正确的类型：
console.log(t1[0].substr(1));       // OK
// console.log(t1[1].substr(1));    // Error, 'number' does not have 'substr'
// 当访问一个越界的元素，会使用联合类型替代：
t1[3] = 'world';                // OK, 字符串可以赋值给(string | number)类型
console.log(t1[5].toString());  // OK, 'string' 和 'number' 都有 toString
// t1[6] = true;                // Error, 布尔不是(string | number)类型

// 5.枚举 enum
// 像C#等其它语言一样，使用枚举类型可以为一组数值赋予友好的名字。
enum Color {Red1, Green1, Blue1}
let c1: Color = Color.Green1;
alert(c1)    // 1
// 默认情况下，从 0 开始为元素编号(上例)。下面，我们将上面的例子改成从 1 开始编号：
enum Color {Red2 = 1, Green2, Blue2}
let c2: Color = Color.Green2;
alert(c2)    // 2
// 全部手动赋值
enum Color {Red3 = 1, Green3 = 5, Blue3 = 9}
let c3: Color = Color.Green3;
alert(c3)    // 2
// 枚举类型提供的一个便利是你可以由枚举的值得到它的名字
let colorName: string = Color[9];
alert(colorName);  // 显示'Blue3'因为上面代码里它的值是9

// 6.Any
// 不希望类型检查器对这些值进行检查而是直接让它们通过编译阶段的检查，就使用any类型来标记这些变量
let notSure: any = 4;
notSure = "maybe a string instead";
notSure = false;

// 7.Void
// 某种程度上来说，void类型像是与any类型相反，它表示没有任何类型
function warnUser(): void {
    alert("This is my warning message");
}
// 声明一个void类型的变量没有什么大用，因为你只能为它赋予undefined和null
let unusable: void = undefined;

// 8.Null 和 Undefined
// 默认情况下null和undefined是所有类型的子类型。 就是说你可以把 null和undefined赋值给number类型的变量
let u: undefined = undefined;
let um: number = undefined;

// 9.Never
// never类型表示的是那些永不存在的值的类型
// 返回never的函数必须存在无法达到的终点
function error(message: string): never {
    throw new Error(message);
}


// 类型断言
// 类型断言有两种形式。 其一是“尖括号”语法：
let someValue1: any = "this is a string";
let strLength1: number = (<string>someValue1).length;
// 另一个为as语法(当你在TypeScript里使用JSX时，只有as语法断言是被允许的)：
let someValue2: any = "this is a string";
let strLength2: number = (someValue2 as string).length;

