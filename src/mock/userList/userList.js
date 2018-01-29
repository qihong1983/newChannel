import Mock from 'mockjs';


// Mock.mock("/user/list.do", "post", {
// 	"status": true,
// 	"msg": "返回成功",
// 	"data|3": [{
// 		"id": "@natural(1000, 10000)",
// 		"date": "@datetime('yyyy-MM-dd')",
// 		"newUsers": "@natural(1000, 10000)",
// 		"activeUser": "@natural(1000, 10000)"
// 	}]
// });


Mock.mock("/user/list.do", "post", {
	"msg": "返回成功",
	"total": "@natural(1000, 10000)",
	"data|10": [{
		"cname": "@cname",
		"ctime": "@datetime('yyyy-MM-dd')",
		"email": "@email",
		"ltime": "@datetime('yyyy-MM-dd')",
		"name": "@cname",
		"uid": "@natural(1000, 10000)"
	}],
	"status": true
});

Mock.mock("/user/delete.do", "post", {
	"msg": "删除成功",
	"status|1": false
});

Mock.mock("/user/unique.do", "post", {
	"msg": "邮箱可用",
	"status|1": true
});


Mock.mock("/user/add.do", "post", {
	"msg": "添加成功",
	"status|1": true
});


// 修改要获取的数据
Mock.mock("/user/get.do", "post", {
	"msg": "",
	"data": {
		"cname": "@cname",
		"ctime": "@datetime('yyyy-MM-dd')",
		"email": "@last()" + "@corp.netease.com",
		"ltime": "2018-01-28",
		"mid": "1,2",
		"name": "@datetime('yyyy-MM-dd')",
		"uid": "@natural(1000, 10000)"
	},
	"status": true
});

// 修改请求
Mock.mock("/user/update.do", "post", {
	"msg": "修改成功!",
	"status": true
});

// 获取当前用户的数据
Mock.mock("/system/user.do", "post", {
	"msg": "",
	"data": {
		"auth": "1,4",
		"name": "@cname",
		"userName": "@last()"
	},
	"status": true
});