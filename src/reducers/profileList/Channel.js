 /**
  * 单渠道状态
  * @method Channel
  * @state {Object} 单渠道状态
  * @action {Object} 单渠道动作 
  */

 const Channel = (state, action) => {
 	if (typeof state === "undefined") {
 		return {
 			channel: ""
 		};
 	}

 	switch (action.type) {
 		case "PROFILELIST_CHANNEL":
 			return Object.assign({}, state, {
 				channel: action.payload
 			});
 		default:
 			return state;
 	}
 }

 export {
 	Channel
 }