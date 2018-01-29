import React from 'react';

import {
	Layout,
	Menu,
	Breadcrumb,
	Icon
} from 'antd';

const {
	SubMenu
} = Menu;
const {
	Header,
	Content,
	Sider
} = Layout;

import {
	Router,
	Route,
	IndexRoute,
	IndexLink
} from 'react-router';

import {
	connect
} from 'react-redux';

import {
	bindActionCreators
} from 'redux';


import * as actionCreators from '../../actions/userList/userList';

import "../../theme/topNav/topNav.css";

class topNav extends React.Component {


	constructor(props) {
		super(props);
	}

	numberToString() {

		var key = this.props.value + '';

		return key;
	}

	getStrKey() {

		var str = "";
		console.log(window.userInfo.data.auth, window.userInfo.data.auth.split(","));

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

		if (window.userInfo.data.auth != "" || window.userInfo.data.auth != undefined) {
			var winArr = window.userInfo.data.auth.split(",");

			var obj = {};
			list.map((v, k) => {
				if (v.value == this.props.value) {
					obj = v;
				}
			});

			winArr.map((v, k) => {
				if (v == obj.key) {
					str = obj.value;
				}
			});

			if (str == "") {
				list.map((v, k) => {
					if (v.key == winArr[0]) {
						str = v.value;
						// this.props.router.push(v.url);

						// window.location.href = '#' + v.url;
					}
				});
				// str = winArr[0];
			}

		} else {
			console.log("跳转到没有系统权限组件");
		}



		return str;
	}


	topNavList() {

		var arr = [];
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

		winArr.map((v, k) => {
			list.map((av, ak) => {
				if (v == av.key) {
					arr.push(<Menu.Item key={av.value}>
							<IndexLink to={av.url} activeClassName="active">{av.cnName}</IndexLink>
						</Menu.Item>)
				}
			});
		});

		return arr;
	}

	clickLogout() {
		window.location.href = "/logout.do";
	}

	render() {

		// var strKey = this.getStrKey();

		var topNavList = this.topNavList();

		return (
			<Header className="header">
          		<div className="logo" />
				<Menu
					theme="dark"
					mode="horizontal"
					defaultSelectedKeys={[this.props.value]}
					style={{ lineHeight: '64px', float:"left" }}
					>
					{topNavList}
		          </Menu>
		          <div className="header-user">
		<span className="userName">{window.userInfo.data.name}</span> | <a href="javascript:void(0);" onClick={this.clickLogout.bind(this)} className="logout">退出</a>
		          </div>
        </Header>
		);
	}
}

//将state.counter绑定到props的counter
const mapStateToProps = (state) => {
	return {
		userList: state.userList
	}
};

//将action的所有方法绑定到props上
const mapDispatchToProps = (dispatch, ownProps) => {
	//全量
	return bindActionCreators(actionCreators, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(topNav);