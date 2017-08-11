(function(angular){

    "usestrict";

    var app = angular.module('musicM',['ngRoute']);
    app.config(['$routeProvider',function($routeProvider){

        $routeProvider.when('/music',{
            templateUrl:'./music/music.html',
            controller:'musicCtrl'
        });
    }]);

    app.controller('musicCtrl',['$scope',function($scope){
        $scope.name="吻别";
    }]);
      
})(angular)
