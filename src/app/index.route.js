(function () {
    'use strict';

    angular
        .module('mmpadmin')
        .config(routeConfig);

    /** @ngInject */
    function routeConfig($stateProvider, $urlRouterProvider) {
        $stateProvider
            .state('index', {
                url: '/index',
                templateUrl: 'app/ZAFW/common/view1/content.html',
                controller: 'view1IndexCtrl'
            })
            .state('view1', {
                url: '/view1',
                templateUrl: 'app/ZAFW/common/view1/content.html',
                controller: 'view1IndexCtrl'
            })
            .state('view2', {
                url: '/view2',
                templateUrl: 'app/ZAFW/common/view2/content.html',
                controller: 'view2IndexCtrl'
            })
            //登录页面
            .state('login', {
                url: '/?#/',
                templateUrl: 'app/login/login.html',
                controller: 'loginCtrl'
            })
            .state('view1.views', {
                url: '/{module}/{version}/{port}',
                templateUrl: 'app/api/view.html',
                controller: 'viewCtrl'
            })
            .state('view2.views', {
                url: '/{module}/{version}/{port}',
                templateUrl: 'app/api/view.html',
                controller: 'viewCtrl'
            })
            .state('view2.private', {
                url: '/{module}/{version}/{port}/{item}',
                templateUrl: 'app/api/view.html',
                controller: 'viewCtrl'
            })
        ;

        $urlRouterProvider.otherwise('/?login');
    }

})();
