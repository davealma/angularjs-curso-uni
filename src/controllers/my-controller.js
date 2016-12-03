var users = [
              {id:1, name: 'David', age: 28},
              {id:2, name: 'Jose', age: 30}
            ];
(function () {
    'use strict';
    function MyController() {
      var vm = this; //tener a la func desde una variable
      vm.users = users;
        
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
    }
    angular
        .module('myApp')
        .controller('MyController', MyController);
})();
