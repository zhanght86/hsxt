/* * Copyright (c) 2015-2018 SHENZHEN GUIYI SCIENCE AND TECHNOLOGY DEVELOP CO., LTD. All rights reserved. * * 注意：本内容仅限于深圳市归一科技研发有限公司内部传阅，禁止外泄以及用于其他的商业目的  */package com.gy.hsxt.bs.bean.bizfile;/** * 常用业务文档实体类 *  * @Package: com.gy.hsxt.bs.bean.bizfile * @ClassName: NormalDoc * @Description: TODO *  * @author: kongsl * @date: 2016-2-18 下午3:01:44 * @version V3.0.0 */public class NormalDoc implements java.io.Serializable {    private static final long serialVersionUID = -1851358975906173778L;    // field    /** 文档ID **/    private String docId;    /** 文档名称 **/    private String docName;    /** 文档类型 **/    private String docType;    /** 唯一标识 **/    private String docCode;    /** 文件ID **/    private String fileId;    /** 文档状态1：未发布 2：正常 3：停用 **/    private Integer status;    /** 文档说明 **/    private String remark;    /** 文档版本号 **/    private Integer docVersion;    /** 创建时间 **/    private String createdDate;    /** 创建人 **/    private String createdBy;    /** 更新时间 **/    private String updatedDate;    /** 更新人 **/    private String updatedBy;    // method    public String getDocId() {        return docId;    }    public void setDocId(String docId) {        this.docId = docId;    }    public String getDocName() {        return docName;    }    public void setDocName(String docName) {        this.docName = docName;    }    public String getDocType() {        return docType;    }    public void setDocType(String docType) {        this.docType = docType;    }    public String getDocCode() {        return docCode;    }    public void setDocCode(String docCode) {        this.docCode = docCode;    }    public String getFileId() {        return fileId;    }    public void setFileId(String fileId) {        this.fileId = fileId;    }    public Integer getStatus() {        return status;    }    public void setStatus(Integer status) {        this.status = status;    }    public String getRemark() {        return remark;    }    public void setRemark(String remark) {        this.remark = remark;    }    public Integer getDocVersion() {        return docVersion;    }    public void setDocVersion(Integer docVersion) {        this.docVersion = docVersion;    }    public String getCreatedDate() {        return createdDate;    }    public void setCreatedDate(String createdDate) {        this.createdDate = createdDate;    }    public String getCreatedBy() {        return createdBy;    }    public void setCreatedBy(String createdBy) {        this.createdBy = createdBy;    }    public String getUpdatedDate() {        return updatedDate;    }    public void setUpdatedDate(String updatedDate) {        this.updatedDate = updatedDate;    }    public String getUpdatedBy() {        return updatedBy;    }    public void setUpdatedBy(String updatedBy) {        this.updatedBy = updatedBy;    }    // override toString Method    public String toString() {        StringBuffer sb = new StringBuffer();        sb.append("{");        sb.append("'docId':'" + this.getDocId() + "',");        sb.append("'docName':'" + this.getDocName() + "',");        sb.append("'docType':'" + this.getDocType() + "',");        sb.append("'docCode':'" + this.getDocCode() + "',");        sb.append("'fileId':'" + this.getFileId() + "',");        sb.append("'status':'" + this.getStatus() + "',");        sb.append("'remark':'" + this.getRemark() + "',");        sb.append("'docVersion':'" + this.getDocVersion() + "',");        sb.append("'createdDate':'" + this.getCreatedDate() + "',");        sb.append("'createdBy':'" + this.getCreatedBy() + "',");        sb.append("'updatedDate':'" + this.getUpdatedDate() + "',");        sb.append("'updatedBy':'" + this.getUpdatedBy() + "',");        sb.append("}");        return sb.toString();    }    // return String[] filed;    public String[] getField() {        return new String[] { "docId", "docName", "docType", "docCode", "fileId", "status", "remark", "docVersion",                "createdDate", "createdBy", "updatedDate", "updatedBy" };    }}