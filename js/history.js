var historyrecord = angular.module('historyrecordCtrl', []);
historyrecord.controller('historyrecord', function ($scope, $state, $http, $compile) {
   
    
    $scope.historyData = "";
    $scope.operateArr = [];
    $http.get("../js/historyData.json").success(function (res) {
        $scope.historyData = res;
        $scope.init();
        
    })
    
    $scope.bgcArr = [];
    $scope.init = function () {
        for (var i = 0; i < $scope.historyData.length; i++) {
            var status = $scope.historyData[i].status;
            (function () {

                if (status == "running") {
                    $scope.bgc = "#087B1B";
                    $scope.bgcArr.push($scope.bgc);

                } else if (status == "waiting") {
                    $scope.bgc = "#D7910F";
                    $scope.bgcArr.push($scope.bgc);
                }
                else {
                    $scope.bgc = "#C10809";
                    $scope.bgcArr.push($scope.bgc);
                }

            }(i))
        }
    }
    $scope.init();
//搜索表格   
    $scope.searchTable = function(){
        $.get("",{}).success(function(){

        })
    }

//展开
    $scope.showOrHide = function ($index, $event) {
        var tool = $(".slide-btn").eq($index).hasClass("turndown")

        if (!tool) {
            $(".slide-btn").eq($index).toggleClass("turndown")
            $(".history-table").find(".outer-li").eq($index).find('.history-detail').slideDown('fast');
            $(".history-table").find(".outer-li").eq($index).siblings(".outer-li").find('.history-detail').slideUp("fast")
            $(".history-table").find(".outer-li").eq($index).siblings(".outer-li").find(".slide-btn").removeClass("turndown")
        }
        else {
            $(".slide-btn").eq($index).toggleClass("turndown")
            $(".history-table").find(".outer-li").eq($index).find('.history-detail').slideUp('fast');
        }

    }

    //var idx = ""
    //增加绑定回车
    $(".history-table").on('keydown', "#addPhone", function (e, idx) {
        var eCode = e.keyCode ? e.keyCode : e.which ? e.which : e.charCode;
        if (eCode == 13) {
            //var addVal = $("#addPhone").val();
            idx = $(this).parent().parent().parent().index() - 1;

            //$scope.historyData[idx].numbeGroup.push(addVal)
            $scope.addPhone(idx)

        }
    });
    //内层增加
    $scope.addPhone = function (idx) {
        $http.get("../js/historyData.json", {}).success(function (res) {
            var addVal = $("#addPhone").val();
            $scope.historyData[idx].numbeGroup.push(addVal)
        })
    }
//外层编辑增加下划线
    
    $scope.waitEdit = function($index, $event){
        
        $event.stopPropagation();
        $event.preventDefault();
        var outerli = $(".history-table").find(".outer-li").eq($index);
        var val1 = outerli.find("span").eq(1).html();
        var val2 = outerli.find("span").eq(2).html();
        var val3 = outerli.find("span").eq(3).html();
        var editInput1 = "<input type='text' class='edit-mission' autofocus value='"+val1+"'>";
        var editInput2 = "<input type='text' class='edit-mission' autofocus value='"+val2+"'>";
        var editInput3 = "<input type='text' class='edit-mission' autofocus value='"+val3+"'>";
        
       outerli.find("span").eq(1).html(editInput1);
       outerli.find("span").eq(2).html(editInput2);
       outerli.find("span").eq(3).html(editInput3);
       return false;
    }

//外部编辑
    $scope.editOuter = function(idx1){
        //debugger
        var outerspan = $(".history-table").find(".outer-li").eq(idx1).find(".outer-li-span");
        var inputVal1 = outerspan.eq(0).children(".edit-mission").val();
        var inputVal2 = outerspan.eq(1).children(".edit-mission").val();
        var inputVal3 = outerspan.eq(2).children(".edit-mission").val();
        console.log($scope.historyData[idx1])
        outerspan.eq(0).empty().html(inputVal1)
        outerspan.eq(1).empty().html(inputVal2)
        outerspan.eq(2).empty().html(inputVal3)
        // $http.get("../js/historyData.json", {}).success(function (res) {
        //     console.log(res)
        //     res[idx1].missionName=inputVal1;
        //     res[idx1].startTime=inputVal2;
        //     res[idx1].endTime=inputVal3;
        //     $scope.historyData = res;
        //此处调用数据加载
            
        // })
            
        
    }
 //修改绑定回车
    $(".history-table").on('keydown', ".outer-li-span", function (e, idx1) {
        var eCode = e.keyCode ? e.keyCode : e.which ? e.which : e.charCode;
        if (eCode == 13) {
            idx1 = $(this).parent().index()-1;
            console.log(idx1)
            $scope.editOuter(idx1)

        }
    });
    $(".history-table").on('keydown', ".edit-phone", function (e, idxInner,idxOuter) {
        var eCode = e.keyCode ? e.keyCode : e.which ? e.which : e.charCode;
        if (eCode == 13) {
            idxInner = $(this).parent().parent().index()
            idxOuter = $(this).parent().parent().parent().parent().index()-1
            console.log(idxOuter)
            $scope.editInner(idxInner,idxOuter)

        }
    });
    //内部编辑，增加下划线
    $scope.editInner = function(idxInner,idxOuter){
        var innerul = $(".history-table").find(".outer-li").eq(idxOuter).find(".history-detail").find(".inner-li").eq(idxInner);
        var innerulVal = innerul.find("i").eq("1").children(".edit-phone").val();
        
        innerul.find("i").eq("1").empty().html(innerulVal)
    }
    
    //外层删除
    $scope.waitDel = function ($index, $event) {
        alert(1)
        $event.stopPropagation();
        $event.preventDefault();
        $http.get("../js/historyData.json", {}).success(function (resp) {
            $scope.historyData = resp.splice($index, 1);
        });
        return false;
    }
    //内层删除
    $scope.innerDel = function ($index, $event, outerIndex) {
        $event.stopPropagation();
        $event.preventDefault();
        $http.get("../js/historyData.json", {}).success(function (result) {
            $scope.historyData = result[outerIndex].numbeGroup.splice($index, 1);
        });
        return false;
    }
    //内层修改
    $scope.innerEdit = function($index,$event,outerIndex){
        var innerUl = $(".history-table").find(".outer-li").eq(outerIndex).find(".history-detail").find(".inner-li").eq($index);
        var innerVal1 = innerUl.find("i").eq("1").html();
        var editInnerInput1 = "<input type='text' class='edit-phone' autofocus value='"+innerVal1+"'>";
        innerUl.find("i").eq("1").html(editInnerInput1)
        
       
    }

    //外部
    $scope.outOperate = function ($index, $event) {
         var x = $event.target.offsetTop;
        var y = $event.target.offsetLeft + 80;

        var bool1 = $(".operate-set").eq($index).hasClass("noShown");
        if (bool1) {
            $(".operate-set").eq($index).css({ "top": x, "left": y }).slideDown("fast").removeClass("noShown");

        }
        else {
            $(".operate-set").eq($index).css({ "top": x, "left": y }).slideUp("fast").addClass("noShown");

        }
        $event.stopPropagation()
    }

//内部
    $scope.innerOperate = function ($index, $event, outerIndex) {


        var x1 = $event.target.offsetTop;
        var y1 = $event.target.offsetLeft + 15;


        var bool = $(".outer-li").eq(outerIndex).find(".num-box").eq($index).hasClass("noShown");

        if (bool) {
            $(".outer-li").eq(outerIndex).find(".num-box").eq($index).css({ "top": x1, "left": y1 }).slideDown().removeClass("noShown");

        }
        else {
            $(".outer-li").eq(outerIndex).find(".num-box").eq($index).css({ "top": x1, "left": y1 }).slideUp().addClass("noShown");

        }


    }
    //外层导出
    $scope.outerPut=function(oId){
       var outputId = oId
    }
    //内层导出
    $scope.innerPut = function(iId){
       var innerOutPutId = iId
    }

    //外层email
    $scope.outerMail=function(outerId){
        var taskId = outerId;
       layer.open({
            type: 1,
            title: false,
            closeBtn: 0,
            offset: ["", "30%"],
            shadeClose: false,
            area: ['40%', ''],
            skin: 'yourclass',
            scrollbar: false,
            content: $('#mailbox')
        });

        $scope.sendEmail(outerId)
    }
    
    //内层email
   $scope.innerEmail=function(innerId){
      var innerTaskId = outerId;
       layer.open({
            type: 1,
            title: false,
            closeBtn: 0,
            offset: ["", "30%"],
            shadeClose: false,
            area: ['40%', ''],
            skin: 'yourclass',
            scrollbar: false,
            content: $('#mailbox')
        });
        $scope.sendEmail(innerTaskId)
   }
   $scope.sendEmail = function(itemId){
       
    }
})