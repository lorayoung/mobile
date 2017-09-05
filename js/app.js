var myApp = angular.module('myApp', ['ui.router.state', 'controller']);
myApp.config(['$stateProvider', '$urlRouterProvider',function ($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.when('','/index/user');
    $urlRouterProvider.when('/','/index/user');
    $stateProvider
        
        .state("index", {
            url: "/index",
            templateUrl: "template/index2.html",
            controller:'index2'
            
        })
        .state("index.user", {
            url: "/user",
            templateUrl: "template/userInfo.html",
            controller:'user',
            //params:{"author":result}
        })
        .state("index.search", {
            url: "/search",
            templateUrl: "template/searchInfo.html",
            controller:'search'
        })
        .state("index.historyrecord", {
            url: "/historyrecord",
            templateUrl: "template/history.html",
            controller:'historyrecord'
        })
        .state("index.monitor", {
            url: "/monitor",
            templateUrl: "template/monitor.html",
            controller:'monitor'
        })
        .state("index.logout", {
            url: "/logout",
            templateUrl: "template/logout.html",
            controller:'logout'
        })
        .state("index.create", {
            url: "/create",
            templateUrl: "template/create.html",
            controller:'create'
        })
        .state("index.location", {
            url: "/location",
            templateUrl: "template/location.html",
            controller:'ll',
            params: {'locationAStr': null}
        })
        
        
        
        




}]);
