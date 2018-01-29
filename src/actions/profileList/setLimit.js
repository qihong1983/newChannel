//汇总和明细请求方法
import {
	getTableData
} from './getTableData';
//单渠道请求方法
import {
	overviewOut
} from './overviewOut';

/**
 * 每页显示多少条
 * @method setLimit
 * @param param {Object} 参数
 * @param pagination {Object} 分页信息
 * @param channel {String} 单渠道名称
 * @return {Function}
 */
const setLimit = (param, pagination, channel) => {

	return function(dispatch) {
		// 当前页
		dispatch({
			type: "PROFILE_LIST_CURRENT",
			payload: 1
		})

		//设置每页显示多少条
		dispatch({
			type: "PROFILE_LIST_PAGE_SIZE",
			payload: pagination.pageSize
		})


		if (param.type == 3) {
			//3，是单渠道
			var data = {
				appCode: "",
				channelName: channel,
				startDate: "2017-12-16",
				endDate: "2018-01-14",
				channelCategory: "",
				offset: 1,
				limit: 10,
				type: param.type
			}

			overviewOut(data, dispatch);
		} else {
			//1,2 是汇总和明细
			var data = {
				appCode: "",
				channelGroup: "samsung_total_news",
				channelName: "",
				startDate: "2017-12-12",
				endDate: "2018-01-10",
				channelCategory: "",
				offset: 1,
				limit: pagination.pageSize,
				type: param.type
			}

			getTableData(data, dispatch);
		}
	}
}

export {
	setLimit
}