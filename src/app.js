var users = [
              {id:1, name: 'David', age: 28},
              {id:2, name: 'Jose', age: 30}
            ];

angular.module('myApp', ['ngRoute'])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        controller: 'MyController as todoList',
        templateUrl: '2.html'
      })
      .when('/edit/:id', {
        controller: 'EditController as editCont',
        templateUrl: '2-edit.html'
      })
      .otherwise({
        redirectTo: '/'
      })
  })
  .controller('MyController', function ($filter, $http) {
    var vm = this;
    // vm.showMenu = false;
    vm.users = users;

    $http({
       method : "GET",
       url : "https://api.github.com/users/davealma"
   }).then(function mySucces(response) {
       console.log(response);
   }, function myError(error) {
       console.log(error);
   });

    vm.sendForm = function () {
      var id = vm.users.length + 1;
      vm.users.push({id: id, name: vm.userName, age: vm.userAge});
      vm.userName = '';
      vm.userAge = '';
    }
    vm.remove = function (userId) {
      console.log("remove user with id", userId);
      vm.users = vm.users.filter(function (user) {
        return user.id != userId;
      });
    }
    vm.esconder = function () {
        vm.showMenu = !vm.showMenu;
    };
  })
  .controller('EditController', function ($routeParams, $location) {
    var vm = this;
    vm.user = users.filter(function(user) {
      return user.id == $routeParams.id;
    })[0];
    vm.update = function () {
      console.log('daa', vm.user);
      users.map(function (user) {
        if (user.id == vm.user.id) {
          return vm.user;
        }
        return user;
      });
      $location.path('/');
    };
  });
