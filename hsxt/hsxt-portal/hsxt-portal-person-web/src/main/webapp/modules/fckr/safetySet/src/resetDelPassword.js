﻿define(["text!fckr_safetySetTpl/resetDelPassword.html", 
        "text!fckr_safetySetTpl/resetDelPassword2.html"], function (tpl, tpl2) {
	var resetDelPassword = {
		checkToken:null, //实名验证码所用的token
		resetToken:null, //重置交易密码所用的token
		resultToken:null, //接收实名验证码通过随机码
		_dataModule : null,
		show : function(dataModule){
			var self=this;
			//加载页面
			$("#myhs_zhgl_box").html(tpl + tpl2);
			this._dataModule = dataModule;
			//加载 验证码
			resetDelPassword.getCode();
			//设置随机token
			self.getRandomToken("check");
			
			
			//验证码刷新
			$("#reset_validateCode, #reset_img-code").click(function () {
				resetDelPassword.getCode();
			});
			$('#mobile_checkBtn').click(function(){
				resetDelPassword.sendCheckCode('resetDealPwd_mobil', this, dataModule);	
			});
			
			
			
			
			//下一步按钮
			$('#resetDealPwdNextBtn').click(function(){
				var valid = resetDelPassword.validateData();
				//这里可以校验验证码是否输入匹配 
				if (!valid.form()) {
					return;
				}
				
				var jsonData ={
						perCustId : comm.getRequestParams()["custId"], 	
                        name 	 : $("#resetDealPwd_name").val(),
                        idNumber : $("#resetDealPwd_creNo").val(),
                        secretKey : resetDelPassword.checkToken,
    					loginPwd : comm.encrypt($("#resetDealPwd_pwd").val(),resetDelPassword.checkToken),
    					codesType :"tradePwd",		//验证类型=交易密码
    					smsCode:$("#resetDealPwd_code").val(),		//验证码
    					validCode	 : $("#resetDealPwd_verificationCode").val()
				};
				
				dataModule.checkNoCarderMainInfo(jsonData, function (rsp) {
					$("#resetDealPwd_inputInfo").addClass("none");
					$("#resetDealPwd_modifyPwd").removeClass("none");
					//存在实名验证返回通过的验证码码
					resetDelPassword.resultToken=rsp.data;
					//获取重置交易密码所用的随机token
					self.getRandomToken("reset");
				});
			});
			$("#resetDealPwd_verificationCode").val('');
			$("#resetDealPwd_pwd").val('');
			$("#resetDealPwd_code").val('');
			//确认提交按钮
			$('#resetDealPwdCertainBtn').click(function(){
				var valid = resetDelPassword.validatePwdData();
				if (!valid.form()) {
					return;
				}
				
				//密码格式验证
				if (!resetDelPassword.pwdFormatChk()) {
					return false;
				} 
				
				var jsonData ={
						secretKey :resetDelPassword.resetToken,
						random:resetDelPassword.resultToken,
						newTradePwd : comm.tradePwdEncrypt($("#resetDealPwd_dealPwd2").val(),resetDelPassword.resetToken)
				};
				
				dataModule.resetTradePwd(jsonData, function (response) {
						comm.yes_alert(comm.lang("safetySet").resetDelPassword.resetPasswordSucceed);
						$('#ul_myhs_right_tab li a[data-id="7"]').trigger('click');
				})
			});
			//取消按钮
			$("#resetDealPwdLastBtn").bind("click", function () {
				$("#resetDealPwd_inputInfo").removeClass("none");
				$("#resetDealPwd_modifyPwd").addClass("none");
				$("#resetDealPwd_code").val("");
			});
		},
		//发送验证码
		sendCheckCode : function(sInputId, oBtnSend, dataModule){
			var mobile = $("#" + sInputId).val();
			if ($.trim(mobile).length == 0) {
				comm.warn_alert("请输入手机号码");
				return;
			}
			var reg = /^1[3|4|5|8][0-9]\d{4,8}$/;
			if (!reg.test(mobile)) {
				comm.warn_alert("请输入正确的手机号码");
				return;
			}
			var t = 120;
			var oThis = $(oBtnSend);
			if (oThis.text() != '获取短信验证码' && oThis.text() != '重新获取短信验证码') {
				return;
			}
			var interval = setInterval(function () {
				oThis.addClass("ongsd");
				t -= 1;
				oThis.html("剩余时间&nbsp;(&nbsp" + t + "&nbsp)");
				if (t == 1) {
					clearInterval(interval);
					oThis.html("重新获取短信验证码");
					oThis.removeClass("ongsd");
					t = 120;
				}
			}, 1000);
			
			//封装参数
			var jsonParam ={
					mobile : mobile		//手机号码
			};
			
			//发送短信
			dataModule.delPwdSendMobileCode(jsonParam, function (response) {
				comm.warn_alert(comm.lang("myHsCard").sentSuccessfully);
			});
		},
		validateData : function(){
			return $("#resetDealPwd_first_form").validate({
				rules : {
					resetDealPwd_name : {
						required : true
					},
					resetDealPwd_creNo : {
						required : true
					},
					resetDealPwd_pwd : {
						required : true,
						digits : true
					},
					resetDealPwd_code : {
						required : true,
						rangelength : [4, 4]
					}
				},
				messages : {
					resetDealPwd_name : {
						required : comm.lang("safetySet").resetDelPassword.requiredName
					},
					resetDealPwd_creNo : {
						required : comm.lang("safetySet").resetDelPassword.requiredCreNo
					},
					resetDealPwd_pwd : {
						required : comm.lang("safetySet").resetDelPassword.requiredPwd,
						digits : comm.lang("safetySet").resetDelPassword.digits
					},
					resetDealPwd_code : {
						required : comm.lang("safetySet").resetDelPassword.requiredCode,
						rangelength : comm.lang("safetySet").resetDelPassword.codeLength
					}
				},
				errorPlacement : function (error, element) {
					$(element).attr("title", $(error).text()).tooltip({
						tooltipClass: "ui-tooltip-error",
						destroyFlag : true,
						destroyTime : 3000,
						position : {
							my : "left+150 top",
							at : "left top"
						}
					}).tooltip("open");
					$(".ui-tooltip").css("max-width", "230px");
				},
				success : function (element) {
					$(element).tooltip();
					$(element).tooltip("destroy");
				}
			});
		},
		validatePwdData : function(){
			return $("#resetDealPwd_second_form").validate({
				rules : {
					resetDealPwd_dealPwd : {
						required  : true,
						maxlength : $("#resetDealPwd_dealPwd").attr("maxlength"),
						minlength : $("#resetDealPwd_dealPwd").attr("maxlength"),
						digits : true
					},
					resetDealPwd_dealPwd2 : {
						required : true,
						equalTo : "#resetDealPwd_dealPwd",
						digits : true
					}
				},
				messages : {
					resetDealPwd_dealPwd : {
						required : comm.lang("safetySet").modifyDealPassword.required1,
						maxlength : comm.lang("safetySet").modifyDealPassword.maxlength,
						minlength : comm.lang("safetySet").modifyDealPassword.minlength,
						digits : comm.lang("safetySet").modifyDealPassword.digits
					},
					resetDealPwd_dealPwd2 : {
						required : comm.lang("safetySet").modifyDealPassword.required2,
						equalTo : comm.lang("safetySet").modifyDealPassword.equal
					}
				},
				errorPlacement : function (error, element) {
					$(element).attr("title", $(error).text()).tooltip({
						tooltipClass: "ui-tooltip-error",
						destroyFlag : true,
						destroyTime : 3000,
						position : {
							my : "left+150 top",
							at : "left top"
						}
					}).tooltip("open");
					$(".ui-tooltip").css("max-width", "230px");
				},
				success : function (element) {
					$(element).tooltip();
					$(element).tooltip("destroy");
				}
			});
		},
		//获取验证码
		getCode:function(){
			$("#reset_validateCode").attr("src",resetDelPassword._dataModule.getCodeUrl());
		},	
		/** 获取随机token数据 */
		getRandomToken : function (position){
			//获取随机token
			comm.getToken(null,function(response){
				//非空数据验证
				if(response.data)
				{
					if(position=="check"){
						resetDelPassword.checkToken=response.data;
					}else {
						resetDelPassword.resetToken=response.data;
					}
				}
				else
				{
					comm.warn_alert(comm.lang("safetySet").randomTokenInvalid);
				}
			});
		},
		//密码格式验证
		pwdFormatChk:function(){
			/** 密码数据格式验证 */
			var $inputNewTradePwd=$("#resetDealPwd_dealPwd");
			var $tradePwdLen=$inputNewTradePwd.attr("maxlength")-1;//密码长度
			var $newTradePwd=$inputNewTradePwd.val();	//密码内容
			
			//匹配6位顺增或顺降  
			eval("var increaseReg =/^(?:(?:0(?=1)|1(?=2)|2(?=3)|3(?=4)|4(?=5)|5(?=6)|6(?=7)|7(?=8)|8(?=9)){"+$tradePwdLen+"}|(?:9(?=8)|8(?=7)|7(?=6)|6(?=5)|5(?=4)|4(?=3)|3(?=2)|2(?=1)|1(?=0)){"+$tradePwdLen+"})\\d$/;"); 
			if(increaseReg.test($newTradePwd)){
	        	comm.alert({width:500,imgClass: 'tips_i' ,content:comm.lang("safetySet").trad_pwd_increase_error });
	        	return false;
	        }
	          
	        //匹配6位重复数字  
	        eval("var repeatedReg =/^([\\d])\\1{"+$tradePwdLen+"}$/;"); 
	        if(repeatedReg.test($newTradePwd)){
	        	comm.alert({width:500,imgClass: 'tips_i' ,content:comm.lang("safetySet").trad_pwd_number_repeated_error });
	        	return false;
	        }
	        return true;
		}
	};
	return resetDelPassword
});
