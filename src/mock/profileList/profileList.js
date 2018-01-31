import Mock from 'mockjs';

Mock.mock("/data/overview/list.do?type=1", "post", {
	"status": true,
	"msg": "返回成功",
	"data|10": [{
		"activeUser": "@natural(1000, 10000)",
		"backUser":   "@natural(1000, 10000)",
		"day":   "@datetime('yyyy-MM-dd')",
		"loseUser":   "@natural(1000, 10000)",
		"newUser":   "@natural(1000, 10000)",
		"newUserQuality":   "@natural(1000, 10000)",
		"outUser":   "@natural(1000, 10000)",
		"qualityPer":   "@float(10, 10.0, 2, 2)",
		"visitUser":   "@natural(1000, 10000)"
	}],
	"total": "@natural(100, 999)"
});


Mock.mock("/data/overview/list.do?type=2", "post", {
	"status": true,
	"msg": "返回成功",
	"data|10": [{
		"activeUser": "@natural(1000, 10000)",
		"channel": "@word(6)",
		"backUser":   "@natural(1000, 10000)",
		"day":   "@datetime('yyyy-MM-dd')",
		"loseUser":   "@natural(1000, 10000)",
		"newUser":   "@natural(1000, 10000)",
		"newUserQuality":   "@natural(1000, 10000)",
		"outUser":   "@natural(1000, 10000)",
		"qualityPer":   "@float(10, 10.0, 2, 2)",
		"visitUser":   "@natural(1000, 10000)"
	}],
	"total": "@natural(100, 999)"
});


Mock.mock("/data/overview/out.do", "post", {
	"status": true,
	"msg": "返回成功",
	"data|10": [{
		"appCode": 24,
		"countUser": "@natural(1000, 10000)",
		"day": "@datetime('yyyy-MM-dd')",
		"newChannel": "@word(6)",
		"oldChannel": "@word(6)"
	}],
	"total": "@natural(100, 999)"
});

Mock.mock('/data/overview/chart.do', "post", {
	"data": [{
		"key|10": [
			"@datetime('yyyy-MM-dd')"
		],
		"value|10": [
			"@natural(1000, 10000)"
		]
	}],
	"msg": "参数不对",
	"status": true
});



// Mock.mock("http://127.0.0.1:3001/user_profile_list?appCode=24&online=1", "get", {
// 	"status": true,
// 	"msg": "返回成功",
// 	"data|3": []
// });