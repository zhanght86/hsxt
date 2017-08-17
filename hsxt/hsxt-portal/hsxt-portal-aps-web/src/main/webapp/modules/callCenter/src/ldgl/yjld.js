define(['text!callCenterTpl/ldgl/yjld.html'], function(yjldTpl){
	return {
		showPage : function(){
			$('#busibox').html(_.template(yjldTpl));
			/*日期控件*/
			$("#timeRange_start").datepicker({
				dateFormat : 'yy-mm-dd',
				onSelect : function(dateTxt, inst){
					var d = dateTxt.replace('-', '/');
					$("#timeRange_end").datepicker('option', 'minDate', new Date(d));	
				}
			});
			$("#timeRange_end").datepicker({
				dateFormat : 'yy-mm-dd',
				onSelect : function(dateTxt, inst){
					var d = dateTxt.replace('-', '/');
					$("#timeRange_start").datepicker('option', 'maxDate', new Date(d));	
				}
			});
			/*end*/	
			
			if (navigator.userAgent.indexOf("MSIE 8.0") > 0) {
				//已接来电历史
				if(comm.getCallCache('yjld_bd')!='yes'){
					Test.attachEvent("JS_Evt_GetCallRecordList_Complete", GetCallRecordList_Complete);
            		comm.setCallCache('yjld_bd','yes')
            	}
			}
			var gridObj;
			//已接来电
			function GetCallRecordList_Complete(ret,id,jsons) {
				if(ret==1) {
					//comm.alert("已接来电" + jsons);
					//json=jsons.CallRecordList;
					if($.parseJSON(jsons).resultCode==0){
						$("#searchTable").find("tbody").children().remove();
						$("#searchTable_pt_outTab").find('td').remove();
						$("#searchTable_pt_outTab").attr('style','min-width: 666px; width: 1030px;');
						$("#searchTable_pt_outTab").find('tr').append("<td style='text-align:center'>未找到符合条件的数据</td>");
					}else{
						gridObj = $.fn.bsgrid.init('searchTable', {
							//url : comm.domainList['local']+comm.UrlList['tgqycsyw'],
							// autoLoad: false,
							pageSizeSelect: true,
							pageSize: 10,
							stripeRows: true,  //行色彩分隔
							displayBlankRows: false,   //显示空白行
							localData: comm.isEmpty($.parseJSON(jsons).CallRecordList) ? null : $.parseJSON(jsons).CallRecordList,
							operate: {
								//收听
								add: function (record, rowIndex, colIndex, options) {
									var link1 = '';
									if(7==colIndex){
										link1 = $('<a data-type="play">收听</a> ').click(function (e) {
											//收听录音
											var result = Test.JS_PlayVoc(Test.JS_GetUserNumByMac(Test.JS_GetMac()), record.File);
											if (result == 1) {
												comm.alert("来电留言收听" + record.File);
												$("#searchTable a[data-type=play]").addClass("none");
												$("#searchTable tr:nth-child("+(rowIndex+1)+")").find("a[data-type=stop]").removeClass("none");
												$("#searchTable a[data-type=download]").addClass("none");
											} else {
												comm.alert("收听失败" + record.File);
											}
										});
									}	
									return link1;
								},
								//停止
								edit: function (record, rowIndex, colIndex, options) {
									var link1 = '';
									if(7==colIndex){
										link1 = $('<a data-type="stop" class="none">停止</a>').click(function (e) {
	
											var result = Test.JS_StopPlay(Test.JS_GetUserNumByMac(Test.JS_GetMac()), record.File);
											if (result == 1) {
												comm.alert("留言收听结束" + record.File);
												$("#searchTable a[data-type=stop]").addClass("none");
												$("#searchTable a[data-type=play]").removeClass("none");
												$("#searchTable a[data-type=download]").removeClass("none");
											} else {
												comm.alert("停止收听失败" + record.File);
											}
										});
									}
									return link1;
								},
								//下载
								detail: function (record, rowIndex, colIndex, options) {
									var link1 = '';
									if(7==colIndex){
										link1 = $('<a data-type="download">下载</a>').click(function (e) {
											var result = Test.JS_LoadFile(record.File);
											if (result > 0) {
												comm.alert("文件下载成功");
											}
										});
									}	
									return link1;
								},
								del : function(record, rowIndex, colIndex, options){
									var val = '';
									var dur = record.Duration;
									if(5==colIndex && null!=dur && ''!=dur){
										val = comm.formatSeconds(dur);
									}
									var file = record.File;
									if(6==colIndex && null!=file && ''!=file){
										var name = file.split('\\');
										var v = name[name.length-1];
										val = "<span title='"+v+"'>"+v+"</span>";
									}
									return val;
								}
							}
						});
						//移除排序字段栏出现的无效箭头
						$("#yjld_startTime").find("a").remove();
					}
				}
			}
			$.fn.bsgrid.init('searchTable', {
				localData: null
			});
			//移除排序字段栏出现的无效箭头
			$("#yjld_startTime").find("a").remove();
			
			$("#yjld_search_btn").click(function(){
				var startTime=$("#timeRange_start").val();
				var entTime=$("#timeRange_end").val();
				var zx=$("#yjld_zx_input").val();
				var zjhm=$("#yjld_zjhm_input").val();
				Test.JS_GetCallRecordList(startTime,entTime,zx,zjhm,"");
			});
		}
	}
});