
var users = [
              {id:1, name: 'David', age: 28},
              {id:2, name: 'Jose', age: 30}
            ];
(function () {
    'use strict';
    function EditController($routeParams, $location) {
        console.log('Edit controller loaded');
        var vm = this;
        vm.user = users.filter(function(user) {
          return user.id == $routeParams.id;
        })[0];
        vm.update = function () {
          users.map(function (user) {
            if (user.id == vm.user.id) {
              return vm.user;
            }
            return user;
          });
          $location.path('/');
        };
    }

    angular
        .module('myApp')
        .controller('EditController', EditController);
    EditController.$inject = ['$routeParams', '$location'];
}());
