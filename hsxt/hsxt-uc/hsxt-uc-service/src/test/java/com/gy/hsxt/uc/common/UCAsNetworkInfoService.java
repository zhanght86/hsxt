/*
* Copyright (c) 2015-2018 SHENZHEN GUIYI SCIENCE AND TECHNOLOGY DEVELOP CO., LTD. All rights reserved.
*
* 注意：本内容仅限于深圳市归一科技研发有限公司内部传阅，禁止外泄以及用于其他的商业目的 
*/
package com.gy.hsxt.uc.common;

import java.util.ArrayList;
import java.util.List;

import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.test.context.ContextConfiguration;
import org.springframework.test.context.junit4.SpringJUnit4ClassRunner;

import com.alibaba.fastjson.JSON;
import com.gy.hsxt.uc.as.api.common.IUCAsNetworkInfoService;
//import com.gy.hsxt.uc.as.bean.common.AsCustPrivacy;
import com.gy.hsxt.uc.as.bean.common.AsNetworkInfo;
import com.gy.hsxt.uc.as.bean.common.AsNetworkInfoMini;

@RunWith(SpringJUnit4ClassRunner.class)
@ContextConfiguration(locations = { "classpath*:spring/spring-uc-test.xml" })
public class UCAsNetworkInfoService {

	@Autowired
	IUCAsNetworkInfoService asNetworkInfoService;
	@Test
	public void searchByCustId(){
		AsNetworkInfo info = asNetworkInfoService.searchByCustId("0618601005520160317");
		System.out.println(info);
	}
	
	@Test
	public void updateNetworkInfo(){
		AsNetworkInfo info = new AsNetworkInfo();
		info.setPerCustId("12");
		info.setCityNo("350100");
		info.setArea("中国-福建-福州");
		info.setAge(16);
		info.setPerCustId("0618601006120160311");
		info.setName("测试名称");
		info.setHeadShot("http://192.168.229.31:9099/v1/tfs/T18N_TByJT1RXrhCrK.jpg");
		info.setHobby("羽毛器，哈哈");
		info.setIndividualSign("羽毛器，哈发的撒阿萨德发飒飒的方式 阿萨德 撒爱上大是大非asdfasdf阿萨德发生的发哈");
		info.setProvinceNo("35");
		info.setSex(1);
		asNetworkInfoService.updateNetworkInfo(info);
	}
	
	@Test
	public void listAll(){
		List<String> list = new ArrayList<String >();
		list.add("0618601005520160317");
		list.add("0618601007820160311");
		List<AsNetworkInfoMini> result = asNetworkInfoService.listNetWorkInfo(list);
		for(AsNetworkInfoMini m :result){
			System.out.println(m.getPerCustId());
		}
	}
//	
//	@Test
//	public void searchPrivacy() throws Exception{
//		Object info = asNetworkInfoService.searchPrivacy("0618601005520160317");
//		System.out.println(JSON.toJSON(info));
//		
//		Thread.sleep(11111);
//	}
//	@Test
//	public void updatePrivacy() throws Exception{
//		AsCustPrivacy asInfo= new AsCustPrivacy();
//		asInfo.setPerCustId("0618601005520160317");
//		asInfo.setAddFriends("1");
//		asInfo.setSearchMe("2");
//		asInfo.setExt1("3");
//		asInfo.setExt2("32");
//		asInfo.setExt3("33");
//		asInfo.setCreatedby("lv");
//		asInfo.setUpdatedby("lvUpdate");
//		
//		 asNetworkInfoService.updatePrivacy(asInfo);
//		 
//		 searchPrivacy() ;
//		Thread.sleep(11111);
//	}
	
<<<<<<< .mine
||||||| .r98876
	@Test
	public void searchPrivacy() throws Exception{
		Object info = asNetworkInfoService.searchPrivacy("0618601005520160317");
		System.out.println(JSON.toJSON(info));
		
		Thread.sleep(11111);
	}
	@Test
	public void updatePrivacy() throws Exception{
		AsCustPrivacy asInfo= new AsCustPrivacy();
		asInfo.setPerCustId("0618601005520160317");
		asInfo.setAddFriends("1");
		asInfo.setSearchMe("2");
		asInfo.setExt1("3");
		asInfo.setExt2("32");
		asInfo.setExt3("33");
		asInfo.setCreatedby("lv");
		asInfo.setUpdatedby("lvUpdate");
		
		 asNetworkInfoService.updatePrivacy(asInfo);
		 
		 searchPrivacy() ;
		Thread.sleep(11111);
	}
=======
	@Test
	public void searchPrivacy() throws Exception{
		Object info = asNetworkInfoService.searchPrivacy("0603311012420160416");
		System.out.println(JSON.toJSON(info));
		
		Thread.sleep(11111);
	}
	@Test
	public void updatePrivacy() throws Exception{
		AsCustPrivacy asInfo= new AsCustPrivacy();
		asInfo.setPerCustId("0603311012420160416");
		asInfo.setAddFriends("1");
		asInfo.setSearchMe("2");
		asInfo.setExt1("3");
		asInfo.setExt2("32");
		asInfo.setExt3("33");
		asInfo.setCreatedby("lv");
		asInfo.setUpdatedby("lvUpdate");
		
		 asNetworkInfoService.updatePrivacy(asInfo);
		 
		 searchPrivacy() ;
		Thread.sleep(11111);
	}
>>>>>>> .r100013
	
	
}
