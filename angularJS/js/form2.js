/**
 * 作者：陈彩红 创建时间：2016/11/21
 */

var myFrom = angular.module('myApp', []);

myFrom.controller('FormController', function ($scope) {

    $scope.userdata = {};
    $scope.submitForm = function () {
        console.log($scope.userdata);
        if ($scope.signUpForm.$invalid) {
            alert('请检查你的信息');
        }
        else {
            alert("输入正确");
        }
    }

});
//自定义指令
myFrom.directive("compare", function () {
    var o = {};
    o.strict = "AE";
    o.scope == {
        orgText: "=compare"
    }
    o.requre = "ngModel";
    o.link = function (sco, ele, att, con) {
        con.$validators.compare = function (y) {
            return y == sco.orgText;
        }
        sco.$watch('orgText', function () {
            con.$validate();
        })
    }
    return o;
});