var users = [
  {id:1, name: 'David', age: 28},
  {id:2, name: 'Jose', age: 30}
];
angular.module('myApp', ['ngRoute'])
    .config(function ($routeProvider) {
        $routeProvider
            .when('/', {
                controller: 'MyController as vm',
                templateUrl: 'template/2.html'
            })
            .when('/edit/:id', {
                controller: 'EditController as ec',
                templateUrl: 'template/2-edit.html'
            })
            .otherwise({
                redirectTo: '/'
            })
    })
    .controller('MyController', function () {
        var vm = this;
        vm.my_check = true;
        vm.number = 10.99;
        vm.users = users;
        function checkHandler() {
            var result = vm.number * 8;
            console.log('El valor cambio: '+result );
        }
        function remover(u) {
            var user_id = u.id;
            vm.user = users.filter(function(user) {
                return user.id != user_id;
            });
        }
        // funciones de vista
        vm.checkHandler = checkHandler;
        vm.remover = remover;
    })
    .controller('EditController', function ($routeParams) {
        var ec = this;
        ec.user =     _.find(users, function (user) {
            return user.id == $routeParams.id;
        });
    });
