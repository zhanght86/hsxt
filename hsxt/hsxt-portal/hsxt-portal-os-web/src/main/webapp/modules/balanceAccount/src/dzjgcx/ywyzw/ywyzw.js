define([ 'text!balanceAccountTpl/dzjgcx/ywyzw/ywyzw.html',
		'balanceAccountDat/accountResult', 'balanceAccountLan' ], function(
		ywyzwTpl, accountResultDat) {
	return {

		showPage : function(tabid) {
			$('#main-content > div[data-contentid="' + tabid + '"]').html(
					_.template(ywyzwTpl));

			var self = this;
			self.pageQuery();
			/* 下拉列表 */
			$("#ywyzw_tb_dzjg").selectList({
				borderWidth : 1,
				borderColor : '#CCC',
				options : [ {
					name : '所有',
					value : '',
					selected : true
				}, {
					name : '平衡',
					value : '0'
				}, {
					name : '不平衡',
					value : '1'
				} ]
			}).change(function(e) {
				console.log($(this).val());
			});
			/* end */

			/* 日期控件 */
			$("#ywyzw_beginDate").datepicker({
				dateFormat : 'yy-mm-dd'
			});
			$("#ywyzw_endDate").datepicker({
				dateFormat : 'yy-mm-dd'
			});
			/* end */
			var gridObj = $.fn.bsgrid.init('ywyzw_ql', {
				// url : comm.domainList['local']+comm.UrlList['tgqycsyw'],
				// autoLoad: false,
				pageSizeSelect : true,
				pageSize : 100,
				stripeRows : true, // 行色彩分隔
				displayBlankRows : false, // 显示空白行
				localData : json
			});

			/* end */

		},
		/** 分页查询 */
		pageQuery : function() {
			var self = this;
			var type = $(".selectList-active").attr("data-Value");
			// 查询参数
			var queryParam = {
				"beginDate" : $("#ywyzw_beginDate").val(),
				"endDate" : $("#ywyzw_endDate").val(),
				"tcResult" : type != undefined ? type : ""
			};
			accountResultDat.businessAndAcList("ywyzw_ql", queryParam,
					function(record, rowIndex, colIndex, options) {

						if (colIndex == 9) {
							return comm.getNameByEnumId(record['tcResult'], {
								0 : '平衡',
								1 : '不平衡'
							});
						}

					}.bind(self));
		}
	};
});