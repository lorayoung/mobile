var addTarget = angular.module('addTargetCtrl', []);
addTarget
    // .factory('locals', ['$window', function ($window) {
    //     return {        //存储单个属性
    //         set: function (key, value) {
    //             $window.localStorage[key] = value;
    //         },        //读取单个属性
    //         get: function (key, defaultValue) {
    //             return $window.localStorage[key] || defaultValue;
    //         },        //存储对象，以JSON格式存储
    //         setObject: function (key, value) {
    //             $window.localStorage[key] = JSON.stringify(value);
    //         },        //读取对象
    //         getObject: function (key) {
    //             return JSON.parse($window.localStorage[key] || '{}');
    //         }

    //     }
    // }])
    .controller('addTarget', function ($scope) {
        //假数据
        $scope.pluginData = [
            {
                "pluginName": "Spider1",
                "pluginChild": [
                    {
                        "pluginChildName":"XSS",
                        "pluginBugName":"远程溢出1",
                        "pluginBugState":"豆腐乳然后就开始东方会计师电话覅和精神病发生地方海事局返回返回s发货单手机话费聚划算放假回家返回节点环境恢复大家都会风机房环境恢复",
                        "affectVersion":"Apache Struts Version27",
                        "affectCom":"Apple Mac OS X",
                        "CVENum":"CVE 2017",
                        "boomDate":"2012年2月9日",
                        "updateDate":"2012年2月9日 14：32",
                        "riskLevel":"",
                        "repireWay":"电话撒极好的交换机和丰富的生产成本设计和霍建华附加费的划分空间开发合计合计合计收到货继父回家合肥京东方环境设计书法家和飞机设计师"
                    },
                   {
                       "pluginChildName":"2XSS",
                        "pluginBugName":"远程溢2出",
                        "pluginBugState":"豆腐乳然后就开始东方会计师电话覅和精神病发生地方海事局返回返回s发货单手机话费聚划算放假回家返回节点环境恢复大家都会风机房环境恢复",
                        "affectVersion":"Apache Struts Version27",
                        "affectCom":"Apple Mac OS X",
                        "CVENum":"CVE 2017",
                        "boomDate":"2012年2月9日",
                        "updateDate":"2012年2月9日 14：32",
                        "riskLevel":"",
                        "repireWay":"电话撒极好的交换机和丰富的生产成本设计和霍建华附加费的划分空间开发合计合计合计收到货继父回家合肥京东方环境设计书法家和飞机设计师"
                   }, 
                    {
                        "pluginChildName":"XSS4",
                        "pluginBugName":"远程溢3出",
                        "pluginBugState":"豆腐乳然后就开始东方会计师电话覅和精神病发生地方海事局返回返回s发货单手机话费聚划算放假回家返回节点环境恢复大家都会风机房环境恢复",
                        "affectVersion":"Apache Struts Version27",
                        "affectCom":"Apple Mac OS X",
                        "CVENum":"CVE 2017",
                        "boomDate":"2012年2月9日",
                        "updateDate":"2012年2月9日 14：32",
                        "riskLevel":"",
                        "repireWay":"电话撒极好的交换机和丰富的生产成本设计和霍建华附加费的划分空间开发合计合计合计收到货继父回家合肥京东方环境设计书法家和飞机设计师"
                    }, 
                    {
                        "pluginChildName":"XSS",
                        "pluginBugName":"远程溢出4",
                        "pluginBugState":"豆腐乳然后就开始东方会计师电话覅和精神病发生地方海事局返回返回s发货单手机话费聚划算放假回家返回节点环境恢复大家都会风机房环境恢复",
                        "affectVersion":"Apache Struts Version27",
                        "affectCom":"Apple Mac OS X",
                        "CVENum":"CVE 2017",
                        "boomDate":"2012年2月9日",
                        "updateDate":"2012年2月9日 14：32",
                        "riskLevel":"",
                        "repireWay":"电话撒极好的交换机和丰富的生产成本设计和霍建华附加费的划分空间开发合计合计合计收到货继父回家合肥京东方环境设计书法家和飞机设计师"
                    }]
            },
            {
                "pluginName": "Spider2",
                "pluginChild": [
                    {
                        "pluginChildName":"XSS",
                        "pluginBugName":"远5程溢出",
                        "pluginBugState":"豆腐乳然后就开始东方会计师电话覅和精神病发生地方海事局返回返回s发货单手机话费聚划算放假回家返回节点环境恢复大家都会风机房环境恢复",
                        "affectVersion":"Apache Struts Version27",
                        "affectCom":"Apple Mac OS X",
                        "CVENum":"CVE 2017",
                        "boomDate":"2012年2月9日",
                        "updateDate":"2012年2月9日 14：32",
                        "riskLevel":"",
                        "repireWay":"电话撒极好的交换机和丰富的生产成本设计和霍建华附加费的划分空间开发合计合计合计收到货继父回家合肥京东方环境设计书法家和飞机设计师"
                    },
                    {
                        "pluginChildName":"XSS",
                        "pluginBugName":"远6程溢出",
                        "pluginBugState":"豆腐乳然后就开始东方会计师电话覅和精神病发生地方海事局返回返回s发货单手机话费聚划算放假回家返回节点环境恢复大家都会风机房环境恢复",
                        "affectVersion":"Apache Struts Version27",
                        "affectCom":"Apple Mac OS X",
                        "CVENum":"CVE 2017",
                        "boomDate":"2012年2月9日",
                        "updateDate":"2012年2月9日 14：32",
                        "riskLevel":"",
                        "repireWay":"电话撒极好的交换机和丰富的生产成本设计和霍建华附加费的划分空间开发合计合计合计收到货继父回家合肥京东方环境设计书法家和飞机设计师"
                    },
                    {
                        "pluginChildName":"XSS",
                        "pluginBugName":"7远程溢出",
                        "pluginBugState":"豆腐乳然后就开始东方会计师电话覅和精神病发生地方海事局返回返回s发货单手机话费聚划算放假回家返回节点环境恢复大家都会风机房环境恢复",
                        "affectVersion":"Apache Struts Version27",
                        "affectCom":"Apple Mac OS X",
                        "CVENum":"CVE 2017",
                        "boomDate":"2012年2月9日",
                        "updateDate":"2012年2月9日 14：32",
                        "riskLevel":"",
                        "repireWay":"电话撒极好的交换机和丰富的生产成本设计和霍建华附加费的划分空间开发合计合计合计收到货继父回家合肥京东方环境设计书法家和飞机设计师"
                    },
                ]
            },
            {
                "pluginName": "Spider",
                "pluginChild": [
                    {
                        "pluginChildName":"XSS",
                        "pluginBugName":"8远程溢出",
                        "pluginBugState":"豆腐乳然后就开始东方会计师电话覅和精神病发生地方海事局返回返回s发货单手机话费聚划算放假回家返回节点环境恢复大家都会风机房环境恢复",
                        "affectVersion":"Apache Struts Version27",
                        "affectCom":"Apple Mac OS X",
                        "CVENum":"CVE 2017",
                        "boomDate":"2012年2月9日",
                        "updateDate":"2012年2月9日 14：32",
                        "riskLevel":"",
                        "repireWay":"电话撒极好的交换机和丰富的生产成本设计和霍建华附加费的划分空间开发合计合计合计收到货继父回家合肥京东方环境设计书法家和飞机设计师"
                    },
                    {
                        "pluginChildName":"XS1S",
                        "pluginBugName":"远a程溢出",
                        "pluginBugState":"豆腐乳然后就开始东方会计师电话覅和精神病发生地方海事局返回返回s发货单手机话费聚划算放假回家返回节点环境恢复大家都会风机房环境恢复",
                        "affectVersion":"Apache Struts Version27",
                        "affectCom":"Apple Mac OS X",
                        "CVENum":"CVE 2017",
                        "boomDate":"2012年2月9日",
                        "updateDate":"2012年2月9日 14：32",
                        "riskLevel":"",
                        "repireWay":"电话撒极好的交换机和丰富的生产成本设计和霍建华附加费的划分空间开发合计合计合计收到货继父回家合肥京东方环境设计书法家和飞机设计师"
                    },
                    {
                        "pluginChildName":"XSS",
                        "pluginBugName":"远程d溢出",
                        "pluginBugState":"豆腐乳然后就开始东方会计师电话覅和精神病发生地方海事局返回返回s发货单手机话费聚划算放假回家返回节点环境恢复大家都会风机房环境恢复",
                        "affectVersion":"Apache Struts Version27",
                        "affectCom":"Apple Mac OS X",
                        "CVENum":"CVE 2017",
                        "boomDate":"2012年2月9日",
                        "updateDate":"2012年2月9日 14：32",
                        "riskLevel":"",
                        "repireWay":"电话撒极好的交换机和丰富的生产成本设计和霍建华附加费的划分空间开发合计合计合计收到货继父回家合肥京东方环境设计书法家和飞机设计师"
                    },
                    {
                        "pluginChildName":"XSS",
                        "pluginBugName":"远程溢b出",
                        "pluginBugState":"豆腐乳然后就开始东方会计师电话覅和精神病发生地方海事局返回返回s发货单手机话费聚划算放假回家返回节点环境恢复大家都会风机房环境恢复",
                        "affectVersion":"Apache Struts Version27",
                        "affectCom":"Apple Mac OS X",
                        "CVENum":"CVE 2017",
                        "boomDate":"2012年2月9日",
                        "updateDate":"2012年2月9日 14：32",
                        "riskLevel":"",
                        "repireWay":"电话撒极好的交换机和丰富的生产成本设计和霍建华附加费的划分空间开发合计合计合计收到货继父回家合肥京东方环境设计书法家和飞机设计师"
                    },
                ]
            }

        ];
      
       $scope.childBug="";
       $scope.bugDetail="";
      
       $scope.show = function(outerIndex,$index){
           console.log(outerIndex)
           $scope.childBug = $scope.pluginData[outerIndex].pluginChild;
           $scope.bugDetail = $scope.childBug[$index];
       }

        $scope.checkAddress = function () {
            var address = $("#addressInput").val();
            var res = /^(\d{1,2}|1\d\d|2[0-4]\d|25[0-5])\.(\d{1,2}|1\d\d|2[0-4]\d|25[0-5])\.(\d{1,2}|1\d\d|2[0-4]\d|25[0-5])\.(\d{1,2}|1\d\d|2[0-4]\d|25[0-5])$/;
            var reg = /(http|ftp|https):\/\/[\w\-_]+(\.[\w\-_]+)+([\w\-\.,@?^=%&:/~\+#]*[\w\-\@?^=%&/~\+#])?/;
            var tool = res.test(address);
            var tool2 = reg.test(address)
            if (!tool && !tool2) {
                alert(1)
            }
        }

        $scope.targetList = [];
        $scope.targetData = {};
        $scope.saveAdd = function () {
            var upAddress = $("#addressInput").val();

            if (upAddress == "") {
                alert("不能提交")
            } else {
                var res = /^(\d{1,2}|1\d\d|2[0-4]\d|25[0-5])\.(\d{1,2}|1\d\d|2[0-4]\d|25[0-5])\.(\d{1,2}|1\d\d|2[0-4]\d|25[0-5])\.(\d{1,2}|1\d\d|2[0-4]\d|25[0-5])$/;
                var reg = /(http|ftp|https):\/\/[\w\-_]+(\.[\w\-_]+)+([\w\-\.,@?^=%&:/~\+#]*[\w\-\@?^=%&/~\+#])?/;
                var tool = res.test(upAddress);
                var tool2 = reg.test(upAddress);
                if (res.test(upAddress)) {
                    $scope.targetData.Type = "IP"

                }
                else { $scope.targetData.Type = "url" }
                var pos = $scope.targetData.addLocation.indexOf("\n");
                if (pos > -1) {
                    //debugger;

                    $scope.notDeal = $scope.targetData.addLocation.replace(/\n/g, ";");
                    console.log($scope.notDeal)
                    $scope.toDeal = $scope.notDeal.split(";")

                    for (var i = 0; i < $scope.toDeal.length; i++) {
                        $scope.targetData = {};
                        var bool = res.test($scope.toDeal[i]);
                        var bool2 = reg.test($scope.toDeal[i]);
                        if (!bool && !bool2) {
                            alert("no")
                        } else {
                            layer.closeAll();
                            $scope.targetData.addLocation = $scope.toDeal[i];
                            //localStorage.setItem(" $scope.targetData.addLocation", $scope.targetData.addLocation);
                            $scope.targetList.push($scope.targetData);
                            if (res.test($scope.toDeal[i])) {
                                $scope.targetData.Type = "IP"

                            }
                            else { $scope.targetData.Type = "url" }
                        }

                    }
                    $('.table-content1').hide();
                }

                else {
                    $('.table-content1').hide();
                    localStorage.setItem(" $scope.targetData.addLocation", $scope.targetData.addLocation);
                    localStorage.setItem(" $scope.targetData.firstOne", $scope.targetData.firstOne);
                    localStorage.setItem(" $scope.targetData.Type", $scope.targetData.Type);
                    console.log(localStorage);
                    $scope.targetList.push($scope.targetData);
                    console.log($scope.targetList)
                    layer.closeAll()
                }

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


        //上一步
        $scope.goBack = function () {
            history.go(-1)
        }

        //添加目标    
        $('.addModal').on('click', function () {
            layer.open({
                type: 1,
                title: false,
                closeBtn: 0,
                shadeClose: true,
                area: ['60%', ''],
                skin: 'yourclass',
                content: $('#modal1')
            });
        })
        $('.add-target').on('click', function () {
            layer.open({
                type: 1,
                title: false,
                closeBtn: 0,
                shadeClose: true,
                area: ['60%', ''],
                skin: 'yourclass',
                content: $('#modal1')
            });
        })


        //是否需要登录
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

        //切换文件导入
        $scope.oneChoose = function () {
            $('.change-part1').show();
            $('.change-part2').hide();
            $('.change-part3').hide();
        }
        $scope.manyChoose = function () {
            $('.change-part1').hide();
            $('.change-part2').show();
            $('.change-part3').hide();
        }
        $scope.folderAdd = function () {
            $('.change-part1').hide();
            $('.change-part2').hide();
            $('.change-part3').show();
        }

        //添加插件
        $scope.addPlugins = function () {
            layer.open({
                type: 1,
                title: false,
                closeBtn: 0,
                shadeClose: true,
                area: ['75%', '90%'],
                skin: 'yourclass',
                scrollbar: false,
                content: $('#modal2')
            });
        }
        

        //列表
        $scope.openSubmenu = function ($event, $index) {

            $event.stopPropagation();
            $scope.tool = false;
            $scope.target = $("#demo-list").find('.demo-a').eq($index)
            $scope.menu = $("#demo-list").find('.demo-li').eq($index).children('.submenu')
            if ($scope.target.hasClass("submenu-indicator-minus")) {
                $scope.target.removeClass("submenu-indicator-minus")
            }
            if ($scope.menu.css("display") == "none") {
                $scope.menu.slideDown();
                $scope.target.addClass("submenu-indicator-minus");

            } else {
                $scope.menu.slideUp()
                $scope.target.removeClass("submenu-indicator-minus")

            }

        }

        //全选列表
        $scope.checkAll1 = function () {
            if ($("#checkall1").prop("checked")) {
                $("input[name='checksingle1']").prop("checked", true);
                $("input[name='checksingle2']").prop("checked",true);
                $('#addplugin').removeAttr("disabled");
            } else {
                $("input[name='checksingle1']").attr("checked", false);
                $("input[name='checksingle2']").attr("checked",false);
                $('#addplugin').attr("disabled",true);
            }
           
        }
        $scope.checkAll2=function ($index){
            $scope.checkLi = $("input[name='checksingle1']").eq($index);
             if($scope.checkLi.prop("checked")){
                $scope.checkLi.next("ul").find(".checkplugin").prop("checked",true);
            }else{
               $scope.checkLi.next("ul").find(".checkplugin").attr("checked",false);
            }
        }

       
        //表格全选
        $scope.numList = [];
        $scope.checkAll = function () {
            if ($("#checkall").prop("checked")) {
                $("input[name='checksingle']").prop("checked", true);
                $('#addplugin').removeAttr("disabled");
            } else {
                $("input[name='checksingle']").attr("checked", false);
                $('#addplugin').attr("disabled",true);
            }
            //debugger;
            
            $("input[name='checksingle']:checked").each(function(){
                 $scope.num=$("input[name='checksingle']:checked").parent().next().text();
                 console.log($scope.num)
            })
            $scope.numL = $scope.num.split("");
            $scope.numList = $.map($scope.numL,function(e,i){
                return [e-1]
            })
           
        }
          //选择要添加插件的对象
        $scope.checkedLen = "";
        $scope.chooseCheck= function ($index){
            $scope.checkP = $("input[name='checksingle']").eq($index);
            $scope.checkedLen = $("input[name='checksingle']:checked").length;
            if($scope.checkP.prop("checked")){
                $('#addplugin').removeAttr("disabled");
                $scope.numList.push($index.toString());
            }else{
                //debugger
                if($scope.checkedLen<=0){
                    $('#addplugin').attr("disabled",true);
                }
                $scope.numList.pop($index.toString());
                
                
            }
        }

        //取消
        $scope.cancel = function(){
            layer.closeAll()
        }

        //插件数量选择
        $scope.savePlugin = function(){
            layer.closeAll()
            $scope.pluginNum = $("input[name='checksingle2']:checked").length;
            for(var i = 0;i<$scope.numList.length;i++){
                var number = $scope.numList[i];
                   $scope.targetList[number].count = $scope.pluginNum;
                }
           // $scope.numList=[];可能不需要清空

        }

    })
