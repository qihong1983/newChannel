import reqwest from 'reqwest';
import React from 'react';

import {
	notification
} from 'antd';

const createUserParamState = (data, callback) => {


	return function(dispatch) {

		dispatch({
			type: "CREATE_USER_NAME",
			payload: data.name
		});

		dispatch({
			type: "CREATE_USER_EMAIL",
			payload: data.email
		});

		dispatch({
			type: "CREATE_USER_AUTH",
			payload: data.auth
		});
	}
}

export {
	createUserParamState
}