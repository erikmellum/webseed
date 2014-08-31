var controllers = angular.module('controllers', []);

controllers.controller('MainCtrl', function($scope){
  $scope.message = 'Made it to the app!';
});

controllers.controller('AboutCtrl', function($scope){
  $scope.message = 'Made it to the about!';
});

controllers.controller('OtherCtrl', function($scope){
  $scope.message = 'Made it to the other!';
});
controllers.controller('HomeCtrl', function($scope){
  $scope.message = 'Made it to the home!';
});