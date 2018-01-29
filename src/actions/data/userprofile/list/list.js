import reqwest from 'reqwest';


import "../../../../mock/profileList/profileList";

function toQueryString(obj) {
	return obj ? Object.keys(obj).sort().map(function(key) {
		var val = obj[key];
		if (Array.isArray(val)) {
			return val.sort().map(function(val2) {
				return encodeURIComponent(key) + '=' + encodeURIComponent(val2);
			}).join('&');
		}
		return encodeURIComponent(key) + '=' + encodeURIComponent(val);
	}).join('&') : '';
}


export const list = (token, props) => {

	return function(dispatch) {
		// reqwest("http://127.0.0.1:3001/user_profile_list?appCode=" + props.os + "&online=1", {
		// fetch("http://127.0.0.1:3001/user_profile_list?appCode=" + props.os + "&online=1", {
		// 	method: 'GET',
		// 	mode: 'cors',
		// 	cache: 'force-cache',
		// 	headers: {
		// 		'Content-Type': 'application/x-www-form-urlencoded',
		// 		'Authorization': 'Bearer ' + token
		// 	}

		// }).then(function(res) {
		// 	res.json().then(res => {
		// 		if (res.status) {

		// 			var objectArr = [];
		// 			var i = 0;
		// 			res.data.map(function(v, k) {
		// 				console.log(v, k);
		// 				v.key = i++;
		// 				objectArr.push(v);
		// 			});

		// 			console.log(objectArr)

		// 			dispatch({
		// 				type: "tableList",
		// 				payload: objectArr
		// 			})
		// 		} else {
		// 			if (res.msg == -1) {
		// 				alert(-1);
		// 				props.router.push('/login');
		// 			}
		// 		}
		// 	});
		// }.bind(this));

		reqwest({
			url: 'http://127.0.0.1:3001/user_profile_list?appCode=24&online=1',
			method: 'get',
			data: {},
			type: 'json'
		}).then((msg) => {


			if (msg.status) {
				var objectArr = [];
				var i = 0;
				msg.data.map(function(v, k) {
					console.log(v, k);
					v.key = i++;
					objectArr.push(v);
				});

				console.log(objectArr)

				dispatch({
					type: "tableList",
					payload: objectArr
				})
			} else {
				if (msg.msg == -1) {
					alert(-1);
					props.router.push('/login');
				}
			}
		});

	}.bind(this)
};


export const leftNav = (token, props) => {

	return function(dispatch) {
		dispatch({
			type: "urlpa",
			payload: window.location.pathname
		})

	}.bind(this)
}