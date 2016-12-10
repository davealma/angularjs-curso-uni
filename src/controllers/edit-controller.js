var users = [
              {id:1, name: 'David', age: 28},
              {id:2, name: 'Jose', age: 30}
            ];
(function () {
    'use strict';
    function EditController($routeParams, $location, SimpleService) {
        var vm = this;
        vm.years = SimpleService.buildYears();
        vm.userId = $routeParams.id;
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
    }

    angular
        .module('myApp')
        .controller('EditController', EditController);

        EditController.$inject = ['$routeParams', '$location',
                                  'SimpleService'];
})();
