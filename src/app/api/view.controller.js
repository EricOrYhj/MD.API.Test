(function () {
    'use strict';

    angular
        .module('mmpadmin')
        .controller('viewCtrl', viewCtrl);


    /** @ngInject */
    function viewCtrl($scope, $modal, $http, checklocalimg, mmpadminAPI, $stateParams, alertbox, $state, alertconformbox, apiSetting, $cookieStore, apiSetting2, $rootScope, $location) {

        var port = '';
        if ($location.port() == '80') {
            port = '/MD.API'
        } else {
            port = $location.port();
        }

        $scope.localUrl = $location.protocol() + '://' + $location.host() + port;

        var access_token = $cookieStore.get("access_token");
        if (!access_token) {
            mmpadminAPI.getUserDetail(function (data) {
                access_token = data;
            });
        }
        console.log('access_token---' + access_token);
        var scroll_top = $(document).scrollTop();
        if (scroll_top > 0) {
            $('html, body').animate({ scrollTop: 0 }, 'slow');
        }

        var module = $scope.module = $stateParams.module;
        var version = $scope.version = $stateParams.version;
        var port = $scope.port = $stateParams.port;
        var item = $scope.item = $stateParams.item;

        $scope.apiName = '';
        $scope.modelList = [];
        $scope.isResult = false;
        $scope.jsonResult = '';

        var requestMode = '';
        var requestUrl = '';
        var docUrl =$scope.docUrl ='';

        //现在的地址
        var urlParams = {
            port: port,
            module: module,
            version: version,
            item: item
        };

        var viewList = [];
        if ($rootScope['oldView']) {
            if ($rootScope['viewList']) {
                viewList = $rootScope['viewList'];
            }
            var isPush = true;
            angular.forEach(viewList, function (model) {
                if (model.port == $rootScope['oldView'].port && model.module == $rootScope['oldView'].module
                    && model.version == $rootScope['oldView'].version) {
                    isPush = false;
                }
            });
            if (isPush) {
                viewList.push($rootScope['oldView']);
            }

            $rootScope['viewList'] = viewList;
        }
        $rootScope['oldView'] = urlParams;

        //移除已打开过的页面
        $scope.deleteTab = function (viewData) {
            var newViews = [];
            angular.forEach($rootScope['viewList'], function (model) {
                if (model.port == viewData.port && model.module == viewData.module
                    && model.version == viewData.version) {
                } else {
                    newViews.push(model);
                }
            });
            $rootScope['viewList'] = newViews;
        }

        $scope.view = 'view1';
        if ($location.path().indexOf('view2') > 0) {
            $scope.view = 'view2';
        }

        if ($rootScope[port]) {
            $scope.modelList = $rootScope[port].modelList;
            requestMode = $rootScope[port].requestMode;
            requestUrl = $rootScope[port].requestUrl;
            docUrl =$scope.docUrl = $rootScope[port].docUrl;
        } else {
            if ($scope.view == 'view2') {
                apiSetting2.getApiSetting(module, version, port, item, function (data) {
                    requestUrl = '/' + version + data.url;
                    requestMode = data.requestMode;
                    docUrl =$scope.docUrl = data.docUrl;
                    $scope.apiName = data.name;
                    angular.forEach(data.params, function (model) {
                        var value = '';
                        if (model.key == 'access_token') {
                            if (access_token) {
                                value = access_token;
                            }
                        }
                        var inputType = 1;//必须
                        if (model.isMust) {
                            if (model.isDate) {
                                inputType = 3;//必须是时间
                            }
                        } else {
                            if (model.isDate) {
                                inputType = 4;//非必须是时间
                            } else {
                                inputType = 2;//非必须不是时间
                            }
                        }
                        $scope.modelList.push({ 'key': model.key, 'value': value, 'type': '(' + model.type + ')',
                            'des': model.des, 'isMust': model.isMust, 'isDate': model.isDate, 'inputType': inputType });
                    });
                })
            } else {
                apiSetting.getApiSetting(module, version, port, function (data) {
                    requestUrl = data.url + '.aspx';
                    requestMode = data.requestMode;
                    docUrl =$scope.docUrl = data.docUrl;
                    $scope.apiName = data.name;
                    angular.forEach(data.params, function (model) {
                        var value = '';
                        if (model.key == 'access_token') {
                            if (access_token) {
                                value = access_token;
                            }
                        }
                        var inputType = 1;//必须
                        if (model.isMust) {
                            if (model.isDate) {
                                inputType = 3;//必须是时间
                            }
                        } else {
                            if (model.isDate) {
                                inputType = 4;//非必须是时间
                            } else {
                                inputType = 2;//非必须不是时间
                            }
                        }
                        $scope.modelList.push({ 'key': model.key, 'value': value, 'type': '(' + model.type + ')',
                            'des': model.des, 'isMust': model.isMust, 'isDate': model.isDate, 'inputType': inputType });
                    });
                });
            }
        }

        $scope.keydown = function () {
            $rootScope[port] = {'modelList': $scope.modelList, 'requestUrl': requestUrl, 'requestMode': requestMode, 'docUrl': docUrl};
        }

        //提交请求
        $scope.CheckApiSuccess = function () {
            var pram = {};
            $scope.data = {};
            $scope.data.result = '';
            angular.forEach($scope.modelList, function (model) {
                if (model.key == 'format') {
                    model.value = 'json';
                }
                pram[model.key] = model.value;
            });
            if (requestMode.toLowerCase() == 'post') {
                mmpadminAPI.post(requestUrl, pram, function (data) {
                    $scope.data.result = data;
                    $scope.isResult = true;
                    $scope.jsonResult = JSON.stringify($scope.data.result);
                    $scope.Process();
                });
            } else if (requestMode.toLowerCase() == 'get') {
                mmpadminAPI.get(mmpadminAPI.apiurl(requestUrl, pram), function (data) {
                    $scope.data.result = data;
                    $scope.isResult = true;
                    $scope.jsonResult = JSON.stringify($scope.data.result);
                    $scope.Process();
                });
            }
//            mmpadminAPI.jsonp(mmpadminAPI.jsonpurl(requestUrl, pram), function (data) {
//                $scope.data.result = data;
//                $scope.isResult = true;
//                $scope.jsonResult = JSON.stringify($scope.data.result);
//                $scope.Process();
//            });
        }

        //Json序列化呈现
        $scope.TabSize = '2';
        window.SINGLE_TAB = "  ";
        window.ImgCollapsed = "assets/images/Collapsed.gif";
        window.ImgExpanded = "assets/images/Expanded.gif";
        window.QuoteKeys = true;
        function $id(id) {
            return document.getElementById(id);
        }

        function IsArray(obj) {
            return  obj &&
                typeof obj === 'object' &&
                typeof obj.length === 'number' && !(obj.propertyIsEnumerable('length'));
        }

        $scope.Process = function Process() {
            var json = $scope.jsonResult;
            SetTab();
//            window.IsCollapsible = $id("CollapsibleView").checked;
//            var json = $id("RawJson").value;
            window.IsCollapsible = true;
            var html = "";
            try {
                if (json == "") json = "\"\"";
                var obj = eval("[" + json + "]");
                html = ProcessObject(obj[0], 0, false, false, false);
                $id("Canvas").innerHTML = "<PRE class='CodeContainer'>" + html + "</PRE>";

                $('#Canvas').find('.ExpImgClicked').on('click', function () {
                    $scope.ExpImgClicked($(this));
                });
            } catch (e) {
                alert("JSON数据格式不正确:\n" + e.message);
                $id("Canvas").innerHTML = "";
            }
        }
        window._dateObj = new Date();
        window._regexpObj = new RegExp();
        function ProcessObject(obj, indent, addComma, isArray, isPropertyContent) {
            var html = "";
            var comma = (addComma) ? "<span class='Comma'>,</span> " : "";
            var type = typeof obj;
            var clpsHtml = "";
            if (IsArray(obj)) {
                if (obj.length == 0) {
                    html += GetRow(indent, "<span class='ArrayBrace'>[ ]</span>" + comma, isPropertyContent);
                } else {
                    clpsHtml = window.IsCollapsible ? "<span><img src=\"" + window.ImgExpanded + "\" ng-click=\"ExpImgClicked(this)\" class='ExpImgClicked' /></span><span class='collapsible'>" : "";
                    html += GetRow(indent, "<span class='ArrayBrace'>[</span>" + clpsHtml, isPropertyContent);
                    for (var i = 0; i < obj.length; i++) {
                        html += ProcessObject(obj[i], indent + 1, i < (obj.length - 1), true, false);
                    }
                    clpsHtml = window.IsCollapsible ? "</span>" : "";
                    html += GetRow(indent, clpsHtml + "<span class='ArrayBrace'>]</span>" + comma);
                }
            } else if (type == 'object') {
                if (obj == null) {
                    html += FormatLiteral("null", "", comma, indent, isArray, "Null");
                } else if (obj.constructor == window._dateObj.constructor) {
                    html += FormatLiteral("new Date(" + obj.getTime() + ") /*" + obj.toLocaleString() + "*/", "", comma, indent, isArray, "Date");
                } else if (obj.constructor == window._regexpObj.constructor) {
                    html += FormatLiteral("new RegExp(" + obj + ")", "", comma, indent, isArray, "RegExp");
                } else {
                    var numProps = 0;
                    for (var prop in obj) numProps++;
                    if (numProps == 0) {
                        html += GetRow(indent, "<span class='ObjectBrace'>{ }</span>" + comma, isPropertyContent);
                    } else {
                        clpsHtml = window.IsCollapsible ? "<span><img src=\"" + window.ImgExpanded + "\" ng-click=\"ExpImgClicked(this)\" class='ExpImgClicked' /></span><span class='collapsible'>" : "";
                        html += GetRow(indent, "<span class='ObjectBrace'>{</span>" + clpsHtml, isPropertyContent);

                        var j = 0;

                        for (var prop in obj) {

                            var quote = window.QuoteKeys ? "\"" : "";

                            html += GetRow(indent + 1, "<span class='PropertyName'>" + quote + prop + quote + "</span>: " + ProcessObject(obj[prop], indent + 1, ++j < numProps, false, true));

                        }

                        clpsHtml = window.IsCollapsible ? "</span>" : "";

                        html += GetRow(indent, clpsHtml + "<span class='ObjectBrace'>}</span>" + comma);

                    }

                }

            } else if (type == 'number') {

                html += FormatLiteral(obj, "", comma, indent, isArray, "Number");

            } else if (type == 'boolean') {

                html += FormatLiteral(obj, "", comma, indent, isArray, "Boolean");

            } else if (type == 'function') {

                if (obj.constructor == window._regexpObj.constructor) {

                    html += FormatLiteral("new RegExp(" + obj + ")", "", comma, indent, isArray, "RegExp");

                } else {

                    obj = FormatFunction(indent, obj);

                    html += FormatLiteral(obj, "", comma, indent, isArray, "Function");

                }

            } else if (type == 'undefined') {

                html += FormatLiteral("undefined", "", comma, indent, isArray, "Null");

            } else {

                html += FormatLiteral(obj.toString().split("\\").join("\\\\").split('"').join('\\"'), "\"", comma, indent, isArray, "String");

            }

            return html;

        }

        function FormatLiteral(literal, quote, comma, indent, isArray, style) {

            if (typeof literal == 'string')

                literal = literal.split("<").join("&lt;").split(">").join("&gt;");

            var str = "<span class='" + style + "'>" + quote + literal + quote + comma + "</span>";

            if (isArray) str = GetRow(indent, str);

            return str;

        }

        function FormatFunction(indent, obj) {

            var tabs = "";

            for (var i = 0; i < indent; i++) tabs += window.TAB;

            var funcStrArray = obj.toString().split("\n");

            var str = "";

            for (var i = 0; i < funcStrArray.length; i++) {

                str += ((i == 0) ? "" : tabs) + funcStrArray[i] + "\n";

            }

            return str;

        }

        function GetRow(indent, data, isPropertyContent) {

            var tabs = "";

            for (var i = 0; i < indent && !isPropertyContent; i++) tabs += window.TAB;

            if (data != null && data.length > 0 && data.charAt(data.length - 1) != "\n")

                data = data + "\n";

            return tabs + data;

        }

        $scope.CollapseAllClicked = function CollapseAllClicked() {

            EnsureIsPopulated();

            TraverseChildren($id("Canvas"), function (element) {

                if (element.className == 'collapsible') {

                    MakeContentVisible(element, false);

                }

            }, 0);

        }
        $scope.CollapsibleViewClicked = function CollapsibleViewClicked() {

            $id("CollapsibleViewDetail").style.visibility = $id("CollapsibleView").checked ? "visible" : "hidden";

            $scope.Process();

        }

        $scope.QuoteKeysClicked = function QuoteKeysClicked() {

            window.QuoteKeys = $id("QuoteKeys").checked;

            $scope.Process();

        }

        $scope.CollapseAllClicked = function CollapseAllClicked() {

            EnsureIsPopulated();

            TraverseChildren($id("Canvas"), function (element) {

                if (element.className == 'collapsible') {

                    MakeContentVisible(element, false);

                }

            }, 0);

        }

        $scope.ExpandAllClicked = function ExpandAllClicked() {

            EnsureIsPopulated();

            TraverseChildren($id("Canvas"), function (element) {

                if (element.className == 'collapsible') {

                    MakeContentVisible(element, true);

                }

            }, 0);

        }

        function MakeContentVisible(element, visible) {

            var img = element.previousSibling.firstChild;

            if (!!img.tagName && img.tagName.toLowerCase() == "img") {

                element.style.display = visible ? 'inline' : 'none';

                element.previousSibling.firstChild.src = visible ? window.ImgExpanded : window.ImgCollapsed;

            }

        }

        function TraverseChildren(element, func, depth) {

            for (var i = 0; i < element.childNodes.length; i++) {

                TraverseChildren(element.childNodes[i], func, depth + 1);

            }

            func(element, depth);

        }

        $scope.ExpImgClicked = function ExpImgClicked(img) {

//            var container = img.parentNode.nextSibling;
            var container = img.parent().next();

            if (!container) return;

            var disp = "none";

            var src = window.ImgCollapsed;

            if (container.css('display') == "none") {

                disp = "inline";

                src = window.ImgExpanded;

            }

            container.attr('style', 'display:' + disp + '');

            img.attr('src', src);
        }

        $scope.CollapseLevel = function CollapseLevel(level) {

            EnsureIsPopulated();

            TraverseChildren($id("Canvas"), function (element, depth) {

                if (element.className == 'collapsible') {

                    if (depth >= level) {

                        MakeContentVisible(element, false);

                    } else {

                        MakeContentVisible(element, true);

                    }

                }

            }, 0);

        }

        $scope.TabSizeChanged = function TabSizeChanged() {

            $scope.Process();

        }

        function SetTab() {
            window.TAB = MultiplyString($scope.TabSize, window.SINGLE_TAB);
        }

        function EnsureIsPopulated() {

            if (!$id("Canvas").innerHTML && !!$id("RawJson").value) Process();

        }

        function MultiplyString(num, str) {

            var sb = [];

            for (var i = 0; i < num; i++) {

                sb.push(str);

            }

            return sb.join("");

        }

        function SelectAllClicked() {


            if (!!document.selection && !!document.selection.empty) {

                document.selection.empty();

            } else if (window.getSelection) {

                var sel = window.getSelection();

                if (sel.removeAllRanges) {

                    window.getSelection().removeAllRanges();

                }

            }


            var range =

                (!!document.body && !!document.body.createTextRange)

                    ? document.body.createTextRange()

                    : document.createRange();


            if (!!range.selectNode)

                range.selectNode($id("Canvas"));

            else if (range.moveToElementText)

                range.moveToElementText($id("Canvas"));


            if (!!range.select)

                range.select($id("Canvas"));

            else

                window.getSelection().addRange(range);

        }

        function LinkToJson() {

            var val = $id("RawJson").value;

            val = escape(val.split('/n').join(' ').split('/r').join(' '));

            $id("InvisibleLinkUrl").value = val;

            $id("InvisibleLink").submit();

        }

        $scope.Automatch = function Automatch() {
            var url = $scope.requestUrl;
            var phone = $scope.modelList;
            var index = url.indexOf('?');
            if (index != -1) {
                url = url.substr(index + 1);
                var param = url.split('&');
                var array = [];

                angular.forEach(param, function (name) {
                    name = name.split('=');
                    var nameObj = {};
                    if (name.length > 1) {
                        nameObj['key'] = name[0];
                        nameObj['value'] = name[1];
                    }
                    array.push(nameObj);
                });

                angular.forEach(phone, function (info) {
                    angular.forEach(array, function (item) {
                        if (item.key == info.key) {
                            info.value = item.value;
                        }
                    });
                });
                $scope.modelList = phone;
            }
        };


    }
})();
