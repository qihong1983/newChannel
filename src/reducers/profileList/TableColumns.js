 /**
  * table 数据配置信息
  * @method TableColumns
  * @param state {Object} 状态
  * @param action {Object} 动作
  */

 const TableColumns = (state, action) => {
 	if (typeof state === "undefined") {
 		//初始化数据
 		return {
 			tableColumns: [{
 				title: '日期',
 				dataIndex: 'day'
 			}, {
 				title: '新增用户',
 				dataIndex: 'newUser'
 			}, {
 				title: '用户质量',
 				dataIndex: 'qualityPer'
 			}, {
 				title: '活跃用户',
 				dataIndex: 'activeUser'
 			}, {
 				title: '回访用户',
 				dataIndex: 'visitUser'
 			}, {
 				title: '流失用户',
 				dataIndex: 'loseUser'
 			}, {
 				title: '回归用户',
 				dataIndex: 'backUser'
 			}, {
 				title: '迁出用户',
 				dataIndex: 'outUser'
 			}]
 		};
 	}

 	switch (action.type) {
 		case "PROFILELIST_TABLE_COLUMNS":
 			return Object.assign({}, state, {
 				tableColumns: action.payload
 			});
 		default:
 			return state;
 	}
 }

 export {
 	TableColumns
 }