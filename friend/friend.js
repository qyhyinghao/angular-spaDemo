(function(angular){

    "usestrict";

    var app = angular.module('friendM',['ngRoute']);
    app.config(['$routeProvider',function($routeProvider){

        $routeProvider.when('/friend',{

            templateUrl:'./friend/friend.html',
            //controller指定控制器后,templateUrl里面可以直接使用该控制器内的$scope值
            controller:'friendCtrl'
        })
    }]);
    app.controller('friendCtrl',['$scope',function($scope){
        $scope.name="刘德华";
    }]);

})(angular)
