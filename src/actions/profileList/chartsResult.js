import React from 'react';

import {
	notification
} from 'antd';

import reqwest from 'reqwest';



/**
 * 单渠道接口
 * @method getTableData
 * @param data {Object} 参数
 * @param dispatch {Function} 触发改变状态
 */
const chartsResult = (data, dispatch) => {

	dispatch({
		type: "PROFILELIST_CHARTLOADING",
		payload: true
	})


	//发送请求
	reqwest({
		url: '/data/overview/chart.do',
		method: 'post',
		data: data,
		type: 'json',
		header: {
			"aaa": "bbb"
		}
	}).then((msg) => {
		if (msg.status) {


			dispatch({
				type: "PROFILELIST_CHARTSRESULT",
				payload: msg.data
			})


			dispatch({
				type: "PROFILELIST_CHARTLOADING",
				payload: false
			})

		} else {

			notification['error']({
				message: '获取图表',
				description: msg.msg,
			});
		}

		if (msg.msg == -1) {
			alert(-1);
			props.router.push('/login');
		}
	}).fail(function(err, msg) {

		notification['error']({
			message: '获取图表',
			description: JSON.stringify(err)
		});

	})

}

export {
	chartsResult
}