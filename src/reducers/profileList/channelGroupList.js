 /**
  * 表格加载中状态
  * @method ChannelGroupList
  * @param state {Object} 状态
  * @param action {Object} 动作
  */


 const ChannelGroupList = (state, action) => {
 	//初始化
 	if (typeof state === "undefined") {
 		return {
 			channelGroupList: []
 		};
 	}

 	switch (action.type) {
 		case "PROFILELIST_CHANELGROUPLIST":
 			return Object.assign({}, state, {
 				channelGroupList: action.payload
 			});
 		default:
 			return state;
 	}
 }

 export {
 	ChannelGroupList
 }