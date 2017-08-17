define(['commSrc/comm'], function(){
	comm.langConfig['contractManage'] = {
		12000	: "参数不能为空",
		12661	: "保存合同模板失败",
		12663	: "启用合同模板失败",
		12664	: "停用合同模板失败",
		12666	: "合同发放失败",
		12667	: "生成合同失败",
		
		36401	: "企业互生号不能为空",

		36402	: "企业客户号不能为空",

		36403	: "企业客户名称不能为空",

		36404	: "企业客户类型不能为空",

		36405	: "启用资源类型不能为空",

		36406	: "操作员客户号不能为空",

		36407	: "合同编号不能为空",

		36408	: "唯一识别号不能为空",

		36409	: "模板名称不能为空",
		
		36400	: "模板名称输入长度超长",

		36410	: "模板内容不能为空",

		36411	: "模板编号不能为空",

		36412	: "审批结果不能为空",

		36413	: "证书编号不能为空",

		12713: "存在同类型处于已启用状态或停用待复核状态的模版",
		
		sendRemarkInvalid	: "发放说明不能为空",
		
		recRemarkInvalid	: "收回说明不能为空",
		
		isPrint :{
			0 : '未打印',
			1 : '已打印'
		},
		isGiveOut :{
			'false' : '未发放',
			'true' : '已发放'
		},
		print:'打印',
		printWindow:'打印窗口',
		sealWindow:'盖章窗口',
		//是否盖章
		isSeal:{
			0	:	'未盖章',
			1	:	'已盖章',
			2	:	'已失效',
			3	:	'需重新盖章'
		},
		custType:{
			2	:	'成员企业',
			3	:	'托管企业',
			4	:	'服务公司'
		},
		templetStatusEnum : {
			0	:	'已启用',
			1	:	'待启用',
			2	:	'待复核'
		},
		resTypeEnum : {
			1	:	'首段资源',
			2	:	'创业资源',
			3	:	'全部资源',
			4	:	'正常资源',
			5	:	'免费资源'
		},
		tSelector : {
			1	:	'首段资源',
			2	:	'创业资源',
			3	:	'全部资源'
		},
		bSelector : {
			4	:	'正常资源',
			5	:	'免费资源'
		},
		//盖章操作
		sealOpt:{
			0:'未盖章',
			1:'已盖章',
			3:'须重新盖章'
		},
		sealStatus:{
			0:'未盖章',
			1:'重新盖章',
		}
	};
});