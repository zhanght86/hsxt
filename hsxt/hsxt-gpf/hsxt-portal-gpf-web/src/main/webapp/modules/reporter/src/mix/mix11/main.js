define([ 'text!reporterTpl/mix/mix11/mix11.html'   ,'echarts',
               'echarts/chart/pie','echarts/chart/gauge' ,'echarts/chart/funnel'  ],function(lineTpl ,ec){
	return { 
		showPage : function(tabid){			
			$('#main-content > div[data-contentid="'+tabid+'"]').html(lineTpl) ;		 	 
			//Todo...
		    
            option = {
    color : [
        'rgba(255, 69, 0, 0.5)',
        'rgba(255, 150, 0, 0.5)',
        'rgba(255, 200, 0, 0.5)',
        'rgba(155, 200, 50, 0.5)',
        'rgba(55, 200, 100, 0.5)'
    ],
    title : {
        text: '商业BI类图表',
        subtext: '纯属虚构'
    },
    tooltip : {
        trigger: 'item',
        formatter: "{a} <br/>{b} : {c}%"
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
    legend: {
        data : ['展现','点击','访问','咨询','订单']
    },
    series : [
        {
            name:'业务指标',
            type:'gauge',
            center: ['25%','55%'],
            splitNumber: 10,       // 分割段数，默认为5
            axisLine: {            // 坐标轴线
                lineStyle: {       // 属性lineStyle控制线条样式
                    color: [[0.2, '#228b22'],[0.8, '#48b'],[1, '#ff4500']], 
                    width: 8
                }
            },
            axisTick: {            // 坐标轴小标记
                splitNumber: 10,   // 每份split细分多少段
                length :12,        // 属性length控制线长
                lineStyle: {       // 属性lineStyle控制线条样式
                    color: 'auto'
                }
            },
            axisLabel: {           // 坐标轴文本标签，详见axis.axisLabel
                textStyle: {       // 其余属性默认使用全局文本样式，详见TEXTSTYLE
                    color: 'auto'
                }
            },
            splitLine: {           // 分隔线
                show: true,        // 默认显示，属性show控制显示与否
                length :30,         // 属性length控制线长
                lineStyle: {       // 属性lineStyle（详见lineStyle）控制线条样式
                    color: 'auto'
                }
            },
            pointer : {
                width : 5
            },
            title : {
                show : true,
                offsetCenter: [0, '-40%'],       // x, y，单位px
                textStyle: {       // 其余属性默认使用全局文本样式，详见TEXTSTYLE
                    fontWeight: 'bolder'
                }
            },
            detail : {
                formatter:'{value}%',
                textStyle: {       // 其余属性默认使用全局文本样式，详见TEXTSTYLE
                    color: 'auto',
                    fontWeight: 'bolder'
                }
            },
            data:[{value: 50, name: '完成率'}]
        },
        {
            name:'预期',
            type:'funnel',
            x: '45%',
            width: '45%',
            itemStyle: {
                normal: {
                    label: {
                        formatter: '{b}预期'
                    },
                    labelLine: {
                        show : false
                    }
                },
                emphasis: {
                    label: {
                        position:'inside',
                        formatter: '{b}预期 : {c}%'
                    }
                }
            },
            data:[
                {value:60, name:'访问'},
                {value:40, name:'咨询'},
                {value:20, name:'订单'},
                {value:80, name:'点击'},
                {value:100, name:'展现'}
            ]
        },
        {
            name:'实际',
            type:'funnel',
            x: '45%',
            width: '45%',
            maxSize: '80%',
            itemStyle: {
                normal: {
                    borderColor: '#fff',
                    borderWidth: 2,
                    label: {
                        position: 'inside',
                        formatter: '{c}%',
                        textStyle: {
                            color: '#fff'
                        }
                    }
                },
                emphasis: {
                    label: {
                        position:'inside',
                        formatter: '{b}实际 : {c}%'
                    }
                }
            },
            data:[
                {value:30, name:'访问'},
                {value:10, name:'咨询'},
                {value:5, name:'订单'},
                {value:50, name:'点击'},
                {value:80, name:'展现'}
            ]
        }
    ]
};
                            
			                      
				                
		 	 
        
	         $('#mix11').css({width:'800px',height:'320px'});
	         var myChart = ec.init($('#mix11')[0]);
	         myChart.setOption(option) ;
		 		

			
 
		 	
		 	 
		}
	}
}); 

 