import React from 'react';

import {
	notification
} from 'antd';
import reqwest from 'reqwest';

const deleteUser = (data, callback) => {

	console.log('###getTable参数###', data);

	return function(dispatch) {
		//发送请求
		reqwest({
			url: '/user/delete.do',
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
					message: '删除成功',
					description: msg.msg,
				});

				callback(true);
			} else {
				notification['error']({
					message: '删除失败',
					description: msg.msg,
				});
			}

			if (msg.msg == -1) {
				alert(-1);
				props.router.push('/login');
			}
		});
	}
}

export {
	deleteUser
}