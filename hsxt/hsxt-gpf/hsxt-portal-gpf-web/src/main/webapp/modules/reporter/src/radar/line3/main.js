define([  'text!reporterTpl/radar/radar3/line3.html' ,'echarts',
                'echarts/chart/radar',],function(radarTpl,ec){
	return { 
		showPage : function(tabid){			
			$('#main-content > div[data-contentid="'+tabid+'"]').html(radarTpl) ;	 
 	 
			//Todo...
		 	
		 	option = {
				    title : {
				        text: '多雷达图',
				        subtext: '纯属虚构'
				    },
				    tooltip : {
				        trigger: 'axis'
				    },
				    legend: {
				        x : 'center',
				        data:['某软件','某主食手机','某水果手机','降水量','蒸发量']
				    },
				    toolbox: {
				        show : true,
				        feature : {
				            mark : {show: true},
				            dataView : {show: true, readOnly: false},
				            restore : {show: true},
				            saveAsImage : {show: true}
				        }
				    },
				    calculable : true,
				    polar : [
				        {
				            indicator : [
				                {text : '品牌', max  : 100},
				                {text : '内容', max  : 100},
				                {text : '可用性', max  : 100},
				                {text : '功能', max  : 100}
				            ],
				            center : ['25%',200],
				            radius : 80
				        },
				        {
				            indicator : [
				                {text : '外观', max  : 100},
				                {text : '拍照', max  : 100},
				                {text : '系统', max  : 100},
				                {text : '性能', max  : 100},
				                {text : '屏幕', max  : 100}
				            ],
				            radius : 80
				        },
				        {
				            indicator : (function (){
				                var res = [];
				                for (var i = 1; i <= 12; i++) {
				                    res.push({text:i+'月',max:100});
				                }
				                return res;
				            })(),
				            center : ['75%', 200],
				            radius : 80
				        }
				    ],
				    series : [
				        {
				            type: 'radar',
				             tooltip : {
				                trigger: 'item'
				            },
				            itemStyle: {normal: {areaStyle: {type: 'default'}}},
				            data : [
				                {
				                    value : [60,73,85,40],
				                    name : '某软件'
				                }
				            ]
				        },
				        {
				            type: 'radar',
				            polarIndex : 1,
				            data : [
				                {
				                    value : [85, 90, 90, 95, 95],
				                    name : '某主食手机'
				                },
				                {
				                    value : [95, 80, 95, 90, 93],
				                    name : '某水果手机'
				                }
				            ]
				        },
				        {
				            type: 'radar',
				            polarIndex : 2,
				            itemStyle: {normal: {areaStyle: {type: 'default'}}},
				            data : [
				                {
				                    name : '降水量',
				                    value : [2.6, 5.9, 9.0, 26.4, 28.7, 70.7, 75.6, 82.2, 48.7, 18.8, 6.0, 2.3],
				                },
				                {
				                    name:'蒸发量',
				                    value:[2.0, 4.9, 7.0, 23.2, 25.6, 76.7, 35.6, 62.2, 32.6, 20.0, 6.4, 3.3]
				                }
				            ]
				        }
				    ]
				};
				                    
			                    
		 	
		 	
		 	
		 	 
        
	        $('#radar3').css({width:'800px',height:'320px'});
            var myChart = ec.init($('#radar3')[0]);
	        myChart.setOption(option) ;
		 		

			
 
		 	
		 	 
		}
	}
}); 

 