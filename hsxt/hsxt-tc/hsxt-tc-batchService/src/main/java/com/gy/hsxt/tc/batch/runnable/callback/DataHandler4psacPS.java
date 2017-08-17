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

package com.gy.hsxt.tc.batch.runnable.callback;

import org.springframework.data.redis.core.RedisTemplate;

import com.gy.hsxt.tc.batch.mapper.TcPsacMapper;

/**
 * PS-AC对账之PS端数据文件内容拆解及入库
 * 
 * @Package: com.gy.hsxt.tc.batch.runnable.callback
 * @ClassName: DataHandler4psacPS
 * @Description: TODO
 * 
 * @author: lvyan
 * @date: 2015-11-13 下午2:18:48
 * @version V1.0
 */
public class DataHandler4psacPS extends DataHandlerAbstract {
    /**
     * 账单入库表名称
     */
    public static final String MY_TABLE = "T_TC_PSAC_PS_TMP";

    /**
     * 账单入库表字段（对账文件字段）： 交易流水号|业务记账分录ID｜客户号｜账户类型｜增向金额｜减向金额｜记账状态
     */
    public static final String COLUMNS="PS_TRANS_NO,PS_ACCOUNT_SUB_ID,PS_CUST_ID,PS_ACC_TYPE,PS_ADD_AMOUNT,PS_DEC_AMOUNT,PS_STATUS,PS_TRANS_TYPE,PS_SOURCE_TRANS_NO";


    public DataHandler4psacPS(TcPsacMapper batchMapper, RedisTemplate redisTemplate) {
        super(batchMapper, redisTemplate, MY_TABLE, COLUMNS.split(","));

    }

    /**
     * 生成对账要素
     * 
     * @param args
     *            一行数据
     * @return
     */
    public String generateCheckKey(String[] args) {
        // 对账文件字段： 交易流水号|业务记账分录ID｜客户号｜账户类型｜增向金额｜减向金额｜记账状态
        // 对账要素：客户号|账户类型|增向金额|减向金额|交易流水号|业务记账分录ID
        StringBuilder sb = new StringBuilder();
        sb.append(args[2]).append("|");
//        sb.append(args[3]).append("|"); //取消账户类型核对
        sb.append(args[4]).append("|");
        sb.append(args[5]).append("|");
        sb.append(args[0]).append("|");
        sb.append(args[1]);
        return sb.toString();
    }

}
