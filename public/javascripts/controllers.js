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

controllers.controller('ToDoCtrl', function($scope, $http){
  $http.get('/api/todos')
    .success(function(data) {
      $scope.todos = data;
      console.log(data);
    })
    .error(function(data) {
      console.log('Error: ' + data);
    });

  // when submitting the add form, send the text to the node API
  $scope.createTodo = function() {
    $http.post('/api/todos', $scope.formData)
      .success(function(data) {
        $scope.formData = {}; // clear the form so our user is ready to enter another
        $scope.todos = data;
        console.log(data);
      })
      .error(function(data) {
        console.log('Error: ' + data);
      });
  };

  // delete a todo after checking it
  $scope.deleteTodo = function(id) {
    $http.delete('/api/todos/' + id)
      .success(function(data) {
        $scope.todos = data;
        console.log(data);
      })
      .error(function(data) {
        console.log('Error: ' + data);
      });
  };
})

controllers.controller('QuoteCtrl', function($scope, $http){
  $http.get('/api/quotes')
    .success(function(data) {
      $scope.quotes = data;
      console.log(data);
    })
    .error(function(data) {
      console.log('Error: ' + data);
    });

  // when submitting the add form, send the text to the node API
  $scope.createQuote = function() {
    $http.post('/api/quotes', $scope.name, $scope.author, $scope.quote)
      .success(function(data) {
        $scope.author = {}; // clear the form so our user is ready to enter another
        $scope.name = {}; // clear the form so our user is ready to enter another
        $scope.quote = {}; // clear the form so our user is ready to enter another
        $scope.quotes = data;
        console.log(data);
      })
      .error(function(data) {
        console.log('Error: ' + data);
      });
  };

  // delete a todo after checking it
  $scope.deleteQuote = function(id) {
    $http.delete('/api/quotes/' + id)
      .success(function(data) {
        $scope.quotes = data;
        console.log(data);
      })
      .error(function(data) {
        console.log('Error: ' + data);
      });
  };
});