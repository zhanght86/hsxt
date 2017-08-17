/***************************************************************************
 *
 * This document contains confidential and proprietary information 
 * subject to non-disclosure agreements with GUIYI Technology, Ltd. 
 * This information shall not be distributed or copied without written 
 * permission from GUIYI technology, Ltd.
 *
 ***************************************************************************/

package com.gy.hsxt.pg.common.utils;

import javax.servlet.http.HttpServletRequest;

import com.gy.hsxt.pg.bankadapter.common.utils.StringHelper;
import com.gy.hsxt.pg.common.bean.CallbackRouterInfo;
import com.gy.hsxt.pg.common.constant.ConfigConst;
import com.gy.hsxt.pg.common.constant.Constant.PGUrlKeywords;
import com.gy.hsxt.pg.common.spring.PropertyConfigurer;

/***************************************************************************
 * <PRE>
 *  Project Name    : hsxt-pg-service
 * 
 *  Package Name    : com.gy.hsxt.pg.common.utils
 * 
 *  File Name       : CallbackUrlHelper.java
 * 
 *  Creation Date   : 2015-09-23
 * 
 *  Author          : zhangysh
 * 
 *  Purpose         : RouterHelper
 * 
 * 
 *  History         : none
 * 
 * </PRE>
 ***************************************************************************/

public class CallbackUrlHelper {

	private static final StringBuilder URL_REGEX = new StringBuilder();

	static {
		URL_REGEX.append(".*(/");
		URL_REGEX.append(PGUrlKeywords.PAY_GATEWAY).append("/");
		URL_REGEX.append(PGUrlKeywords.CALLBACK).append("/");
		URL_REGEX
				.append("((" + PGUrlKeywords.NOTIFY + ")|("
						+ PGUrlKeywords.JUMP + "))").append("/");
		URL_REGEX.append(")");
	}

	/**
	 * 解析回调的路由指标参数, 为了避免参数过多, 没有直接使用springmvc的rest风格获取参数
	 * 
	 * @param request
	 * @param urlKeywords
	 *            UfePgwUrlKeywords 的常量
	 * @return
	 */
	// http://www.hsxt.com:80/站点名称/p/c/j/银行代号/支付渠道/商户类型/业务类型/自定义类型(可选)/
	// http://www.hsxt.com:80/站点名称/p/c/n/银行代号/支付渠道/商户类型/业务类型/自定义类型(可选)/
	// http://unionpay.hsxt.net:18084/hsxt-pg/p/c/n/银行代号/100/100/1/
	public static CallbackRouterInfo getCallbackRouterInfo(
			HttpServletRequest request) {
		// 请求地址
		String fullUrl = request.getRequestURL().toString();

		String params = fullUrl.replaceFirst(URL_REGEX.toString(), "");
		String[] paramArray = params.split("/");

		if (null != paramArray) {
			// 银行代号(即:支付渠道提供商)
			String channelProvider = (1 <= paramArray.length) ? paramArray[0]
					: "";

			// 支付渠道
			String payChannel = (2 <= paramArray.length) ? paramArray[1] : "";

			// 商户类型
			String merType = (3 <= paramArray.length) ? paramArray[2] : "";

			// 业务类型
			String bizType = (4 <= paramArray.length) ? paramArray[3] : "";

			// 自定义类型
			String customizeType = (5 <= paramArray.length) ? paramArray[4]
					: "";

			if (StringUtils.isAllNotEmpty(payChannel, merType, bizType)) {
				return new CallbackRouterInfo(channelProvider,
						StringUtils.str2Int(payChannel),
						StringUtils.str2Int(merType),
						StringUtils.str2Int(bizType), customizeType);
			}
		}

		return null;
	}

	/**
	 * 组装开放给银行的回调jump网址
	 * 
	 * @param routerInfo
	 * @return
	 */
	// http://www.hsxt.com:80/站点名称/p/c/j/银行代号/支付渠道/商户类型
	public static String assembleCallbackJumpUrl(CallbackRouterInfo routerInfo) {
		return assembleCallbackJumpUrl(routerInfo, PGUrlKeywords.JUMP);
	}

