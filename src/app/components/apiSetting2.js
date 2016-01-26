(function () {
    'use strict';

    angular
        .module('mmpadmin')
        .factory('apiSetting2', apiSetting);

    var apiParam = {
        group: {
            v1: {
                get_my_groups: {
                    name: '我的群组',
                    docUrl: {type: '', url: '/v1user.html'},
                    url: '/group/get_my_groups',
                    requestMode: 'get',
                    params: [
                        { key: 'access_token', isMust: true, type: 'string', des: '当前登录用户访问令牌' },
                        { key: 'pageindex', isMust: false, type: 'int', des: '指定当前的页码（不指定页码返回所有）' },
                        { key: 'pagesize', isMust: false, type: 'int', des: '指定要返回的记录条数(默认值20，最大值100)' }
                    ]
                }
            }
        },
        user: {
            v1: {
                get_new_friends: {
                    name: '新的朋友',
                    docUrl: {type: '', url: '/v1user.html'},
                    url: '/user/get_new_friends',
                    requestMode: 'get',
                    params: [
                        { key: 'access_token', isMust: true, type: 'string', des: '当前登录用户访问令牌' },
                        { key: 'pageindex', isMust: false, type: 'int', des: '指定当前的页码（不指定页码返回所有）' },
                        { key: 'pagesize', isMust: false, type: 'int', des: '指定要返回的记录条数(默认值20，最大值100)' }
                    ]
                },
                get_my_friends: {
                    name: '我的联系人',
                    docUrl: {type: '', url: '/v1user.html'},
                    url: '/user/get_my_friends',
                    requestMode: 'get',
                    params: [
                        { key: 'access_token', isMust: true, type: 'string', des: '当前登录用户访问令牌' },
                        { key: 'pageindex', isMust: false, type: 'int', des: '指定当前的页码（不指定页码返回所有）' },
                        { key: 'pagesize', isMust: false, type: 'int', des: '指定要返回的记录条数(默认值20，最大值100)' }
                    ]
                },
                get_project_users: {
                    name: '获取通讯录',
                    docUrl: {type: '', url: '/v1user.html'},
                    url: '/user/get_project_users',
                    requestMode: 'get',
                    params: [
                        { key: 'access_token', isMust: true, type: 'string', des: '当前登录用户访问令牌' },
                        { key: 'project_id', isMust: true, type: 'string', des: '网络ID' },
                        { key: 'department', isMust: false, type: 'string', des: '部门名称' },
                        { key: 'pageindex', isMust: false, type: 'int', des: '指定当前的页码（不指定页码返回所有）' },
                        { key: 'pagesize', isMust: false, type: 'int', des: '指定要返回的记录条数(默认值20，最大值100)' }
                    ]
                },
                add_friend: {
                    name: '请求添加好友',
                    docUrl: {type: '', url: '/v1user.html'},
                    url: '/user/add_friend',
                    requestMode: 'post',
                    params: [
                        { key: 'access_token', isMust: true, type: 'string', des: '当前登录用户访问令牌' },
                        { key: 'account_id', isMust: true, type: 'string', des: '请求加为好友的用户账号ID' },
                        { key: 'message', isMust: true, type: 'string', des: '请求描述' }
                    ]
                },
                update_friend_status:{
                    name: '同意，拒绝，忽略请求添加好友',
                    docUrl: {type: '', url: '/v1user.html'},
                    url: '/user/update_friend_status',
                    requestMode: 'post',
                    params: [
                        { key: 'access_token', isMust: true, type: 'string', des: '当前登录用户访问令牌' },
                        { key: 'account_id', isMust: true, type: 'string', des: '操作的用户账号ID' },
                        { key: 'status', isMust: true, type: 'int', des: '同意=1,忽略=2,拒绝=3' }
                    ]
                },
                remove_friend:{
                    name: '移除好友',
                    docUrl: {type: '', url: '/v1user.html'},
                    url: '/user/remove_friend',
                    requestMode: 'post',
                    params: [
                        { key: 'access_token', isMust: true, type: 'string', des: '当前登录用户访问令牌' },
                        { key: 'account_id', isMust: true, type: 'string', des: '需要移除的用户账号ID' },
                        { key: 'status', isMust: true, type: 'int', des: '同意=1,忽略=2,拒绝=3' }
                    ]
                }
            }
        },
        company:{
            v1: {
                get_project_list: {
                    name: '获取我的网络列表',
                    docUrl: {type: 'string', url: ''},
                    url: '/company/get_project_list',
                    requestMode: 'get',
                    params: [
                        { key: 'access_token', isMust: true, type: 'string', des: '当前登录用户访问令牌' },
                        { key: 'pageindex', isMust: false, type: 'int', des: '指定当前的页码（不指定页码返回所有）' },
                        { key: 'pagesize', isMust: false, type: 'int', des: '指定要返回的记录条数（默认值20，最大值100）' }
                    ]
                },
                get_project_departments:{
                    name: '获取网络部门列表',
                    docUrl: {type: 'string', url: ''},
                    url: '/company/get_project_departments',
                    requestMode: 'get',
                    params: [
                        { key: 'access_token', isMust: true, type: 'string', des: '当前登录用户访问令牌' },
                        { key: 'project_id', isMust: true, type: 'string', des: '要获取的网络ID' },
                        { key: 'pageindex', isMust: false, type: 'int', des: '指定当前的页码（不指定页码返回所有）' },
                        { key: 'pagesize', isMust: false, type: 'int', des: '指定要返回的记录条数（默认值20，最大值100）' }
                    ]
                }
            }
        },
        passport: {
            v1: {
                detail: {
                    name: '登录用户基本信息',
                    docUrl: {type: 'string', url: ''},
                    url: '/passport/detail',
                    requestMode: 'get',
                    params: [
                        { key: 'access_token', isMust: true, type: 'string', des: '当前登录用户访问令牌' },
                    ]
                }
            }
        }
    };

    function apiSetting() {

        var apiSetting = {
            getApiAll: getApiAll,
            getApiSetting: getApiSetting,
            getapiPram: getapiPram
        }

        return apiSetting;

        function getApiAll(scallback) {
            var moduleArray = [];
            for (var module in apiParam) {
                var moduleItem = apiParam[module];
                var moduleObj = {};
                var versionArray = [];
                for (var version in moduleItem) {
                    var versionItem = moduleItem[version];
                    var versionObj = {};
                    var portArray = [];
                    for (var port in versionItem) {
                        portArray.push(port);
                    }
                    versionObj.version = version;
                    versionObj.value = portArray;
                    versionArray.push(versionObj);
                }
                moduleObj.module = module;
                moduleObj.value = versionArray;
                moduleArray.push(moduleObj);
            }
            scallback(moduleArray);
        }

        function getApiSetting(module, version, port, scallback) {
            var param = apiParam[module][version][port];
            if (param) {
                scallback(param);
            }
        }

        function getapiPram(search, scallback) {
            var list = [];
            for (var module in apiParam) {
                var moduleItem = apiParam[module];
                var moduleObj = {};
                var versionArray = [];
                for (var version in moduleItem) {
                    var versionItem = moduleItem[version];
                    for (var port in versionItem) {
                        if (port.toUpperCase().indexOf(search.toUpperCase()) != -1) {
                            var portObject = { "module": module, "version": version, "port": port }
                            list.push(portObject);
                        }
                    }
                }
            }
            scallback(list)
        }
    }
})();










