 import React from 'react';

 import {
 	Router,
 	Route,
 	IndexRoute,
 	IndexRedirect,
 	Redirect
 } from 'react-router';

 /**
  * 根路由组件
  */
 import Main from '../components/main';

 /**
  * 渠道数据
  */
 import Data from '../components/data/data';

 //渠道数据 -- 用户概况
 import Profile from '../components/profile/profile';

 //渠道数据 -- 用户概况 -- 详情
 const ProfileList = (location, cb) => {
 	require.ensure([], require => {
 		cb(null,
 			require('../components/profile/profileList').default
 		)
 	}, 'profileList')
 }


 //渠道数据 -- KPI报表
 import Kpi from '../components/kpi/kpi';

 //渠道数据 -- KPI报表 -- 详情
 const KpiDetail = (location, cb) => {
 	require.ensure([], require => {
 		cb(null,
 			require('../components/kpi/kpiDetail').default
 		)
 	}, 'kpiDetail')
 }

 /**
  * 渠道管理
  */
 import Manager from '../components/manager/manager';

 //渠道管理 -- 渠道列表
 import Channel from '../components/manager/list/list';
 //渠道管理 -- 渠道列表 -- 详情
 import ChannelList from '../components/manager/list/list/list';

 //渠道管理 -- 渠道组列表 
 import Group from '../components/manager/group/group';
 //渠道管理 -- 渠道组列表 -- 详情
 import ChannelGroup from '../components/manager/group/list/list';


 /**
  * 用户管理
  */
 import User from '../components/user/user';

 // 用户管理 -- 用户列表
 import UserList from '../components/user/userList';
 // 用户管理 -- 用户列表 -- 详情
 const UserListIndex = (location, cb) => {
 	require.ensure([], require => {
 		cb(null,
 			require('../components/user/userListIndex').default
 		)
 	}, 'userListIndex')
 }

 // 用户管理 -- 用户列表 -- 新建用户
 const CreateUser = (location, cb) => {
 	require.ensure([], require => {
 		cb(null,
 			require('../components/user/createUser').default
 		)
 	}, 'createUser')
 }


 // 用户管理 -- 用户列表 -- 修改用户
 const EditUser = (location, cb) => {
 	require.ensure([], require => {
 		cb(null,
 			require('../components/user/editUser').default
 		)
 	}, 'editUser')
 }


 // 没有权限 
 const NoAllow = (location, cb) => {
 	require.ensure([], require => {
 		cb(null,
 			require('../components/noAllow/noAllow').default
 		)
 	}, 'noAllow')
 }

 //Demo
 import Demo from '../components/demo/demo';
 import DemoTable from '../components/demoTable/demoTable';

 const doAllow = (replace) => {

 	var list = [{
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


 	if (window.userInfo.data.auth != "") {
 		let winArr = window.userInfo.data.auth.split(",");

 		var firstNum = winArr[0];
 		var path = "";
 		list.map((v, k) => {
 			if (firstNum == v.key) {
 				path = v.url;
 			}
 		});

 		if (path != "") {
 			replace({
 				pathname: path
 			})
 		}
 	}
 }


 const isAllow = (data, replace) => {
 	console.log(data, 'data');

 	var list = [{
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

 	var winArr = window.userInfo.data.auth.split(",");

 	var bl = false;
 	winArr.map((v, k) => {
 		if (v == data) {
 			bl = true;
 		}
 	});

 	if (!bl) {
 		var firstNum = winArr[0];
 		var path = "";
 		list.map((v, k) => {
 			if (firstNum == v.key) {
 				path = v.url;
 			}
 		});

 		if (path != "") {
 			replace({
 				pathname: path
 			})
 		} else {

 			replace({
 				pathname: '/noallow'
 			})

 		}

 	}

 }



 export default class Routers extends React.Component {

 	constructor(props) {
 		super(props);
 	}


 	render() {

 		return (
 			<div>
 			<Router history={this.props.history}>	
			  <Route path="/" component={Main}>	
				 <IndexRedirect to="data" />
	          
	            <Route path="data" component={Data} onEnter={
	            	(nextState, replace) => {
	            		let key = "1";
	            		isAllow(key, replace);
	            	}
	            }>
					<IndexRedirect to="profile"  />
	            	
	            	<Route path="profile(/:tab)(/:page)" component={Profile}>
	            		<IndexRoute getComponent={ProfileList} />
	            	</Route>

	            	<Route path="kpi" component={Kpi}>
	            		<IndexRoute getComponent={KpiDetail} />
	            	</Route>

	            	
	            </Route>
	            <Route path="manager" component={Manager}>
	            	<IndexRedirect to="list" />
					<Route  path="list" component={Channel}>
	            		<IndexRoute component={ChannelList} />
	            	</Route>
	            	<Route  path="group" component={Group}>
	            		<IndexRoute component={ChannelGroup} />
	            	</Route>
	            </Route>


	            <Route path="user" component={User} onEnter={
	            	(nextState, replace) => {
	            		let key = "4";	            		
	            		isAllow(key, replace);
	            	}
	            }>
	            	<IndexRedirect to="list" />
	            	<Route  path="list" component={User}>
	            		<IndexRoute getComponent={UserListIndex} />

	            		<Route  path="create" getComponent={CreateUser}></Route>
	            		<Route  path="edit/:id" getComponent={EditUser}></Route>

	            		<Redirect from='*' to='/user/list' />
	            	</Route>
	            </Route>

	            <Route path="demo" component={Demo}>
	            	{/*<IndexRedirect to="demoTable" />*/}
	            	{/*<Route  path="demoTable" component={DemoTable}>*/}
	            		<IndexRoute component={DemoTable} />
	            	{/*</Route> */}
	            </Route>

	            <Route path="noallow" getComponent={NoAllow} onEnter={
	            	(nextState, replace) => {
	            		
	            		doAllow(replace);
	            	}
	            }></Route>
			  
			  </Route>
			  <Redirect from='*' to='data' />
			</Router>
			</div>
 		);
 	}
 }