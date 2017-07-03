var addPlugins = angular.module('addPluginsCtrl', []);
addPlugins.controller('addPlugins', function addPlugins($scope) {
    //弹层tab切换
    $scope.vm = {};

    //时间
    $scope.datePicker = function () {
        $('.dateset').datepicker();
    }

    //重置  
    $scope.reset = function () {
        $(':input', '.create-content')
            .not(':button, :submit, :reset, :hidden')
            .val('')
            .removeAttr('checked')
            .removeAttr('selected');

    }
})