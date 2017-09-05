var user = angular.module('userCtrl', []);
user.controller('user', function ($scope, $state, $http,$stateParams) {
    //判断用户权限
    //$scope.authority = $stateParams.author;
    // if($scope.authority==0){
    //     $(".admin-author").show();//管理员
    //     $(".admin-person").show();
    //     $(".visitor-author").hide();//普通用户
    //     $(".person").hide();
    // }
    // else{
    //     $(".admin-author").hide();//管理员
    //     $(".admin-person").hide();
    //     $(".visitor-author").show();//普通用户
    //     $(".person").show();
    // }

    $scope.userData = "";
    //用户信息初始化
    $.ajax({
        url:"",
        aynsc:true,
        success:function(data){
           $scope.userData = data;//ng-model
        }
    })
    
//管理员用户信息修改
    $scope.confirmEditManager = function(){

    }
//普通用户信息修改
    $scope.confirmEditVisitor = function(){

    }

    //弹层tab切换
    $scope.vm = {};
    //假数据
    $scope.adminData = ""
    $.ajax({
        url:'../js/adminData.json',
        aynsc:true,
        success:function(data){
            $scope.adminData=data;
        }
    })



    $scope.checkAll = function () {
        if ($("#checkall").prop("checked")) {
            $("input[name='check-btn']").prop("checked", true);
        } else {
            $("input[name='check-btn']").attr("checked", false);
        }
    }
//添加新用户
    $scope.createPerson = function () {

        layer.open({
            type: 1,
            title: false,
            closeBtn: 0,
            offset: ["", "30%"],
            shadeClose: false,
            area: ['40%', ''],
            skin: 'yourclass',
            scrollbar: false,
            content: $('#personModal')
        });
    }
$scope.submitPerson = function(){
    var personName = $("#admin-name").val();
    var connentPhone = $("#connect-phone").val();
    var companyName = $("#company-name").val();
    var companyLocation = $("#company-location").val();
    $.post("",{}).success(function(){
       
    })
}

//删除多个用户
var idxGroup = [];
$scope.delPerson = function(){
    $('input:checkbox[name=check-btn]:checked').each(function(){
      idxGroup.push(this.id)
      console.log(idxGroup)
    })
}
//删除单个用户
$scope.delSingle = function($index){
    $.get("../js/adminData.json",{}).success(function(res){
         $scope.adminData = res.splice($index,1)
    })
}
//编辑单个用户
$scope.singleData = ""
$scope.editSingle = function($index){
    layer.open({
            type: 1,
            title: false,
            closeBtn: 0,
            offset: ["", "30%"],
            shadeClose: false,
            area: ['40%', ''],
            skin: 'yourclass',
            scrollbar: false,
            content: $('#singlepersonModal')
        });
    
    $.get("../js/adminData.json",{}).success(function(resp){
         $scope.singleData = resp[$index]
    })
}
//单个编辑提交
$scope.submitEdit = function(){
    $.post("",{}).success(function(result){
       $scope.adminData = result;
    })
}


    //分页
    $http.get("Service.js").then(function (response) {
        //数据源
        $scope.data = response.data.records;
        //分页总数
        $scope.pageSize = 10;
        $scope.pages = Math.ceil($scope.data.length / $scope.pageSize); //分页数
        $scope.newPages = $scope.pages > 10 ? 10 : $scope.pages;
        $scope.pageList = [];
        $scope.selPage = 1;
        //设置表格数据源(分页)
        $scope.setData = function () {
            $scope.items = $scope.data.slice(($scope.pageSize * ($scope.selPage - 1)), ($scope.selPage * $scope.pageSize));//通过当前页数筛选出表格当前显示数据
        }
        $scope.items = $scope.data.slice(0, $scope.pageSize);
        //分页要repeat的数组
        for (var i = 0; i < $scope.newPages; i++) {
            $scope.pageList.push(i + 1);
        }
        //打印当前选中页索引
        $scope.selectPage = function (page) {
            //不能小于1大于最大
            if (page < 1 || page > $scope.pages) return;
            //最多显示分页数5
            if (page > 2) {
                //因为只显示5个页数，大于2页开始分页转换
                var newpageList = [];
                for (var i = (page - 3); i < ((page + 2) > $scope.pages ? $scope.pages : (page + 2)); i++) {
                    newpageList.push(i + 1);
                }
                $scope.pageList = newpageList;
            }
            $scope.selPage = page;
            $scope.setData();
            $scope.isActivePage(page);
            console.log("选择的页：" + page);
        };
        //设置当前选中页样式
        $scope.isActivePage = function (page) {
            return $scope.selPage == page;
        };

    });
})