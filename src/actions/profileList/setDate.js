/**
 * 设置时间
 * @method setDate
 * @param param {Object} 参数
 * @param id {Array} 参数
 * @return {Function}
 */
const setDate = (param, id) => {

	return function(dispatch) {

		dispatch({
			type: "PROFILELIST_STARTDATE",
			payload: id[0]
		});


		dispatch({
			type: "PROFILELIST_ENDDATE",
			payload: id[1]
		})

	}
}

export {
	setDate
}