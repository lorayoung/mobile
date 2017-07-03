var tradition = angular.module('traditionCtrl', []);
tradition.controller('tradition', function tradition($scope, $http, $filter) {
    //点击页码按钮
    $scope.pageshow = true;
    $scope.showPage = function () {
        if ($scope.pageshow) {
            $('.page-index').show();
            $scope.pageshow = false;
        } else {
            $('.page-index').hide();
            $scope.pageshow = true;
        }
    }
    //悬浮
    $(".table-mission").on('mouseover', '.task-name', function () {
        var x = this.offsetLeft + 200;
        var y = this.offsetTop + 180;
        $(".flow-modal").css({ 'display': 'block', 'left': x, 'top': y });

    })
    $(".table-mission").on('mouseout', '.task-name', function () {
        $(".flow-modal").css('display', 'none');
    })


    //全选
    $scope.numList = [];
    $scope.checkAll = function(){
       if($("#checkall").prop("checked")){
           $("input[name='checksingle']").prop("checked",true); 
           $scope.numList = ['0','1','2','3','4','5','6','7','8','9'];//一页展示10条
       }else{
           $("input[name='checksingle']").attr("checked",false); 
       }
    }

    
    

    //分页
    //配置  
    $scope.count = 0;
    $scope.p_pernum = 4;
    //变量  
    $scope.p_current = 1;
    $scope.p_all_page = 0;
    $scope.pages = [];
    $scope.list=[];
    //初始化页码  
    var reloadPno = function () {
        $scope.pages = calculateIndexes($scope.p_current, $scope.p_all_page, 4);
    };
    //fu选按钮选中  
    // $scope.select= function(id){  
    //     alert(id);  
    // }  
    //分页算法  
    var calculateIndexes = function (current, length, displayLength) {
        var indexes = [];
        var start = Math.round(current - displayLength / 2);
        var end = Math.round(current + displayLength / 2);
        if (start <= 1) {
            start = 1;
            end = start + displayLength - 1;
            if (end >= length - 1) {
                end = length - 1;
            }
        }
        if (end >= length - 1) {
            end = length;
            start = end - displayLength + 1;
            if (start <= 1) {
                start = 1;
            }
        }
        for (var i = start; i <= end; i++) {
            indexes.push(i);
        }
        return indexes;
    };

    //获取数据  
    var _get = function (page, size, callback) {//"2.json",{page:10,pageNo:++index}

        $http.get("../js/tableData.json", { params: { page: page, size: size } }).success(function (res) {
            //if (res && res.status == 1) {
            $scope.count = res.length;
            $scope.list = res;
            console.log($scope.list)
            $scope.p_current = page;
            $scope.p_all_page = Math.ceil($scope.count / $scope.p_pernum);
            reloadPno();
            callback();
            $scope.choosedNum = '1 / ' + $scope.p_all_page
            //  } else{
            //      alert("加载失败");
            //  }
        });
    }
    //选择页码

    $scope.choosedPage = function ($index) {
        var choosedLi = $('.page-index').find('li').eq($index);
        choosedLi.find('span').addClass('choosed');
        choosedLi.siblings('li').find('span').removeClass('choosed');
        $scope.choosedNum = choosedLi.text();
        $scope.load_page($index)
    }

    //加载某一页  
    $scope.load_page = function (page) {
        _get(page, $scope.p_pernum, function () {

        });
    };

    //初始化第一页  
    _get($scope.p_current, $scope.p_pernum, function () {
        //alert($scope.p_pernum);
    });

    // //搜索
    // $scope.lists = $scope.tableData;
    // $scope.$watch('search', function (n, o) {
    //     $scope.lists = $filter('filter')($scope.data, n);
    // })

    //
    $scope.chooseCheck = function($index){
        var chooseitem = $("input[name='checksingle']").eq($index)
        if(chooseitem.prop("checked")){
            $scope.numList.push($index)
        }
    }

    //多选删除
    $scope.delMission = function(){
        for(var i=0;i<$scope.list.length;i++){
            for(j=0;j<$scope.numList.length;j++){
              if(i==j){
                  $scope.list.splice($scope.list.indexOf($scope.list[i]), 1);
              }
            }
            
           }
           $("input[name='checksingle']").attr("checked",false); 
        }

    
});