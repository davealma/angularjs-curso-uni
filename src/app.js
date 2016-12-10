var users = [
              {id:1, name: 'David', age: 28},
              {id:2, name: 'Jose', age: 30}
            ];
var env = {};
if (window) {
    Object.assign(env, window.__env);
}
angular.module('myApp', ['ngRoute', 'toastr'])
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
      .when('/user/:id', {
          controller: 'GitHubController as gc',
          templateUrl: 'github.html'
      })
      .otherwise({
        redirectTo: '/'
      })
  })
  .constant('__env', env);
