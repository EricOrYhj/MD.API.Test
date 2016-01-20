(function () {
    'use strict';

    angular
        .module('mmpadmin')
        .controller('loginCtrl', loginCtrl);

    /** @ngInject */
    function loginCtrl($scope, $state, mmpadminAPI, alertbox, alertprojectbox) {
        var pageFunc = $scope.pageFunc = {};
        var pageData = $scope.pageData = {
            username: 'b@md.md',
            password: '1'
            //  userType:''
        };
        // 用户登录
        pageFunc.userlogin = function () {
            mmpadminAPI.login("/oauth2/access_token", {
                grant_type: 'password',
                app_key: '935527504',
                app_secret: '4fb83603c7904cd9861895a17ce1530c',
                p_signature: "",
                username: pageData.username,
                password: pageData.password,
                account:true,
                format: 'json'
            }, function (data) {
                if (data && data.access_token) {
                    mmpadminAPI.checkIsLogin(data.access_token, function () {
                        alertbox('友情提示', '登录成功' + data.access_token);
                        $state.go('view2');
                    })
                }
                else {
                    if (data && data.projects) {
                        alertprojectbox('网络选择', data.projects, function (pid) {
                            mmpadminAPI.login("/oauth2/access_token", {
                                grant_type: 'password',
                                app_key: '935527504',
                                app_secret: '4fb83603c7904cd9861895a17ce1530c',
                                p_signature: pid,
                                username: pageData.username,
                                password: pageData.password,
                                format: 'json'
                            }, function (data) {
                                if (data && data.access_token) {
                                    mmpadminAPI.checkIsLogin(data.access_token, function () {
                                        alertbox('友情提示', data.access_token);
                                        $state.go('view2');
                                    })
                                } else {
                                    alertbox('友情提示', data.msg);
                                }
                            })
                        });
                    }
                }
                // history.go(-1);
                //存cookie
                // setCookie("ASP.NET_SessionId", data.session_id, 1);
            }, function (data) {
//                alertbox('友情提示', data.msg);
//                $state.go('login');
            })

        };
    }
})();
