/**
 * 用于antdesigns Table数据渲染的key
 * @method addKey
 * @param data {Array} 数据
 * @param str {Array} 标识
 * @return arr {Array} [{}]
 */
function addKey(data, str) {
	var arr = [];

	data.map((v, k) => {
		v.key = str + k;
		arr.push(v);
	});

	return arr;
}


//将[1,2] 转变成 1,2
function strToArr(data) {
	var arr = [];


	let a = data.split(",");
	a.map((v, k) => {
		arr.push(parseInt(v, 10));
	});


	return arr;
}



/**
 * 全部权限模块
 * @method userAllow
 * @return {Array} 
 */
const userAllow = () => {
	let list = [{
		key: "1",
		value: "data",
		cnName: "渠道数据",
		url: "/data"
	}, {
		key: "2",
		value: "manager",
		cnName: "渠道管理",
		url: "/manager"
	}, {
		key: "3",
		value: "sys",
		cnName: "系统管理",
		url: "/sys"
	}, {
		key: "4",
		value: "user",
		cnName: "用户管理",
		url: "/user"
	}];

	return list;
}



export {
	addKey,
	strToArr,
	userAllow
}