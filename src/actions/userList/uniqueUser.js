import reqwest from 'reqwest';
import React from 'react';

import {
	notification
} from 'antd';

const uniqueUser = (data, callback) => {
	console.log('###getTable参数###', data);

	return function(dispatch) {
		//发送请求
		reqwest({
			url: '/user/unique.do',
			method: 'post',
			data: data,
			type: 'json',
			header: {
				"aaa": "bbb"
			}
		}).then((msg) => {

			console.log(msg, '### 删除 ###');

			if (msg.status) {


				callback(true);
			} else {
				notification['error']({
					message: '邮箱',
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
	uniqueUser
}