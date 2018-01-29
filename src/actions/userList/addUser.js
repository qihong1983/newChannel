import reqwest from 'reqwest';
import React from 'react';

import {
	notification
} from 'antd';

const addUser = (data, callback) => {
	console.log('###参数###', data);

	return function(dispatch) {
		//发送请求
		reqwest({
			url: '/user/add.do',
			method: 'post',
			data: data,
			type: 'json',
			header: {
				"aaa": "bbb"
			}
		}).then((msg) => {

			console.log(msg, '### 删除 ###');

			if (msg.status) {
				notification['success']({
					message: '添加成功',
					description: msg.msg,
				});

				callback(true);
			} else {
				notification['error']({
					message: '添加失败',
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
	addUser
};