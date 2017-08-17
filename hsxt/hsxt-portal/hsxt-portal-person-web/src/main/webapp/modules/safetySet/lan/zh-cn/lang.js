﻿define(["commSrc/comm"], function () {
	comm.langConfig["safetySet"] = {
		22000:'操作成功', 
		22004 : "token令牌无效",
		22005:"互生号不能为空",
		22006 : "客户号不能为空",
		22007 : "登录token不能为空",
		30002:"设置交易密码不能为空",
		30004 : "客户名不能为空",
		22008 : "randomToken不能为空",
		30115:"密保问题不能为空",
		30163:"密保问题答案长度错误",
		30116:"密保问题答案不能为空",
		30168:"交易密码只能输入数字类型",
	    30121:"两次登录密码不相等",
	    30117:"原密码不能为空",
	    30118:"新密码不能为空",
	    30119:"新密码确认不能为空",
	    30120:"交易密码确认不能为空",
	    30021:"交易密码长度不符合规范",
	    30122:"两次交易密码不相等",
	    30023:"确认交易密码不能为空",
		160105:"报文校验非法",
		160106:"会话非法",
		22003:"参数错误",
		160112:"未设置预留信息",
		160102:"用户不存在",
		160109:"证件号码或者证件类型不正确",
		30017:"两次密码不相等",
		30020:"两次交易密码不相等",
		160110:"交易密码不正确",
		30022:"验证码不能为空 ",
	    160108:"登录密码不正确",
	    160144:"证件号码不正确",
	    160145:"姓名不正确",
	    160202:"持卡人信息不存在",
	    160146:"数据解密错误",
	    160360:"交易密码错误",
	    30019:"登录密码长度不符合规范",
	    160359:"登录密码错误",
	    160355:"参数不能为空",
	    30024:"验证码错误",
	    30128:"验证码已过期",
	    30032:"设置预留信息长度不符合",
	    160403:"消费者交易密码身份验证token已过期",
	    160386: "更新密保失败",
	    160443:"未通过实名认证,不能重置交易密码！",
	    randomTokenInvalid:"获取随机报文失败，请重试",
	    setDelPasswordMinlength:"请输入{0}位的数字",
	    pwdQuestionAffirmInstall  : '是否确认保存密保信息',
	    savePwdQuestionSuccess:'保存密保问题成功！',
	    savePwdSuccess:'登录密码修改成功！',
	    isSetDelPassword:'确认设置吗?',
	    setDelPasswordAffirm:'是否确认提交修改交易密码操作?',
	    setPwdAffirm:'确定修改吗?',
	    setDealPassSuccess  : '设置交易密码成功',
	    modifyDealPassSuccess : '修改交易密码成功',
	    pwdDigits : "只能输入数字类型!",
	    OriginalNewPwdUnequalTo:"新密码不能与原始密码一样",
	    pwd_number_repeated_error:"密码不规范:数字不能全部重复 。如111111、222222",
		pwd_increase_error:"密码不规范:数字不能顺增或顺降。例123456、654321",
		trad_pwd_number_repeated_error:"密码不规范:数字不能全部重复 。如11111111、22222222",
		trad_pwd_increase_error:"密码不规范:数字不能顺增或顺降。例12345678、87654321",
		trad_pwd_identical_error:"新密码不能与原始密码相同",
	    modifyPassword : {
			//修改登录密码
			required : "请输入原登录密码",
			required1 : "请输入新的登录密码",
			required2 : "请再次输入新的登录密码",
			maxlength : "密码最大长度为{0}位，请重新输入",
			minlength : "密码最小长度为{0}位，请重新输入",
			digits : "只能输入数字类型!",
			equal : "两次密码输入不一致，请重新输入",
			unEqual : "新密码和旧密码相同",
			affirmInstall  : '确认设置吗？',
			loginPwdChangesSucc : '登录密码修改成功',
			loginPwdChangesFail : '旧密码验证失败!',
			pwdChangesFail      : '密码修改失败'
		},
		setReserveInfo : {
			//设置预留信息
			required : "请输入预留信息",
			minlength : "预留信息不能小于{0}个汉字",
			maxlength : "预留信息不能大于{0}个汉字",
			ok        : "设置预留信息成功!",
			error     : "设置预留信息失败!"
		},
		setDelPassword : {
			//设置交易密码
			required : "请输入交易密码",
			required2 : "请再次输入交易密码",
			maxlength : "最多只能输入{0}位，请重新输入",
			minlength : "请输入{0}位数字",
			digits : "只能输入数字类型!",
			equal : "两次输入密码不一致，请重新输入",
			affirmInstall  : '确认设置吗？',
			setDealPassOk  : '设置交易密码成功'
		},
		setPasswordQuestion : {
			//设置密保问题
			required : "请选择密保问题",
			required2 : "请输入密保答案",
			minlength : "密保答案不能小于{0}个字",
			maxlength : '密保答案不能超过{0}个字',
			affirmInstall  : '确认设置吗？',
			setUpQuestionSuccess:'设置密保问题成功！',
			setUpQuestionFail  : '设置密保问题失败！'
		},
		modReserveInfo : {
			//修改预留信息
			modReserveInfoRequest : "请输入预留信息",
			modReserveInfoMaxlength : "预留信息不能大于{0}个汉字",
			affirmInstall  : '确认设置吗？',
			changeInformationSucc  :  '修改预留信息成功',
			changeInformationFail  :   '修改预留信息失败'
		},
		
		modifyDealPassword : {
			//修改交易密码
			required : "原密码不能为空",
			required1 : "请输入新交易密码",
			required2 : "请再次输入交易密码",
			maxlength : "密码最大长度为8位，请重新输入",
			minlength : "密码最小长度为8位，请重新输入",
			digits : "只能输入数字类型!",
			equal : "两次密码输入不一致，请重新输入",
			affireChangesFlag :"确认修改吗？",
			succChanges       : "修改成功",
			failChanges       : "修改失败"
		},
		resetDelPassword : {
			// 重置  功能
			requiredName : "请输入您通过实名认证的姓名",
			requiredCreNo : "请输入您通过实名认证的的证件号码",
			requiredPwd : "请输入6位登录密码",
			requiredCode : "请输入验证码!",
			digits : "请输入正确的登录密码",
			remote : "验证码输入错误",
			codeLength : "请输入正确的验证码",
			resetPasswordSucceed  : "重置交易密码成功"
		}
	}
});