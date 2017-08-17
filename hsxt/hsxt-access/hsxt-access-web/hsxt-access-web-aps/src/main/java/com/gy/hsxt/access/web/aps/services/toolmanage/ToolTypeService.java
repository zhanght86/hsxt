/*
* Copyright (c) 2015-2018 SHENZHEN GUIYI SCIENCE AND TECHNOLOGY DEVELOP CO., LTD. All rights reserved.
*
* 注意：本内容仅限于深圳市归一科技研发有限公司内部传阅，禁止外泄以及用于其他的商业目的 
*/
package com.gy.hsxt.access.web.aps.services.toolmanage;

import java.util.List;

import com.gy.hsxt.access.web.common.service.IBaseService;
import com.gy.hsxt.bs.bean.tool.ToolCategory;
import com.gy.hsxt.common.exception.HsException;

@SuppressWarnings("rawtypes")
public interface ToolTypeService extends IBaseService {
    
    public List<ToolCategory> queryToolCategoryAll() throws HsException;
    
}
