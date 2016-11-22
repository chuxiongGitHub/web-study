/**
 * 作者：陈彩红 创建时间：2016/11/22
 */

interface LabelValue {
    label:string;
}
function printLabel(labelObj:LabelValue) {
    console.log(labelObj.label);
}
let myObj = {label: "hello"};
printLabel(myObj);

//接口的可选属性
interface USB {
    name:string;
    age:number;
}
function printUSB(pu:USB) {

    console.log(pu.name);
    console.log(pu.age);
}
let my = {name: "rainbow", age: 25};

console.log(printUSB(my));