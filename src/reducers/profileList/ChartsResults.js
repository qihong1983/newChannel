 /**
  * 图表数据
  * @method ChartsResult 
  * @param state {Object} 状态
  * @param action {Object} 动作
  */


 const ChartsResults = (state, action) => {
 	//初始化
 	if (typeof state === "undefined") {
 		return {
 			chartResult: []
 		};
 	}


 	switch (action.type) {
 		case "PROFILELIST_CHARTSRESULT":
 			return Object.assign({}, state, {
 				chartResult: action.payload
 			});
 		default:
 			return state;
 	}
 }

 export {
 	ChartsResults
 }