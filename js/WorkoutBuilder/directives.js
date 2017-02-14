angular.module('WorkoutBuilder').directive('workoutTile', function () {
	return {
		restrict: 'E',
		templateUrl:'/partials/workoutbuilder/workout-tile.html'
	}
});

// angular.module('app').directive('remoteValidator', ['$parse', function($parse) {
// 	return {
// 		require: ['ngModel', '?^busyIndicator'],
// 		link: function (scope, elm, attr, ctrls) {
// 			var expfn = $parse(attr["remoteValidatorFunction"]);
// 			var validatorName = attr["remoteValidator"];
// 			var modelCtrl = ctrls[0];
// 			var busyIndicator = ctrls[1];
// 			modelCtrl.$parsers.push(function (value) {
// 				var result = expfn(scope, { 'value': value });
// 				if (result.then) {
// 					if (busyIndicator) busyIndicator.show();
// 					result.then(function (data) {
// 						if (busyIndicator) busyIndicator.hide();
// 						modelCtrl.$setValidity(validatorName, true);
// 					}, function (error) {
// 						if (busyIndicator) busyIndicator.hide();
// 						modelCtrl.$setValidity(validatorName, false);
// 					});
// 				}
// 				return value;
// 			});
// 		}
// }]);