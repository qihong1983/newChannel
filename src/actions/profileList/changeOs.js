//单渠道接口
// import {
// 	clickGroupList
// } from './clickGroupList';

//汇总和明细接口
// import {
// 	getChannelList
// } from './getChannelList';

/**
 * 切换操作系统
 * @method changeOs
 * @param param {Object} 参数
 * @param id {String} 参数
 * @return {Function}
 */
const changeOs = (data, getChannelList, getGroupList) => {

	return function(dispatch) {


		// {
		// 	appCode: id,
		// 	channelGroup: "",
		// 	channelCategory: "",
		// 	channelName: ""
		// }

		//切换 appCode
		dispatch({
			type: "PROFILELIST_APPCODE",
			payload: data.appCode
		});

		//初始化渠道组
		dispatch({
			type: "PROFILELIST_CHANNELGROUP",
			payload: data.channelGroup
		});

		//初始化渠道
		dispatch({
			type: "PROFILELIST_CHANNELNAME",
			payload: data.channelName
		});

		//初始化线上线下
		dispatch({
			type: "PROFILELIST_CHANNELCATEGORY",
			payload: data.channelCategory
		});



		//获取渠道列表
		var channelListdata = {
			appCode: data.appCode,
			channelGroup: data.channelGroup,
			channelCategory: data.channelCategory,
			channelName: data.channelName
		}

		getChannelList(channelListdata);

		//获取渠道组列表
		var channelGroupData = {
			appCode: data.appCode,
			channelCategory: data.channelCategory
		}

		getGroupList(channelGroupData);
	}
}

export {
	changeOs
}