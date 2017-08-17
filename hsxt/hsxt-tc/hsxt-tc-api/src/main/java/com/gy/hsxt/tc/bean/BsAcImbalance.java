/*
 * Copyright (c) 2015-2018 SHENZHEN GUIYI SCIENCE AND TECHNOLOGY DEVELOP CO., LTD. All rights reserved.
 *
 * 注意：本内容仅限于深圳市归一科技研发有限公司内部传阅，禁止外泄以及用于其他的商业目的 
 */
package com.gy.hsxt.tc.bean;

import java.io.Serializable;
import java.math.BigDecimal;
import java.sql.Timestamp;

/**
 * 业务系统BS 与账务系统AC 对账汇总记录
 * 
 * @Package: com.gy.hsxt.tc.bean
 * @ClassName: BsAcImbalance
 * @Description: TODO
 * 
 * @author: huanggaoyang
 * @date: 2015-11-18 下午8:10:18
 * @version V1.0
 */
public class BsAcImbalance implements Serializable {

	private static final long serialVersionUID = 1L;

	/** 主键，自增长 */
	private Long imbalanceId;

	/** 对账日期，格式YYYY-MM-DD */
	private String tcDate;

	/** 对账结果 0：长款 1：短款 2：要素不一致 */
	private Integer imbalanceType;

	/** 交易流水号 */
	private String transNo;

	/** 业务记账分录ID */
	private String accountSubId;

	/** 业务服务客户号 */
	private String bsCustId;

	/** 业务服务账户类型 */
	private String bsAccType;

	/** 业务服务增向金额 */
	private BigDecimal bsAddAmount;

	/** 业务服务减向金额 */
	private BigDecimal bsDecAmount;

	/** 业务服务记账状态 */
	private Integer bsStatus;
	/** 业务服务交易类型 */
	private String bsTransType;
	/** 业务服务交易单号 */
	private String bsSourceTransNo;

	/** 账务系统分录编号 */
	private String acEntryNo;

	/** 账务系统客户号 */
	private String acCustId;

	/** 账务系统账户类型 */
	private String acAccType;

	/** 账务系统增向金额 */
	private BigDecimal acAddAmount;

	/** 账务系统减向金额 */
	private BigDecimal acDecAmount;

	/** 账务系统交易时间 */
	private Timestamp acTransDate;

	/** 账务系统交易类型 */
	private String acTransType;

	/** 账务系统原交易单号 */
	private String acSourceTransNo;

	/**
	 * @return the 主键，自增长
	 */
	public Long getImbalanceId() {
		return imbalanceId;
	}

	/**
	 * @param 主键，自增长 the imbalanceId to set
	 */
	public void setImbalanceId(Long imbalanceId) {
		this.imbalanceId = imbalanceId;
	}

	/**
	 * @return the 对账日期，格式YYYY-MM-DD
	 */
	public String getTcDate() {
		return tcDate;
	}

	/**
	 * @param 对账日期，格式YYYY-MM-DD the tcDate to set
	 */
	public void setTcDate(String tcDate) {
		this.tcDate = tcDate;
	}

	/**
	 * @return the 对账结果0：长款1：短款2：要素不一致
	 */
	public Integer getImbalanceType() {
		return imbalanceType;
	}

	/**
	 * @param 对账结果0：长款1：短款2：要素不一致 the imbalanceType to set
	 */
	public void setImbalanceType(Integer imbalanceType) {
		this.imbalanceType = imbalanceType;
	}

	/**
	 * @return the 交易流水号
	 */
	public String getTransNo() {
		return transNo;
	}

	/**
	 * @param 交易流水号 the transNo to set
	 */
	public void setTransNo(String transNo) {
		this.transNo = transNo;
	}

	/**
	 * @return the 业务记账分录ID
	 */
	public String getAccountSubId() {
		return accountSubId;
	}

	/**
	 * @param 业务记账分录ID the accountSubId to set
	 */
	public void setAccountSubId(String accountSubId) {
		this.accountSubId = accountSubId;
	}

	/**
	 * @return the 业务服务客户号
	 */
	public String getBsCustId() {
		return bsCustId;
	}

	/**
	 * @param 业务服务客户号 the bsCustId to set
	 */
	public void setBsCustId(String bsCustId) {
		this.bsCustId = bsCustId;
	}

	/**
	 * @return the 业务服务账户类型
	 */
	public String getBsAccType() {
		return bsAccType;
	}

