package com.gy.hsxt.uc.bs.bean.consumer;

import java.io.Serializable;
import java.sql.Timestamp;

import com.alibaba.fastjson.JSONObject;



public class BsHsCard implements Serializable{

	private static final long serialVersionUID = -7907507998812194136L;
	  
    /** 客户号 */
    private String perCustId;

    /** 互生号 */
    private String perResNo;

    /** 卡暗码 */
    private String cryptogram;

    /** 卡版本号 */
    private String version;

    /** 互生卡激活时间首次消费积分时间 */
    private Timestamp activeDate;

    /** 挂失原因 */
    private String lossReason;

    /** 卡状态1：启用、2：停用、3：挂失 */
    private Integer cardStatus;

    /** 标记此条记录的状态Y:可用 N:不可用 */
    private String isactive;

    /** 创建时间创建时间，取记录创建时的系统时间 */
    private Timestamp createDate;

    /** 创建人由谁创建，值为用户的伪键ID */
    private String createdby;

    /** 更新时间更新时间，取记录更新时的系统时间 */
    private Timestamp updateDate;

    /** 更新人由谁更新，值为用户的伪键ID */
    private String updatedby;
    /** 登录密码 */
    private String loginPwd;
    
    /**
     * @return the 客户号
     */
    public String getPerCustId() {
        return perCustId;
    }
    /**
     * @param 客户号
     *            the perCustId to set
     */
    public void setPerCustId(String perCustId) {
        this.perCustId = perCustId == null ? null : perCustId.trim();
    }
    /**
     * @return the 互生号
     */
    public String getPerResNo() {
        return perResNo;
    }
    /**
     * @param 互生号
     *            the perResNo to set
     */
    public void setPerResNo(String perResNo) {
        this.perResNo = perResNo == null ? null : perResNo.trim();
    }
    /**
     * @return the 卡暗码
     */
    public String getCryptogram() {
        return cryptogram;
    }
    /**
     * @param 卡暗码
     *            the cryptogram to set
     */
    public void setCryptogram(String cryptogram) {
        this.cryptogram = cryptogram == null ? null : cryptogram.trim();
    }
    /**
     * @return the 卡版本号
     */
    public String getVersion() {
        return version;
    }
    /**
     * @param 卡版本号
     *            the version to set
     */
    public void setVersion(String version) {
        this.version = version == null ? null : version.trim();
    }

    /**
     * @return the 挂失原因
     */
    public String getLossReason() {
        return lossReason;
    }
    /**
     * @param 挂失原因
     *            the lossReason to set
     */
    public void setLossReason(String lossReason) {
        this.lossReason = lossReason == null ? null : lossReason.trim();
    }
    /**
     * @return the 卡状态1：启用、2：停用、3：挂失
     */
    public Integer getCardStatus() {
        return cardStatus;
    }
    /**
     * @param 卡状态1：启用、2：停用、3：挂失
     *            the cardStatus to set
     */
    public void setCardStatus(Integer cardStatus) {
        this.cardStatus = cardStatus;
    }
    /**
     * @return the 标记此条记录的状态Y:可用 N:不可用
     */
    public String getIsactive() {
        return isactive;
    }
    /**
     * @param 标记此条记录的状态Y:可用 N:不可用
     *            the isactive to set
     */
    public void setIsactive(String isactive) {
        this.isactive = isactive == null ? null : isactive.trim();
    }

    /**
     * @return the 创建时间创建时间，取记录创建时的系统时间
     */
    public String getCreatedby() {
        return createdby;
    }
    /**
     * @param 创建时间创建时间，取记录创建时的系统时间
     *            the createdby to set
     */
    public void setCreatedby(String createdby) {
        this.createdby = createdby == null ? null : createdby.trim();
    }
    /**
     * @return the 更新人由谁更新，值为用户的伪键ID
     */
    public String getUpdatedby() {
        return updatedby;
    }
    /**
     * @param 更新人由谁更新，值为用户的伪键ID
     *            the updatedby to set
     */
    public void setUpdatedby(String updatedby) {
        this.updatedby = updatedby == null ? null : updatedby.trim();
    }
    /**
     * @return the 互生卡激活时间首次消费积分时间
     */
    public Timestamp getActiveDate() {
        return activeDate;
    }
    /**
     * @param 互生卡激活时间首次消费积分时间
     *            the activeDate to set
     */
    public void setActiveDate(Timestamp activeDate) {
        this.activeDate = activeDate;
    }
    /**
     * @return the 创建时间创建时间，取记录创建时的系统时间
     */
    public Timestamp getCreateDate() {
        return createDate;
    }
    /**
     * @param 创建时间创建时间，取记录创建时的系统时间
     *            the createDate to set
     */
    public void setCreateDate(Timestamp createDate) {
        this.createDate = createDate;
    }
    /**
     * @return the 更新时间更新时间，取记录更新时的系统时间
     */
    public Timestamp getUpdateDate() {
        return updateDate;
    }
    /**
     * @param 更新时间更新时间，取记录更新时的系统时间
     *            the updateDate to set
     */
    public void setUpdateDate(Timestamp updateDate) {
        this.updateDate = updateDate;
    }
    
    /**
     * @return the 登录密码
     */
    public String getLoginPwd() {
        return loginPwd;
    }
    
    /**
     * @param 登录密码
     *            the loginPwd to set
     */
    public void setLoginPwd(String loginPwd) {
        this.loginPwd = loginPwd;
    }
    public String toString(){
        return JSONObject.toJSONString(this);
    }
    
}