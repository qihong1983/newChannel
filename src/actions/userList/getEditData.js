import reqwest from 'reqwest';
import React from 'react';

import {
	notification
} from 'antd';

import {
	strToArr
} from '../../common/utils';

const getEditData = (data) => {
	console.log('###参数###', data);

	return function(dispatch) {
		//发送请求
		reqwest({
			url: '/user/get.do',
			method: 'post',
			data: data,
			type: 'json',
			header: {
				"aaa": "bbb"
			}
		}).then((msg) => {


			if (msg.status) {
				dispatch({
					type: "CREATE_USER_NAME",
					payload: msg.data.cname
				});

				dispatch({
					type: "CREATE_USER_EMAIL",
					payload: msg.data.email.split("@")[0]
				});

				dispatch({
					type: "CREATE_USER_AUTH",
					payload: strToArr(msg.data.mid)
				});

			} else {
				notification['error']({
					message: '数据获取失败',
					description: msg.msg,
				});
			}

			if (msg.msg == -1) {
				props.router.push('/login');
			}
		});
	}
}

export {
	getEditData
}