	/**
	 * 组装开放给银行的回调notify网址
	 * 
	 * @param routerInfo
	 * @return
	 */
	// http://www.hsxt.com:80/站点名称/p/c/n/银行代号/支付渠道/商户类型
	public static String assembleCallbackNotifyUrl(CallbackRouterInfo routerInfo) {
		return assembleCallbackJumpUrl(routerInfo, PGUrlKeywords.NOTIFY);
	}

	/**
	 * 组装notifyUrl
	 * 
	 * @param channelProvider
	 * @param payChannel
	 * @param merType
	 * @param bizType
	 * @return
	 */
	public static String getNotifyUrl(String channelProvider,
			Integer payChannel, Integer merType, Integer bizType) {
		return getNotifyUrl(channelProvider, payChannel, merType, bizType, "");
	}

	/**
	 * 组装notifyUrl
	 * 
	 * @param channelProvider
	 * @param payChannel
	 * @param merType
	 * @param bizType
	 * @param customizeType
	 * @return
	 */
	public static String getNotifyUrl(String channelProvider,
			Integer payChannel, Integer merType, Integer bizType,
			String customizeType) {
		return CallbackUrlHelper
				.assembleCallbackNotifyUrl(new CallbackRouterInfo(
						channelProvider, payChannel, merType, bizType,
						customizeType));
	}

	/**
	 * 组装jumpUrl
	 * 
	 * @param channelProvider
	 * @param payChannel
	 * @param merType
	 * @param bizType
	 * @return
	 */
	public static String getJumpUrl(String channelProvider, Integer payChannel,
			Integer merType, Integer bizType) {
		return getJumpUrl(channelProvider, payChannel, merType, bizType, "");
	}

	/**
	 * 组装jumpUrl
	 * 
	 * @param channelProvider
	 * @param payChannel
	 * @param merType
	 * @param bizType
	 * @param customizeType
	 * @return
	 */
	public static String getJumpUrl(String channelProvider, Integer payChannel,
			Integer merType, Integer bizType, String customizeType) {
		return CallbackUrlHelper
				.assembleCallbackJumpUrl(new CallbackRouterInfo(
						channelProvider, payChannel, merType, bizType,
						customizeType));
	}

	/**
	 * 组装开放给银行的回调网址
	 * 
	 * @param routerInfo
	 * @param urlKeywords
	 *            (jmp or ntf)
	 * @return
	 */
	// http://www.hsxt.com:80/站点名称/p/c/j/银行代号/支付渠道/商户类型/业务类型/
	// http://www.hsxt.com:80/站点名称/p/c/n/银行代号/支付渠道/商户类型/业务类型/
	// http://unionpay.hsxt.net:18084/hsxt-pg/p/c/n//银行代号100/100/1/
	private static String assembleCallbackJumpUrl(
			CallbackRouterInfo routerInfo, String urlKeywords) {
		String accessAddress = PropertyConfigurer.getProperty(
				ConfigConst.SYSTEM_EXTERNAL_ACCESS_ADDRESS).replaceAll(
				"/{1,}$", "");
		String customizeType = routerInfo.getCustomizeType();

		StringBuilder path = new StringBuilder();
		path.append(accessAddress);
		path.append("/");
		path.append(PGUrlKeywords.PAY_GATEWAY);
		path.append("/");
		path.append(PGUrlKeywords.CALLBACK);
		path.append("/");
		path.append(urlKeywords);
		path.append("/");
		path.append(routerInfo.getChannelProvider());
		path.append("/");
		path.append(routerInfo.getPayChannel());
		path.append("/");
		path.append(routerInfo.getMerType());
		path.append("/");
		path.append(routerInfo.getBizType());
		path.append("/");

		if (!StringHelper.isEmptyTrim(customizeType)) {
			path.append(customizeType);
		}

		return path.toString();
	}
}
