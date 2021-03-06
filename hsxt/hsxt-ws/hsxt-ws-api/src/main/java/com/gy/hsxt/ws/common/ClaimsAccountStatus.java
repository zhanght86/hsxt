/*
 * Copyright (c) 2015-2018 SHENZHEN GUIYI SCIENCE AND TECHNOLOGY DEVELOP CO., LTD. All rights reserved.
 *
 * 注意：本内容仅限于深圳市归一科技研发有限公司内部传阅，禁止外泄以及用于其他的商业目的 
 */

package com.gy.hsxt.ws.common;

/**
 * 核算单核算状态
 * 
 * @Package: com.gy.hsxt.ws.common
 * @ClassName: ApprovalStatus
 * @Description: TODO
 * 
 * @author: huanggaoyang
 * @date: 2015-12-9 下午2:52:00
 * @version V1.0
 */
public enum ClaimsAccountStatus {
	/** 核算单状态 0待核算 1 核算中 2 已核算 */

	PENDING(0),

	PROCESSING(1),

	OVER(2);

	int status;

	private ClaimsAccountStatus(int status) {
		this.status = status;
	}

	public int getStatus() {
		return status;
	}
}
