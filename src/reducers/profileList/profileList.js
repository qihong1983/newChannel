 import {
 	combineReducers
 } from 'redux';

 import moment from 'moment';

 //表格数据返回结束状态
 import {
 	Result
 } from './Result';

 //请求参数
 import {
 	Param
 } from './Param';

 //单渠道状态
 import {
 	Channel
 } from './Channel';

 //表格加载中
 import {
 	Loading
 } from './Loading';

 //分页状态信息
 import {
 	Pagination
 } from './Pagination';

 //配置表格展示信息
 import {
 	TableColumns
 } from './TableColumns';

 //图表tab切换状态
 import {
 	ClickTab
 } from './ClickTab';

 //图表数据状态
 import {
 	ChartsResults
 } from './ChartsResults';

 //图表的加载状态
 import {
 	ChartLoading
 } from './chartLoading';

 //渠道组列表
 import {
 	ChannelGroupList
 } from './channelGroupList';

 //渠道列表
 import {
 	channelList
 } from './channelList';



 const profileList = combineReducers({
 	//筛选条件参数
 	Param,
 	//表格返回结果
 	Result,
 	//表格分页
 	Pagination,
 	//表格配置
 	TableColumns,
 	//表格状态
 	Loading,
 	//单渠道
 	Channel,
 	//切换Tab
 	ClickTab,
 	//图表返回结果
 	ChartsResults,
 	//图表loading
 	ChartLoading,
 	//渠道组列表
 	ChannelGroupList,
 	//渠道列表
 	channelList
 });

 export {
 	profileList
 }