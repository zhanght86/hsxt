define([  'text!reporterTpl/bar/bar4/bar4.html'  ,'echarts',
                'echarts/chart/bar',],function(lineTpl ,ec){
	return { 
		showPage : function(tabid){			
			$('#main-content > div[data-contentid="'+tabid+'"]').html(lineTpl) ;	 		 
			//Todo...
		 	 
		 	option = {
				    tooltip : {
				        trigger: 'axis',
				        axisPointer : {            // 坐标轴指示器，坐标轴触发有效
				            type : 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
				        }
				    },
				    legend: {
				        data:['直接访问', '邮件营销','联盟广告','视频广告','搜索引擎']
				    },
				    toolbox: {
				        show : true,
				        feature : {
				            mark : {show: true},
				            dataView : {show: true, readOnly: false},
				            magicType : {show: true, type: ['line', 'bar', 'stack', 'tiled']},
				            restore : {show: true},
				            saveAsImage : {show: true}
				        }
				    },
				    calculable : true,
				    xAxis : [
				        {
				            type : 'value'
				        }
				    ],
				    yAxis : [
				        {
				            type : 'category',
				            data : ['周一','周二','周三','周四','周五','周六','周日']
				        }
				    ],
				    series : [
				        {
				            name:'直接访问',
				            type:'bar',
				            stack: '总量',
				            itemStyle : { normal: {label : {show: true, position: 'insideRight'}}},
				            data:[320, 302, 301, 334, 390, 330, 320]
				        },
				        {
				            name:'邮件营销',
				            type:'bar',
				            stack: '总量',
				            itemStyle : { normal: {label : {show: true, position: 'insideRight'}}},
				            data:[120, 132, 101, 134, 90, 230, 210]
				        },
				        {
				            name:'联盟广告',
				            type:'bar',
				            stack: '总量',
				            itemStyle : { normal: {label : {show: true, position: 'insideRight'}}},
				            data:[220, 182, 191, 234, 290, 330, 310]
				        },
				        {
				            name:'视频广告',
				            type:'bar',
				            stack: '总量',
				            itemStyle : { normal: {label : {show: true, position: 'insideRight'}}},
				            data:[150, 212, 201, 154, 190, 330, 410]
				        },
				        {
				            name:'搜索引擎',
				            type:'bar',
				            stack: '总量',
				            itemStyle : { normal: {label : {show: true, position: 'insideRight'}}},
				            data:[820, 832, 901, 934, 1290, 1330, 1320]
				        }
				    ]
				};
				                    
                     
		 	 
		 	 
        
	         $('#barReport4').css({width:'800px',height:'320px'});
             var myChart = ec.init($('#barReport4')[0]);
	         myChart.setOption(option) ;
		 		

			
		 	$('#ModifyBt_gongshang').triggerWith('#qyxx_gsdjxxxg');
		 	
		 	 
		}
	}
}); 

 