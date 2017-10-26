'use strict';

var myApp = angular.module('myApp', [
  'ngRoute'
]);
myApp.config(['$locationProvider', '$routeProvider', function($locationProvider, $routeProvider) {
  $locationProvider.hashPrefix('!');
  $routeProvider.when("/login ", {
    templateUrl: "./login/views/loginPage.html"
  }).when('/', {
    templateUrl: "./login/views/loginPage.html"
  })
}]);
