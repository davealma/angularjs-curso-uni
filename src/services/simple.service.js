(function () {
    'use strict';

    function SimpleService() {

        function years() {
            var initY = new Date().getFullYear();
            var anios = [];
            for (var i = initY; i < initY + 10; i++){
                anios.push(i);
            }
            return anios;
        }

        return {
            buildYears: years
        };
    }
    angular
        .module('myApp')
        .factory('SimpleService', SimpleService);
})();
