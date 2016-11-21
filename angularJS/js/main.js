/**
 * 作者：陈彩红 创建时间：2016/11/21
 */
//依赖ngRoute
var myAngular = angular.module("myApp", ['ngRoute']);

<!--定义路由-->
myAngular.config(function ($routeProvider) {
    $routeProvider
        .when('/', {
            controller: 'ListController',
            templateUrl: 'angular1.html'
        })
        .when('/get/:id', {
            controller: 'GetController',
            templateUrl: 'detail.html'
        })
        .otherwise({
            redirectTo: '/'
        });
});

myAngular.controller('ListController', function ($scope, $http) {
    $http(
        {
            url: 'http://localhost/user/getAll',
            method: 'GET'
        }
    )
        .success(function (data, status) {
            console.log(data);
            console.info(data.data)
            console.log(status);
            $scope.users = data.data;
        });
});

myAngular.controller('GetController', function ($scope, $http, $routeParams) {
    var id = $routeParams.id;
    $http({
        url: 'http://localhost/user/getAll',
        method: 'GET'
    }).success(function (data, status) {
        $scope.item = data.data[id];
    });
});


