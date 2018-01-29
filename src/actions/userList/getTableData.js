import reqwest from 'reqwest';

//给Table 组件数据加key
import {
	addKey
} from '../../common/utils';

/**
 * 汇总和明细
 * @method getTableData
 * @param data {Object} 参数
 * @param dispatch {Function} 触发改变状态
 */
const getTableData = (data) => {

	console.log('###getTable参数###', data);

	return function(dispatch) {

		//更新表格loading
		dispatch({
			type: "USER_LIST_LOADING",
			payload: true
		})


		// offset:1
		// limit:10
		// name:aa

		dispatch({
			type: "USER_LIST_OFFSET",
			payload: data.offset
		});


		dispatch({
			type: "USER_LIST_LIST",
			payload: data.limit
		});

		dispatch({
			type: "USER_LIST_NAME",
			payload: data.name
		});



		//发送请求
		reqwest({
			url: '/user/list.do',
			method: 'post',
			data: data,
			type: 'json',
			header: {
				"aaa": "bbb"
			}
		}).then((msg) => {

			console.log(msg, '### 用户列表响应 ###');

			if (msg.status) {


				dispatch({
					type: "USER_LIST_RESULT",
					payload: addKey(msg.data, 'a-')
				})

				dispatch({
					type: "USER_LIST_TOTAL",
					payload: msg.total
				})

				dispatch({
					type: "USER_LIST_LOADING",
					payload: false
				})


			} else {
				if (msg.msg == -1) {
					alert(-1);
					props.router.push('/login');
				}
			}
		});

	}
}

export {
	getTableData
}