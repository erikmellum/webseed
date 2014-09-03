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

controllers.controller('LoginCtrl', function($scope){
  $scope.message = 'Login';
});

controllers.controller('ProfileCtrl', function($scope){
  $scope.message = 'Profile';
});

controllers.controller('SignupCtrl', function($scope, $http){
  $scope.signup = function() {
    $http.post('/signup', {'email' : $scope.email, 'password' : $scope.password})
      .success(function(data) {
        $location.path("/profile");
      })
      .error(function(data) {
        console.log('Error: ' + data);
        $location.path("/login");
      });
  };
});

controllers.controller('UserCtrl', function($scope){
  $scope.message = 'User!';
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
});

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
    $http.post('/api/quotes', {
      'name' : $scope.formName, 
      'author' : $scope.formAuthor, 
      'quote' : $scope.formQuote
    })
    .success(function(data) {
      $scope.quotes = data;
      $scope.formAuthor = ''; // clear the form so our user is ready to enter another
      $scope.formName = ''; // clear the form so our user is ready to enter another
      $scope.formQuote = ''; // clear the form so our user is ready to enter another
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

controllers.controller('BearCtrl', function($scope, $http){
  $scope.testBear = function() {
  $http.post('/api/test', {'name' : 'test'})
    .success(function(data) {
      $scope.bears = data;
      console.log(data);
    })
    .error(function(data) {
      console.log('Error: ' + data);
    });
  };
  $http.get('/api/bears')
    .success(function(data) {
      $scope.bears = data;
      console.log(data);
    })
    .error(function(data) {
      console.log('Error: ' + data);
    });
  // when submitting the add form, send the text to the node API
  $scope.createBear = function() {
    $http.post('/api/bears', $scope.bearName)
      .success(function(data) {
        $scope.bears = data;
        console.log(data);
      })
      .error(function(data) {
        console.log('Error: ' + data);
      });
  };

  // delete a todo after checking it
  $scope.deleteBear = function(id) {
    $http.delete('/api/bears/' + id)
      .success(function(data) {
        $scope.bears = data;
        console.log(data);
      })
      .error(function(data) {
        console.log('Error: ' + data);
      });
      $scope.bear = {};
  };

  $scope.updateBear = function(id) {
    $http.put('/api/bears/' + id, $scope.bearName)
      .success(function(data) {
        $scope.bear = data;
        console.log(data);
      })
      .error(function(data) {
        console.log('Error: ' + data);
      });

    $http.get('/api/bears')
    .success(function(data) {
      $scope.bears = data;
      console.log(data);
    })
    .error(function(data) {
      console.log('Error: ' + data);
    });
  };

   $scope.viewBear = function(id) {
    $http.get('/api/bears/' + id)
      .success(function(data) {
        $scope.bear = data;
        console.log(data);
      })
      .error(function(data) {
        console.log('Error: ' + data);
      });
  };


});