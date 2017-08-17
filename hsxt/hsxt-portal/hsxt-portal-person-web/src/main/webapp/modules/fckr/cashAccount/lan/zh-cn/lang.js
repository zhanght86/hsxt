define(
		[ "commSrc/comm" ],
		function() {
			comm.langConfig["cashAccount"] = {
				// 错误毛描述
				22000 : '操作成功',
				22004 : "token令牌无效",
				22006 : "客户号不能为空",
				22007 : "登录token不能为空",
				30004 : "客户名不能为空",
				30002 : "交易密码不能为空",
				30011 : "请输入整数",
				30012 : "最多输入8位数",
				30159 : "重要信息变更期间不能进行银行转账操作",
				30160 : "货币转银行账户操作必须先实名注册",
				30161 : "请至安全设置菜单设置交易密码",
				30114 : "转出金额为不小于100.00的整数，请重新输入！",
				30014 : "转出货币金额不能为空",
				30016 : "转出货币金额数字错误",
				30113 : "转出货币数量大于账户余额 ",
				30162 : "所属地区城市不能为空",
				160360 : "交易密码不正确",
				160415 : "交易密码未设置",
				160146 : "数据解密错误",
				160411 : "交易密码连续出错导致用户锁定",
				160309 : "非企业管理员不能交易",
				30110 : "银行账号不能为空",
				43262 : "未查询到原业务数据,订单已经完成",
				43205  :"重要信息变更期间,不允许货币转银行",
				43206 : "货币转银行失败",
				43263 : "货币转银行失败,账户余额不足",
				43272 : "货币转银行失败,超过单日允许最大转账次数",
				43271 : "货币转银行失败,转账金额超出单日最大限额",
				43270 : "货币转银行失败,转账金额大于单笔最大金额",
				43269 : "货币转银行失败,转账金额小于单笔最小金额",
				43268 : "货币转银行失败,银行转账业务已被禁止",
				43259 : "货币转银行失败,转帐客户名与帐户名不一致 ",
				43275 : "货币转银行失败,未查询到客户银行信息",
				43201 : "货币转银行失败,参数为空",
				moneyTransferBanks : "货币转银行",
				dealPwdLength : "请输入{0}位交易密码",
				currencyBankMaxlength : "转出的货币金过大",
				confirmCurrencyBank : "确认货币转银行操作",
				randomTokenInvalid : "获取随机报文失败，请重试",
				pleaseBindBankCard : "货币转银行业务需先进行银行卡绑定。请在 “我的互生卡->卡信息绑定->银行卡绑定” 中添加银行账号信息!",
				pleaseSelectQuick : '请选择同意快捷支付服务协议',
				balance_insufficient : "货币账户余额不足",
				pointBlanceGreaterTips : "申请投资积分数大于可用积分数，请重新输入",
				transfer_max_amount : "转出金额不能大于单笔最大限额({0})",
				day_transfer_max_amount_error:"单日已转金额({0})、转出金额({1})之和超出单日最大限额({2})",
				pleaseBindBankCard : "请先绑定银行卡，再做转账功能",
				accountManage_selectBandQuickBank : '请先绑定快捷支付的银行卡',
				accountManage_sendSmsSucc : '短信验证码发送成功',
				accountManage_quickPaySucc : '快捷支付成功',
				accountManage_quickPayFail : '快捷支付失败',
				accountManage_quickPayProcessing : '快捷支付处理中',
				hsbzhye1:"您的当前互生币账户余额为0，消费积分业务已无法使用，请及时兑换互生币，以确保消费积分业务正常使用。",
				hsbzhye2:"您的当前互生币账户余额不足，请及时兑换互生币，以确保消费积分业务正常使用。",
				hsbzhye3:"您的当前互生币账户余额偏少，请择时兑换互生币，以确保消费积分业务正常使用。",
				hsbzhye4:"您的互生币账户余额充足。",
				160360 : "交易密码错误",
				160150 : "交易密码错误",
				22006 : "获取验证码失败",
				13201 : "获取验证码失败",
				22007 : "付款失败",
				15102 : "验证码不正确，请点击获取验证码",
				30024 : "验证码不正确",
				30128 : "验证码已过期",
				13206 : "未查询到原业务数据",
				detailSearch : {
					// 资明细查询
					quickDateRequired : "请至少选择一个科目",
					quickDateMinlength : "请至少选择一个科目",
					beginDateRequired : "请输入开始时间",
					beginDateError : "开始时间输入有误",
					beginDateEnd : "开始日期不能大于结束日期",
					endDateRequired : "请输入结束时间",
					endDateError : "结束时间输入有误",
					endDateBegin : "结束日期不能小于开始日期"
				},
				// 业务类别
				businessTypeEnum : {
					"0" : "全部",
					"1" : "收入",
					"2" : "支出"
				},
				transResult : {
					'-1' : '未提交银行',
					'1000' : '提现成功',
					'1001' : '提现失败',
					'1002' : '银行处理中',
					'1003' : '被退票'
				},
				// 交易类型
				transTypeEnum : {
					"M61000":"积分转货币",
					"M32000":"互生币转货币",
					"L13000":"货币转银行",
					"L13100":"货币转银行撤单",
					"L13200":"货币转银行失败转入",
					"L33000":"货币转银行手续费",
					"L33200" :"货币转银行失败转入",
					"K13000":"货币兑换互生币",
					"X10630" : "系统调账转出",
					"X10530" : "系统调账转入",
					"S72000" : "平台业务扣款"
				}
			}
		});