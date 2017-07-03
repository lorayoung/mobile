var thirdScan = angular.module('thirdScanCtrl', []);
thirdScan.controller('thirdScan', function thirdScan($scope, $http) {
    //假数据

    $scope.bgc = "";
    $scope.bgcArr = [];
    //分页
    //配置  
    $scope.count = 0;
    $scope.p_pernum = 4;
    //变量  
    $scope.p_current = 1;
    $scope.p_all_page = 0;
    $scope.pages = [];

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

        $http.get("../js/bugData.json", { params: { page: page, size: size } }).success(function (res) {
            //if (res && res.status == 1) {
            $scope.count = res.length;
            $scope.list = res;
            $scope.p_current = page;
            $scope.p_all_page = Math.ceil($scope.count / $scope.p_pernum);
            reloadPno();
            callback();
            $scope.choosedNum = '1 / ' + $scope.p_all_page;
            //  } else{
            //      alert("加载失败");
            //  }
            for (var i = 0; i < res.length; i++) {
                var level = res[i].bugLevel;
                (function () {


                    if (level == "严重") {
                        $scope.bgc = "red";
                        $scope.bgcArr.push($scope.bgc);

                    } else if (level == "高危") {
                        $scope.bgc = "orange";
                        $scope.bgcArr.push($scope.bgc);
                    }
                    else if (level == "中危") {
                        $scope.bgc = "purple";
                        $scope.bgcArr.push($scope.bgc);
                    }
                    else {
                        $scope.bgc = "blue";
                        $scope.bgcArr.push($scope.bgc);
                    }

                }(i))

            }
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





})
