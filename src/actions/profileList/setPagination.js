// 汇总和明细请求
import {
	getTableData
} from './getTableData';

//单渠道请求
import {
	overviewOut
} from './overviewOut';

/**
 * 分页调用模块
 * @method setPagination
 * @param param {Object} 请求参数
 * @param pagination {Object} 分页参数
 * @channel channel 单渠道名称
 */
// const setPagination = (param, pagination, channel) => {
const setPagination = (data) => {

	return function(dispatch) {
		//更新当前页数状态
		dispatch({
			type: "PROFILE_LIST_CURRENT",
			payload: data.offset
		})
		//更新每页显示多少条状态
		dispatch({
			type: "PROFILE_LIST_PAGE_SIZE",
			payload: data.limit
		})


		if (data.type == 3) {
			//单渠道请求参数设置
			var dataAjax = {
				appCode: data.appCode,
				channelName: data.channel,
				startDate: data.startDate,
				endDate: data.endDate,
				channelCategory: data.channelCategory,
				offset: data.offset,
				limit: data.limit,
				type: data.type
			}
			overviewOut(dataAjax, dispatch);
		} else {
			//汇总和明细请求参数
			var dataAjax = {
				appCode: data.appCode,
				channelGroup: data.channelGroup,
				channelName: data.channelName,
				startDate: data.startDate,
				endDate: data.endDate,
				channelCategory: data.channelCategory,
				offset: data.offset,
				limit: data.limit,
				type: data.type
			}
			getTableData(dataAjax, dispatch);
		}
	}
}

export {
	setPagination
}