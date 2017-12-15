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
			fetch("http://127.0.0.1:3001/user_kpireport_list", {
				method: 'POST',
				mode: 'cors',
				cache: 'default',
				headers: {
					'Content-Type': 'application/x-www-form-urlencoded',
					'Authorization': 'Bearer ' + token
				},
				body: toQueryString({
					appCode: props.os,
					secondParam: 'yourOtherValue'
				})

			}).then(function(res) {
				res.json().then(res => {
					if (res.status) {

						var objectArr = [];
						var i = 0;
						res.data.map(function(v, k) {
							console.log(v, k);
							v.key = i++;
							objectArr.push(v);
						});

						dispatch({
							type: "tableList",
							payload: objectArr
						})
					} else {
						if (res.msg == -1) {
							alert(-1);
							props.router.push('/login');
						}
					}
				});
			}.bind(this));
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