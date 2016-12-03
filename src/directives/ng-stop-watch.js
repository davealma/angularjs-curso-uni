(function  (argument) {
	'use strict';

	function StopWatchDirective ($interval) {
		return { 
			restrict: 'EA',
		    scope: true,
		    link: function(scope, elem, attrs){
		    	var running = false;
		    	var interval;
		        scope.elapsedTime = 0;
		        scope.startTimer = function  () {
		        	if (running) {
			        	console.warn('Estoy corriendo!');
			        	return;
		        	}
		        	interval = $interval(function() {
		        		scope.elapsedTime += 1;
		        	}, 1000);
		        	running = true;
		        };

		        scope.stopTimer = function () {
		        	if (!running) return;
		        	$interval.cancel(interval);
		        	running = false;
		        };

		        scope.resetTimer = function () {
		        	$interval.cancel(interval);
		        	scope.elapsedTime = 0;
		        	running = false;
		        }
		    }

		}
	}
	angular
		.module('myApp')
		.directive('ngStopWatch', StopWatchDirective);

	StopWatchDirective.$inject = ['$interval'];
})();