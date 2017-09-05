var search = angular.module('searchCtrl', []);
search.controller('search', function ($scope, $state, $http) {
    $scope.historyList = [];

    $.ajax({
        url: "../js/search.json",
        async: false,
        success: function (res) {
            console.log(res)
            $scope.historyList = res.result;
        }
    });

    console.log($scope.historyList)


    $scope.routeData = [
        {
            "location": "江苏省南京市禄口机场附近(120°E,120°N)"
        }, {
            "location": "江苏省南京市禄口机场附近(120°E,120°N)"
        }, {
            "location": "江苏省南京市禄口机场附近(120°E,120°N)"
        }, {
            "location": "江苏省南京市禄口机场附近(120°E,120°N)"
        }, {
            "location": "江苏省南京市禄口机场附近(120°E,120°N)"
        }, {
            "location": "江苏省南京市禄口机场附近(120°E,120°N)"
        }, {
            "location": "江苏省南京市禄口机场附近(120°E,120°N)"
        }, {
            "location": "江苏省南京市禄口机场附近(120°E,120°N)"
        }, {
            "location": "江苏省南京市禄口机场附近(120°E,120°N)"
        }, {
            "location": "江苏省南京市禄口机场附近(120°E,120°N)"
        },

    ];

    $scope.searchLeftTable = function () {

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

    jQuery.fn.slideLeftHide = function (speed, callback) {
        this.animate({
            width: "hide",
            paddingLeft: "hide",
            paddingRight: "hide",
            marginLeft: "hide",
            marginRight: "hide"
        }, speed, callback);
    };
    jQuery.fn.slideLeftShow = function (speed, callback) {
        this.animate({
            width: "show",
            paddingLeft: "show",
            paddingRight: "show",
            marginLeft: "show",
            marginRight: "show"
        }, speed, callback);
    };

    $scope.showOrHide = function ($index, $event) {
        var tool = $(".slide-btn").eq($index).hasClass("turndown")

        if (!tool) {
            $(".slide-btn").eq($index).toggleClass("turndown")
            $(".search-history-table").find(".outer-li").eq($index).find('.history-search-detail').slideDown('fast');
            $(".search-history-table").find(".outer-li").eq($index).siblings(".outer-li").find('.history-search-detail').slideUp("fast")
            $(".search-history-table").find(".outer-li").eq($index).siblings(".outer-li").find(".slide-btn").removeClass("turndown")
        }
        else {
            $(".slide-btn").eq($index).toggleClass("turndown")
            $(".search-history-table").find(".outer-li").eq($index).find('.history-search-detail').slideUp('fast');
        }

    }
    $scope.midTitle = ""
    $scope.location = [];
    $scope.locationPot = [];
    $scope.openRight = function ($index, $event, num) {
        $scope.midTitle = num.phone_number;
        $.ajax({
            url: "../js/nubmer.json",
            async: false,
            // data:phone_number,
            success: function (data) {//一条号码的数据
                //$scope.allPath = data.path;
                $scope.allPath = data.phonePaths[0].path
                for (var i = 0; i < $scope.allPath.length; i++) {
                    $scope.location.push($scope.allPath[i].location);
                    $scope.locationPot.push($scope.allPath[i].coordinate);
                }
            }

        })
        console.log($scope.location)
        console.log($scope.locationPot)

        $(".record2").slideLeftShow();
        $("#searchmap").fadeIn()//css("visibility","visible");
        initMap();

    }

    $scope.closeRight = function () {
        $(".record2").slideLeftHide();
        $("#searchmap").fadeOut()//css("visibility","visible");
    }

    function initMap() {
        var lk = { lat: 22.279711, lng: 114.190544 };
        var map = new google.maps.Map(document.getElementById("searchmap"), {
            zoom: 12,
            center: lk,
            mapTypeId: "roadmap",
            styles: $scope.mapStyle
        });
        var locationOb = new Object();
        var locationGroup = [];
        for (var i = 0; i < $scope.locationPot.length; i++) {
            (function (i) {
                var lo = $scope.locationPot[i].split(",");
                locationOb.lat = parseFloat(lo[0]);
                locationOb.lng = parseFloat(lo[1]);
                locationGroup.push(locationOb);
            })(i)
        }
        console.log(locationGroup)

        var flightPath = new google.maps.Polyline({
            path: locationGroup,
            geodesic: true,
            strokeColor: '#DDD52E',
            strokeOpacity: 1.0,
            strokeWeight: 4
        });
        flightPath.setMap(map);
        function setMarkers(map) {
            var markerList = [locationGroup[0], locationGroup[locationGroup.length - 1]];
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

    }


})