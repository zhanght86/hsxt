/*
* Copyright (c) 2015-2018 SHENZHEN GUIYI SCIENCE AND TECHNOLOGY DEVELOP CO., LTD. All rights reserved.
*
* 注意：本内容仅限于深圳市归一科技研发有限公司内部传阅，禁止外泄以及用于其他的商业目的 
*/
package com.gy.hsxt.gpf.fss.uf;

import com.gy.hsxt.common.exception.HsException;
import com.gy.hsxt.gpf.fss.bean.BaseNotify;

/**
 * 向综合前置发送通知的发射器
 *
 * @Package :com.gy.hsxt.gpf.fss.uf
 * @ClassName : RegionPacketSender
 * @Description : TODO
 * @Author : chenm
 * @Date : 2015/11/26 12:01
 * @Version V3.0.0.0
 */
public interface RegionPacketSender {

    /**
     * 向综合前置发送通知
     *
     * @param notify 通知
     * @return boolean
     * @throws HsException
     */
    boolean sendRegionPacketData(BaseNotify notify) throws HsException;
}
