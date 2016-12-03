var users = [
              {id:1, name: 'David', age: 28},
              {id:2, name: 'Jose', age: 30}
            ];

angular.module('myApp', ['ngRoute'])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        controller: 'MyController as mc',
        templateUrl: '2.html'
      })
      .when('/edit/:id', {
        controller: 'EditController as ec',
        templateUrl: '2-edit.html'
      })
      .otherwise({
        redirectTo: '/'
      })
  });
