'use strict';

var App = angular.module('myApp.register', ['ngRoute', 'firebase'])

// Declared route 
App.config(['$routeProvider', function($routeProvider) {
    $routeProvider.when('/register', {
        templateUrl: 'register/register.html',
        controller: 'RegisterCtrl'
    });

        $routeProvider.when('/resetPassword', {
       templateUrl: 'register/resetPassword.html',
       controller: 'RegesterCtrl'
    });

    $routeProvider.when('/forgotPassword', {
       templateUrl: 'register/forgotPassword.html',
       controller: 'RegesterCtrl'
    });
}])

// Register controller
App.controller('RegisterCtrl', ['$scope', function($scope) {

	var ref = new Firebase("https://purestripe.firebaseio.com");


}]);