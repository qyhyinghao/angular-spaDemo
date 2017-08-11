(function(angular){

    "usestrict";

    var app = angular.module('schoolM',['ngRoute']);
    app.config(['$routeProvider',function($routeProvider){

        $routeProvider.when('/school',{
            templateUrl:'./school/school.html',
            controller:'schoolCtrl'
        });
    }]);



    app.controller('schoolCtrl',['$scope',function($scope){
        $scope.name="加州理工";
    }]);
    

    
})(angular)
