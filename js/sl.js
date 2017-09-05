var ll = angular.module('slCtrl', []);
ll.controller('ll', function ($scope, $state, $http, $stateParams) {
  var searchStr = $stateParams.locationAStr;
  console.log(searchStr)
  var searchArr = searchStr.split(",");
  console.log(searchArr)
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
    var map = new google.maps.Map(document.getElementById("locationmap"), {
      zoom: 12,
      center: lk,
      mapTypeId: "roadmap",
      styles: $scope.mapStyle
    });


  }
  //initMap();
  synchronizationCoordinate();
  function synchronizationCoordinate() {
    var url = "https://maps.googleapis.com/maps/api/geocode/json?latlng=" + searchArr[0] + "," + searchArr[1] + "&key=AIzaSyDoa6KBbkEfDngfuRlBCAJXwcRWeMtnOPg";
    $.ajax({
      url: url,
      dataType: 'json',
      success: function (data) {
        var target = new Object();
        target.lat = parseFloat(searchArr[0]);
        target.lng = parseFloat(searchArr[1]);

        console.log(data)

        var map = new google.maps.Map(document.getElementById("locationmap"), {
          zoom: 12,
          center: target,
          mapTypeId: "roadmap",
          styles: $scope.mapStyle
        });

        var contentString = '<div id="content">' +
          '定位地点:' + searchStr + '(' + data.results[0].formatted_address + ')' +
          '</div>';

       

        var infowindow = new InfoBubble({
          //map: map,
          content: contentString,
          shadowStyle: 1,
          padding: 0,
          backgroundColor: 'rgb(3,69,93)',
          borderRadius: 4,
          arrowSize: 10,
          borderWidth: 1,
          borderColor: '#256479',
          disableAutoPan: false,
          hideCloseButton: true,
          //arrowPosition: 50,
          backgroundClassName: 'location',
          arrowStyle: 2
        });
        
        
        var marker = new google.maps.Marker({
          position: target,
          map: map
        });
        infowindow.open(map, marker);

        marker.addListener("click", function () {
          $("#inner-map").fadeIn();
          var map1 = new google.maps.Map(document.getElementById("inner-map"), {
            zoom: 15,
            center: target,
            mapTypeId: "roadmap",
            styles: $scope.mapStyle
          });
          var marker1 = new google.maps.Marker({
            position: target,
            map: map1
          });
        });


      },
      error: function () {
        alert("网络繁忙，请重试！");
      }
    });
  }
})