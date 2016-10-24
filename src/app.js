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
  .controller('MyController', function () {
    var vm = this;

    vm.users = [
      {id:1, name: 'David', age: 28},
      {id:2, name: 'Jose', age: 30}
    ];

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
    var updateClock = function() {
      vm.clock = new Date();
    };
    setInterval(updateClock, 1000);
  })
  .controller('EditController', function ($routeParams) {
    var vm = this;
    vm.userId = $routeParams.id;
    console.log('id of', vm.userId);
  });
