(function() {

  /*
   示例代码: zafmview
   */

  'use strict';
  var cn={
    days: ["星期日", "星期一", "星期二", "星期三", "星期四", "星期五", "星期六", "星期日"],
    daysShort: ["日", "一", "二", "三", "四", "五", "六", "日"],
    daysMin: ["日", "一", "二", "三", "四", "五", "六", "七"],
    months: ["一月", "二月", "三月", "四月", "五月", "六月", "七月", "八月", "九月", "十月", "十一月", "十二月"],
    monthsShort: ["一月", "二月", "三月", "四月", "五月", "六月", "七月", "八月", "九月", "十月", "十一月", "十二月"],
    meridiem:["上午", "下午"],
    suffix:["", "", "", ""],
    today: "今天",
  };

  $.fn.datetimepicker.dates.cn = cn;
  $.fn.datepicker.dates.cn= cn;

  angular
    .module('ZAFW')
    .directive('zafwDatepacker', zafwDatepacker)
    .directive('zafwDatepackerRange', zafwDatepackerRange)
    .directive('zafwDatepackerTime', zafwDatepackerTime);



  function zafwDatepackerTime() {
    var directive = {
      restrict: 'A',
      link:function(scope,elem,attr,cfun){

        var options={
          autoclose: true,
          todayBtn: true,
          language:'cn',
          todayHighlight:true,
          // showMeridian:true //上下午
          // initialDate:new Date() //初始化时间
        };

        $(elem).datetimepicker(options);

      }
    };
    return directive;
  }



  function zafwDatepacker() {
    var directive = {
      restrict: 'A',
      link:function(scope,elem,attr,cfun){

        var options={
          autoclose: true,
          todayBtn: true,
          language:'cn',
          todayHighlight:true,
          format:'yyyy-mm-dd',
          // minViewMode: 3,//当前显示   1月份  2年份  3日期
        };

        $(elem).datepicker(options);

      }
    };
    return directive;
  }


  function zafwDatepackerRange() {
    var directive = {
      restrict: 'A',
      link:function(scope,elem,attr,cfun){

        var options={
          autoclose: true,
          todayBtn: true,
          language:'cn',
          todayHighlight:true,
          inputs: elem.children('input').toArray(),
          format:'yyyy-mm-dd',
        };

        $(elem).datepicker(options);

      }
    };
    return directive;
  }
  // function zafwDatepacker() {
  //   var directive = {
  //     restrict: 'A',
  //     link:function(scope,elem,attr,cfun){
  //       console.log(attr);

  //       var options={
  //             autoclose: true,
  //             todayBtn: true,
  //             language:'cn',
  //             todayHighlight:true,
  //             // showMeridian:true //上下午
  //             // initialDate:new Date() //初始化时间
  //       };

  //       switch(attr.datepacker){
  //         case 'time':
  //           $(elem).datetimepicker(options)
  //         break;
  //         default:
  //         break;
  //       }

  //       if(attr.datepacker!=='time'){
  //         options.format='yyyy-mm-dd';
  //         $(elem).datepicker(options)
  //       }

  //     }
  //   };
  //   return directive;
  // }


})();
