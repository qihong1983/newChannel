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

export {
	addKey
}