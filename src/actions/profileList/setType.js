//单渠道接口
import {
	overviewOut
} from './overviewOut';

//汇总和明细接口
import {
	getTableData
} from './getTableData';


/** 
 * 切换汇总和明细单渠道
 * @method setType 
 * @param param {Object} 请求参数
 * @param id {Number} 请求类型
 * @return {Function}
 */
const setType = (data) => {

	return function(dispatch) {
		//更新请求类型状态
		dispatch({
			type: "PROFILELIST_TYPE",
			payload: data.type
		});

		//更新当前页，置为第一页
		dispatch({
			type: "PROFILE_LIST_CURRENT",
			payload: 1
		})

		//更新每页显示多少条状态
		dispatch({
			type: "PROFILE_LIST_PAGE_SIZE",
			payload: 10
		})


		if (data.type == 1) {
			//1为汇总表头
			dispatch({
				type: "PROFILELIST_TABLE_COLUMNS",
				payload: [{
					title: '日期',
					dataIndex: 'day'
				}, {
					title: '新增用户',
					dataIndex: 'newUser'
				}, {
					title: '用户质量',
					dataIndex: 'qualityPer'
				}, {
					title: '活跃用户',
					dataIndex: 'activeUser'
				}, {
					title: '回访用户',
					dataIndex: 'visitUser'
				}, {
					title: '流失用户',
					dataIndex: 'loseUser'
				}, {
					title: '回归用户',
					dataIndex: 'backUser'
				}, {
					title: '迁出用户',
					dataIndex: 'outUser'
				}]
			});

		} else if (data.type = 2) {
			//2为明细表头
			dispatch({
				type: "PROFILELIST_TABLE_COLUMNS",
				payload: [{
					title: '日期',
					dataIndex: 'day'
				}, {
					title: '渠道名称',
					dataIndex: 'channel'
					// ,
					// render: (text, record) => (<a href="javascript:void(0);" onClick={channelNameFn}>{text}</a>)
				}, {
					title: '新增用户',
					dataIndex: 'newUser'
				}, {
					title: '用户质量',
					dataIndex: 'qualityPer'
				}, {
					title: '活跃用户',
					dataIndex: 'activeUser'
				}, {
					title: '回访用户',
					dataIndex: 'visitUser'
				}, {
					title: '流失用户',
					dataIndex: 'loseUser'
				}, {
					title: '回归用户',
					dataIndex: 'backUser'
				}, {
					title: '迁出用户',
					dataIndex: 'outUser'
				}]
			});
		} else if (data.type = 3) {
			//3为单渠道表头
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
		}

		// dispatch({
		// 	type: "PROFILELIST_TABLE_COLUMNS",
		// 	payload: id
		// });

		if (data.type == 3) {

			//单渠道请求参数
			var ajaxData = {
				appCode: data.appCode,
				channelName: data.channelName,
				startDate: data.startDate,
				endDate: data.endDate,
				channelCategory: data.channelCategory,
				offset: data.offset,
				limit: data.limit,
				type: data.type
			}

			overviewOut(ajaxData, dispatch);

		} else {

			//汇总和明细参数
			var ajaxData = {
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

			getTableData(ajaxData, dispatch);

		}
	}
}

export {
	setType
}