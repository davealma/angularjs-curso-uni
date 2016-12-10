(function () {
    'use strict';
    function GithubService($http, __env) {
        console.log(__env);
        function user(user_name, callback, error) {
            var url = __env.apiUrl+'users/' + user_name;

            return $http.get(url).then(callback).catch(error);
        }

        function repos(url, callback, error) {
            return $http.get(url).then(function(response) {
                    var obj = {
                        total: response.data.length,
                        repos: response.data
                     };
                 callback(obj);
            }).catch(error);
        }

        return {
            getUser: user,
            getRepos: repos
        };
    }

    angular
        .module('myApp')
        .factory('GithubService', GithubService);
    GithubService.$inject = ['$http', '__env'];
})();
