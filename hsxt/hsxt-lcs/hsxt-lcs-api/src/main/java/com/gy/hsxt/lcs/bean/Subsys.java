package com.gy.hsxt.lcs.bean;import com.alibaba.fastjson.JSON;/** * 子系统信息 *  * @Package: com.gy.hsxt.lcs.bean   * @ClassName: Subsys  * @Description: 重新修改了注释 * * @author: yangjianguo  * @date: 2015-12-15 下午12:21:53  * @version V1.0 */public class Subsys implements java.io.Serializable {    private static final long serialVersionUID = -2490411822788114804L;    /** 系统代码 **/    private String subsysCode;    /** 系统中文名 **/    private String sysName;    /** 系统描述 **/    private String sysDesc;    /** 删除标记 **/    private long delFlag;    /** 版本号 **/    private long version;    public String getSubsysCode() {        return subsysCode;    }    public void setSubsysCode(String subsysCode) {        this.subsysCode = subsysCode;    }    public String getSysName() {        return sysName;    }    public void setSysName(String sysName) {        this.sysName = sysName;    }    public String getSysDesc() {        return sysDesc;    }    public void setSysDesc(String sysDesc) {        this.sysDesc = sysDesc;    }    public long getDelFlag() {        return delFlag;    }    public void setDelFlag(long delFlag) {        this.delFlag = delFlag;    }    public long getVersion() {        return version;    }    public void setVersion(long version) {        this.version = version;    }    @Override    public String toString() {        return JSON.toJSONString(this);    }}