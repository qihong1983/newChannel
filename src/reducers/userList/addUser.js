/**
 * email 去重
 * @method uniqueUser
 * @param state {Object} 装态
 * @param action (Object) 动作
 */
const addUser = (state, action) => {
	if (typeof state === "undefined") {
		//初始化
		return {
			email: "",
			name: "",
			auth: []
		};
	}

	switch (action.type) {

		case "CREATE_USER_EMAIL":
			//邮件参数 
			return Object.assign({}, state, {
				email: action.payload
			});

		case "CREATE_USER_NAME":
			//邮件参数 
			return Object.assign({}, state, {
				name: action.payload
			});

		case "CREATE_USER_AUTH":
			debugger;
			//邮件参数 
			return Object.assign({}, state, {
				auth: action.payload
			});

		default:
			//返回初始化
			return state;
	}
}

export {
	addUser
}