/**
 * Created by Administrator on 2016/11/7.
 */
var test = angular.module('myApp', []);

test.controller('MainController', function ($scope) {
    $scope.submitForm = function () {
        console.log("提交表单");
    }
})