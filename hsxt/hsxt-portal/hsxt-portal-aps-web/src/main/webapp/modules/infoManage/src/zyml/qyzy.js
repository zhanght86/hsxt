define([
"text!infoManageTpl/qyzy/tgqyzyyl.html",
"text!infoManageTpl/qyzy/cyqyzyyl.html",
"text!infoManageTpl/qyzy/fwgszyyl.html",
"text!infoManageTpl/qyzy/qyzyztcx.html",
"text!infoManageTpl/qyzy/xfzzyyl.html",
"text!infoManageTpl/qyzy/xfzzy_ck.html",
"text!infoManageTpl/qyzy/xtdjxx.html",
"text!infoManageTpl/qyzy/gsdjxx.html",
"text!infoManageTpl/qyzy/lxxx.html",
"text!infoManageTpl/qyzy/yhzhxx.html"
],function(tgqyzyylTpl,cyqyzyylTpl,fwgszyylTpl,qyzyztcxTpl,xfzzyylTpl,xfzzy_ckTpl,xtdjxxTpl,gsdjxxTpl,lxxxTpl,yhzhxxTpl){
 
	var qyzy = {
		show:function(){
			//加载中间内容 
			$(".operationsArea").html(tgqyzyylTpl).append(cyqyzyylTpl).append(fwgszyylTpl).append(qyzyztcxTpl).append(xfzzyylTpl).append(xfzzy_ckTpl).append(xtdjxxTpl).append(gsdjxxTpl).append(lxxxTpl).append(yhzhxxTpl);	
			
			$(".cyqyzyyl").click(function(){
				$("#tgqyzyyl").addClass("none");
				$("#fwgszyyl").addClass("none");
				$("#qyzyztcx").addClass("none");
				$("#xfzzyyl").addClass("none");
				$("#xfzzy_ck").addClass("none");
				$("#xtdjxx").addClass("none");
				$("#gsdjxx").addClass("none");
				$("#lxxx").addClass("none");
				$("#yhzhxx").addClass("none");
				
				$("#cyqyzyyl").removeClass("none");	
			});
			$(".fwgszyyl").click(function(){
				$("#cyqyzyyl").addClass("none");
				$("#tgqyzyyl").addClass("none");
				$("#qyzyztcx").addClass("none");
				$("#xfzzyyl").addClass("none");
				$("#xfzzy_ck").addClass("none");
				$("#xtdjxx").addClass("none");
				$("#gsdjxx").addClass("none");
				$("#lxxx").addClass("none");
				$("#yhzhxx").addClass("none");
				
				$("#fwgszyyl").removeClass("none");	
			});
			$(".qyzyztcx").click(function(){
				$("#cyqyzyyl").addClass("none");
				$("#tgqyzyyl").addClass("none");
				$("#fwgszyyl").addClass("none");
				$("#xfzzyyl").addClass("none");
				$("#xfzzy_ck").addClass("none");
				$("#xtdjxx").addClass("none");
				$("#gsdjxx").addClass("none");
				$("#lxxx").addClass("none");
				$("#yhzhxx").addClass("none");
				
				$("#qyzyztcx").removeClass("none");	
				
				//下拉选择框
				$("#rCompanyType").selectbox({width:90});
				$("#rStatus").selectbox({width:120});
				
				//弹出框
				$( ".a_qyzyzt_ck1" ).click(function() {
				  $( "#qyzyztck1" ).dialog({
					title:"企业预警详情",
					width:"600",
					modal:true,
					buttons:{ 
						"确定":function(){
							$( this ).dialog( "close" );
						}
					}
				  });
				});
				$( ".a_qyzyzt_ck2" ).click(function() {
				  $( "#qyzyztck2" ).dialog({
					title:"企业预警详情",
					width:"600",
					modal:true,
					buttons:{ 
						"确定":function(){
							$( this ).dialog( "close" );
						},
						"报停":function(){
						 	$( this ).dialog( "close" );
							rStop();
					    }
					}
				  });
				});
				$( ".a_qyzyzt_ck3" ).click(function() {
				  $( "#qyzyztck3" ).dialog({
					title:"企业预警详情",
					width:"600",
					modal:true,
					buttons:{ 
						"确定":function(){
							$( this ).dialog( "close" );
						},
						"报停":function(){
						 	$( this ).dialog( "close" );
							rStop();
					    }
					}
				  });
				});
				function rStop() {
				  $( "#qyzyztbt" ).dialog({
					title:"企业报停",
					width:"600",
					modal:true,
					buttons:{ 
						"确定":function(){
							$( this ).dialog( "close" );
						}
					}
				  });
				};
			});
			$(".tgqyzyyl").click(function(){
				$("#cyqyzyyl").addClass("none");
				$("#qyzyztcx").addClass("none");
				$("#fwgszyyl").addClass("none");
				$("#xfzzyyl").addClass("none");
				$("#xfzzy_ck").addClass("none");
				$("#xtdjxx").addClass("none");
				$("#gsdjxx").addClass("none");
				$("#lxxx").addClass("none");
				$("#yhzhxx").addClass("none");
				
				$("#tgqyzyyl").removeClass("none");	
			});
			
			$(".xfzzyyl").click(function(){
				$("#cyqyzyyl").addClass("none");
				$("#qyzyztcx").addClass("none");
				$("#fwgszyyl").addClass("none");
				$("#tgqyzyyl").addClass("none");
				$("#xfzzy_ck").addClass("none");
				$("#xtdjxx").addClass("none");
				$("#gsdjxx").addClass("none");
				$("#lxxx").addClass("none");
				$("#yhzhxx").addClass("none");
				
				$("#xfzzyyl").removeClass("none");	
			});
			
			$(".hskhDetail_btn").click(function(){
				$("#cyqyzyyl").addClass("none");
				$("#qyzyztcx").addClass("none");
				$("#fwgszyyl").addClass("none");
				$("#tgqyzyyl").addClass("none");
				$("#xfzzyyl").addClass("none");
				$("#xtdjxx").addClass("none");
				$("#gsdjxx").addClass("none");
				$("#lxxx").addClass("none");
				$("#yhzhxx").addClass("none");
				
				$("#xfzzy_ck").removeClass("none");	
			});
			
			$(".companyInfoView_btn").click(function(){
				$("#cyqyzyyl").addClass("none");
				$("#qyzyztcx").addClass("none");
				$("#fwgszyyl").addClass("none");
				$("#tgqyzyyl").addClass("none");
				$("#xfzzyyl").addClass("none");
				$("#xfzzy_ck").addClass("none");
				$("#gsdjxx").addClass("none");
				$("#lxxx").addClass("none");
				$("#yhzhxx").addClass("none");
				
				$("#xtdjxx").removeClass("none");	
			});
			
			$(".back_gsdjxx").click(function(){
				$("#cyqyzyyl").addClass("none");
				$("#qyzyztcx").addClass("none");
				$("#fwgszyyl").addClass("none");
				$("#tgqyzyyl").addClass("none");
				$("#xfzzyyl").addClass("none");
				$("#xfzzy_ck").addClass("none");
				$("#xtdjxx").addClass("none");
				$("#lxxx").addClass("none");
				$("#yhzhxx").addClass("none");
				
				$("#gsdjxx").removeClass("none");	
			});
			
			$(".back_lxxx").click(function(){
				$("#cyqyzyyl").addClass("none");
				$("#qyzyztcx").addClass("none");
				$("#fwgszyyl").addClass("none");
				$("#tgqyzyyl").addClass("none");
				$("#xfzzyyl").addClass("none");
				$("#xfzzy_ck").addClass("none");
				$("#xtdjxx").addClass("none");
				$("#gsdjxx").addClass("none");
				$("#yhzhxx").addClass("none");
				
				$("#lxxx").removeClass("none");	
			});
			
			$(".back_yhzhxx").click(function(){
				$("#cyqyzyyl").addClass("none");
				$("#qyzyztcx").addClass("none");
				$("#fwgszyyl").addClass("none");
				$("#tgqyzyyl").addClass("none");
				$("#xfzzyyl").addClass("none");
				$("#xfzzy_ck").addClass("none");
				$("#xtdjxx").addClass("none");
				$("#gsdjxx").addClass("none");
				$("#lxxx").addClass("none");
				
				$("#yhzhxx").removeClass("none");	
			});
		},
		hide:function(){
			//清空中间内容） 
			$(".operationsArea").empty();	
		}
		
	};
	
		
	return qyzy;
	 

});