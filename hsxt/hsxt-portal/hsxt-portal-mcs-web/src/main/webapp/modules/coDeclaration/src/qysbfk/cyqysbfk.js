define(['text!coDeclarationTpl/qysbfk/cyqysbfk.html',
        'coDeclarationDat/qysbfk/cyqysbfk',
	'commDat/common',
        'coDeclarationLan'],function(cyqysbfkTpl, dataModoule,commAjax){
	var mcs_cyqysbfk = {
		bgGrid:null,
		showPage: function () {
			$('#cx_content_list').empty().html(_.template(cyqysbfkTpl));
			$('#cx_content_list').removeClass('none');
			$('#cx_content_detail').addClass('none');

			//时间控件		    
			comm.initBeginEndTime('#search_startDate', '#search_endDate');

			comm.initSelect("#quickDate",comm.lang("common").quickDateEnum);
			$("#quickDate").change(function(){
				comm.quickDateChange($(this).attr("optionvalue"),'#search_startDate', '#search_endDate');
			});

			$('#queryBtn').click(function () {
				if (!comm.queryDateVaild('fh_search_form').form()) {
					return;
				}
				mcs_cyqysbfk.query();
			});
		},
		/**
		 * 查询动作
		 */
		query: function () {
			var jsonParam = {
				search_resNo: $("#search_resNo").val(),
				search_entName: $("#search_entName").val(),
				search_startDate: $("#search_startDate").val(),
				search_endDate: $("#search_endDate").val(),
				search_custType: 2
			};
			mcs_cyqysbfk.bgGrid = dataModoule.findDeclareReviewCodeList(jsonParam, mcs_cyqysbfk.detail, mcs_cyqysbfk.orderOpt);
		},
		/**
		 * 查看动作
		 */
		detail: function (record, rowIndex, colIndex, options) {
			if (colIndex == 6) {
				return comm.getNameByEnumId(record['status'], comm.lang("coDeclaration").declarationStatusEnum);
			} else if (colIndex == 7) {
				return $('<a id="' + record['applyId'] + '" >审批</a>').click(function (e) {
					$("#applyId").val(record['applyId']);
					$("#custType").val("2");
					$('#cx_content_list').addClass('none');
					$('#cx_content_detail').removeClass('none');
					$('#ckxq_sbxx').click();
				}.bind(this));
			} else if (colIndex == 8) {
				return $('<a>' + comm.lang("coDeclaration").refuseAccept + '</a>').click(function (e) {
					comm.i_confirm(comm.lang("coDeclaration").secMRefuseAccept, function () {
						commAjax.workTaskRefuseAccept({bizNo: record.applyId}, function (resp) {
							mcs_cyqysbfk.query();
							comm.yes_alert(comm.lang("coDeclaration")[22000]);
						});
					});
				});
			}
		},
		/**
		 * 工单操作
		 */
		orderOpt: function (record, rowIndex, colIndex, options) {
			if (colIndex == 8) {
				return comm.workflow_operate(comm.lang("coDeclaration").hangUp, comm.lang("coDeclaration").secMHangUp, function(){
					require(["workoptSrc/gdgq"],function(gdgq){
						gdgq.guaQi(record.applyId,mcs_cyqysbfk.bgGrid);
					});
				});
			}
		}
	};
	return mcs_cyqysbfk;
}); 
