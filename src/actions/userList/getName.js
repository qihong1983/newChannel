/**
 * 汇总和明细
 * @method getTableData
 * @param data {Object} 参数
 * @param dispatch {Function} 触发改变状态
 */
const getName = (data) => {

	console.log('###getName参数###', data);

	return function(dispatch) {
		dispatch({
			type: "USER_LIST_NAME",
			payload: data.name
		})
	}
}

export {
	getName
}