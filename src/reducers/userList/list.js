 import {
 	combineReducers
 } from 'redux';

 import moment from 'moment';

 //用户列表页 -- 参数

 import {
 	Param
 } from './listParam';

 //用户列表页 -- 结果
 import {
 	listTable
 } from './listTable';

 //用户去重
 import {
 	addUser
 } from './addUser';



 const userList = combineReducers({
 	Param,
 	listTable,
 	addUser
 });


 export {
 	userList
 }