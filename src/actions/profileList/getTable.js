import {
	overviewOut
} from './overviewOut';

//汇总和明细接口
import {
	getTableData
} from './getTableData';

const getTable = (data) => {

	return function(dispatch) {

		if (data.type == 3) {
			//单渠道请求参数
			var tableData = {
				appCode: data.appCode,
				channelName: data.channelName,
				startDate: data.startDate,
				endDate: data.endDate,
				channelCategory: data.channelCategory,
				offset: data.offset,
				limit: data.limit,
				type: data.type
			}

			overviewOut(tableData, dispatch);

		} else {
			//汇总和明细参数
			var tableData = {
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

			getTableData(tableData, dispatch);

		}


	}.bind(this)
};

export {
	getTable
}