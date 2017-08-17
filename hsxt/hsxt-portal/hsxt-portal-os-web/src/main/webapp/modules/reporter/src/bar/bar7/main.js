define([ 'text!reporterTpl/bar/bar7/bar7.html'   ,'echarts',
                'echarts/chart/bar',],function(lineTpl ,ec){
	return { 
		showPage : function(tabid){			
			$('#main-content > div[data-contentid="'+tabid+'"]').html(lineTpl) ;	  
			//Todo...
		 	 
		 	option = {
			    title: {
			        text: '深圳月最低生活费组成（单位:元）',
			        subtext: 'From ExcelHome',
			        sublink: 'http://e.weibo.com/1341556070/AjQH99che'
			    },
			    tooltip : {
			        trigger: 'axis',
			        axisPointer : {            // 坐标轴指示器，坐标轴触发有效
			            type : 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
			        },
			        formatter: function (params) {
			            var tar = params[0];
			            return tar.name + '<br/>' + tar.seriesName + ' : ' + tar.value;
			        }
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
			    xAxis : [
			        {
			            type : 'category',
			            splitLine: {show:false},
			            data : ['总费用','房租','水电费','交通费','伙食费','日用品数']
			        }
			    ],
			    yAxis : [
			        {
			            type : 'value'
			        }
			    ],
			    series : [
			        {
			            name:'辅助',
			            type:'bar',
			            stack: '总量',
			            itemStyle:{
			                normal:{
			                    barBorderColor:'rgba(0,0,0,0)',
			                    color:'rgba(0,0,0,0)'
			                },
			                emphasis:{
			                    barBorderColor:'rgba(0,0,0,0)',
			                    color:'rgba(0,0,0,0)'
			                }
			            },
			            data:[0, 1700, 1400, 1200, 300, 0]
			        },
			        {
			            name:'生活费',
			            type:'bar',
			            stack: '总量',
			            itemStyle : { normal: {label : {show: true, position: 'inside'}}},
			            data:[2900, 1200, 300, 200, 900, 300]
			        }
			    ]
			};
			        
        
	         $('#barReport7').css({width:'800px',height:'320px'});
             var myChart = ec.init($('#barReport7')[0]); 
	         myChart.setOption( option ) ;
		 		
 
		 	
		 	 
		}
	}
}); 

 