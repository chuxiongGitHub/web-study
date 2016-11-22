/**
 * 作者：陈彩红 创建时间：2016/11/22
 */
//static修饰符，通过类名来调用
var Peron = (function () {
    function Peron() {
    }
    Peron.prototype.tell = function () {
        return Peron.name;
    };
    return Peron;
}());
var p = new Peron();
Peron.name = "彩虹";
console.log(p.tell());
//# sourceMappingURL=static.js.map