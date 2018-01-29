//单渠道
import {
	overviewOut
} from './overviewOut';

/**
 * 单渠道
 * @method channelDetail 
 * @param param {Object} 请求参数
 * @param channel {String} 单渠道名称 
 */
const channelDetail = (data) => {

	return function(dispatch) {

		//设置单渠道请求类型
		dispatch({
			type: "PROFILELIST_TYPE",
			payload: 3
		});

		//设置单渠道请求类型
		dispatch({
			type: "PROFILE_LIST_CURRENT",
			payload: 1
		});

		//设置table表头
		dispatch({
			type: "PROFILELIST_TABLE_COLUMNS",
			payload: [{
				title: '日期',
				dataIndex: 'day'
			}, {
				title: '迁入渠道',
				dataIndex: 'newChannel'
			}, {
				title: '迁出用户',
				dataIndex: 'countUser'
			}]
		});
		//设置单渠道
		dispatch({
			type: "PROFILELIST_CHANNEL",
			payload: data.channelName
		});



		//发送单渠道请求
		overviewOut(data, dispatch);
	}
}

export {
	channelDetail
}