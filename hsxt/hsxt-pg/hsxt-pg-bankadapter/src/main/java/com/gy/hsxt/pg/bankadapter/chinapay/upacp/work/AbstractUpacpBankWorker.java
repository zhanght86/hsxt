/***************************************************************************
 *
 * This document contains confidential and proprietary information 
 * subject to non-disclosure agreements with GUIYI Technology, Ltd. 
 * This information shall not be distributed or copied without written 
 * permission from GUIYI technology, Ltd.
 *
 ***************************************************************************/

package com.gy.hsxt.pg.bankadapter.chinapay.upacp.work;

import java.math.BigInteger;
import java.util.Date;
import java.util.HashMap;
import java.util.Iterator;
import java.util.Map;
import java.util.Map.Entry;

import org.apache.commons.httpclient.HttpStatus;
import org.apache.log4j.Logger;

import com.alibaba.fastjson.JSON;
import com.gy.hsxt.pg.bankadapter.chinapay.CpBizValueMapSwapper;
import com.gy.hsxt.pg.bankadapter.chinapay.upacp.ChinapayUpacpFacade;
import com.gy.hsxt.pg.bankadapter.chinapay.upacp.common.UpacpConst.UpacpBankTransType;
import com.gy.hsxt.pg.bankadapter.chinapay.upacp.common.UpacpConst.UpacpRespCode;
import com.gy.hsxt.pg.bankadapter.chinapay.upacp.params.UpacpBankRespParam;
import com.gy.hsxt.pg.bankadapter.common.beans.BankPaymentOrderResultDTO;
import com.gy.hsxt.pg.bankadapter.common.constants.BanksConstants;
import com.gy.hsxt.pg.bankadapter.common.constants.BanksConstants.ErrorCode;
import com.gy.hsxt.pg.bankadapter.common.constants.PaymentOrderStatus;
import com.gy.hsxt.pg.bankadapter.common.exception.BankAdapterException;
import com.gy.hsxt.pg.bankadapter.common.utils.DateUtils;
import com.gy.hsxt.pg.bankadapter.common.utils.StringHelper;
import com.unionpay.acp.sdk.HttpClient;
import com.unionpay.acp.sdk.SDKUtil;

/***************************************************************************
 * <PRE>
 *  Project Name    : bankadapter
 * 
 *  Package Name    : com.gy.hsxt.pg.bankadapter.chinapay.upacp.worker
 * 
 *  File Name       : AbstractUpacpBankWorker.java
 * 
 *  Creation Date   : 2014-11-21
 * 
 *  Author          : zhangysh
 * 
 *  Purpose         : AbstractUpacpBankWorker
 * 
 * 
 *  History         : none
 * 
 * </PRE>
 ***************************************************************************/
public abstract class AbstractUpacpBankWorker {

	protected final Logger logger = Logger.getLogger(this.getClass());

	protected ChinapayUpacpFacade chinapayUpacpFacade;

	/** 商户号 **/
	protected String mechantNo;

	/** 验证签名证书目录 **/
	protected String validateCertDir;

	/** 签名证书路径/两码(证书密码和类型) **/
	protected String signCertPath;
	protected String signCertPwd;
	protected String signCertType;

	public AbstractUpacpBankWorker() {
	}

	/**
	 * 初始化数据
	 * 
	 * @param facade
	 */
	public void initFacade(ChinapayUpacpFacade facade) {
		this.chinapayUpacpFacade = facade;

		this.mechantNo = facade.getMechantNo();
		this.validateCertDir = facade.getValidateCertDir();
		this.signCertPath = facade.getSignCertPath();
		this.signCertPwd = facade.getSignCertPwd();
		this.signCertType = facade.getSignCertType();
	}

	/**
	 * 对数据进行签名
	 * 
	 * @param contentData
	 * @return　签名后的map对象
	 */
	@SuppressWarnings("unchecked")
	protected Map<String, String> signData(Map<String, String> contentData) {

		String value;
		Entry<String, String> obj;

		Map<String, String> submitFromData = new HashMap<String, String>();

		Iterator<?> itor = contentData.entrySet().iterator();

		while (itor.hasNext()) {
			obj = (Entry<String, String>) itor.next();

			value = obj.getValue();

			if (!StringHelper.isEmpty(value)) {
				// 对value值进行去除前后空处理
				submitFromData.put(obj.getKey(), value.trim());
			}
		}

		// 签名
		SDKUtil.sign(submitFromData, BanksConstants.CHARSET_UTF8);

		return submitFromData;
	}

