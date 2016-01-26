(function () {
    'use strict';

    angular
        .module('mmpadmin')
        .factory('mmpadminAPI', mmpadminAPI);

//    var ROOT_URL = "https://api.mingdao.com";
//    var ROOT_URL = "http://localhost:13351";
    var ROOT_URL = "http://localhost:7432";
//    var ROOT_URL = "https://devapi.mingdao.com";
//    var ROOT_URL = "http://172.17.30.247/MD.API";
//    var ROOT_URL = "";//本机
//    var ROOT_URL = "/MD.API";//测试环境
    var FRONT_URL = "";
    var userToken = "";


    function mmpadminAPI($http, $timeout, apiSetting, $cookieStore) {
        var mmpadminAPI = {
            /*
             通用url拼接方法
             apiurl(action,data)
             */
            apiurl: apiurl,
            /*
             通用url拼接方法
             apiurl(action,data)
             */
            fronturl: fronturl,
            /*
             通用jsonpurl拼接方法
             jsonpurl(action,data)
             */
            jsonpurl: jsonpurl,
            /*
             通用get方法
             get(url,scallback,ecallback)
             */
            get: get,
            /*
             通用post方法
             post(url,scallback,ecallback)
             */
            post: post,
            /*
             通用jsonp方法
             jsonp(url,scallback,ecallback)
             */
            jsonp: jsonp,
            /*
             用户登录
             */
            login: login,

            extend: extend,
            /*
             退出登录
             */
            logout: logout,
            /*
             检查是否登录
             */
            checkIsLogin: checkIsLogin,
            /*
             获取用户详情
             */
            getUserDetail: getUserDetail,
            /*
             上传图片
             */
            upLoadFileImg: upLoadFileImg
        };
        return mmpadminAPI;
        function apiurl(action, data) {
            var url = ROOT_URL + action;
            if (typeof data === 'object') {
                url += '?';
                for (var key in data) {
                    url += key + '=' + data[key] + '&';
                }
                url = url.slice(0, url.length - 1);
            }
            // console.log(["apiurl",url]);
            // url=url.replace(/action=/g, "");
            return url;
        }

        //评论的接口
        function fronturl(action, data) {
            var url = FRONT_URL + action;
            if (typeof data === 'object') {
                url += '?';
                for (var key in data) {
                    url += key + '=' + data[key] + '&';
                }
                url = url.slice(0, url.length - 1);
            }
            return url;
        }

        function jsonpurl(action, data) {
            var url = ROOT_URL + action;
            if (typeof data === 'object') {
                url += '?';
                for (var key in data) {
                    url += key + '=' + encodeURIComponent(data[key]) + '&';
                }
            }
            return url + "callback=JSON_CALLBACK";
        }

        function get(url, scallback, ecallback) {
            $http.get(url)
                .success(function (data, status, headers, config) {
                    scallback(data, status, headers, config);
                })
                .error(function (data, status, headers, config) {
                    if (ecallback) {
                        ecallback(data, status, headers, config);
                    }
                });
        }

        //function (url, reqData, callBack, failCallBack) {
        //  $http({
        //    method: 'POST',
        //    url: url,
        //    data: serializeData(reqData),
        //    headers: {
        //      'Content-Type': 'application/x-www-form-urlencoded'
        //    }
        //  }).success(function (data) {
        //    callBack(data)
        //  });
        //};
        function post(action, data, scallback, ecallback) {
            var url = ROOT_URL + action;
            $http.post(url, data)
                .success(function (data, status, headers, config) {
                    scallback(data, status, headers, config);
                })
                .error(function (data, status, headers, config) {
                    ecallback(data, status, headers, config);
                });
        }

        function jsonp(url, scallback, ecallback) {
            $http.jsonp(url)
                .success(function (data, status, headers, config) {
                    scallback(data, status, headers, config);
                })
                .error(function (data, status, headers, config) {
                    if (ecallback) {
                        ecallback(data, status, headers, config);
                    }
                });
        }

        function extend(reqData, option) {
            var keys = Object.keys(option);
            for (var i = 0; i < keys.length; i++) {
                if (option[keys[i]] || option[keys[i]] == 0) reqData[keys[i]] = option[keys[i]];
            }
        }

        // 上传图片
        function upLoadFileImg(actionurl, dataobj, scallback, ecallback) {
            var action = actionurl;
            var data = {
                action: dataobj.action
            };
            mmpadminAPI.get(mmpadminAPI.apiurl(action, data), scallback, ecallback);
        }

        // 登录
        function login(actionurl, dataobj, scallback, ecallback) {
            // mmpadminAPI.jsonp(mmpadminAPI.jsonpurl(action, data), scallback, ecallback);
            mmpadminAPI.post(actionurl, dataobj, scallback, ecallback);
        }

        // 退出登录
        function logout(scallback, ecallback) {
            $cookieStore.remove("access_token");
            scallback(true);
        }

        //检查是否登录
        function checkIsLogin(token, scallback, ecallback) {
            if (token) {
                userToken = token;
                $cookieStore.put("access_token", token);
                scallback();
            } else {
                var access_token = $cookieStore.get("access_token");
                console.log('access_token---' + access_token);
                if (access_token) {
                    scallback(true);
                } else {
                    if (userToken) {
                        scallback(true);
                    } else {
                        scallback(false);

                    }
                }
            }
            //            mmpadminAPI.get(mmpadminAPI.apiurl(action, data), scallback, ecallback);
        }

        //获取用户信息user_detail
        function getUserDetail(scallback) {
            scallback(userToken);
        }
    } //mmpadminAPI
})();
