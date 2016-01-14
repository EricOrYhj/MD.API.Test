'use strict';

angular.module('mmpadmin')

  .controller('alertconformboxCtrl',  function($scope, $modalInstance, alertdata){
    $scope.alertdata = alertdata;
    $scope.ok = function() {
      alertdata.callback();
      $modalInstance.close();
    };
    $scope.cancel=function(){
      alertdata.cancel();
      $modalInstance.close();
    };
  })
  .factory('alertconformbox',  function($modal){
    return function alertconformbox(title,concent,again,back,okFunc,cancelFunc){
      //对话框
      $modal.open({
        animation: true,
        templateUrl: 'app/components/alertconformbox/alertconformbox.html',
        controller: 'alertconformboxCtrl',
        size: 'sm',
        resolve: {
          alertdata: function() {
            return {
              title:title,  //一般为 友情提示
              concent:concent, //内容
              again:again,  //按钮名称
              back:back,  //第二个按钮名称
              callback:okFunc,  //点击第一个按钮要执行的方法
              cancel:cancelFunc  //点击第二个按钮要执行的方法
            };
          }
        }
      });

    };
  })


;
