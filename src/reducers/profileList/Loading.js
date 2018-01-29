 /**
  * 表格加载中状态
  * @method Loading
  * @param state {Object} 状态
  * @param action {Object} 动作
  */


 const Loading = (state, action) => {
 	//初始化
 	if (typeof state === "undefined") {
 		return {
 			loading: false
 		};
 	}


 	switch (action.type) {
 		case "PROFILELIST_LOADING":
 			return Object.assign({}, state, {
 				loading: action.payload
 			});
 		default:
 			return state;
 	}
 }

 export {
 	Loading
 }