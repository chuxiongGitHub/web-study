/**
 * 作者：陈彩红 创建时间：2016/11/22
 */

/**
 * 访问修饰符：public（默认）
 * private（类的外部不可以被访问，包括继承的类）
 */
class People {
    public name:string;
    age:number;

    constructor(name:string, age:number) {
        this.name = name;
        this.age = age;
    }

    print() {
        return this.name + ":" + this.age;
    }
}

class Teacher extends People {
    school:string;

    constructor(school:string){
        super("rainbow",25);
        this.school=school;
    }
    print() {
        return this.name + ":" + this.age + ":" + this.school;
    }
}

let t = new Teacher("清华");
t.name = "rainbow";
t.age = 80;
t.school = "清华";
console.log(t.print());