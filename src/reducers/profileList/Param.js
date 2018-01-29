 // 日期组件 
 import moment from 'moment';

 /**
  * 请求参数
  * @method Param
  * @param state {Object} 装态
  * @param action (Object) 动作
  */
 const Param = (state, action) => {

 	if (typeof state === "undefined") {
 		//初始化
 		return {
 			appCode: "",
 			channelGroup: "",
 			channelName: "",
 			startDate: moment().subtract(30, 'days').format("YYYY-MM-DD"),
 			endDate: moment().subtract(1, 'days').format("YYYY-MM-DD"),
 			channelCategory: "",
 			type: 1
 		};
 	}

 	switch (action.type) {

 		case "PROFILELIST_APPCODE":
 			//操作系统状态
 			return Object.assign({}, state, {
 				appCode: action.payload
 			});

 		case "PROFILELIST_CHANNELGROUP":
 			//渠道组
 			return Object.assign({}, state, {
 				channelGroup: action.payload
 			});

 		case "PROFILELIST_CHANNELNAME":
 			//搜索渠道
 			return Object.assign({}, state, {
 				channelName: action.payload
 			});

 		case "PROFILELIST_STARTDATE":
 			//开始时间
 			return Object.assign({}, state, {
 				startDate: action.payload
 			});

 		case "PROFILELIST_ENDDATE":
 			//结束时间
 			return Object.assign({}, state, {
 				endDate: action.payload
 			});

 		case "PROFILELIST_CHANNELCATEGORY":
 			//线上、线下
 			return Object.assign({}, state, {
 				channelCategory: action.payload
 			});

 		case "PROFILELIST_TYPE":
 			//1汇总、2明细、3单渠道
 			return Object.assign({}, state, {
 				type: action.payload
 			});

 		default:
 			//返回初始化
 			return state;
 	}

 }


 export {
 	Param
 }