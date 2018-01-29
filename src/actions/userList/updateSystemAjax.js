import reqwest from 'reqwest';
import React from 'react';

import {
	notification
} from 'antd';

const updateSystemAjax = (data, callback) => {
	console.log('###参数###', data);

	return function(dispatch) {
		//发送请求
		reqwest({
			// url: '/system/user.do',
			url: '../../mock/userList/systemUser.json',
			method: 'get',
			data: data,
			type: 'json',
			cache: true,
			header: {
				"aaa": "bbb"
			}
		}).then((msg) => {
			console.log(msg, '### 删除 ###');
			if (msg.status) {
				// debugger;
				window.userInfo.data.auth = msg.data.auth;
				window.userInfo.data.name = msg.data.name;
				window.userInfo.data.userName = msg.data.userName;

				callback(true);
			} else {
				notification['error']({
					message: '获取系统用户失败',
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
	updateSystemAjax
};