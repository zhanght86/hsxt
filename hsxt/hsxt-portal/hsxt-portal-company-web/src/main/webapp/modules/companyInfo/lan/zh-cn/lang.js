define(["commSrc/comm"], function () {
	comm.langConfig["companyInfo"] = {
		160456:'邮箱已验证通过',
		106355 : '企业互生号不能为空',
		22000:'操作成功',
		22006 : "客户号不能为空",
		22011:'查询结束时间不能为空',
		22012:'查询开始时间格式错误',
		22013:'查询结束时间格式错误',
		22014:'查询开始时间不能大于查询结束时间',
		22035:'查询开始时间不能为空',
		22036:'企业客户号不能为空',
		22037:'操作员客户号不能为空',
		22038:'法人代表证件类型不能为空',
		22039:'银行账户编号不能为空',
		22043 : "银行卡号不能为空",
		22045 : "银行编号不能为空",
		22046 : "银行卡号错误",
		22047:'申请编号不能为空',
		22048 : "开户行代码不能为空",
		22049 : "开户行名称不能为空",
		22053 : "验证码已过期",
		22052 : "验证码错误",
		33251:'所属省份不能为空',
		33252:'所属城市不能为空',
		30164:'邮箱信息不能为空',
		31044:'企业类型不能为空',
		31045:'企业类型应为2-20个字',
		31046:'成立日期不能为空',
		31047:'成立日期格式不正确',
		31048:'联系电话不能为空',
		31049:'联系电话格式不正确',
		31050:'企业经营范围应为1~300个字',
		31051:'营业期限应为2~50个字',
		31052:'法人证件号码不能为空',
		31053:'身份证格式不正确',
		31054:'护照格式不正确',
		31055:'联系地址应为2~128个字',
		31056:'邮政编码格式不正确',
		31057:'企业安全邮箱格式不正确',
		31058:'联系人授权委托书不能为空',
		31059:'开户银行不能为空',
		31060:'银行账号不能为空',
		31061:'银行账号格式不正确',
		31062:'确认账户不能为空',
		31063:'两次账户输入不一致',
		31064:'企业名称不能为空',
		31065:'企业地址不能为空',
		31066:'联系人姓名不能为空',
		31067:'联系人手机不能为空',
		31068:'企业法人代表不能为空',
		31069:'营业执照注册号不能为空',
		31070:'组织机构代码证号不能为空',
		31071:'纳税人识别号不能为空',
		31072:'法人代表证件正面文件不能为空',
		31073:'法人代表证件反面文件不能为空',
		31074:'营业执照扫描件文件不能为空',
		31075:'组织机构代码证扫描件不能为空',
		31076:'税务登记证扫描件不能为空',
		31077:'企业中文名称应为2~64个字',
		31078:'企业英文名称应为2~64个字母',
		31079:'企业地址应为2~128个字',
		31080:'企业法人代表应为2~20个字',
		31081:'营业执照注册号不正确',
		31082:'联系人应为2~20个字',
		31083:'联系人手机格式不正确',
		31084:'获取企业实名认证状态失败',
		31085:'获取企业信息失败',
		31086:'认证附言不能为空',
		31087:'认证附言应为1~300个字',
		31088:'重要信息变更业务办理申请书不能为空',
		31089:'申请变更原因应为0~300个字',
		31090:'所属地区国家不能为空',
		31091:'所属地区省份不能为空',
		31092:'所属地区城市不能为空',
		31093:'组织机构代码证号为7~20个字',
		31094:"纳税人识别号为7~20个字",
		31095:"请输入验证码",
		31096:"请输入申请变更原因",
		31097:"营业执照注册号为7~20个字",
		31125: "企业已注销,没有交易权限",
		31128: "企业注销申请中,没有交易权限",
		
		160354:"邮件发送失败，请检查邮箱地址",
		idCardTypeEnum : {//证件类型
			1:'身份证',
			2:'护照'
		},
		idCardTypeEnum2 : {//证件类型
			1:'身份证',
			2:'护照'
		},
		bankCardTypeEnum : {//银行卡类型
			1:'储蓄卡',
			2:'信用卡'
		},
		spStatusEnum : {//审批状态
			'0,1':'待审批',
			'2':'审批通过',
			'3':'审批驳回'
		},
		spStatusEnum2 : {//审批状态
			'0':'待审批',
			'1':'待审批',
			'2':'审批通过',
			'3':'审批驳回',
			'4':'审批驳回'
		},
		quickDateEnum : {//快捷日期类别
			'today':'今天',
			'week':'最近一周',
			'month':'最近一月',
		},
		approveStatusEnum : {//审批状态
			'10':'待审批',
			'2':'审批通过',
			'43':'审批驳回'
		},
		bankSubmitSuccess:'快捷支付卡添加成功',
		zyxxSubmitSuccess:'重要信息变更申请提交成功',
		realNameSubmitSuccess:'实名认证信息提交成功',
		confirmDelBank:'确定删除此银行帐户？',
		confirmDelPayBank:'确定删除此快捷支付卡？',
		requestFailedWithCode:'请求失败，错误代码：',
		changeValSame:'您的变更申请内容相同',
		pleaseInputImportInfo:'请填写重要信息',
		notAloneChangeLicenseNo:"不单独提供申请营业执照注册号的重要信息的变更业务。",
		pleaseInputCreNo:'法人证件类型变更,请填入证件号码',
		viewExamplesImg :'查询示例图',
		BankRangeLength 	: "银行卡号应为5~30位",
		timeTermCompare:"营业期限时间不能小于成立时间",
		realNameAuthAppr:'您已于{0}提交了实名认证申请，目前正在处理中，处理需要3个工作日，请耐心等候',
		pleaseSelectQuick : '请选择同意快捷支付服务协议',
		bankNo:'请填入银行卡号',
		bankNoLength:'请输入16-19位银行卡号',
		//托管企业
		changeInfoSubimt3:"重要信息变更申请提交处理期间，货币转银行账户业务、代兑互生币业务、积分投资业务暂无法受理，确认要提交申请？",
		//成员企业
		changeInfoSubimt2:"重要信息变更申请提交处理期间，货币转银行账户业务、代兑互生币业务暂无法受理，确认要提交申请？"
		
	};
});