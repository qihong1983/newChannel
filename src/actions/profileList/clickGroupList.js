/**
 * 切换操作系统
 * @method clickGroupList
 * @param data {Object} 参数
 * @param id {String} 参数
 * @return {Function}
 */
const clickGroupList = (data, getChannelList) => {

	return function(dispatch) {

		dispatch({
			type: "PROFILELIST_CHANNELGROUP",
			payload: data.channelGroup
		})

		var channelListdata = {
			appCode: data.appCode,
			channelGroup: data.channelGroup,
			channelCategory: data.channelCategory,
			channelName: data.channelName
		}

		getChannelList(channelListdata);
	}
}

export {
	clickGroupList
}