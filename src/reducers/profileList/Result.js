 /**
  * 表格数据返回结束状态
  * @method Result
  * @param state 状态
  * @param action 动作
  * @param state 返回新状态
  */
 const Result = (state, action) => {

 	//是否定义,默认值
 	if (typeof state === "undefined") {
 		return {
 			tableList: []
 		};
 	}

 	switch (action.type) {
 		//表格状态动作
 		case "PROFILE_LIST_TABLE":
 			return Object.assign({}, state, {
 				tableList: action.payload
 			});
 		default:
 			return state;
 	}
 }

 export {
 	Result
 }