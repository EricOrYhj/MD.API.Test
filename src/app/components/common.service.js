(function() {
  'use strict';

  angular
    .module('mmpadmin')
    .factory('checklocalimg',checklocalimg);

    function checklocalimg(){
        return function(callback){
            //选择本地图片
            var fileinput;
            //没有fileinput 创建fileinput
            if(!document.getElementById('fileImg')){
              fileinput=document.createElement("input");
              fileinput.id='fileImg';
              fileinput.type='file';
              fileinput.multiple="multiple";
              fileinput.accept="image/*";
              document.body.appendChild(fileinput);
            }else{
              fileinput=document.getElementById('fileImg');
            }
            fileinput.addEventListener('change', handleFileSelect, false);
            fileinput.click();
            function handleFileSelect (evt) {
                fileinput.removeEventListener('change', handleFileSelect, false);
                console.log(evt.target.files.length)
                console.log(["evt.target.files",evt.target.files]);
                var files = [];
                for(var i = 0;i<evt.target.files.length; i++){
                    if(evt.target.files[i].type.match('image.*')){
                       files.push(evt.target.files[i]);
                    }
                }
                var imgNum = files.length; 
                var imgSrcs = [];
                for(var i=0;i<files.length;i++){
                    var reader = new FileReader();
                    reader.readAsDataURL(files[i]);
                    reader.onload=function(e){
                        console.log(["reader 选择的图片加载完成"]);
                        console.log(e.target.result);
                        imgSrcs.push(e.target.result);
                        if(imgSrcs.length == imgNum){
                           callback(imgSrcs);
                        }
                    };

                }
                
            }

           
        }

    };

})();