var myApp = angular.module('myApp', ['ui.router.state', 'controller','ncy-angular-breadcrumb']);
myApp.config(function($breadcrumbProvider) {
    $breadcrumbProvider.setOptions({
      prefixStateName: '',
      template: 'bootstrap3'
    });
  })
.config(['$stateProvider', '$urlRouterProvider', '$breadcrumbProvider',function ($stateProvider, $urlRouterProvider,$breadcrumbProvider) {
    $urlRouterProvider.otherwise('/homepage');
    $stateProvider
        .state("homepage", {
            url: "/homepage",
            templateUrl: "template/homePage.html",
            controller: 'homepage',
            ncyBreadcrumb: {
                label: '首页'
            }
        })
        .state("tradition", {
            url: "/tradition",
            templateUrl: "template/traditionScan.html",
            controller: 'tradition',
            ncyBreadcrumb: {
                label: '传统扫描'
            }
        })
        .state("agent", {
            url: "/agent",
            templateUrl: "template/agentScan.html",
            controller: 'agent',
             ncyBreadcrumb: {
                label: '代理扫描'
            }
        })
        .state("info", {
            url: "/info",
            templateUrl: "template/infoCenter.html",
            controller: 'info',
             ncyBreadcrumb: {
                label: '信息中心'
            }
        })
        .state("search", {
            url: "/search",
            templateUrl: "template/search.html",
            controller: 'search',
            ncyBreadcrumb: {
                label: '搜索'
            }
        })
        .state("log", {
            url: "/log",
            templateUrl: "template/logManage.html",
            controller: 'log',
            ncyBreadcrumb: {
                label: '日志管理'
            }
        })
        .state("tools", {
            url: "/tools",
            templateUrl: "template/tools.html",
            controller: 'tools',
            ncyBreadcrumb: {
                label: '工具集'
            }
        })
        .state("secondScan", {
            url: "/traditionScan/secondScan", //传参/：id
            templateUrl: "template/secondScan.html",
            controller: 'secondScan',
            ncyBreadcrumb: {
                label: '校园测试',
                parent:'tradition'
            }
        })
        .state("thirdScan", {
            url: "/traditionScan/secondScan/thirdScan", //传参/：id
            templateUrl: "template/thirdScan.html",
            controller: 'thirdScan',
            ncyBreadcrumb: {
                label: 'http://www.zools.com.cn',
                parent:'secondScan'
            }
        })
        .state("fourthScan", {
            url: "/traditionScan/secondScan/thirdScan/fourthScan", //传参/：id
            templateUrl: "template/fourthScan.html",
            controller: 'fourthScan',
            ncyBreadcrumb: {
                label: 'HttpSlowlorisCheck',
                parent:'thirdScan'
            }
        })
        .state("missionCreate", {
            url: "/traditionScan/missionCreate",
            templateUrl: "template/missionCreate.html",
            controller: 'missionCreate',
            ncyBreadcrumb: {
                label: '创建任务',
                parent:'tradition'
            }
        })
        .state("addTarget", {
            url: "/traditionScan/addTarget",
            templateUrl: "template/addTargets.html",
            controller: 'addTarget',
            ncyBreadcrumb: {
                label: '添加对象',
                parent:'missionCreate'
            }
        })
        .state("addPlugins", {
            url: "homepage/addPlugins",
            templateUrl: "template/addPlugins.html",
            controller: 'addPlugins',
            ncyBreadcrumb: {
                label: '插件中心',
                parent:'homepage'
            }
        })
        







}]);
