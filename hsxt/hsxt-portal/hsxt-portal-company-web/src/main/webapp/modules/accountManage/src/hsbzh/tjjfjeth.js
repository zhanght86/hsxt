﻿define(['text!accountManageTpl/census/DetailList_3.html'], function(tpl){
	return {
		showPage : function(){
			$('#busibox').html(tpl);
			var self = this,
			searchTable = null;
			
			searchTable = $.fn.bsgrid.init('detailList_3_table', {
			  //url: '',
			  localData: [{
							"jylsh":"W1111102156489645664894234",
							"jysj":"2014-08-28 10:11:53",
							"jylx":"xxxxxxxxxxxxxxxx",
							"hskh":"06032010000",
							"xfje":"194.2",
							"jfjekc":"194.2",
							"tkje":"194.2",
							"jfjeth":"194.2"
						},
						{
							"jylsh":"W1111102156489645664894234",
							"jysj":"2014-08-28 10:11:53",
							"jylx":"xxxxxxxxxxxxxxxx",
							"hskh":"06032010000",
							"xfje":"194.2",
							"jfjekc":"194.2",
							"tkje":"194.2",
							"jfjeth":"194.2"
						},
						{
							"jylsh":"W1111102156489645664894234",
							"jysj":"2014-08-28 10:11:53",
							"jylx":"xxxxxxxxxxxxxxxx",
							"hskh":"06032010000",
							"xfje":"194.2",
							"jfjekc":"194.2",
							"tkje":"194.2",
							"jfjeth":"194.2"
						}],
			 
			  //不显示空白行
			  displayBlankRows: false,
			  //不显示无页可翻的提示
			  pageIncorrectTurnAlert: false,
			  //隔行变色
			  stripeRows: true,
			  //不显示选中行背景色
			  rowSelectedColor: false,
			  pageSize: 10
		  });
		},
	};
});