//汇总和明细接口
// import {
// 	getChannelList
// } from './getChannelList';

/**
 * 切换线上线下
 * @method changeChannelCategory
 * @param param {Object} 参数
 * @param id {String} 参数
 * @return {Function}
 */
const changeChannelCategory = (data, getChannelList, getGroupList) => {

	return function(dispatch) {

		dispatch({
			type: "PROFILELIST_CHANNELCATEGORY",
			payload: data.channelCategory
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
	changeChannelCategory
}