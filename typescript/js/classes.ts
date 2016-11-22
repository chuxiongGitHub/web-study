/**
 * 作者：陈彩红 创建时间：2016/11/22
 */
class Peron {
    //1、属性
    name:string;
    age:number;

    constructor(name:string, age:number) {
        this.name = name;
        this.age = age;
    }

    tell() {
        return this.name + ":" + this.age;
    }
}

class Student extends Peron {
    school:string;

    constructor(school:string) {
        super("rainbow", 100);
        this.school = school;
    }

    tell() {
        return this.name + ":" + this.age + ":" + this.school;
    }
}
let s = new Student("清华");
s.name = "rainbow";
s.age = 100;
s.school = "清华";

console.log(s);
