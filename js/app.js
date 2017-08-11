(function (angular) {

    "usestrict";

    var myApp = angular.module('myApp', ['ngRoute', 'friendM', 'musicM', 'schoolM']);

    //  myApp.config(['$routeProvider', function ($routeProvider) {
    //      $routeProvider.when('/name?',{
    //         templateUrl:'./friend/friend.html'
    //     });
    // }]); 

    myApp.controller('myCtrl', ['$scope', function ($scope) {

    }]);


})(angular)
