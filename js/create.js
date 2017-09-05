var create = angular.module('createCtrl', []);
create.controller('create', function ($scope, $state, $http) {

  $scope.closeLeft = function () {
    $("#lefttop").addClass("noShown").fadeOut();
    $(".top-close").addClass("noShown").fadeOut();
  }
  $scope.closeRight = function () {
    $("#rightbottom").addClass("noShown").fadeOut();
    $(".top-close").addClass("noShown").fadeOut();
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
  function initMap() {
    var lk = { lat: 22.279711, lng: 114.190544 };
    var map = new google.maps.Map(document.getElementById("allmap"), {
      zoom: 12,
      center: lk,
      mapTypeId: "roadmap",
      styles: $scope.mapStyle
    });
    // var marker = new google.maps.Marker({
    // 	position:lk,
    // 	map:map
    // })

    // 划线
    var flightPlanCoordinates = [
      { lat: 22.279539, lng: 114.190429 },
      { lat: 22.272868, lng: 114.180301 },
      { lat: 22.254598, lng: 114.160217 },
      { lat: 22.249196, lng: 114.144939 }
    ];
    var flightPath = new google.maps.Polyline({
      path: flightPlanCoordinates,
      geodesic: true,
      strokeColor: '#DDD52E',
      strokeOpacity: 1.0,
      strokeWeight: 4
    });
    flightPath.setMap(map);

    function setMarkers(map) {
      var markerList = [flightPlanCoordinates[0], flightPlanCoordinates[flightPlanCoordinates.length - 1]];
      var markers = [];
      var start = "../images/start.png";
      var end = "../images/end.png";
      //for(var i=0;i<markerList.length;i++){
      markers.push(new google.maps.Marker({
        position: markerList[0],
        map: map,
        icon: start
      })
      );
      markers.push(new google.maps.Marker({
        position: markerList[1],
        map: map,
        icon: end
      })
      );
    }
    setMarkers(map);

    flightPath.addListener("mouseover", function () {
      
      var contentString = '<div id="content">'+
      '<div>定位号码:123456789</div>'+
      '<div>起点位置:哈哈哈哈hhhhhh或或或或</div>'+
      '<div>终点位置:哈哈哈哈hhhhhh或</div>'+
      '<div>定位时间:哈哈哈哈哈或或或或</div>'+
      '<div>定位结束时间:哈哈哈哈hhhhhh或或或或</div>'+
      '</div>';
      
      var infoBubble = new InfoBubble({
          map: map,
          content: contentString,
          position: new google.maps.LatLng(flightPlanCoordinates[2].lat, flightPlanCoordinates[2].lng),
          shadowStyle: 1,
          padding: 0,
          backgroundColor: 'rgb(3,69,93)',
          borderRadius: 4,
          arrowSize: 10,
          borderWidth: 1,
          borderColor: '#256479',
          disableAutoPan: true,
          hideCloseButton: true,
          arrowPosition: 30,
          backgroundClassName: 'phoney',
          arrowStyle: 2
        });

      // var infowindow = new google.maps.InfoWindow({                
      //       map: map,
      //       position: new google.maps.LatLng(flightPlanCoordinates[2].lat, flightPlanCoordinates[2].lng),                                
      //       content: contentString
      //     })
          infoBubble.open()
      
    })

    flightPath.addListener("click", function () {
      $("#lefttop").removeClass("noShown").fadeIn();
      $(".top-close").removeClass("noShown").fadeIn();
      //$("#rightbottom").removeClass("noShown").fadeIn();
      //$(".under-close").removeClass("noShown").fadeIn();
      var map1 = new google.maps.Map(document.getElementById("lefttop"), {
        zoom: 15,
        center: lk,
        mapTypeId: "roadmap",
        styles: $scope.mapStyle
      });
      var flightPath1 = new google.maps.Polyline({
        path: flightPlanCoordinates,
        geodesic: true,
        strokeColor: '#DDD52E',
        strokeOpacity: 1.0,
        strokeWeight: 4
      });
      flightPath1.setMap(map1);
      setMarkers(map1);
    })



  }
  initMap()
})