/**
 * 作者：陈彩红 创建时间：2016/11/22
 */
/*
 *封装
 * 书写get和set方法，这样由private修饰的属性可以外部访问
 */
class Hello {
    private _name:string;

    print() {
        return this.name;
    }

    get name():string {
        return this._name;
    }

    set name(newName:string) {
        if (newName == null) {
            console.log("不符合要求");
        }
        this._name = newName;

    }
}

let h = new Hello();
h.name = "rainbow";
console.log(h.print());