(function () {
    'use strict';

    angular
        .module('ZAFW')
        .directive('zafwChoseImg', zafwChoseImg);

    /** @ngInject */
    function zafwChoseImg() {
        var directive = {
            restrict: 'E',
            templateUrl: 'app/ZAFW/uploadImg/choseImg.html',
            require: '?ngModel', // Array = multiple requires, ? = optional, ^ = check parent elementse.target.files[i]
            link: choseImglink
        };

        return directive;

        /** @ngInject */
        function choseImglink($scope, iElm, iAttrs, ngModel) {

            console.log(iElm.find(".zafwUploadImg"))

            $scope.filedata=[];
            //一个页面出现多个选图directive  要解决ID重名问题
            $scope.idName = "zafwUploadImg" + Math.random() * 10000;

            iElm.find(".zafwUploadImg")[0].addEventListener("change", function (e) {
                getfile(e);
            }, false);

            function getfile(e) {
                // $scope.imgdata=e.target.files;
                var setvaluenum = 0;
                var imgnum = e.target.files.length;


                for (var i = 0; i < imgnum; i++) {
                    getimgdata(e.target.files[i]);
                }

                function getimgdata(file) {
                    var reader = new FileReader();

                    reader.readAsDataURL(file);

                    reader.onload = function (e) {

                        var result = e.target.result;

                        if(/image\/\w+/.test(file.type)){
                            //添加图片数据
                            $scope.filedata.push({
                                name:file.name,
                                type:'image',
                                file: file,
                                url: e.target.result
                            });
                        }else{
                            var type=_getFileExtName(file.type);

                            if(/text\/\w+/.test(file.type)){
                                type='text';
                            }

                            $scope.filedata.push({
                                name:file.name,
                                type:type,
                                file: '',
                                url: ''
                            });
                        }
                        //显示页面
                        updateValue();
                    };

                }

                // console.log(e)
                // imagefile=e.target.files
                // console.log(iElm.find("input"))
                function updateValue() {
                    //最一张图片数据加载完后
                    setvaluenum++
                    if (setvaluenum >= imgnum) {
                        console.log("设置")
                        ngModel.$setViewValue($scope.filedata);
                        $scope.$apply();
                    }
                }

                var _getFileExtName = function (path) {
                    return /\w+?$/.exec(path.toLowerCase());
                }

            }
        }
    }

})();



















