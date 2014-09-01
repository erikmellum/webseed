var routes = angular.module('routes', ['ngRoute']);

routes.config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {
  $routeProvider.
  when('/', {
    controller: 'MainCtrl'
  }).
  when('/about', {
    templateUrl: 'about',
    controller: 'AboutCtrl'
  }).
  when('/other', {
    templateUrl: 'other',
    controller: 'OtherCtrl'
  }).
  when('/home', {
    templateUrl: 'home',
    controller: 'HomeCtrl'
  }).
  when('/todo', {
    templateUrl: 'todo',
    controller: 'ToDoCtrl'
  }).
  when('/bear', {
    templateUrl: 'bear',
    controller: 'BearCtrl'
  }).
  when('/quote', {
    templateUrl: 'quote',
    controller: 'QuoteCtrl'
  }).
  otherwise({
    redirectTo: '/'
  });
}]);