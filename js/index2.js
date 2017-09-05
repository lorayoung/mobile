var index2 = angular.module('index2Ctrl', []);
index2.controller('index2', function ($scope, $state) {
  //判断登录用户
  $state.go('index.user');
 // $state.go('index.user',{"author":result});

  $('.top-list li').on('click', function () {
    $(this).addClass('active-click').siblings('li').removeClass("active-click")
  })

  $scope.searchLoaction = function () {
    var searchVal = $("#search-location").val()

    if (!searchVal) {
      alert("请输入坐标")
    } else {
      $state.go("index.location", { "locationAStr": searchVal })
    }
  }

  $scope.init = function () {
    $("#from").datetimepicker({
      showSecond: true,
      numberOfMonths: 2,
      dateFormat: "yy-mm-dd",
      timeFormat: 'HH:mm:ss', //格式化时间 
      onClose: function (selectedDate) {
        $("#to").datepicker("option", "minDate", selectedDate);
      }
    });

    $("#to").datetimepicker({
      showSecond: true,
      numberOfMonths: 2,
      dateFormat: "yy-mm-dd",
      timeFormat: 'HH:mm:ss', //格式化时间 
      onClose: function (selectedDate) {
        $("#from").datepicker("option", "maxDate", selectedDate);
        $("#to").val($(this).val());
      }
    });
  }
  $scope.init();
  $scope.createMisssion = function () {

    layer.open({
      type: 1,
      title: false,
      closeBtn: 0,
      offset: ["", "30%"],
      shadeClose: false,
      area: ['40%', ''],
      skin: 'yourclass',
      scrollbar: false,
      content: $('#missionModal')
    });
  }

  $scope.closeModal = function () {
    layer.closeAll()
  }
  $scope.submitTarget = function () {
    layer.closeAll();
    $state.go("index.create")
  }


  $scope.addMore = function () {
    var tool = $(".add-more").hasClass("noShown")
    if (tool) {
      $(".add-more").slideDown().removeClass("noShown");
      $(".add-one").attr("disabled", "true")
    } else {
      $(".add-more").slideUp().addClass("noShown")
      $(".add-one").removeAttr("disabled")
    }

  }

})