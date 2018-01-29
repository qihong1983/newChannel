 /**
  * 图表加载状态
  * @method ChartLoading
  * @state {Object} 状态
  * @action {Object} 动作 
  */

 const ChartLoading = (state, action) => {
 	if (typeof state === "undefined") {
 		return {
 			chartLoading: false
 		};
 	}

 	switch (action.type) {
 		case "PROFILELIST_CHARTLOADING":
 			return Object.assign({}, state, {
 				chartLoading: action.payload
 			});
 		default:
 			return state;
 	}
 }

 export {
 	ChartLoading
 }