	/**
	 * @param 业务服务账户类型 the bsAccType to set
	 */
	public void setBsAccType(String bsAccType) {
		this.bsAccType = bsAccType;
	}

	/**
	 * @return the 业务服务增向金额
	 */
	public BigDecimal getBsAddAmount() {
		return bsAddAmount;
	}

	/**
	 * @param 业务服务增向金额 the bsAddAmount to set
	 */
	public void setBsAddAmount(BigDecimal bsAddAmount) {
		this.bsAddAmount = bsAddAmount;
	}

	/**
	 * @return the 业务服务减向金额
	 */
	public BigDecimal getBsDecAmount() {
		return bsDecAmount;
	}

	/**
	 * @param 业务服务减向金额 the bsDecAmount to set
	 */
	public void setBsDecAmount(BigDecimal bsDecAmount) {
		this.bsDecAmount = bsDecAmount;
	}

	/**
	 * @return the 业务服务记账状态
	 */
	public Integer getBsStatus() {
		return bsStatus;
	}

	/**
	 * @param 业务服务记账状态 the bsStatus to set
	 */
	public void setBsStatus(Integer bsStatus) {
		this.bsStatus = bsStatus;
	}

	/**
	 * @return the 业务服务交易类型
	 */
	public String getBsTransType() {
		return bsTransType;
	}

	/**
	 * @param 业务服务交易类型 the bsTransType to set
	 */
	public void setBsTransType(String bsTransType) {
		this.bsTransType = bsTransType;
	}

	/**
	 * @return the 业务服务交易单号
	 */
	public String getBsSourceTransNo() {
		return bsSourceTransNo;
	}

	/**
	 * @param 业务服务交易单号 the bsSourceTransNo to set
	 */
	public void setBsSourceTransNo(String bsSourceTransNo) {
		this.bsSourceTransNo = bsSourceTransNo;
	}

	/**
	 * @return the 账务系统分录编号
	 */
	public String getAcEntryNo() {
		return acEntryNo;
	}

	/**
	 * @param 账务系统分录编号 the acEntryNo to set
	 */
	public void setAcEntryNo(String acEntryNo) {
		this.acEntryNo = acEntryNo;
	}

	/**
	 * @return the 账务系统客户号
	 */
	public String getAcCustId() {
		return acCustId;
	}

	/**
	 * @param 账务系统客户号 the acCustId to set
	 */
	public void setAcCustId(String acCustId) {
		this.acCustId = acCustId;
	}

	/**
	 * @return the 账务系统账户类型
	 */
	public String getAcAccType() {
		return acAccType;
	}

	/**
	 * @param 账务系统账户类型 the acAccType to set
	 */
	public void setAcAccType(String acAccType) {
		this.acAccType = acAccType;
	}

	/**
	 * @return the 账务系统增向金额
	 */
	public BigDecimal getAcAddAmount() {
		return acAddAmount;
	}

	/**
	 * @param 账务系统增向金额 the acAddAmount to set
	 */
	public void setAcAddAmount(BigDecimal acAddAmount) {
		this.acAddAmount = acAddAmount;
	}

	/**
	 * @return the 账务系统减向金额
	 */
	public BigDecimal getAcDecAmount() {
		return acDecAmount;
	}

	/**
	 * @param 账务系统减向金额 the acDecAmount to set
	 */
	public void setAcDecAmount(BigDecimal acDecAmount) {
		this.acDecAmount = acDecAmount;
	}

	/**
	 * @return the 账务系统交易时间
	 */
	public Timestamp getAcTransDate() {
		return acTransDate;
	}

	/**
	 * @param 账务系统交易时间 the acTransDate to set
	 */
	public void setAcTransDate(Timestamp acTransDate) {
		this.acTransDate = acTransDate;
	}

	/**
	 * @return the 账务系统交易类型
	 */
	public String getAcTransType() {
		return acTransType;
	}

	/**
	 * @param 账务系统交易类型 the acTransType to set
	 */
	public void setAcTransType(String acTransType) {
		this.acTransType = acTransType;
	}

	/**
	 * @return the 账务系统原交易单号
	 */
	public String getAcSourceTransNo() {
		return acSourceTransNo;
	}

	/**
	 * @param 账务系统原交易单号 the acSourceTransNo to set
	 */
	public void setAcSourceTransNo(String acSourceTransNo) {
		this.acSourceTransNo = acSourceTransNo;
	}

	
}