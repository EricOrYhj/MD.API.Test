(function () {
    'use strict';

    angular
        .module('mmpadmin')
        .factory('apiSetting2', apiSetting2);

    var apiParam = {
        task: {
            v1: {
                get_folders: {
                    name: '获取项目', docUrl: {type: '', url: ''},
                    url: '/v1/task/get_folders',
                    requestMode: 'get',
                    params: [
                        { key: 'access_token', isMust: true, type: 'string', des: '当前登录用户访问令牌' },
                        { key: 'keywords', isMust: false, type: 'string', des: '关键词模糊搜索' },
                        { key: 'filter_type', isMust: false, type: 'int', des: '过滤类型 0:全部项目 1:我参与 2：我负责 3：我托付 4：与我协作的 默认：全部' },
                        { key: 'sort', isMust: false, type: 'int', des: '筛选：1:星标 2:创建日期 3:负责人 4:颜色 5:A-Z 默认1' }
                    ]
                },
                add_folder: {
                    name: '创建一个新的项目 v4',
                    docUrl: {type: '', url: ''},
                    url: '/v1/task/add_folder',
                    requestMode: 'post',
                    params: [
                        { key: 'access_token', isMust: true, type: 'string', des: '当前登录用户访问令牌' },
                        { key: 'name', isMust: true, type: 'string', des: '项目名称' },
                        { key: 'chargeUserID', isMust: false, type: 'string', des: '项目负责人 默认当前登录用户' },
                        { key: 'deadline', isMust: false, type: 'datetime', des: '项目截止日期' },
                        { key: 'isFavorite', isMust: false, type: 'int', des: '是否给项目标星（默认：0：否，1：是）' },
                        { key: 'members', isMust: false, type: 'string', des: '项目成员ID多个以，相隔(后台判断（跟原项目成员相比，如果原没有新有则认为是添加，如果原有新没有则认为是移除）)' },
                        { key: 'admins', isMust: false, type: 'string', des: '项目管理员ID多个以，相隔' },
                        { key: 'visibility', isMust: false, type: 'string', des: '项目可见性 0私密 1公开仅群组 2全公司(默认0)' },
                        { key: 'groupIDs', isMust: false, type: 'string', des: '当项目可见性为公开群组时群组ID（多个群组已，相隔）' },
                        { key: 'fFileID', isMust: false, type: 'string', des: '项目文件夹ID' },
                        { key: 'isTop', isMust: false, type: 'int', des: '是否置顶（默认：0：否，1：是）' }

                    ]
                }
            }
        }
    };

    function apiSetting2() {

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










