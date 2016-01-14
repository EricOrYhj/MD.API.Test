(function () {
    'use strict';

    angular
        .module('ZAFW')
        .directive('zafwUploadImg', zafwUploadImg)
        .directive('zafwImgBox', zafwImgBox);


    function zafwImgBox($parse) {
        return {
            // name: '',
            // priority: 1,
            // terminal: true,
            // scope: {}, // {} = isolate, true = child, false/undefined = no change
            // controller: function($scope, $element, $attrs, $transclude) {},
            // require: '?ngModel', // Array = multiple requires, ? = optional, ^ = check parent elements
            restrict: 'E', // E = Element, A = Attribute, C = Class, M = Comment
            // template: '',
            templateUrl: 'app/ZAFW/uploadImg/imgBox.html',
            // replace: true,
            // transclude: true,
            // compile: function(tElement, tAttrs, function transclude(function(scope, cloneLinkingFn){ return function linking(scope, elm, attrs){}})),
            link: imgBoxLinkfun

        }

        function imgBoxLinkfun(scope, iElm, iAttrs) {


            //删除图片
            scope.deletefun = function () {
                var deletefun = $parse(iAttrs['dletefun'])
                deletefun(scope);
            }

            scope.boxPosition = {
                start: [null, null],
                current: [0, 0],
                end: [0, 0]//记录的不是最终停留点，而是最终移动的距离
            }

            //开始移动
            scope.boxStartMove = function (e) {
                // console.log(e.clientX,e.clientY);
                scope.boxPosition.start[0] = e.clientX
                scope.boxPosition.start[1] = e.clientY
            }

            // 拖动中
            scope.boxMoving = function (e) {
                // console.log(e);
                if (!scope.boxPosition.start[0] && !scope.boxPosition.start[1]) {
                    return;
                }
                var dx = e.clientX - scope.boxPosition.start[0];
                var dy = e.clientY - scope.boxPosition.start[1];
                //只能在父级的范围中移动
                if ((e.currentTarget.offsetLeft + dx) >= 0 && (e.currentTarget.offsetLeft + dx) <= (e.currentTarget.offsetParent.offsetWidth - e.currentTarget.offsetWidth)) {
                    scope.boxPosition.current[0] = e.clientX;
                }
                if ((e.currentTarget.offsetTop + dy) >= 0 && (e.currentTarget.offsetTop + dy) <= (e.currentTarget.offsetParent.offsetHeight - e.currentTarget.offsetHeight)) {
                    scope.boxPosition.current[1] = e.clientY;
                }
                //计算imgbox需要移动的位置
                dx = scope.boxPosition.current[0] - scope.boxPosition.start[0];
                dy = scope.boxPosition.current[1] - scope.boxPosition.start[1];
                //更新imgbox的位置
                $(e.currentTarget.offsetParent).css({"border": "1px dashed rgba(255, 107, 0, 0.83)"});
                iElm.find('.imgbox').css({'transform': 'translate(' + dx + 'px,' + dy + 'px)', 'transition': '0s', 'z-index': '99'});
                //记录最终移动的距离
                scope.boxPosition.end[0] = dx;
                scope.boxPosition.end[1] = dy;
            }
            //结束拖动
            scope.boxEndMove = function (e) {
                // console.log(e);
                //因为mouseleave会触发此方法  此处做判断没有做拖动动作 直接return
                if (!scope.boxPosition.start[0] && !scope.boxPosition.start[1]) {
                    return;
                }
                //结束后初始化初始值
                scope.boxPosition.start[0] = null;
                scope.boxPosition.start[1] = null;
                $(e.currentTarget.offsetParent).css({"border": "none"})


                //移动判断
                if (e.type === 'mouseleave' || (Math.abs(scope.boxPosition.end[0]) < (e.currentTarget.offsetWidth / 2) && Math.abs(scope.boxPosition.end[1]) < (e.currentTarget.offsetHeight / 2))) {
                    console.log("归回原位")
                    // 归回原位
                    iElm.find('.imgbox').css({'transform': 'translate(' + 0 + 'px,' + 0 + 'px)', 'transition': '0.5s', 'z-index': '0'});
                } else if (e.type === 'mouseup') {
                    console.log("img换位")
                    //img换位
                    var deletefun = $parse(iAttrs['changefun']);
                    //横向个数
                    var xmaxnum = parseInt((e.currentTarget.offsetParent.offsetWidth - 30) / (e.currentTarget.offsetWidth + 6));
                    var xnum = Math.round(scope.boxPosition.end[0] / (e.currentTarget.offsetWidth))
                    var ynum = Math.round(scope.boxPosition.end[1] / (e.currentTarget.offsetHeight));
                    if (xnum >= xmaxnum) {
                        xnum = xmaxnum - 1;
                    }
                    var moveNum = xnum + ynum * xmaxnum;
                    // console.log(xnum,ynum,xmaxnum,moveNum)
                    // var moveToIndex=0;
                    deletefun(scope, {moveNum: moveNum});
                    iElm.find('.imgbox').css({'transform': 'translate(' + 0 + 'px,' + 0 + 'px)', 'transition': '0s', 'z-index': '0'});
                }


            }


        }
    }


    /** @ngInject */
    function zafwUploadImg($timeout, $modal) {
        return {
            // name: '',
            // priority: 1,
            // terminal: true,
            // scope: {}, // {} = isolate, true = child, false/undefined = no change
            //scope:{
            //  issingle:'@'  //是否只能传一张图片 0表示可以传多张，1表示只能传一张
            //},
            // controller: function($scope, $element, $attrs, $transclude) {},
            require: '?ngModel', // Array = multiple requires, ? = optional, ^ = check parent elements
            restrict: 'E', // E = Element, A = Attribute, C = Class, M = Comment
            // template: '',
            templateUrl: 'app/ZAFW/uploadImg/uploadImg.html',
            // replace: true,
            // transclude: true,
            // compile: function(tElement, tAttrs, function transclude(function(scope, cloneLinkingFn){ return function linking(scope, elm, attrs){}})),
            link: linkfun

        }


        function linkfun(link_scope, iElm, iAttrs, ngModel) {
            // $scope.single=$scope.isSingle;
            $timeout(function () {

                link_scope.imgurls = (typeof ngModel.$modelValue === 'object') ? ngModel.$modelValue : [];

            }, 500)


            link_scope.deleteimg = function (index) {
                link_scope.imgurls.splice(index, 1);
            }


            link_scope.changeimg = function (index, moveNum) {
                var mindex = index + moveNum;
                if (mindex < 0) {
                    mindex = 0
                }
                if (mindex >= link_scope.imgurls.length) {
                    mindex = link_scope.imgurls.length - 1;
                }
                // console.log(index,moveNum,mindex)
                var cc = link_scope.imgurls.splice(index, 1);
                // console.log(index,mindex)
                link_scope.imgurls.splice(mindex, 0, cc[0])
            }


            //选择图片
            link_scope.choseimg = function () {
                //打开弹框 开始选择图片
                $modal.open({
                    animation: true,
                    templateUrl: 'app/ZAFW/uploadImg/choseImg.modal.html',
                    controller: choseimgCtrl,
                    size: 'lg',
                    resolve: {}
                });
            }

            function choseimgCtrl($scope, $modalInstance) {
                console.log("choseimgcontroller")
                $scope.imgfiledata = [];

                $scope.uploadimg = function () {

                    // console.log($scope.imgfiledata)
                    var xhr = new XMLHttpRequest();
                    //这里改接口地址
                    xhr.open("POST", 'http://localhost:6241/v1/post/addfiles', true);

                    var data = new FormData();
                    for (var i = 0; i < $scope.imgfiledata.length; i++) {
                        console.log("$scope.imgfiledata", $scope.imgfiledata[i].file);
                        //这里改后台设定的name名称
                        var name = 'p_img';
                        if (i > 0) {
                            name += i;
                        }
                        data.append(name, $scope.imgfiledata[i].file);
                    }
                    ;

                    xhr.send(data);
                    // 文件上传成功或是失败
                    xhr.onreadystatechange = function (e) {
                        console.log(["xhr.responseText", xhr.responseText]);
                        if (xhr.readyState == 4) {
                            if (xhr.status == 200) {
                                sendsuccess(JSON.parse(xhr.responseText))
                            } else {
                                senderror(JSON.parse(xhr.responseText))
                            }
                        }
                    };

                    $modalInstance.close();


                    function sendsuccess(data) {
                        //设置value
                        // console.log(['!!!',data.file_url_list])  filePath
                        //link_scope.imgurls=link_scope.imgurls.concat(data.file_url_list);
                        //改返回来的字段名
                        link_scope.imgurls = link_scope.imgurls.concat(data.filePath);
                        ngModel.$setViewValue(link_scope.imgurls);
                        link_scope.$apply()

                    }

                    function senderror(data) {

                    }
                }

                $scope.cancel = function () {
                    $modalInstance.close();

                }


            }


            // function getimg (e) {
            //   console.log(e)
            // }


            // if (!ngModel) return; // do nothing if no ng-model

            // // Specify how UI should be updated
            // ngModel.$render = function() {
            //   // element.html($sce.getTrustedHtml(ngModel.$viewValue || ''));
            //   console.log('ngModel.$render ')
            // };

            // // Listen for change events to enable binding
            // $scope.datechange = function() {
            //   console.log("变变变")
            //   read("点按钮");

            // }
            // iElm.find("input").on('change', function() {
            //   // $scope.$apply(read);
            //   // console.log("变变变")
            //   read("选图片");

            // });
            // read("默认初始化"); // initialize

            // // Write data to the model
            // function read(cc) {

            //   ngModel.$setViewValue(cc);
            // }

        }

    };


})();

















