'use strict';

angular.module('mmpadmin')

    .controller('alertprojectboxCtrl',  function($scope, $modalInstance, alertdata){
        $scope.alertdata = alertdata;
        $scope.ok = function() {
            alertdata.callback();
            $modalInstance.close();
        };
        $scope.cancel=function(){
            $modalInstance.close();
        };

        $scope.loginProject=function(pid){
            alertdata.callback(pid);
            $modalInstance.close();
        }
    })
    .factory('alertprojectbox',  function($modal){
        return function alertprojectbox(title,data,okFunc,cancelFunc){
            //对话框
            $modal.open({
                animation: true,
                templateUrl: 'app/components/alertprojectbox/alertprojectbox.html',
                controller: 'alertprojectboxCtrl',
                size: 'sm',
                resolve: {
                    alertdata: function() {
                        return {
                            title:title,  //一般为 友情提示
                            data:data,
                            callback:okFunc,  //点击第一个按钮要执行的方法
                            cancel:cancelFunc  //点击第二个按钮要执行的方法
                        };
                    }
                }
            });
        };
    })
;
