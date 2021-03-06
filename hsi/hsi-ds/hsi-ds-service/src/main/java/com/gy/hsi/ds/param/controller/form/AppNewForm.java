package com.gy.hsi.ds.param.controller.form;

import javax.validation.constraints.NotNull;

import org.hibernate.validator.constraints.NotEmpty;

import com.gy.hsi.ds.common.thirds.dsp.common.form.RequestFormBase;

import lombok.Data;

/**
 * @author liaoqiqi
 * @version 2014-1-24
 */
@Data
public class AppNewForm extends RequestFormBase {

    public String getApp() {
        return app;
    }

    public void setApp(String app) {
        this.app = app;
    }

    public String getDesc() {
        return desc;
    }

    public void setDesc(String desc) {
        this.desc = desc;
    }

    public String getEmails() {
        return emails;
    }

    public void setEmails(String emails) {
        this.emails = emails;
    }

    /**
     *
     */
    private static final long serialVersionUID = 4329463343279659715L;

    @NotNull(message = "app.empty")
    @NotEmpty(message = "app.empty")
    private String app;
    public final static String APP = "app";

    @NotNull(message = "desc.empty")
    @NotEmpty(message = "desc.empty")
    private String desc;

    // 邮箱
    private String emails = "";

}
