/*
* Copyright (c) 2015-2018 SHENZHEN GUIYI SCIENCE AND TECHNOLOGY DEVELOP CO., LTD. All rights reserved.
*
* 注意：本内容仅限于深圳市归一科技研发有限公司内部传阅，禁止外泄以及用于其他的商业目的 
*/
package com.gy.hsxt.uc.common;

import org.junit.FixMethodOrder;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.junit.runners.MethodSorters;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.test.context.ContextConfiguration;
import org.springframework.test.context.junit4.SpringJUnit4ClassRunner;

import com.gy.hsxt.uc.bs.bean.common.BsBankAcctInfo;
import com.gy.hsxt.uc.common.service.UCBsBankAcctInfoService;

@RunWith(SpringJUnit4ClassRunner.class)
@ContextConfiguration(locations = { "classpath*:spring/spring-uc.xml" })
@FixMethodOrder(MethodSorters.NAME_ASCENDING)
public class UCBsBankAcctInfoServiceTest {
	@Autowired
	UCBsBankAcctInfoService bankAcctInfoService;
	
	@Test
	public void findBankAccByAccId(){
		Long accId = 12L;
		String userType = "4";
		 BsBankAcctInfo   bankAcctInfo  = bankAcctInfoService.findBankAccByAccId(accId, userType);
		 
	}
}
