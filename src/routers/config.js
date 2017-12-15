 import React from 'react';


 import {
 	Router,
 	Route,
 	IndexRoute,
 	IndexRedirect,
 	Redirect
 } from 'react-router';


 import NProgress from 'nprogress';

 //登录登录前
 // import Login from '../pages/login/login';

 const Login = (location, cb) => {
 	require.ensure([], require => {
 		cb(null, require('../pages/login/login').default)
 	}, 'login')
 }


 //登录后
 // import Main from '../pages/main';

 const Main = (location, cb) => {
 	require.ensure([], require => {
 		cb(null, require('../pages/main').default)
 	})
 }

 import Data from '../pages/data/data';
 // const Data = (location, cb) => {
 // 	require.ensure([], require => {
 // 		cb(null, require('../pages/data/data').default)
 // 	}, 'data')
 // }


 import Manager from '../pages/manager/manager';
 import User from '../pages/user/user';

 // import UserProfile from '../pages/data/userprofile/userProfile';
 const UserProfile = (location, cb) => {
 	require.ensure([], require => {
 		cb(null,
 			require('../pages/data/userprofile/userProfile').default
 		)
 	}, 'userprofile')
 }

 // import UserProfileList from '../pages/data/userprofile/list/list';
 const UserProfileList = (location, cb) => {
 	require.ensure([], require => {
 		cb(null,
 			require('../pages/data/userprofile/list/list').default
 		)
 	})
 }

 // import UserProfileEdit from '../pages/data/userprofile/edit/edit';
 const UserProfileEdit = (location, cb) => {
 	require.ensure([], require => {
 		cb(null,
 			require('../pages/data/userprofile/edit/edit').default
 		)
 	}, 'userprofileedit')
 }

 // import KpiReport from '../pages/data/kpireport/kpireport';
 const KpiReport = (location, cb) => {
 	require.ensure([], require => {
 		cb(null,
 			require('../pages/data/kpireport/kpireport').default
 		)
 	}, 'kpireport')
 }

 import KpiReportList from '../pages/data/kpireport/list/list';


 import Channel from '../pages/manager/list/list';
 import ChannelList from '../pages/manager/list/list/list';

 import Group from '../pages/manager/group/group';
 import ChannelGroup from '../pages/manager/group/list/list';

 import UserList from '../pages/user/userList/list';
 import UserListIndex from '../pages/user/userList/list/index';



 export default class Routers extends React.Component {

 	constructor(props) {
 		super(props);
 	}


 	render() {

 		return (
 			<div>
 			<Router history={this.props.history}>
 			  <Route path = "/login" getComponent= {Login}>

 			  </Route>		
			  <Route path="/" getComponent={Main}>	
				 <IndexRedirect to="data" />
	          
	            <Route path="data" component={Data}>
	            	<IndexRedirect to="userprofile"  />
	            	{/*<IndexRoute component={ChannelDashrd} />*/}
	            	<Route path="userprofile" getComponents={UserProfile}>
	            		<IndexRoute getComponents={UserProfileList} />
	            		<Route path="edit/:id" getComponent={UserProfileEdit}>
	            		</Route>
	            	</Route>

	            	<Route path="kpireport" getComponent={KpiReport}>
	            		<IndexRoute component={KpiReportList} />
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


	            <Route path="user" component={User}>
	            	<IndexRedirect to="list" />
	            	<Route  path="list" component={UserList}>
	            		<IndexRoute component={UserListIndex} />
	            	</Route>
	            </Route>
			  
			  </Route>
			  <Redirect from='*' to='data' />
			</Router>
			</div>
 		);
 	}
 }