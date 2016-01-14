(function () {
    'use strict';

    angular
        .module('mmpadmin')
        .controller('view2IndexCtrl', indexCtrl);

    /** @ngInject */
    function indexCtrl($scope, $state, mmpadminAPI, alertbox,$cookieStore) {
        var pageFunc = $scope.pageFunc = {};
        var pageData = $scope.pageData = {
            //usertype:'',
            username: '',//hb 登录名
            password: '' //hb 登录密码
        };

        $cookieStore.put("view", 2);
        pageFunc.checkIsLogin = function () {
            mmpadminAPI.checkIsLogin('', function (data) {
                    if (!data) {
                        alertbox('友情提示','请登录');
                        $state.go('login');
                    }
                }, function (data) {
                }
            );
        };
        pageData.init = function () {
            pageFunc.checkIsLogin();
        };
        pageData.init();
    }
})();
