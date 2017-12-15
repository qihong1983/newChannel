 export const List = (state, action) => {
 	if (typeof state === "undefined") {
 		return {
 			tableList: []
 		};
 	}

 	switch (action.type) {
 		case "tableList":
 			console.log(state, '&&&&&&');
 			return Object.assign({}, state, {
 				tableList: action.payload
 			});
 		case "os":
 			return '24';
 		default:
 			return state;
 	}
 }