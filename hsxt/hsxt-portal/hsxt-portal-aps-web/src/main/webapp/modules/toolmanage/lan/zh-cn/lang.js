define(['commSrc/comm'], function(){
	comm.langConfig['toolmanage'] = {
		22000:'操作成功', 
		22035:'查询开始时间不能为空',
		22011:'查询结束时间不能为空',
		22012:'查询开始时间格式错误',
		22013:'查询结束时间格式错误',
		22014:'查询开始时间不能大于查询结束时间',
		36018:'手机格式不正确',
		36034:'电话格式不正确',
		36200:'复核员用户名不能为空',
		36201:'复核员登陆密码不能为空',
		36202:'工具类别不能为空',
		36203:'工具名称不能为空',
		36204:'供应商不能为空',
		36205:'仓库不能为空',
		36206:'批次号不能为空',
		36207:'机器码文件不能为空',
		36208:'入库数量不是有效的数字',
		36209:'进货价不是有效的数字',
		36210:'市场价不是有效的数字',
		36211:'配送方式名称不能为空',
		22069: "业务操作失败,请稍后重试",
		36212:'排序值不能为空',
		36213:'配送方式编号不能为空',
		36214:'配送方式名称长度不能超过64个字',
		36215:'配送说明长度不能超过200个字',
		36216:"仓库ID不能为空",
		36217:"仓库名称不能为空",
		36218:"仓库管理员角色不能为空",
		36219:"手机号码不能为空",
		36220:"仓库地址不能为空",
		36221:"仓库名称应为1~20个字",
		36222:"仓库地址应为1~128个字",
		36223:"备注应为0~300个字",
		36224:"机器码/序列号不能为空",
		36225:"工具不存在或不是未使用状态",
		36226:"登记类型不能为空",
		36227:"批次号不能为空",
		36228:"领用说明应为0~256个字",
		36229:"报损说明应为0~256个字",
		36230:"领用人应为1~64个字",
		36231:"领用人不能为空",
		36232:"入库批次号不能为空",
		36233:"应存数量不能为空",
		36234:"盘库数量不能为空",
		36235:"抽检数量不能为空",
		36236:"合格数量不能为空",
		36237:"合格率不能为空",
		36238:"供应商编号不能为空",
		36239:"未找到对应的供应商信息",
		36240:"供应商名称不能为空",
		36241:"公司名称不能为空",
		36242:"业务联系人不能为空",
		36243:"供应商地址不能为空",
		36244:"手机号码不能为空",
		36245:"供应商名称应为1~64个字",
		36246:"公司名称应为1~256个字",
		36247:"业务联系人应为1~64个字",
		36248:"供应商地址应为1~255个字",
		36249:"办公电话应为0~20个字",
		36250:"手机号码不能超过20个字",
		36251:"传真不能超过20个字",
		36252:"邮箱不能超过20个字",
		36253:"网址不能超过32个字",
		36254:"备注应为0~300个字",
		22047:"申请编号不能为空",
		36255:"生成数量不能为空",
		36256:"KSN码1附件不能为空",
		36257:"KSN码2附件不能为空",
		36258:"KSN码3附件不能为空",
		36259:"序列号附件不能为空",
		36260:"KSN码1附件不是TXT格式文件",
		36261:"KSN码1附件格式不正确",
		36262:"KSN码1附件内容为空",
		36263:"KSN码2附件不是TXT格式文件",
		36264:"KSN码2附件格式不正确",
		36265:"KSN码2附件内容为空",
		36266:"KSN码3附件不是TXT格式文件",
		36267:"KSN码3附件格式不正确",
		36268:"KSN码3附件内容为空",
		12207: "批次中有设备序列号已经导入",
		12209:"设备序列号列表中有重复的数据",
		36269:"序列号附件不是TXT格式文件",
		36270:"序列号附件格式不正确",
		36271:"序列号附件内容为空",
		36272:"附件行数不一致，请检查文件.",
		36275:"仓库配送区域不能为空.",
		36277:"导出说明应为0~300个字.",
		36278:"卡样名称不能为空",
		36279:"卡样缩略图不能为空",
		36280:"卡样源文件不能为空",
		36281:"申请操作员不能为空",
		36282:"卡样名称应为1~20个字",
		36283:"卡样标识不能为空",
		36284:"卡样状态不能为空",
		36285:"卡样确认书样本模板不能为空",
		12178:"该批次号不存在",
		isActiveEnum:{
			'Y':'启用',
			'N':'禁用'
		},
		isStopEnum:{
			'Y':'否',
			'N':'是'
		},
		enableStatus:{
			0:'禁用',
			1:'启用',
			2:'禁用'
		},
		verificationMode:{
			'1':'密码验证',
			'2':'指纹验证',
			'3':'刷卡验证'
		},
		categoryCodeAll:{
			'P_POS':'POS机',
			'POINT_MCR':'积分刷卡器',
			'CONSUME_MCR':'消费刷卡器',
			'TABLET':'互生平板',
			'NORMAL':'普通工具',
			'GIFT':'赠品',
			'SUPPORT':'配套产品',
			'P_CARD':'互生卡'
		},
		categoryTypeEnum:{
			'P_POS':'POS机',
			'POINT_MCR':'积分刷卡器',
			'CONSUME_MCR':'消费刷卡器',
			'TABLET':'互生平板',
			'NORMAL':'普通工具',
			'GIFT':'赠品',
			'SUPPORT':'配套产品',
			'P_CARD':'互生卡'
		},
		categoryTypeEnumFx:{
			'POS机':'P_POS',
			'积分刷卡器':'POINT_MCR',
			'消费刷卡器':'CONSUME_MCR',
			'互生平板':'TABLET',
			'普通工具':'NORMAL',
			'赠品':'GIFT',
			'配套产品':'SUPPORT',
			'互生卡':'P_CARD'
		},
		
		categoryTypeRkEnum:{
			'P_POS':'POS机',
			'POINT_MCR':'积分刷卡器',
			'CONSUME_MCR':'消费刷卡器',
			'TABLET':'互生平板',
			'NORMAL':'普通工具',
			'GIFT':'赠品',
			'SUPPORT':'配套产品'
		},
		//库存预警-工具类别
		categoryTypes:{
			'P_POS':'POS机',
			'POINT_MCR':'积分刷卡器',
			'CONSUME_MCR':'消费刷卡器',
			'TABLET':'互生平板',
			'NORMAL':'普通工具',
			'GIFT':'赠品',
			'SUPPORT':'配套产品'
		},
		//库存统计-工具类别
		categoryTypes_kctj:{
			'P_POS':'POS机',
			'POINT_MCR':'积分刷卡器',
			'CONSUME_MCR':'消费刷卡器',
			'TABLET':'互生平板'
		},
		buyRules : {
			0: '不可购买',
			1: '仅成员企业可 ',
			2: '仅托管企业可购买',
			3: '托管和成员企业可购买 ',
			4: '不限制购买'
		},
		//预警状态
		warningState:{
			'true': '预警',
			'false': '正常 '
		},
		toolStatues:{
			0:'未上架',
			1:'已上架'
		},
		applyType:{
			1:'上架审批(包含价格调整)',
			2:'下架审批'
		},
		
		ratifyStatues:{
			0:'价格待审批',
			1:'价格审批通过',
			2:'价格审批驳回',
			3:'下架待审批',
			4:'下架审批通过',
			5:'下架审批驳回',
			'':''
		},
		addToolResult:"新增工具成功！",
		modifyToolResult:"修改工具成功！",
		xiajiaToolResult:"下架申请提交成功",
		priceUpateResult:"审批成功",
		xiugaiPriceResult : "修改价格成功",
		noPriceUpdate:"未修改工具信息",

		//是否默认
		isDefaultEnum:{
			'true': '是',
			'false': '否 '
		},
		//使用状态
		useStatusEnum : {
			0: '未使用',
			1: '已使用',
			2: '已报损',
			3: '已领用',
			4: '已返修',
			5: '已报废'
		},
		//刷卡器类型
		mcrTypeEnum : {
			1: '积分刷卡器',
			2: '消费刷卡器'
		},
		//入库状态
		storeStatusEnum : {
			0: '待入库',
			1: '已入库'
		},
		noDaoChuJl:'没有导出记录数据',
		emailFormError:'邮箱格式不正确',
		mobileFormError:'手机格式不正确',
		websiteFormError:'网址格式不正确',
		faxFormError:'传真格式不正确',
		phoneFormError:'办公电话格式不正确',
		cjQuantityMax : '抽检数量不能大于入库数量',
		cjQuantityMin : '抽检数量不能小于0',
		scQuantityMin : '生成数量不能小于1',
		cjPassQuantityMax : '合格数量不能大于入库数量',
		cjPassQuantityMin : '合格数量不能小于0',
		passRateError : '合格数量不能大于抽检数量',
		uploadOk : '上传成功.',
		deleteOk : '删除成功.',
		confirmDel : '确认要删除此记录？',
		validNumber : '不是有效数字.',
		validDigitsNumber : '不是有整数.',
		requestFailed:'请求失败...',
		requestFailedWithCode:'请求失败，错误代码：',
		isNotZipFile:'不是有效的源文件格式',
		isNotDocFile:'不是有效的卡制作确认文件格式',
		noToolPic:"工具图片不可以为空!",
		hangUp:"挂起",
		optHangUp:"您正在挂起工具下架审批业务的工单！",
		workTaskHangUp:"工单挂起成功",
		refuseAccept:"拒绝受理",
		optRefuseAccept:"您正在拒绝受理工具下架审批业务的工单！",
		workTaskRefuseAcceptSucc:"工单拒绝受理成功",
		optRefusePriceAccept:"您正在拒绝受理工具价格审批业务的工单！",
		optHangPriceUp:"您正在挂起工具价格审批业务的工单！",
		36274:"工具图片不能为空!",
		failToolPicUpload:"工具图片上传失败!",
		isNotToolPic:"图片类型必须是bmp，jpeg，jpg、png中的一种",
		priceNumber:"请输入数字",
		warningValueDigits:"请输入整数",
		toolproductName:"工具名称不可以为空",
		tooltoolCategory:"工具类别不可以为空",
		toolprice:"价格不可以为空",
		toolunit:"计量单位不可以为空",
		maxlength:"字数不超过300字",
		shenpimaxlength:"审批信息应为0~300个字",
		remarkLength:"复核意见最大不超过300个字",
		apprPassWordIsNotNull:"复核员登陆密码不可以为空",
		apprUserNameIsNotNull:"复核员用户名不可以为空",
		12213 :'工具修改失败',
		12214 :'工具产品名称已存在'
	}
});