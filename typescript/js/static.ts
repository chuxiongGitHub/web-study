/**
 * 作者：陈彩红 创建时间：2016/11/22
 */
    //static修饰符，通过类名来调用
class Peron {
    static name:string;

    tell() {
        return Peron.name;
    }
}
let p = new Peron();
Peron.name = "彩虹";
console.log(p.tell());