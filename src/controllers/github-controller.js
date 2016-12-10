(function () {
    'use strict';

    function GitHubController(GithubService, $routeParams, toastr) {
        var gc = this;

        GithubService.getUser($routeParams.id,
        function (response) {
            // console.info(response);
            gc.user = response.data;
        }, function (error) {
            console.error(error);
        });

        function showRepos(url) {
            GithubService.getRepos(url, function (data) {
                gc.repos = data;
                toastr.info(data.total,' repos cargdas');
            }, function (error) {
                console.error(error);
            })
        }

        //Funciones de UI
        gc.showRepos = showRepos;
    }
    angular
        .module('myApp')
        .controller('GitHubController', GitHubController);
    GitHubController.$inject = ['GithubService', '$routeParams', 'toastr'];
})();
