/* * Copyright (c) 2015-2018 SHENZHEN GUIYI SCIENCE AND TECHNOLOGY DEVELOP CO., * LTD. All rights reserved. * 注意：本内容仅限于深圳市归一科技研发有限公司内部传阅，禁止外泄以及用于其他的商业目的 */package com.gy.hsxt.bs.bean.msgtpl;import com.alibaba.fastjson.JSON;/** * 消息模版实体 *  * @Package: com.gy.hsxt.bs.bean.msgtpl * @ClassName: MsgTemplateAppr * @Description: *  * @author: kongsl * @date: 2016-3-7 下午5:36:56 * @version V3.0.0 */public class MsgTemplateAppr extends MsgTemplate {    private static final long serialVersionUID = 5471010325604783285L;    /** 申请编号 **/    private String applyId;    /**     * 申请状态     */    private Integer reqStatus;    /**     * 复核结果1：待复核2：复核通过3：复核驳回     **/    private Integer reviewResult;    /** 申请操作员编号 **/    private String reqOptId;    /** 申请操作员名称 **/    private String reqOptName;    /** 申请时间 **/    private String reqTime;    /** 审批操作员编号 **/    private String apprOptId;    /** 审批操作员名称 **/    private String apprOptName;    /** 审批时间 **/    private String apprTime;    /** 审批信息 **/    private String apprRemark;    public MsgTemplateAppr() {        super();        // TODO Auto-generated constructor stub    }    public MsgTemplateAppr(String applyId, String tempId, Integer reqStatus, Integer reviewResult, String reqOptId,            String reqOptName) {        super();        this.applyId = applyId;        setTempId(tempId);        this.reqStatus = reqStatus;        this.reviewResult = reviewResult;        this.reqOptId = reqOptId;        this.reqOptName = reqOptName;    }    // method    public String getApplyId() {        return applyId;    }    public void setApplyId(String applyId) {        this.applyId = applyId;    }    public String getReqOptId() {        return reqOptId;    }    public void setReqOptId(String reqOptId) {        this.reqOptId = reqOptId;    }    public String getReqOptName() {        return reqOptName;    }    public void setReqOptName(String reqOptName) {        this.reqOptName = reqOptName;    }    public String getReqTime() {        return reqTime;    }    public void setReqTime(String reqTime) {        this.reqTime = reqTime;    }    public String getApprOptId() {        return apprOptId;    }    public void setApprOptId(String apprOptId) {        this.apprOptId = apprOptId;    }    public String getApprOptName() {        return apprOptName;    }    public void setApprOptName(String apprOptName) {        this.apprOptName = apprOptName;    }    public String getApprTime() {        return apprTime;    }    public void setApprTime(String apprTime) {        this.apprTime = apprTime;    }    public String getApprRemark() {        return apprRemark;    }    public void setApprRemark(String apprRemark) {        this.apprRemark = apprRemark;    }    public Integer getReqStatus() {        return reqStatus;    }    public void setReqStatus(Integer reqStatus) {        this.reqStatus = reqStatus;    }    public Integer getReviewResult() {        return reviewResult;    }    public void setReviewResult(Integer reviewResult) {        this.reviewResult = reviewResult;    }    @Override    public String toString() {        return JSON.toJSONString(this);    }}