var missionCreate = angular.module('missionCreateCtrl', []);
missionCreate.controller('missionCreate', function missionCreate($scope,$state) {
    //定时

    $scope.radioChoose = function () {
        $('.date').show();
        $('.datepick').datepicker();
    }
    $scope.radioChoose1 = function () {
        $('.date').hide();
    }

    //周期任务与否
    $scope.openOrClose = true;
    $scope.result = '否';
    $scope.cirleTime = function () {
        if ($scope.openOrClose) {
            $('.circle-mission').css('background', 'url(../images/scan-button-open.png) no-repeat');
            $scope.openOrClose = false;
            $scope.result = '是'
        }
        else {
            $('.circle-mission').css('background', 'url(../images/scan-button-close.png) no-repeat');
            $scope.openOrClose = true;
            $scope.result = '否'
        }
    }
    //是否在扫描结束后发送报告
    $scope.sendReport = function(){
        if($("#sendcheck").prop("checked")){
            $("#emailinput").show();
        }else{
            $("#emailinput").hide();
        }
    }

    //重置  
    $scope.reset = function () {
        $(':input', '.create-content')
            .not(':button, :submit, :reset, :hidden')
            .val('')
            .removeAttr('checked')
            .removeAttr('selected');

    }

    //下一步之前的判断
    $scope.nextStep = function(){
        var content =$("input[name='missonname']").val()
       if( content==""){
           alert("不能")
       }
       else{
            $state.go("addTarget")
       }
    }



});