	/**
	 * 数据提交到后台
	 * 
	 * @param submitFromData
	 * @param requestUrl
	 * @return
	 */
	protected Map<String, String> submit2Bank(
			Map<String, String> submitFromData, String requestUrl) {

		String resultString = "";

		HttpClient httpClient = new HttpClient(requestUrl, 30000, 30000);

		try {
			// 发送请求
			int status = httpClient.send(submitFromData,
					BanksConstants.CHARSET_UTF8);

			if (HttpStatus.SC_OK == status) {
				resultString = httpClient.getResult();
			}
		} catch (Exception e) {
			logger.error("", e);

			throw new BankAdapterException(ErrorCode.SOCKET_ERROR,
					"发起中国银联UPACP请求失败, 原因：通信失败!!");
		}

		// 验证签名
		if (!StringHelper.isEmpty(resultString)) {
			// 将返回结果转换为map
			Map<String, String> resData = SDKUtil
					.convertResultStringToMap(resultString);

			if (!SDKUtil.validate(resData, BanksConstants.CHARSET_UTF8)) {
				logger.info("SDKUtil.validate: 中国银联UPACP验证签名失败!!  responseData:"
						+ JSON.toJSONString(resData));

				throw new BankAdapterException(ErrorCode.FAILED_CHECK_SIGN,
						"验证中国银联UPACP签名失败!!");
			}

			// 打印返回报文
			logger.info("返回报文：" + JSON.toJSONString(resData));

			return resData;
		}

		throw new BankAdapterException(ErrorCode.RESP_PACKET_ABNORMAL,
				"发起中国银联UPACP请求失败, 原因：空报文异常!!");
	}
	
	/**
	 * 获取默认状态
	 * 
	 * @param transType
	 * @return
	 */
	protected PaymentOrderStatus getDefaultStatus(String transType) {
		
		if (UpacpBankTransType.PAY.equals(transType)) {
			return PaymentOrderStatus.PAY_FAILED;
		} else if (UpacpBankTransType.REFUND.equals(transType)) {
			return PaymentOrderStatus.REFUND_FAILED;
		}

		return PaymentOrderStatus.UNKNOWN;
	}
	
	/**
	 * 判断是否为处理中状态
	 * 
	 * @param origRespCode
	 * @return
	 */
	protected boolean isTransProcessing(String origRespCode) {
		
		// 03-交易通讯超时，请发起查询交易
		// 04-交易状态未明，请查询对账结果
		// 05-交易已受理，请稍后查询交易结果
		return (UpacpRespCode.ERR_03.valueEquals(origRespCode)
				|| UpacpRespCode.ERR_04.valueEquals(origRespCode) || UpacpRespCode.ERR_05
					.valueEquals(origRespCode));
	}

	/**
	 * 矫正日期, 将时间替换为0, 最终日期格式：yyyyMMddHHmmss
	 * 
	 * @param orderDate
	 * @return
	 */
	protected String resetDateTime2Zero(Date orderDate) {
		String strOrderDate = null;

		if (!StringHelper.isEmpty(orderDate)) {
			strOrderDate = DateUtils.format2yyyyMMddDate(orderDate);

			return StringHelper.rightPad(strOrderDate, 14, '0');
		}

		return "";
	}

	/**
	 * 转换为BankPaymentOrderResultDTO对象
	 * 
	 * @param bankRespParam
	 * @return
	 */
	protected BankPaymentOrderResultDTO convert2BankPaymentOrderResultDTO(
			UpacpBankRespParam bankRespParam) {

		Date transDate = DateUtils.getYYYYMMddHHmmssDate(bankRespParam
				.getTranTime());

		String orderNo = bankRespParam.getOrderNo();
		String transType = bankRespParam.getTransType(); // 01-支付,04-退款
		String currency = bankRespParam.getCurrency();
		String amount = bankRespParam.getPayAmount();
		String priv1 = bankRespParam.getPriv1();
		String qn = bankRespParam.getQn();
		
		// 将银行的交易类型枚举值适配成我们内部的交易类型枚举值
	    int pgTransType = CpBizValueMapSwapper.toPgTransType(transType);

		// 实例化BankPaymentOrderResultDTO对象
		BankPaymentOrderResultDTO returnValue = new BankPaymentOrderResultDTO(
				orderNo, this.getDefaultStatus(transType));
		returnValue.setCrrrency(currency);
		returnValue.setOrderNo(orderNo);
		returnValue.setTranTime(transDate);
		returnValue.setTransType(pgTransType);
		returnValue.setBankSeqNo(qn);
		returnValue.setPriv1(priv1);

		if (!StringHelper.isEmpty(amount)) {
			returnValue.setPayAmount(new BigInteger(amount));
		}

		// 响应码
		String origRespCode = bankRespParam.getRespCode();
		// String origRespMsg = bankRespParam.getRespMsg();

		// 支付或退款成功
		if (UpacpRespCode.OPT_SUCCESS.valueEquals(origRespCode)) {
			PaymentOrderStatus orderStatus = (UpacpBankTransType.PAY
					.equals(transType)) ? PaymentOrderStatus.PAY_SUCCESS
					: PaymentOrderStatus.REFUND_SUCCESS;

			returnValue.setOrderStatus(orderStatus);
		}
		// 支付或退款处理中
		else if (isTransProcessing(origRespCode)) {
			PaymentOrderStatus orderStatus = (UpacpBankTransType.PAY
					.equals(transType)) ? PaymentOrderStatus.PAY_PROCESSING
					: PaymentOrderStatus.REFUND_PROCESSING;

			returnValue.setOrderStatus(orderStatus);
		}
		// 其他均为失败
		else {
			returnValue.setErrorInfo(UpacpRespCode
					.getDescByErrCode(origRespCode));
		}
		
		bankRespParam = null;

		return returnValue;
	}
}
