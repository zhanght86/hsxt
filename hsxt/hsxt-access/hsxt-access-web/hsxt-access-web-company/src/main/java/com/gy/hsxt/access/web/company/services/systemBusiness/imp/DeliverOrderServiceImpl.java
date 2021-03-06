/*
* Copyright (c) 2015-2018 SHENZHEN GUIYI SCIENCE AND TECHNOLOGY DEVELOP CO., LTD. All rights reserved.
*
* 注意：本内容仅限于深圳市归一科技研发有限公司内部传阅，禁止外泄以及用于其他的商业目的 
*/
package com.gy.hsxt.access.web.company.services.systemBusiness.imp;

import org.springframework.stereotype.Service;

import com.gy.hsxt.access.web.common.service.BaseServiceImpl;
import com.gy.hsxt.access.web.company.services.systemBusiness.IDeliverOrderService;
import com.gy.hsxt.bs.bean.tool.Shipping;
import com.gy.hsxt.common.exception.HsException;

@SuppressWarnings("rawtypes")
@Service
public class DeliverOrderServiceImpl extends BaseServiceImpl implements IDeliverOrderService {

    @Override
    public void toolAcceptConfirm(Shipping shipping) throws HsException {
        
    }

}
