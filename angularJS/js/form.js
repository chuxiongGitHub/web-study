/**
 * 作者：陈彩红 创建时间：2016/11/21
 */
var angularForm = angular.module('appForm', []);

angularForm.config(function ($httpProvider) {

});

angularForm.controller('FormController', function ($scope) {
    $scope.submitForm = function () {
        console.log("表单提交");
    }
});

angularForm.controller('AddController', function ($scope, $http) {
    $scope.userName = "";
    $scope.createTime = "";
    $scope.age = "";
    $scope.addUser = function () {
        $http({
            url: 'http://localhost/user/addUser',
            method: 'POST',
            data: {
                userName: $scope.userName,
                createTime: $scope.createTime,
                age: $scope.age
            }
        })
            .success(function (response) {
                if (response.success) {
                    console.log(response);
                }
            });
    }
});


