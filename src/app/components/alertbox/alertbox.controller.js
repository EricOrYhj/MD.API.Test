'use strict';

angular.module('mmpadmin')

.controller('alertboxCtrl',  function($scope, $modalInstance, alertdata){
	$scope.alertdata = alertdata;
	$scope.ok = function() {
		$modalInstance.close();
	};
})
.factory('alertbox',  function($modal){
	return function alertbox(title,concent){
		//对话框
		$modal.open({
			animation: true,
			templateUrl: 'app/components/alertbox/alertbox.html',
			controller: 'alertboxCtrl',
			size: 'sm',
			resolve: {
				alertdata: function() {
					return {
						title:title,
						concent:concent
					};
				}
			}
		});

	};
})


;