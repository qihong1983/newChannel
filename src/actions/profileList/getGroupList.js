import reqwest from 'reqwest';

// 发异步请求
// import {
// 	chartsResult
// } from './gro';

/**
 * 获取渠道组列表
 * @method getGroupList
 * @param data {Object} 参数
 * @return {Function}
 */
const getGroupList = (data) => {

	return function(dispatch) {



		console.log('###获取渠道组列表参数###', data);
		//chartsResult(data, dispatch);

		//发送请求
		reqwest({
			url: '/data/overview/channelGroup.do',
			method: 'post',
			data: data,
			type: 'json'
		}).then((msg) => {

			console.log("###获取渠道组列表参数###", msg);

			if (msg.status) {



				dispatch({
					type: "PROFILELIST_CHANELGROUPLIST",
					// payload: addKey(msg.data, '-')
					payload: msg.data
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
	getGroupList
}