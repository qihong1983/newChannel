/**
 * 请求参数
 * @method Param
 * @param state {Object} 装态
 * @param action (Object) 动作
 */
const Param = (state, action) => {
	if (typeof state === "undefined") {
		//初始化
		return {
			offset: 1,
			limit: 10,
			name: "",
			loading: false
		};
	}

	switch (action.type) {

		case "USER_LIST_OFFSET":
			//操作系统状态
			return Object.assign({}, state, {
				offset: action.payload
			});

		case "USER_LIST_LIST":
			//渠道组
			return Object.assign({}, state, {
				limit: action.payload
			});

		case "USER_LIST_NAME":
			//搜索渠道
			return Object.assign({}, state, {
				name: action.payload
			});
		case "USER_LIST_LOADING":
			//搜索渠道
			return Object.assign({}, state, {
				loading: action.payload
			});
		default:
			//返回初始化
			return state;

	}
}

export {
	Param
}