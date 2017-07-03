var search = angular.module('searchCtrl',[]);
search.controller('search',function search($scope){
    //假数据
    $scope.portData = [
        {
            "searchName":"http://www.w3cschool.com.cn",
            "inputPC":"172.36.64.32",
            "location":"中国-南京",
            "time":"2016/05/15 15:19",
            "ports":[
                {
                    "portNum":"80",
                    "portInfo":[
                        {
                            "portIntro":"HTTP/1.1 301 Moved Permanently",
                            "portDate":"Thu,01 JUN 2017 01:49:11 GMT",
                            "portServer":"Apache/2.0.63 (Unix) mod_ssl/2.0.63 Open SSL/0.90/PH",
                            "portPower":"PHP/5.2.16",
                            "portLocation":"portal/index.html",
                            "portConLen":"0",
                            "portConType":"html/text",
                            "portLanguage":"Servlet/2.5/JSP/2.11111111"
                        }
                    ]

                },
                {
                    "portNum":"21",
                    "portInfo":[
                        {
                            "portIntro":"HTTP/1.1 301 Moved Permanently",
                            "portDate":"Thu,01 JUN 2017 01:49:11 GMT",
                            "portServer":"Apache/2.0.63 (Unix) mod_ssl/2.0.63 Open SSL/0.90/PH",
                            "portPower":"PHP/5.2.16",
                            "portLocation":"portal/index.html",
                            "portConLen":"0",
                            "portConType":"html/text rrrrr",
                            "portLanguage":"Servlet/2.5/JSP/2.1"
                        }
                    ]

                },
                {
                    "portNum":"25",
                    "portInfo":[
                        {
                            "portIntro":"HTTP/1.1 301 Moved Permanently ffffffffffff",
                            "portDate":"Thu,01 JUN 2017 01:49:11 GMT",
                            "portServer":"Apache/2.0.63 (Unix) mod_ssl/2.0.63 Open SSL/0.90/PH",
                            "portPower":"PHP/5.2.16",
                            "portLocation":"portal/index.html",
                            "portConLen":"0",
                            "portConType":"html/text",
                            "portLanguage":"Servlet/2.5/JSP/2.1"
                        }
                    ]

                },
                {
                    "portNum":"110",
                    "portInfo":[
                        {
                            "portIntro":"HTTP/1.1 301 Moved Permanently",
                            "portDate":"Thu,01 JUN 2017 01:49:11 GMT",
                            "portServer":"Apache/2.0.63 (Unix) mod_ssl/2.0.63 Open SSL/0.90/PH",
                            "portPower":"PHP/5.2.16",
                            "portLocation":"portal/index.html",
                            "portConLen":"55",
                            "portConType":"html/text",
                            "portLanguage":"Servlet/2.5/JSP/2.1"
                        }
                    ]

                },
                {
                    "portNum":"993",
                    "portInfo":[
                        {
                            "portIntro":"HTTP/1.1 301 Moved Permanently",
                            "portDate":"Thu,01 JUN 2017 01:49:11 GMT",
                            "portServer":"Apache/2.0.63 (Unix) mod_ssl/2.0.63 Open SSL/0.90/PH",
                            "portPower":"PHP5555555/5.2.16",
                            "portLocation":"portal/index.html",
                            "portConLen":"0",
                            "portConType":"html/text",
                            "portLanguage":"Servlet/2.5/JSP/2.1"
                        }
                    ]

                },
                {
                    "portNum":"24",
                    "portInfo":[
                        {
                            "portIntro":"qqqqqHTTP/1.1 301 Moved Permanently",
                            "portDate":"Thu,01 JUN 2017 01:49:11 GMT",
                            "portServer":"Apache/2.0.63 (Unix) mod_ssl/2.0.63 Open SSL/0.90/PH",
                            "portPower":"PHP/5.2.16",
                            "portLocation":"portal/index.html",
                            "portConLen":"0",
                            "portConType":"html/text",
                            "portLanguage":"Servlet/2.5/JSP/2.1"
                        }
                    ]

                },
                {
                    "portNum":"443",
                    "portInfo":[
                        {
                            "portIntro":"HTTP/1.1 301 Moved Permanently",
                            "portDate":"Thu,01 JUN 2017 01:49:11 GMT",
                            "portServer":"aaaaaaaaaaaaaaaApache/2.0.63 (Unix) mod_ssl/2.0.63 Open SSL/0.90/PH",
                            "portPower":"PHP/5.2.16",
                            "portLocation":"portal/index.html",
                            "portConLen":"0",
                            "portConType":"html/text",
                            "portLanguage":"Servlet/2.5/JSP/2.1"
                        }
                    ]

                },
                {
                    "portNum":"2525",
                    "portInfo":[
                        {
                            "portIntro":"HTTP/1.1 301 Moved Permanently",
                            "portDate":"Thu,01 JUN 2017 01:49:11 GMT",
                            "portServer":"Apache/2.0.63 (Unix) mod_ssl/2.0.63 Open SSL/0.90/PH",
                            "portPower":"PHP/5.2.16//////////////",
                            "portLocation":"portal/index.html",
                            "portConLen":"0",
                            "portConType":"html/text",
                            "portLanguage":"Servlet/2.5/JSP/2.1"
                        }
                    ]

                }
                ]
        },
        {   
            "searchName":"http://www.zcool.com.cn",
            "inputPC":"172.36.64.32",
            "location":"中国-南京",
            "time":"2016/05/15 15:19",
            "ports":[
                {
                    "portNum":"80",
                    "portInfo":[
                        {
                            "portIntro":"HTTP/1.1 301 Moved Permanently",
                            "portDate":"Thu,01 JUN 2017 01:49:11 GMT",
                            "portServer":"Apache/2.0.63 (Unix) mod_ssl/2.0.63 Open SSL/0.90/PH",
                            "portPower":"PHP/5.2.16",
                            "portLocation":"portal/index.html",
                            "portConLen":"0",
                            "portConType":"html/text",
                            "portLanguage":"Servlet/2.5/JSP/2.1"
                        }
                    ]

                },
                {
                    "portNum":"21",
                    "portInfo":[
                        {
                            "portIntro":"HTTP/1.1 301 Moved Permanently",
                            "portDate":"Thu,01 JUN 2017 01:49:11 GMT",
                            "portServer":"Apache/2.0.63 (Unix) mod_ssl/2.0.63 Open SSL/0.90/PH",
                            "portPower":"PHP/5.2.16",
                            "portLocation":"portal/index.html",
                            "portConLen":"0",
                            "portConType":"html/text",
                            "portLanguage":"Servlet/2.5/JSP/2.1"
                        }
                    ]

                },
                {
                    "portNum":"25",
                    "portInfo":[
                        {
                            "portIntro":"HTTP/1.1 301 Moved Permanently",
                            "portDate":"Thu,01 JUN 2017 01:49:11 GMT",
                            "portServer":"Apache/2.0.63 (Unix) mod_ssl/2.0.63 Open SSL/0.90/PH",
                            "portPower":"PHP/5.2.16",
                            "portLocation":"portal/index.html",
                            "portConLen":"0",
                            "portConType":"html/text",
                            "portLanguage":"Servlet/2.5/JSP/2.1"
                        }
                    ]

                }]
        },
        {   
            "searchName":"http://www.zcool.com.cn",
            "inputPC":"172.36.64.32",
            "location":"中国-南京",
            "time":"2016/05/15 15:19",
            "ports":[
                {
                    "portNum":"80",
                    "portInfo":[
                        {
                            "portIntro":"HTTP/1.1 301 Moved Permanently",
                            "portDate":"Thu,01 JUN 2017 01:49:11 GMT",
                            "portServer":"Apache/2.0.63 (Unix) mod_ssl/2.0.63 Open SSL/0.90/PH",
                            "portPower":"PHP/5.2.16",
                            "portLocation":"portal/index.html",
                            "portConLen":"0",
                            "portConType":"html/text",
                            "portLanguage":"Servlet/2.5/JSP/2.1"
                        }
                    ]

                },
                {
                    "portNum":"21",
                    "portInfo":[
                        {
                            "portIntro":"HTTP/1.1 301 Moved Permanentlyyyyyyyy",
                            "portDate":"Thu,01 JUN 2017 01:49:11 GMT",
                            "portServer":"Apache/2.0.63 (Unix) mod_ssl/2.0.63 Open SSL/0.90/PH",
                            "portPower":"PHP/5.2.16",
                            "portLocation":"portal/index.html",
                            "portConLen":"0",
                            "portConType":"html/text",
                            "portLanguage":"Servlet/2.5/JSP/2.1"
                        }
                    ]

                },
                {
                    "portNum":"25",
                    "portInfo":[
                        {
                            "portIntro":"HTTP/1.1 301 Moved Permanently",
                            "portDate":"Thu,01 JUN 2017 01:49:11 GMT",
                            "portServer":"Apache/2.0.63 (Unix) mod_ssl/2.0.63 Open SSL/0.90/PH",
                            "portPower":"PHP/5.2.16",
                            "portLocation":"portal/index.html............",
                            "portConLen":"0",
                            "portConType":"html/text",
                            "portLanguage":"Servlet/2.5/JSP/2.1"
                        }
                    ]

                }
                ]
        }
    ]
    

       $scope.child="";
       $scope.portDetail="";
       $scope.init =function(){
           var portDetail1 =""
           for(var i=0;i<$scope.portData.length;i++){
               //debugger
           var portDetail1 = $scope.portData[i].ports[0].portInfo[0];
           contentInit = "<ul><li>"+portDetail1.portIntro+"</li><li>Date:"+ portDetail1.portDate+"</li><li>Server:"+ portDetail1.portServer
                           +"</li><li>X-Poweredby: "+ portDetail1.portPower+"</li><li>Location: "+portDetail1.portLocation
                           +"</li><li>Content.length: "+portDetail1.portConLen+"</li><li>Content-type: "+portDetail1.portConType
                           +"</li><li>Language: "+portDetail1.portLanguage+"</li></ul>"
          $('.search-under-content-right').eq(i).append(contentInit);
         }
       }
      

       $scope.show = function(outerIndex,$index){
           $scope.child = $scope.portData[outerIndex].ports;
           $(".port-num-5").eq(outerIndex).find('span').eq($index).css("background-color","#F0595C").siblings('span').css("background-color","#B3B3B3")
           var portDetail = $scope.child[$index].portInfo[0];
           var contentLi = "<ul><li>"+portDetail.portIntro+"</li><li>Date:"+ portDetail.portDate+"</li><li>Server:"+ portDetail.portServer
                           +"</li><li>X-Poweredby: "+ portDetail.portPower+"</li><li>Location: "+portDetail.portLocation
                           +"</li><li>Content.length: "+portDetail.portConLen+"</li><li>Content-type: "+portDetail.portConType
                           +"</li><li>Language: "+portDetail.portLanguage+"</li></ul>"
           $('.search-under-content-right').eq(outerIndex).empty();
           $('.search-under-content-right').eq(outerIndex).append(contentLi);
       }

    //搜索按钮
    $scope.searchType = function(){
        if($("#bugS").prop("checked")){
            $('.search-under-content1').css("display","block");
            $('.search-under-content2').css("display","none")
        }
        else{
            $('.search-under-content2').css("display","block");
            $('.search-under-content1').css("display","none")
             $scope.init();
        }
    }


    //切换按钮
    $scope.searchBug = function(){
        var bool = $("#bugS").prop('checked')
        if(bool){
            $('.search-top-part1').show();
            $('.search-top-part2').hide();
        }
    }

    $scope.searchProperty =function(){
        var bol = $("#propertyS").prop("checked");
        if(bol){
            $('.search-top-part1').hide();
            $('.search-top-part2').show();
        }       
        
    }
})
