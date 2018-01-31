import Mock from 'mockjs';


Mock.mock("/data/overview/channelGroup.do", "post", {
	"status": true,
	"msg": "返回成功",
	"data|20": [{
		"appCode": 24,
		"channelCategory": 2,
		"channelDescribe": "",
		"channelGroup": "",
		"channelName": "@word(6)",
		"channelTypeId": 54,
		"flag": 1,
		"id": "@natural(10, 9999)",
		"isFree": 0,
		"programId": 3
	}]
});



Mock.mock("/data/overview/channel.do", "post", {
	"status": true,
	"msg": "返回成功",
	"data|20": [{
		"appCode": 24,
		"channelCategory": 2,
		"channelDescribe": "华为-新闻",
		"channelGroup": "huawei_total_cpi_news",
		"channelName": "@word(12)",
		"channelTypeId": 134,
		"flag": 1,
		"id": 153,
		"isFree": 0,
		"programId": 3,
		"showCol": ""
	}]
});