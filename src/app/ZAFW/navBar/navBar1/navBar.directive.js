(function () {
    'use strict';

    angular
        .module('ZAFW')
        .directive('navBar1', navBar);

    /** @ngInject */
    function navBar() {
        var directive = {
            restrict: 'A',
            templateUrl: 'app/ZAFW/navBar/navBar1/navBar.html',
            //scope:{
            //    searchInput:'@'
            //},
            controller: NavbarController,
            controllerAs: 'nb',
            bindToController: true
        };

        return directive;

        /** @ngInject */
        function NavbarController($scope, $state, mmpadminAPI, alertbox, $stateParams, apiSetting) {
            var pageFunc = $scope.pageFunc = {};
            var pageData = $scope.pageData = {
                userInfo: [],
                apiData: []
            };

            pageFunc.logout = function () {
                mmpadminAPI.logout(function (data) {
                    if (data) {
                        alertbox('友情提示', '登出成功');
                        $state.go('login');
                    }
                }, function (data) {
                    alertbox('友情提示', data.msg)
                })
            };
            pageFunc.init = function () {
                pageFunc.getApiAll();
                console.log('用户种类', pageData.userSysType);
            };

            pageFunc.getApiAll = function () {
                apiSetting.getApiAll(function (data) {
                    pageData.apiData = data;
                });
            }
            pageFunc.hide1 = function () {
                var searchDiv = $(".search");
                searchDiv.slideUp(500);
            };

            pageFunc.init();
            $scope.modelList = [];
            var searchInput = $scope.searchInput = '';
            pageFunc.myKeyup = function (e) {
                var search = $("#top-search");
                var searchDiv = $(".search");
                var searchValue = search.val();
                apiSetting.getapiPram(searchValue, function (data) {

                    $scope.modelList = data;

                    if (search.val() != "") {
                        searchDiv.slideDown(1000);
                    } else {
                        searchDiv.slideUp(500);
                    }

                });

            }

        }
    }
})();
