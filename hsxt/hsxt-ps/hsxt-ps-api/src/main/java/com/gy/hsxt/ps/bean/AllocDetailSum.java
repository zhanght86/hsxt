package com.gy.hsxt.ps.bean;

import org.apache.commons.lang3.StringUtils;

import java.io.Serializable;
import java.math.BigDecimal;
import java.util.Date;
import java.util.List;

/**
 * @author chenhz
 * @version v0.0.1
 * @description 返回汇总、税金、积分/互生币明细
 * @createDate 2015-8-18 上午10:18:53
 * @Company 深圳市归一科技研发有限公司
 */
public class AllocDetailSum implements Serializable {

    /**
     *
     */
    private static final long serialVersionUID = -777290669846282855L;

    /**
     * 批次号
     */
    private String batchNo;
    
    /**
     * 交易日期
     */
    private Date transDate;

    /**
     * 积分/互生币消费总数
     */
    private String sum;

    /**
     * 积分/互生币笔数
     */
    private int count;

    /**
     * 积分/互生币撤单退货总数
     */
    private String backSum;

    /**
     * 积分/互生币撤单退货笔数
     */
    private int backCount;

    /**
     * 积分/互生币汇总
     */
    private String collect;

    /**
     * 积分/互生币汇总 笔数
     */
    private int collectCount;

    /**
     * 扣除税金
     */
    private String taxes;


    /**
     * 获取交易日期
     *
     * @return transDate 交易日期
     */
    public Date getTransDate() {
        return transDate==null?null:(Date) transDate.clone();
    }

    /**
     * 设置交易日期
     *
     * @param transDate 交易日期
     */
    public void setTransDate(Date transDate) {
        this.transDate = transDate==null?null:(Date)transDate.clone();
    }

    /**
     * 获取积分互生币总数
     *
     * @return sum 积分互生币总数
     */
    public String getSum() {
        return sum;
    }

    /**
     * 设置积分互生币总数
     *
     * @param sum 积分互生币总数
     */
    public void setSum(String sum) {
        this.sum = sum;
    }

    /**
     * 获取积分互生币笔数
     *
     * @return count 积分互生币笔数
     */
    public int getCount() {
        return count;
    }

    /**
     * 设置积分互生币笔数
     *
     * @param count 积分互生币笔数
     */
    public void setCount(int count) {
        this.count = count;
    }

    /**
     * 获取积分互生币撤单退货总数
     *
     * @return backSum 积分互生币撤单退货总数
     */
    public String getBackSum() {
        return backSum;
    }

    /**
     * 设置积分互生币撤单退货总数
     *
     * @param backSum 积分互生币撤单退货总数
     */
    public void setBackSum(String backSum) {
        this.backSum = backSum;
    }

    /**
     * 获取积分互生币撤单退货笔数
     *
     * @return backCount 积分互生币撤单退货笔数
     */
    public int getBackCount() {
        return backCount;
    }

    /**
     * 设置积分互生币撤单退货笔数
     *
     * @param backCount 积分互生币撤单退货笔数
     */
    public void setBackCount(int backCount) {
        this.backCount = backCount;
    }

    /**
     * 获取积分互生币汇总
     *
     * @return collect 积分互生币汇总
     */
    public String getCollect() {
        return collect;
    }

    /**
     * 设置积分互生币汇总
     *
     * @param collect 积分互生币汇总
     */
    public void setCollect(String collect) {
        this.collect = collect;
    }

    public int getCollectCount() {
        return collectCount;
    }

    public void setCollectCount(int collectCount) {
        this.collectCount = collectCount;
    }

    public String getTaxes() {
        if (StringUtils.isNotEmpty(taxes)){
            return (new BigDecimal(taxes)).toEngineeringString();
        }
        return taxes;
    }

    public void setTaxes(String taxes) {
        this.taxes = taxes;
    }

    /**
     * @return the 批次号
     */
    public String getBatchNo() {
        return batchNo;
    }

    /**
     * @param 批次号 the batchNo to set
     */
    public void setBatchNo(String batchNo) {
        this.batchNo = batchNo;
    }
    
}
