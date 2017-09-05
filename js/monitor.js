var monitor = angular.module('monitorCtrl', []);
monitor.controller('monitor', function ($scope, $state, $http) {
  $scope.vm = {};
  $scope.historyList=[];
  $.ajax({
    url:"../js/historyData.json",
    async:false,
    success:function(res){
       $scope.historyList=res;
     }
  });
   
   $("#chooseTime").datetimepicker({
     showSecond: true,
     dateFormat: "yy-mm-dd",
     timeFormat: 'HH:mm:ss' //格式化时间  
   });
    $("#chooseTime1").datetimepicker({
     showSecond: true,
     dateFormat: "yy-mm-dd",
     timeFormat: 'HH:mm:ss' //格式化时间  
   });
   $scope.closeModal = function(){
      layer.closeAll()
  }

  $scope.chooseTime = "";
  var idGroup = [];
  $scope.chooseGroup=[];
  $scope.submitMission = function(){
    $scope.chooseTime = $("#chooseTime").val();
    if($scope.chooseTime!=""){
        $('input:checkbox[name=checksingle]:checked').each(function(){
      idGroup.push(this.id)
    })

    for(var i=0;i<idGroup.length;i++){
      for(var j=0;j<$scope.historyList.length;j++){
        if(idGroup[i]==$scope.historyList[j].missionId){
          $scope.chooseGroup.push($scope.historyList[j])
        }
      }
    }
    layer.closeAll();
    $("#leftbar").fadeIn()
    console.log($scope.chooseGroup)
    }else{
      alert("请选择时间")
    }
    
    
  }
  $scope.submitMission1 = function(){
    $scope.chooseTime1 = $("#chooseTime1").val();
    if($scope.chooseTime1!=""){
        $('input:checkbox[name=checksingle]:checked').each(function(){
      idGroup.push(this.id)
    })

    for(var i=0;i<idGroup.length;i++){
      for(var j=0;j<$scope.historyList.length;j++){
        if(idGroup[i]==$scope.historyList[j].missionId){
          $scope.chooseGroup.push($scope.historyList[j])
        }
      }
    }
    layer.closeAll();
    $("#leftbar1").fadeIn()
    console.log($scope.chooseGroup)
    }else{
      alert("请选择时间")
    }
    
    
  }

  //全选
  $scope.checkAll = function () {
            if ($("#checkall").prop("checked")) {
                $("input[name='checksingle']").prop("checked", true);
            } else {
                $("input[name='checksingle']").attr("checked", false);
            }
           
        }
  $scope.mapStyle = [
    { elementType: 'geometry', stylers: [{ color: '#02172C' }] },
    { elementType: 'labels.text.stroke', stylers: [{ visibility: 'off' }] },
    { elementType: 'labels.text.fill', stylers: [{ color: '#63B9F5' }] },
    {
      featureType: 'administrative.locality',
      elementType: 'labels.text.fill',
      stylers: [{ visibility: 'off' }]
    },
    {
      featureType: 'poi',
      elementType: 'labels.icon',
      stylers: [{ visibility: 'off' }]
    },

    {
      featureType: 'road',
      elementType: 'geometry',
      stylers: [{ color: '#0C707A' }]
    },
    {
      featureType: 'road',
      elementType: 'labels.icon',
      stylers: [{ visibility: 'off' }]
    },
    {
      featureType: 'road',
      elementType: 'labels.text.fill',
      stylers: [{ color: '#0C707A' }]
    },
    {
      featureType: 'road.highway',
      elementType: 'geometry',
      stylers: [{ color: '#0C707A' }]
    },
    {
      featureType: 'road.highway',
      elementType: 'geometry.stroke',
      stylers: [{ color: '#0C707A' }]
    },
    {
      featureType: 'road.highway',
      elementType: 'labels.text.fill',
      stylers: [{ visibility: 'off' }]
    },
    {
      featureType: 'transit',
      elementType: 'geometry',
      stylers: [{ color: '#2f3948' }]
    },
    {
      featureType: 'transit.station',
      elementType: 'labels',
      stylers: [{ visibility: 'off' }]
    },

    {
      featureType: 'water',
      elementType: 'geometry',
      stylers: [{ color: '#17263c' }]
    },
    {
      featureType: 'water',
      elementType: 'labels.text.fill',
      stylers: [{ color: '#515c6d' }]
    },
    {
      featureType: 'water',
      elementType: 'labels.text.stroke',
      stylers: [{ color: '#17263c' }]
    }
  ];
  var circleOverlay;
  function initMap() {
    var lk = { lat: 22.279711, lng: 114.190544 };
    var map = new google.maps.Map(document.getElementById("allmap"), {
      zoom: 12,
      center: lk,
      mapTypeId: "roadmap",
      styles: $scope.mapStyle
    });
    var map1 = new google.maps.Map(document.getElementById("allmap1"), {
      zoom: 12,
      center: lk,
      mapTypeId: "roadmap",
      styles: $scope.mapStyle
    });

    var drawingManager = new google.maps.drawing.DrawingManager({     
      drawingControl: true,
      drawingControlOptions: {
        position: google.maps.ControlPosition.TOP_CENTER,
        drawingModes: ['circle']
      },
      circleOptions: {
        fillColor: '#BD1112',
        strokeColor:'#BD1112',
        strokeWeight: 1,
        clickable: true,
        editable: true,
        draggable: false,
        zIndex: 1
      }

    });
    drawingManager.setMap(map);
    google.maps.event.addListener(drawingManager, 'overlaycomplete', function(event) {
            console.log(event.overlay.center)
            var clng = event.overlay.center.lng();
            var clat =event.overlay.center.lat();
            var r = event.overlay.radius;
            console.log("center   "+clng+",  "+clat+"   ,半径"+r)
		  circleOverlay = event.overlay
     circleOverlay.addListener('bounds_changed',function () {
            var newlng = event.overlay.getCenter().lng();
            var newlat = event.overlay.getCenter().lat();
            var newr = event.overlay.getRadius();
                console.log(newlng+"   " +newlat+"   "+newr);
		  })
      circleOverlay.addListener('click',function () {
         layer.open({
                type: 1,
                title: false,
                closeBtn: 0,
                shadeClose: false,
                area: ['55%','90%'],
                skin: 'yourclass',
                scrollbar: false,
                content: $('#createMonitor')
            });
		  })
    });



  }
  initMap();
  
  //除去绘图
  $scope.removeOverlay = function(){
    circleOverlay.setMap(null);
  }

  $scope.traceMission = function(){
    layer.open({
                type: 1,
                title: false,
                closeBtn: 0,
                shadeClose: false,
                area: ['55%','90%'],
                skin: 'yourclass',
                scrollbar: false,
                content: $('#createMonitor1')
            });
  }


})