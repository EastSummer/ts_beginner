/**
 * 接口 Interface
 * TypeScript的核心原则之一是对值所具有的结构进行类型检查。
 * 它有时被称做“鸭式辨型法”或“结构性子类型化”。
 * 在TypeScript里，接口的作用就是为这些类型命名和为你的代码或第三方代码定义契约。
 */

interface LabelledValue {
    label: string;
}
function printLabel(labelledObj: LabelledValue) {   // 必须包含一个label属性且类型为string，类型检查器不会去检查属性的顺序
    console.log(labelledObj.label);
}
let myObj = {size: 10, label: "Size 10 Object"};
printLabel(myObj);

// 可选属性
interface SquareConfig {
    color?: string;
    width?: number;
}
function createSquare(config: SquareConfig): { color: string; area: number } {
    let newSquare = { color: "white", area: 100 };
    if (config.color) {
        newSquare.color = config.color;
    }
    if (config.width) {
        newSquare.area = config.width * config.width;
    }
    return newSquare;
}
let mySquare = createSquare({ color: "black" });

// 只读属性
interface Point {
    readonly x: number;
    readonly y: number;
}
let p1: Point = { x: 10, y: 20 };
// p1.x = 5;    // error!
// TypeScript具有ReadonlyArray<T>类型，它与Array<T>相似，只是把所有可变方法去掉了，因此可以确保数组创建后再也不能被修改：
let ao: number[] = [1, 2, 3, 4];
let ro: ReadonlyArray<number> = ao;
/** error!
 * ro[0] = 12;
 * ro.push(5);
 * ro.length = 100;
 * a = ro;
 */
ao = ro as number[]; // 用类型断言重写

// 描述函数类型
interface SearchFunc {
    (source: string, subString: string): boolean;
}
let mySearch: SearchFunc;
mySearch = function(src, sub) {     // 函数的参数名不需要与接口里定义的名字相匹配，不指定类型时ts会推断出参数类型
    let result = src.search(sub);
    return result > -1;
}

// 可索引的类型
interface StringArray {
    [index: number]: string;    // 当用number去索引StringArray时会得到string类型的返回值
}
let myArray: StringArray;
myArray = ["Bob", "Fred"];
let myStr: string = myArray[0];

// class类型
// 与C#或Java里接口的基本作用一样，TypeScript也能够用它来明确的强制一个类去符合某种契约
interface ClockInterface {
    currentTime: Date;
    setTime(d: Date);
}
class Clock implements ClockInterface {     // 接口描述类的公共部分，不会帮你检查类是否具有某些私有成员
    currentTime: Date;
    setTime(d: Date) {
        this.currentTime = d;
    }
    constructor(h: number, m: number) { }
}

// 继承接口
interface Shape {
    color: string;
}
interface PenStroke {
    penWidth: number;
}
interface Square extends Shape, PenStroke { // 继承多个接口
    sideLength: number;
}
let square = <Square>{};
square.color = "blue";
square.sideLength = 10;
square.penWidth = 5.0;

