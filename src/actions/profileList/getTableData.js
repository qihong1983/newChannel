import reqwest from 'reqwest';

//给Table 组件数据加key
import {
	addKey
} from './addKey';

/**
 * 汇总和明细
 * @method getTableData
 * @param data {Object} 参数
 * @param dispatch {Function} 触发改变状态
 */
const getTableData = (data, dispatch) => {

	console.log('###getTable参数###', data);

	//更新表格loading
	dispatch({
		type: "PROFILELIST_LOADING",
		payload: true
	})

	//发送请求
	reqwest({
		url: '/data/overview/list.do?type=' + data.type,
		method: 'post',
		data: data,
		type: 'json',
		header: {
			"aaa": "bbb"
		}
	}).then((msg) => {
		if (msg.status) {


			dispatch({
				type: "PROFILE_LIST_TABLE",
				payload: addKey(msg.data, 'huizhong-')
			})

			dispatch({
				type: "PROFILE_LIST_TOTAL",
				payload: msg.total
			})

			dispatch({
				type: "PROFILELIST_LOADING",
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

export {
	getTableData
}