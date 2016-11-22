/**
 * 作者：陈彩红 创建时间：2016/11/22
 */

//可以自定义下标
enum Color{Red, Green, Blue};

let colorName:string = Color[1];

//获取下标
let c:Color=Color.Blue;
function tt() {
    alert(c);
}
tt();