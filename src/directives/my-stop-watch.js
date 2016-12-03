(function () {
    function myStopWatch($interval) {
        return {
            // Attributo <div my-stop-watch/>
            // Elemento <my-stop-watch/>
            restrict: 'EA',
            scope: true, //heredado
            templateUrl: './stop-watch.html',
            link: function (scope, elem, attrs) {
                var interval;
                var running = false;
                scope.elapsedTime = 0;
                scope.startTimer = function () {
                    if (running) {
                        console.warn('El temporizador esta corriendo');
                        return;
                    }
                    interval = $interval(function () {
                        scope.elapsedTime += 2;
                    }, 1000);
                    running = true;
                };
                scope.stopTimer = function () {
                    $interval.cancel(interval);
                    running = false;
                };
                scope.resetTimer = function () {
                    if (running) {
                        scope.stopTimer();
                    }
                    scope.elapsedTime = 1;
                }
            }
        }
    }
    angular
        .module('myApp')
        .directive('myStopWatch', myStopWatch);
    myStopWatch.$inject = ['$interval'];
})();
