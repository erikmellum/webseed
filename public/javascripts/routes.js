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
  otherwise({
    redirectTo: '/'
  });
}]);