/* * Copyright (c) 2015-2018 SHENZHEN GUIYI SCIENCE AND TECHNOLOGY DEVELOP CO., LTD. All rights reserved. * * 注意：本内容仅限于深圳市归一科技研发有限公司内部传阅，禁止外泄以及用于其他的商业目的  */package com.gy.hsxt.bs.bean.resfee;import com.alibaba.fastjson.JSON;/** * 资源费分配规则 * * @Package: com.gy.hsxt.bs.bean.resfee * @ClassName: ResFeeRule * @Description: 资源费分配规则 Bean实体类 * * @author: liuhq * @date: 2015-9-2 上午10:53:01 * @version V1.0 */public class ResFeeRule implements java.io.Serializable {    private static final long serialVersionUID = 7148954801578085410L;    // field    /**     * 分配规则项编号     **/    private String allocItemId;    /**     * 资源费方案编号     **/    private String resFeeId;    /**     * 分配对象     * <p/>     * 1：推广公司（服务公司或地区平台） 2：上级管理公司 3：地区平台     **/    private int allocTarget;    /**     * 分配方式     * <p/>     * 1：按比例分配 2：按金额分配 备注：分配规则校验 按比例分配时总比例为100% 按金额分配时总金额等于资源费价格     **/    private int allocWay;    /**     * 分配金额     **/    private String allocAmount;    // method    public String getAllocItemId() {        return allocItemId;    }    public void setAllocItemId(String allocItemId) {        this.allocItemId = allocItemId;    }    public String getResFeeId() {        return resFeeId;    }    public void setResFeeId(String resFeeId) {        this.resFeeId = resFeeId;    }    public int getAllocTarget() {        return allocTarget;    }    public void setAllocTarget(int allocTarget) {        this.allocTarget = allocTarget;    }    public int getAllocWay() {        return allocWay;    }    public void setAllocWay(int allocWay) {        this.allocWay = allocWay;    }    public String getAllocAmount() {        return allocAmount;    }    public void setAllocAmount(String allocAmount) {        this.allocAmount = allocAmount;    }    @Override    public String toString() {        return JSON.toJSONString(this);    }}