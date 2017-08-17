/*
* Copyright (c) 2015-2018 SHENZHEN GUIYI SCIENCE AND TECHNOLOGY DEVELOP CO., LTD. All rights reserved.
*
* 注意：本内容仅限于深圳市归一科技研发有限公司内部传阅，禁止外泄以及用于其他的商业目的 
*/
/*
* Copyright (c) 2015-2018 SHENZHEN GUIYI SCIENCE AND TECHNOLOGY DEVELOP CO., LTD. All rights reserved.
*
* 注意：本内容仅限于深圳市归一科技研发有限公司内部传阅，禁止外泄以及用于其他的商业目的 
*/

package com.gy.hsxt.ac.api;

import com.gy.hsxt.common.exception.HsException;

/** 
 * 
 * @Package: com.gy.hsxt.ac.api  
 * @ClassName: IAccountIntegralFileService 
 * @Description: TODO
 *
 * @author: weixz 
 * @date: 2015-10-13 下午3:02:41 
 * @version V1.0 
 

 */
public interface IAccountCheckFileService {

    /**
     * 生成对账文件
     * @param  fileAddress 对账文件生成路径
     * @throws HsException   异常处理类
     */
    public void createAccountCheckFile(String batchJobName, String fileAddress, String batchDate, String transSyses) throws HsException;
    
}
