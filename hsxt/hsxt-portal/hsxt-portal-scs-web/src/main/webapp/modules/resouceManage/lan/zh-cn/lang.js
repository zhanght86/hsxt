﻿define(["commSrc/comm"],function(){
	comm.langConfig['resouceManage'] ={
		//共用 
		22000:"操作成功",
		22001:"操作失败",
		22003:"参数错误",
		22004:"token令牌无效",
		32525:"成员企业客户号不能为空",
		32526:"成员企业互生号不能为空",
		32527:"成员企业名称不能为空",
		32528:"成员企业状态不能为空",
		32529:"转现银行不能为空",
		32530:"申请原因应为~300个字",
		32531:"企业实地考察报告不能为空",
		32532:"企业双方声明文件不能为空",
		0:"处理成功",
		requestError: '请求出错，请重试！',
		begin_Date: '请输入开始日期',
		end_Date : '请输入结束日期',
		digits: '请输入整数',
		maxlength: '最多输入{0}个字',
		kjrq: '请选择快捷日期',
		ywlb:'请选择业务类别',	
		bankIsNull:'请选择银行账户',
		investigationReportIsNull:'企业实地考察报告不能为空',
		declarePicIsNull:'企业双方声明文件不能为空',
		applyReasonIsNull:'申请原因不能为空',
		//积分活动状态
		member_status:{
			1:'正常',
			2:'预警',
			3:'休眠',
			4:'长眠',
			5:'已注销',
			6:'申请停止积分活动中',
			7:'停止积分活动',
			8:'注销申请中'
		}, 
		quickDateEnum : {
			1 : "今天",
			2 : "近一周",
			3 : "近一月"
		},
		//成员企业状态
		cy_member_status:{
			1:'正常',
			2:'预警',
			3:'休眠',
			4:'长眠',
			5:'已注销',
			8:'注销办理中'
		},
		//实名认证状态
		realNameAuthSatus:{
			1:'已认证',
			0:'未认证'
		},
		//参与积分状态
		participationScoreEnum:{
			2:"参与积分",
			1:"停止积分"
		}
	}
});