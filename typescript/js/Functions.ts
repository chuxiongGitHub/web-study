/**
 * 作者：陈彩红 创建时间：2016/11/22
 */

//命名函数
function test(x, y) {
    return x + y;
}
//匿名函数
let myAdd = function (x, y) {
    return x + y;
}

//使用typescript(添加上函数的类型，和返回函数的类型)
//命名函数
function add(x:number, y:number):number {
    return x + y;
}
//匿名函数
let myAdd2 = function (x:number, y:string):string {
    return "success";
}


//明确参数的意义
//=>number，指定函数返回值类型是number
let myAddts:(name:string, age, number)=>number = function (n:string, a:number):number {
    return a;
}

//可选和默认参数
//firstName?:string:问号说明当前参数可以为空
function buildName(firstName?:string, lastName?:string):string {
    if (lastName != null) {
        return firstName + ":" + lastName;
    }
    else {
        return firstName;
    }
}
let result1 = buildName("rainbow");
let result2 = buildName("dd", "ddsds");
let result3 = buildName();

function buildName2(firstName?:string, lastName = "rainbow") {
    return firstName + ":" + lastName;
}
let result5 = buildName("rainbow");
document.getElementById("pid").innerHTML = result5;

//可变参数(...表示可以指定多个参数)
function peopleName(firstName:string, ...map:String[]) {
    return firstName + ":" + map.join(" ");
}
let pn = peopleName("rainbow", "chuxiong", "dali");
document.getElementById("peopleName").innerHTML = pn;

//lambads和this关键字的使用
let people = {
    name: ["rainbow", "chuxiong", "dali"],
    getName: function () {
        return () => {
            let i = Math.floor(Math.random() * 4);
            return {
                n: this.name[i]
            }
        }
    }
}
var myName = people.getName();
console.log(myName().n)


//重载
function test1(name:string):string;

function test1(age:number):number;

function test1(nameorage:any):any {
    if (nameorage && typeof nameorage === "string") {
        alert("姓名");
    }
    else {
        alert("年龄");
    }
}
test1("hello");
