 /**
  * 单渠道状态
  * @method channelList
  * @state {Object} 单渠道状态
  * @action {Object} 单渠道动作 
  */

 const channelList = (state, action) => {
 	if (typeof state === "undefined") {
 		return {
 			channelList: []
 		};
 	}

 	switch (action.type) {
 		case "PROFILELIST_CHANNELLIST":
 			return Object.assign({}, state, {
 				channelList: action.payload
 			});
 		default:
 			return state;
 	}
 }

 export {
 	channelList
 }